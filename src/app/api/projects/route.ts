import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase-server'

export async function GET(request: NextRequest) {
  try {
    console.log('Fetching public projects...')
    console.log('Supabase URL:', process.env.NEXT_PUBLIC_SUPABASE_URL)

    // Temporarily using service role key until anon key is regenerated
    const supabase = createClient()

    // Fetch published projects from Supabase
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('status', 'published')
      .order('display_order', { ascending: true })
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching projects:', error)
      console.error('Error details:', JSON.stringify(error, null, 2))
      return NextResponse.json(
        { error: 'Failed to fetch projects', details: error.message },
        { status: 500 }
      )
    }

    console.log('Projects fetched:', data?.length || 0)
    return NextResponse.json(data || [])

  } catch (error) {
    console.error('Unexpected error:', error)
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack')
    return NextResponse.json(
      { error: 'An error occurred', details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    )
  }
}
