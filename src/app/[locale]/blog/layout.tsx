import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const baseUrl = 'https://unictava.com'
  const currentUrl = `${baseUrl}/${locale}/blog`

  return {
    title: `Blog UnicTava | Tecnologias 3D, IA, VR e AR | Insights e Tendências`,
    description: `Explore artigos sobre inteligência artificial 3D, realidade virtual, desenvolvimento de jogos, simulações e as últimas tendências em tecnologias imersivas. Blog oficial da UnicTava Milano.`,
    keywords: [
      'blog 3D',
      'artigos inteligência artificial',
      'tendências realidade virtual',
      'desenvolvimento jogos blog',
      'tutoriais 3D',
      'insights VR AR',
      'tecnologias imersivas blog',
      'UnicTava blog',
    ],
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt-BR': `${baseUrl}/pt-BR/blog`,
        'it': `${baseUrl}/it/blog`,
        'en-GB': `${baseUrl}/en-GB/blog`,
      },
    },
    openGraph: {
      title: `Blog UnicTava | Tecnologias 3D e IA`,
      description: `Artigos, tutoriais e insights sobre tecnologias 3D, inteligência artificial, VR, AR e desenvolvimento de jogos.`,
      url: currentUrl,
      siteName: 'UnicTava',
      locale: locale,
      type: 'website',
    },
  }
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
