import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { uploadFiles, validateFile, deleteFiles } from '@/lib/supabase-storage'
import { ProposalSubmission, ApiResponse } from '@/lib/supabase-types'

// Rate limiting - simple in-memory store (consider Redis for production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitStore.get(ip)

  if (!limit || now > limit.resetTime) {
    // Reset or initialize
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + 3600000 // 1 hour from now
    })
    return true
  }

  if (limit.count >= 5) {
    return false // Rate limit exceeded
  }

  limit.count++
  return true
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

function sanitizeInput(input: string): string {
  // Remove any HTML tags and trim whitespace
  return input.replace(/<[^>]*>/g, '').trim()
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') ||
                request.headers.get('x-real-ip') ||
                'unknown'

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Too many requests. Please try again later.'
        },
        { status: 429 }
      )
    }

    // Parse form data (multipart/form-data)
    const formData = await request.formData()

    // Extract text fields
    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const projectType = formData.get('projectType') as string
    const message = formData.get('message') as string

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Name, email, and message are required fields.'
        },
        { status: 400 }
      )
    }

    // Validate email format
    if (!validateEmail(email)) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Please provide a valid email address.'
        },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const proposalData: ProposalSubmission = {
      name: sanitizeInput(name),
      email: sanitizeInput(email),
      project_type: projectType ? sanitizeInput(projectType) : undefined,
      message: sanitizeInput(message)
    }

    // Validate lengths
    if (proposalData.name.length > 100) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Name is too long (max 100 characters).'
        },
        { status: 400 }
      )
    }

    if (proposalData.message.length > 5000) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Message is too long (max 5000 characters).'
        },
        { status: 400 }
      )
    }

    // Generate submission ID for file organization
    const submissionId = crypto.randomUUID()

    // Handle file uploads
    const files: File[] = []
    const fileEntries = formData.getAll('files')

    for (const entry of fileEntries) {
      if (entry instanceof File && entry.size > 0) {
        // Validate each file before adding to upload list
        const validation = validateFile(entry)
        if (!validation.valid) {
          return NextResponse.json<ApiResponse>(
            {
              success: false,
              error: validation.error
            },
            { status: 400 }
          )
        }
        files.push(entry)
      }
    }

    // Upload files if any
    let fileUrls: string[] = []
    let uploadResults: any[] = []
    if (files.length > 0) {
      uploadResults = await uploadFiles(files, submissionId)

      // Check for upload errors
      const errors = uploadResults.filter(r => r.error)
      if (errors.length > 0) {
        const errorMessages = errors.map(e => e.error).join(', ')
        return NextResponse.json<ApiResponse>(
          {
            success: false,
            error: `File upload failed: ${errorMessages}`
          },
          { status: 400 }
        )
      }

      // Extract successful upload URLs
      fileUrls = uploadResults.map(r => r.url).filter(url => url)
    }

    // Add file URLs to proposal data
    if (fileUrls.length > 0) {
      proposalData.file_urls = fileUrls
    }

    // Insert into database
    const { data, error } = await supabase
      .from('proposal_submissions')
      .insert([proposalData])
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)

      // If database insert fails, try to delete uploaded files
      if (fileUrls.length > 0) {
        const filePaths = uploadResults.map(r => r.path).filter(path => path)
        await deleteFiles(filePaths)
      }

      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Failed to submit proposal. Please try again.'
        },
        { status: 500 }
      )
    }

    // Success response
    return NextResponse.json<ApiResponse>(
      {
        success: true,
        data: {
          id: data.id,
          filesUploaded: fileUrls.length,
          message: 'Thank you for your proposal request! We will review it and get back to you soon.'
        }
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json<ApiResponse>(
      {
        success: false,
        error: 'An unexpected error occurred. Please try again.'
      },
      { status: 500 }
    )
  }
}

// Only allow POST requests
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}