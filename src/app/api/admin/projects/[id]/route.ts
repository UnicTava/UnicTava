import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'
import { deleteProjectImages, extractFilePathFromUrl } from '@/lib/supabase-projects'

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { id } = await params
    const body = await request.json()

    // Validate required fields
    if (!body.title_pt || !body.title_en || !body.title_it) {
      return NextResponse.json(
        { error: 'Títulos em todos os idiomas são obrigatórios' },
        { status: 400 }
      )
    }

    // Update project in Supabase
    const { data, error } = await supabase
      .from('projects')
      .update({
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
      })
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating project:', error)
      return NextResponse.json(
        { error: 'Failed to update project' },
        { status: 500 }
      )
    }

    return NextResponse.json(data)

  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
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

    const { id } = await params

    // Get project to retrieve image URLs
    const { data: project, error: fetchError } = await supabase
      .from('projects')
      .select('thumbnail_url, gallery_urls')
      .eq('id', id)
      .single()

    if (fetchError) {
      console.error('Error fetching project:', fetchError)
      return NextResponse.json(
        { error: 'Failed to fetch project' },
        { status: 500 }
      )
    }

    // Delete project from Supabase
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting project:', error)
      return NextResponse.json(
        { error: 'Failed to delete project' },
        { status: 500 }
      )
    }

    // Delete associated images from storage
    const imagePaths: string[] = []
    if (project.thumbnail_url) {
      imagePaths.push(extractFilePathFromUrl(project.thumbnail_url))
    }
    if (project.gallery_urls && project.gallery_urls.length > 0) {
      project.gallery_urls.forEach((url: string) => {
        imagePaths.push(extractFilePathFromUrl(url))
      })
    }

    if (imagePaths.length > 0) {
      await deleteProjectImages(imagePaths)
    }

    return NextResponse.json({ success: true })

  } catch (error) {
    console.error('Unexpected error:', error)
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    )
  }
}
