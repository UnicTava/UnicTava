import { MetadataRoute } from 'next'
import { createClient } from '@supabase/supabase-js'

const BASE_URL = 'https://unictava.com'
const locales = ['pt-BR', 'it', 'en-GB']

// Rotas estáticas do site
const staticRoutes = [
  '',
  '/home',
  '/servicos',
  '/servicos/simulacros',
  '/servicos/desenvolvimento-jogos-3d',
  '/servicos/educacao-treinamento-3d',
  '/servicos/inteligencia-artificial-3d',
  '/servicos/simulacao-3d',
  '/servicos/vr-ar',
  '/sobre-nos',
  '/projetos',
  '/politica-privacidade',
  '/politica-cookies',
  '/termos-servico'
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  const supabase = createClient(supabaseUrl, supabaseKey)

  // Buscar projetos publicados
  const { data: projects } = await supabase
    .from('projects')
    .select('id, updated_at')
    .eq('published', true)
    .order('updated_at', { ascending: false })

  // Gerar URLs estáticas para todos os idiomas
  const staticUrls: MetadataRoute.Sitemap = []
  
  locales.forEach(locale => {
    staticRoutes.forEach(route => {
      staticUrls.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' || route === '/home' ? 'daily' : 'weekly',
        priority: route === '' || route === '/home' ? 1.0 : route === '/servicos' ? 0.9 : 0.8,
      })
    })
  })

  // Gerar URLs dinâmicas para projetos
  const projectUrls: MetadataRoute.Sitemap = []
  
  if (projects && projects.length > 0) {
    locales.forEach(locale => {
      projects.forEach(project => {
        projectUrls.push({
          url: `${BASE_URL}/${locale}/projetos/${project.id}`,
          lastModified: new Date(project.updated_at),
          changeFrequency: 'monthly',
          priority: 0.7,
        })
      })
    })
  }

  return [...staticUrls, ...projectUrls]
}
