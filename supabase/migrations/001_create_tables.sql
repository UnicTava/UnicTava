-- Create contact_submissions table for simple contact form
CREATE TABLE IF NOT EXISTS contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create proposal_submissions table for proposal requests with attachments
CREATE TABLE IF NOT EXISTS proposal_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  position TEXT,
  timeline TEXT,
  budget TEXT,
  project_type TEXT,
  message TEXT NOT NULL,
  file_urls TEXT[], -- Array to store multiple file URLs
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_proposal_submissions_created_at ON proposal_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_proposal_submissions_email ON proposal_submissions(email);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE proposal_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies for contact_submissions
-- Allow anyone to insert (submit form)
CREATE POLICY "Allow public insert on contact_submissions" ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can read
CREATE POLICY "Allow authenticated read on contact_submissions" ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create policies for proposal_submissions
-- Allow anyone to insert (submit form)
CREATE POLICY "Allow public insert on proposal_submissions" ON proposal_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users can read
CREATE POLICY "Allow authenticated read on proposal_submissions" ON proposal_submissions
  FOR SELECT
  TO authenticated
  USING (true);