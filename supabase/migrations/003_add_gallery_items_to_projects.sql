-- Add projects table if it doesn't exist
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title_pt TEXT NOT NULL,
  title_en TEXT NOT NULL,
  title_it TEXT NOT NULL,
  description_pt TEXT,
  description_en TEXT,
  description_it TEXT,
  tags TEXT[] DEFAULT '{}',
  thumbnail_url TEXT,
  gallery_urls TEXT[] DEFAULT '{}',
  project_url TEXT,
  video_url TEXT,
  video_type TEXT DEFAULT 'url',
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add gallery_items column for mixed media support
ALTER TABLE projects
ADD COLUMN IF NOT EXISTS gallery_items JSONB DEFAULT '[]';

-- Create index for gallery_items
CREATE INDEX IF NOT EXISTS idx_projects_gallery_items ON projects USING GIN (gallery_items);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_display_order ON projects(display_order);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);

-- Enable Row Level Security
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create policies for projects
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public read on published projects" ON projects;
DROP POLICY IF EXISTS "Allow authenticated insert on projects" ON projects;
DROP POLICY IF EXISTS "Allow authenticated update on projects" ON projects;
DROP POLICY IF EXISTS "Allow authenticated delete on projects" ON projects;

-- Allow anyone to read published projects
CREATE POLICY "Allow public read on published projects" ON projects
  FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

-- Only authenticated users (admins) can insert
CREATE POLICY "Allow authenticated insert on projects" ON projects
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users (admins) can update
CREATE POLICY "Allow authenticated update on projects" ON projects
  FOR UPDATE
  TO authenticated
  USING (true);

-- Only authenticated users (admins) can delete
CREATE POLICY "Allow authenticated delete on projects" ON projects
  FOR DELETE
  TO authenticated
  USING (true);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_projects_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
DROP TRIGGER IF EXISTS projects_updated_at_trigger ON projects;
CREATE TRIGGER projects_updated_at_trigger
  BEFORE UPDATE ON projects
  FOR EACH ROW
  EXECUTE FUNCTION update_projects_updated_at();

-- Migrate existing gallery_urls to gallery_items format
UPDATE projects
SET gallery_items = (
  SELECT jsonb_agg(
    jsonb_build_object(
      'id', gen_random_uuid()::text,
      'type', 'image',
      'url', url,
      'order', ordinality - 1
    )
  )
  FROM unnest(gallery_urls) WITH ORDINALITY AS url
)
WHERE gallery_urls IS NOT NULL
  AND array_length(gallery_urls, 1) > 0
  AND (gallery_items IS NULL OR gallery_items = '[]'::jsonb);
