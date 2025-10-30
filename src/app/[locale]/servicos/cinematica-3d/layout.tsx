import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const baseUrl = 'https://unictava.com'
  const currentUrl = `${baseUrl}/${locale}/servicos/cinematica-3d`
  const ogImage = `${baseUrl}/cinematica-3d-visual.png`

  return {
    title: `Cinemática 3D | Produção Visual e Animação | UnicTava Milano`,
    description: `Cinemáticas 3D de alta qualidade para jogos, publicidade e entretenimento. Personagens digitais realistas, integração com filmagens reais e efeitos visuais de ponta.`,
    keywords: [
      'cinemática 3D',
      'animação 3D',
      'produção visual 3D',
      'personagens digitais',
      'CGI',
      'motion capture',
      'renderização 3D',
      'efeitos visuais 3D',
      'compositing 3D',
      'videoclipes 3D',
      'publicidade 3D',
      'UnicTava Milano',
      'animação cinematográfica',
    ],
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt-BR': `${baseUrl}/pt-BR/servicos/cinematica-3d`,
        'it': `${baseUrl}/it/servicos/cinematica-3d`,
        'en-GB': `${baseUrl}/en-GB/servicos/cinematica-3d`,
      },
    },
    openGraph: {
      title: `Cinemática 3D | Produção Visual de Alta Qualidade | UnicTava`,
      description: `Dê vida às suas histórias com cinemáticas 3D extraordinárias. Personagens digitais, efeitos visuais e integração com filmagens reais.`,
      url: currentUrl,
      siteName: 'UnicTava',
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Cinemática 3D - UnicTava' }],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Cinemática 3D | UnicTava Milano`,
      description: `Produção visual 3D, personagens digitais e efeitos cinematográficos de alta qualidade.`,
      images: [ogImage],
    },
  }
}

export default function Cinematica3DLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
