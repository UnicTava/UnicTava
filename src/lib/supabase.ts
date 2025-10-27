import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

console.log('Supabase client config:')
console.log('URL:', supabaseUrl)
console.log('Anon key (first 50 chars):', supabaseAnonKey?.substring(0, 50))

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// For server-side operations (if service role key is available)
export const getServiceSupabase = () => {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!serviceRoleKey) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set')
  }
  return createClient(supabaseUrl, serviceRoleKey)
}