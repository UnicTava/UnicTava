import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { ContactSubmission, ApiResponse } from '@/lib/supabase-types'

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

    // Parse request body
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Name, email, and message are required fields.'
        },
        { status: 400 }
      )
    }

    // Validate email format
    if (!validateEmail(body.email)) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Please provide a valid email address.'
        },
        { status: 400 }
      )
    }

    // Sanitize inputs
    const contactData: ContactSubmission = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      message: sanitizeInput(body.message)
    }

    // Validate lengths
    if (contactData.name.length > 100) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Name is too long (max 100 characters).'
        },
        { status: 400 }
      )
    }

    if (contactData.message.length > 5000) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Message is too long (max 5000 characters).'
        },
        { status: 400 }
      )
    }

    // Insert into database
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([contactData])
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          error: 'Failed to submit contact form. Please try again.'
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
          message: 'Thank you for contacting us! We will get back to you soon.'
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