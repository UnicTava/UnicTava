# Storage Bucket Configuration for Supabase

## Create Bucket via Supabase Dashboard or MCP

### Bucket Details:
- **Name:** `proposal-attachments`
- **Public:** No (controlled access via RLS)
- **File size limit:** 10MB (10485760 bytes)
- **Allowed MIME types:**
  - image/jpeg
  - image/png
  - image/gif
  - image/webp
  - application/pdf
  - application/msword
  - application/vnd.openxmlformats-officedocument.wordprocessingml.document

### Storage Structure:
```
/proposal-attachments/
  /proposals/
    /2024/
      /01/
        /[submission_id]/
          - file1.pdf
          - file2.png
          - file3.docx
```

### RLS Policies for Storage:

1. **INSERT Policy** - Allow public uploads with size and type restrictions
```sql
CREATE POLICY "Allow public upload to proposal-attachments" ON storage.objects
  FOR INSERT TO anon
  WITH CHECK (
    bucket_id = 'proposal-attachments' AND
    (storage.foldername(name))[1] = 'proposals' AND
    length(name) > 0 AND
    (storage.extension(name) = ANY (ARRAY['jpg', 'jpeg', 'png', 'gif', 'webp', 'pdf', 'doc', 'docx']))
  );
```

2. **SELECT Policy** - Allow public read access
```sql
CREATE POLICY "Allow public read from proposal-attachments" ON storage.objects
  FOR SELECT TO anon
  USING (bucket_id = 'proposal-attachments');
```

3. **UPDATE Policy** - Deny public updates
```sql
CREATE POLICY "Deny public update on proposal-attachments" ON storage.objects
  FOR UPDATE TO anon
  USING (false);
```

4. **DELETE Policy** - Deny public deletes
```sql
CREATE POLICY "Deny public delete on proposal-attachments" ON storage.objects
  FOR DELETE TO anon
  USING (false);
```

## MCP Commands to Execute:

If using Supabase MCP, execute these commands:

```bash
# Create the bucket
supabase storage create-bucket proposal-attachments --public false

# Set file size limit
supabase storage update-bucket proposal-attachments --file-size-limit 10485760

# Apply RLS policies (execute the SQL above in Supabase SQL editor)
```