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

    // Fetch all projects from Supabase
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('display_order', { ascending: true })
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching projects:', error)
      return NextResponse.json(
        { error: 'Failed to fetch projects' },
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
    if (!body.title_pt || !body.title_en || !body.title_it) {
      return NextResponse.json(
        { error: 'Títulos em todos os idiomas são obrigatórios' },
        { status: 400 }
      )
    }

    // Insert project into Supabase
    const { data, error } = await supabase
      .from('projects')
      .insert([{
        title_pt: body.title_pt,
        title_en: body.title_en,
        title_it: body.title_it,
        description_pt: body.description_pt || null,
        description_en: body.description_en || null,
        description_it: body.description_it || null,
        tags: body.tags || [],
        thumbnail_url: body.thumbnail_url || null,
        gallery_urls: body.gallery_urls || [],
        gallery_items: body.gallery_items || [],
        project_url: body.project_url || null,
        video_url: body.video_url || null,
        video_type: body.video_type || 'url',
        status: body.status || 'draft',
        display_order: body.display_order || 0
      }])
      .select()
      .single()

    if (error) {
      console.error('Error creating project:', error)
      return NextResponse.json(
        { error: 'Failed to create project' },
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
