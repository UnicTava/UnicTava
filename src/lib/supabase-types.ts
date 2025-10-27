export interface ContactSubmission {
  id?: string
  name: string
  email: string
  message: string
  created_at?: string
}

export interface ProposalSubmission {
  id?: string
  name: string
  email: string
  project_type?: string
  message: string
  file_urls?: string[]
  created_at?: string
}

export interface FileUploadResult {
  path: string
  url: string
  error?: string
}

export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
}

export interface GalleryItem {
  id: string
  type: 'image' | 'video'
  url: string
  order: number
  thumbnail_url?: string
  video_type?: 'file' | 'url'
}

export interface Project {
  id: string
  title_pt: string
  title_en: string
  title_it: string
  description_pt?: string
  description_en?: string
  description_it?: string
  tags: string[]
  thumbnail_url?: string
  gallery_urls: string[]
  gallery_items: GalleryItem[]
  project_url?: string
  video_url?: string
  video_type?: 'file' | 'url'
  status: 'draft' | 'published'
  display_order: number
  created_at: string
  updated_at?: string
}

export interface ProjectFormData {
  title_pt: string
  title_en: string
  title_it: string
  description_pt: string
  description_en: string
  description_it: string
  tags: string[]
  thumbnail_url?: string
  gallery_urls: string[]
  gallery_items: GalleryItem[]
  project_url?: string
  video_url?: string
  video_type?: 'file' | 'url'
  status: 'draft' | 'published'
  display_order: number
}

export interface Testimonial {
  id: string
  name_pt: string
  name_en: string
  name_it: string
  position_pt: string
  position_en: string
  position_it: string
  company_pt: string
  company_en: string
  company_it: string
  quote_pt: string
  quote_en: string
  quote_it: string
  avatar_url?: string
  status: 'draft' | 'published'
  display_order: number
  created_at: string
  updated_at?: string
}

export interface TestimonialFormData {
  name_pt: string
  name_en: string
  name_it: string
  position_pt: string
  position_en: string
  position_it: string
  company_pt: string
  company_en: string
  company_it: string
  quote_pt: string
  quote_en: string
  quote_it: string
  avatar_url?: string
  status: 'draft' | 'published'
  display_order: number
}