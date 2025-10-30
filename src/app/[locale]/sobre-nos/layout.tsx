import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const baseUrl = 'https://unictava.com'
  const currentUrl = `${baseUrl}/${locale}/sobre-nos`
  const ogImage = `${baseUrl}/sobre-nos-hero-background.png`

  return {
    title: `Sobre a UnicTava | Empresa Líder em Tecnologias 3D e IA | Milano`,
    description: `Conheça a UnicTava: empresa italiana especializada em soluções 3D, inteligência artificial, VR, AR e desenvolvimento de jogos. Nossa história, missão, visão e equipe em Milano.`,
    keywords: [
      'sobre UnicTava',
      'empresa 3D Milano',
      'quem somos UnicTava',
      'equipe UnicTava',
      'história UnicTava',
      'missão visão valores',
      'empresa tecnologia 3D',
      'UnicTava Milano',
      'empresa VR AR',
      'desenvolvedora jogos 3D',
    ],
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt-BR': `${baseUrl}/pt-BR/sobre-nos`,
        'it': `${baseUrl}/it/sobre-nos`,
        'en-GB': `${baseUrl}/en-GB/sobre-nos`,
      },
    },
    openGraph: {
      title: `Sobre a UnicTava | Tecnologias 3D e IA em Milano`,
      description: `Empresa líder em soluções 3D, IA, VR e AR. Descubra nossa história, missão e equipe especializada em tecnologias imersivas.`,
      url: currentUrl,
      siteName: 'UnicTava',
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Sobre UnicTava' }],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Sobre a UnicTava | Líder em Tecnologias 3D`,
      description: `Conheça a empresa italiana especializada em soluções 3D, IA, VR e AR em Milano.`,
      images: [ogImage],
    },
  }
}

export default function SobreNosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
