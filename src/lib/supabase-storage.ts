import { supabase } from './supabase'
import { FileUploadResult } from './supabase-types'

const BUCKET_NAME = 'proposal-attachments'
const MAX_FILE_SIZE = 10485760 // 10MB in bytes

export async function uploadFiles(
  files: File[],
  submissionId: string
): Promise<FileUploadResult[]> {
  const results: FileUploadResult[] = []
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0')

  for (const file of files) {
    // Validate file size
    if (file.size > MAX_FILE_SIZE) {
      results.push({
        path: '',
        url: '',
        error: `File ${file.name} exceeds 10MB limit`
      })
      continue
    }

    // Validate file type
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/webp',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ]

    if (!allowedTypes.includes(file.type)) {
      results.push({
        path: '',
        url: '',
        error: `File type ${file.type} is not allowed`
      })
      continue
    }

    // Generate unique filename
    const timestamp = Date.now()
    const fileExt = file.name.split('.').pop()
    const fileName = `${timestamp}_${Math.random().toString(36).substring(7)}.${fileExt}`
    const filePath = `proposals/${year}/${month}/${submissionId}/${fileName}`

    try {
      // Upload file to Supabase Storage
      const { data, error } = await supabase.storage
        .from(BUCKET_NAME)
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        })

      if (error) {
        results.push({
          path: '',
          url: '',
          error: `Failed to upload ${file.name}: ${error.message}`
        })
        continue
      }

      // Get public URL for the uploaded file
      const { data: urlData } = supabase.storage
        .from(BUCKET_NAME)
        .getPublicUrl(data.path)

      results.push({
        path: data.path,
        url: urlData.publicUrl
      })
    } catch (err) {
      results.push({
        path: '',
        url: '',
        error: `Unexpected error uploading ${file.name}`
      })
    }
  }

  return results
}

export async function deleteFiles(filePaths: string[]): Promise<void> {
  if (filePaths.length === 0) return

  try {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove(filePaths)

    if (error) {
      console.error('Error deleting files:', error)
    }
  } catch (err) {
    console.error('Unexpected error deleting files:', err)
  }
}

export function validateFile(file: File): { valid: boolean; error?: string } {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size exceeds 10MB limit`
    }
  }

  // Check file type
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ]

  if (!allowedTypes.includes(file.type)) {
    const fileExt = file.name.split('.').pop()?.toLowerCase()
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'pdf', 'doc', 'docx']

    if (!fileExt || !allowedExtensions.includes(fileExt)) {
      return {
        valid: false,
        error: `File type not allowed. Allowed types: Images (JPG, PNG, GIF, WebP), PDF, Word documents`
      }
    }
  }

  return { valid: true }
}