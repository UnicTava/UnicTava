import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const baseUrl = 'https://unictava.com'
  const currentUrl = `${baseUrl}/${locale}/servicos/simulacao-3d`
  const ogImage = `${baseUrl}/simulacao-3d-visual-5c505d.png`

  return {
    title: `Simulação 3D | Treinamento Virtual Industrial | UnicTava Milano`,
    description: `Simulações 3D realistas para treinamento industrial, médico e militar. Ambientes virtuais seguros, avaliação de desempenho em tempo real e redução de custos operacionais.`,
    keywords: [
      'simulação 3D',
      'treinamento virtual',
      'simulação industrial',
      'treinamento médico 3D',
      'simulação militar',
      'realidade virtual treinamento',
      'ambientes virtuais',
      'simulação segura',
      'treinamento imersivo',
      'VR training',
      'simulação operacional',
      'UnicTava Milano',
    ],
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt-BR': `${baseUrl}/pt-BR/servicos/simulacao-3d`,
        'it': `${baseUrl}/it/servicos/simulacao-3d`,
        'en-GB': `${baseUrl}/en-GB/servicos/simulacao-3d`,
      },
    },
    openGraph: {
      title: `Simulação 3D | Treinamento Virtual Realista | UnicTava`,
      description: `Prepare suas equipes com simulações 3D realistas e seguras. Treinamento industrial, médico e militar de ponta.`,
      url: currentUrl,
      siteName: 'UnicTava',
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Simulação 3D - UnicTava' }],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Simulação 3D | UnicTava Milano`,
      description: `Treinamento virtual realista para indústrias, centros de treinamento e instituições.`,
      images: [ogImage],
    },
  }
}

export default function Simulacao3DLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
