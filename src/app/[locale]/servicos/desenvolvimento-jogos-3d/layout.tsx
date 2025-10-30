import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const baseUrl = 'https://unictava.com'
  const currentUrl = `${baseUrl}/${locale}/servicos/desenvolvimento-jogos-3d`
  const ogImage = `${baseUrl}/jogos-3d-visual.png`

  return {
    title: `Desenvolvimento de Jogos 3D | Unreal Engine & Unity | UnicTava Milano`,
    description: `Desenvolvimento completo de jogos 3D para PC, mobile, VR e console. Expertise em Unreal Engine, Unity, gráficos avançados e multiplayer online.`,
    keywords: [
      'desenvolvimento jogos 3D',
      'game development',
      'Unreal Engine',
      'Unity 3D',
      'jogos mobile',
      'jogos VR',
      'jogos PC',
      'multiplayer online',
      'game design 3D',
      'indie games',
      'desenvolvimento game',
      'gráficos 3D jogos',
      'UnicTava Milano',
    ],
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt-BR': `${baseUrl}/pt-BR/servicos/desenvolvimento-jogos-3d`,
        'it': `${baseUrl}/it/servicos/desenvolvimento-jogos-3d`,
        'en-GB': `${baseUrl}/en-GB/servicos/desenvolvimento-jogos-3d`,
      },
    },
    openGraph: {
      title: `Desenvolvimento de Jogos 3D | Unreal & Unity | UnicTava`,
      description: `Do conceito ao lançamento: desenvolvemos jogos 3D imersivos para múltiplas plataformas com qualidade AAA.`,
      url: currentUrl,
      siteName: 'UnicTava',
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Desenvolvimento Jogos 3D - UnicTava' }],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Desenvolvimento de Jogos 3D | UnicTava Milano`,
      description: `Jogos 3D envolventes para PC, mobile, VR e console. Expertise em Unreal Engine e Unity.`,
      images: [ogImage],
    },
  }
}

export default function Jogos3DLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
