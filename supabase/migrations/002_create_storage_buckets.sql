-- Create storage buckets for projects
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES
  ('project-images', 'project-images', true, 10485760, ARRAY['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']),
  ('project-videos', 'project-videos', true, 104857600, ARRAY['video/mp4', 'video/webm', 'video/quicktime'])
ON CONFLICT (id) DO NOTHING;

-- Create policies for project-images bucket
CREATE POLICY "Public read access for project images"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'project-images');

CREATE POLICY "Authenticated users can upload project images"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'project-images');

CREATE POLICY "Authenticated users can update project images"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'project-images');

CREATE POLICY "Authenticated users can delete project images"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'project-images');

-- Create policies for project-videos bucket
CREATE POLICY "Public read access for project videos"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'project-videos');

CREATE POLICY "Authenticated users can upload project videos"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'project-videos');

CREATE POLICY "Authenticated users can update project videos"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'project-videos');

CREATE POLICY "Authenticated users can delete project videos"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'project-videos');
