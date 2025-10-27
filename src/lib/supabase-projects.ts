import { supabase } from './supabase'
import { Project, FileUploadResult } from './supabase-types'

const BUCKET_NAME = 'project-images'
const MAX_FILE_SIZE = 10485760 // 10MB

export async function uploadProjectImage(
  file: File,
  projectId?: string
): Promise<FileUploadResult> {
  // Validate file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      path: '',
      url: '',
      error: `File ${file.name} exceeds 10MB limit`
    }
  }

  // Validate file type
  const allowedTypes = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp'
  ]

  if (!allowedTypes.includes(file.type)) {
    return {
      path: '',
      url: '',
      error: `File type ${file.type} is not allowed`
    }
  }

  // Generate unique filename
  const timestamp = Date.now()
  const fileExt = file.name.split('.').pop()
  const fileName = `${timestamp}_${Math.random().toString(36).substring(7)}.${fileExt}`
  const filePath = projectId
    ? `projects/${projectId}/${fileName}`
    : `temp/${fileName}`

  try {
    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from(BUCKET_NAME)
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: false
      })

    if (error) {
      return {
        path: '',
        url: '',
        error: `Failed to upload ${file.name}: ${error.message}`
      }
    }

    // Get public URL for the uploaded file
    const { data: urlData } = supabase.storage
      .from(BUCKET_NAME)
      .getPublicUrl(data.path)

    return {
      path: data.path,
      url: urlData.publicUrl
    }
  } catch (err) {
    return {
      path: '',
      url: '',
      error: `Unexpected error uploading ${file.name}`
    }
  }
}

export async function uploadProjectImages(
  files: File[],
  projectId?: string
): Promise<FileUploadResult[]> {
  const results: FileUploadResult[] = []

  for (const file of files) {
    const result = await uploadProjectImage(file, projectId)
    results.push(result)
  }

  return results
}

export async function deleteProjectImage(filePath: string): Promise<void> {
  if (!filePath) return

  try {
    const { error } = await supabase.storage
      .from(BUCKET_NAME)
      .remove([filePath])

    if (error) {
      console.error('Error deleting file:', error)
    }
  } catch (err) {
    console.error('Unexpected error deleting file:', err)
  }
}

export async function deleteProjectImages(filePaths: string[]): Promise<void> {
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

export function extractFilePathFromUrl(url: string): string {
  // Extract path from Supabase public URL
  // Format: https://<project>.supabase.co/storage/v1/object/public/project-images/<path>
  const match = url.match(/\/project-images\/(.+)$/)
  return match ? match[1] : ''
}

export function validateProjectImage(file: File): { valid: boolean; error?: string } {
  // Check file size
  if (file.size > MAX_FILE_SIZE) {
    return {
      valid: false,
      error: `File size exceeds 10MB limit`
    }
  }

  // Check file type
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp']

  if (!allowedTypes.includes(file.type)) {
    const fileExt = file.name.split('.').pop()?.toLowerCase()
    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp']

    if (!fileExt || !allowedExtensions.includes(fileExt)) {
      return {
        valid: false,
        error: `File type not allowed. Allowed types: JPG, PNG, GIF, WebP`
      }
    }
  }

  return { valid: true }
}
