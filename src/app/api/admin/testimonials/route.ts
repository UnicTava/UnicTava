import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'

export async function GET(request: NextRequest) {
  try {
    // Verify admin authentication with Supabase token
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized - No token provided' }, { status: 401 })
    }

    // Verify token with Supabase
    const supabase = createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)

    if (authError || !user) {
      console.error('Auth verification error:', authError)
      return NextResponse.json({ error: 'Unauthorized - Invalid token' }, { status: 401 })
    }

    // Fetch all testimonials from Supabase
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .order('display_order', { ascending: true })
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching testimonials:', error)
      return NextResponse.json(
        { error: 'Failed to fetch testimonials' },
        { status: 500 }
      )
    }

    return NextResponse.json(data || [])

  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verify admin authentication with Supabase token
    const authHeader = request.headers.get('authorization')
    const token = authHeader?.replace('Bearer ', '')

    if (!token) {
      return NextResponse.json({ error: 'Unauthorized - No token provided' }, { status: 401 })
    }

    // Verify token with Supabase
    const supabase = createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser(token)

    if (authError || !user) {
      console.error('Auth verification error:', authError)
      return NextResponse.json({ error: 'Unauthorized - Invalid token' }, { status: 401 })
    }

    const body = await request.json()

    // Validate required fields
    if (!body.name_pt || !body.name_en || !body.name_it ||
        !body.position_pt || !body.position_en || !body.position_it ||
        !body.company_pt || !body.company_en || !body.company_it ||
        !body.quote_pt || !body.quote_en || !body.quote_it) {
      return NextResponse.json(
        { error: 'Todos os campos em todos os idiomas são obrigatórios' },
        { status: 400 }
      )
    }

    // Insert testimonial into Supabase
    const { data, error } = await supabase
      .from('testimonials')
      .insert([{
        name_pt: body.name_pt,
        name_en: body.name_en,
        name_it: body.name_it,
        position_pt: body.position_pt,
        position_en: body.position_en,
        position_it: body.position_it,
        company_pt: body.company_pt,
        company_en: body.company_en,
        company_it: body.company_it,
        quote_pt: body.quote_pt,
        quote_en: body.quote_en,
        quote_it: body.quote_it,
        avatar_url: body.avatar_url || null,
        status: body.status || 'draft',
        display_order: body.display_order || 0
      }])
      .select()
      .single()

    if (error) {
      console.error('Error creating testimonial:', error)
      return NextResponse.json(
        { error: 'Failed to create testimonial' },
        { status: 500 }
      )
    }

    return NextResponse.json(data, { status: 201 })

  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    )
  }
}
