import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const baseUrl = 'https://unictava.com'
  const currentUrl = `${baseUrl}/${locale}/servicos/educacao-treinamento-3d`
  const ogImage = `${baseUrl}/educacao-3d-visual.png`

  return {
    title: `Educação e Treinamento 3D | E-Learning Imersivo | UnicTava Milano`,
    description: `Transforme a educação com experiências de aprendizado 3D imersivas. Tutores virtuais, ambientes interativos e treinamento corporativo de última geração.`,
    keywords: [
      'educação 3D',
      'treinamento 3D',
      'e-learning 3D',
      'tutores virtuais',
      'aprendizado imersivo',
      'treinamento corporativo 3D',
      'realidade virtual educação',
      'ambientes educacionais 3D',
      'aprendizado interativo',
      'educação imersiva',
      'LMS 3D',
      'UnicTava Milano',
    ],
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt-BR': `${baseUrl}/pt-BR/servicos/educacao-treinamento-3d`,
        'it': `${baseUrl}/it/servicos/educacao-treinamento-3d`,
        'en-GB': `${baseUrl}/en-GB/servicos/educacao-treinamento-3d`,
      },
    },
    openGraph: {
      title: `Educação e Treinamento 3D | E-Learning Imersivo | UnicTava`,
      description: `Experiências de aprendizado que capturam e mantêm a atenção. Educação 3D para instituições e empresas.`,
      url: currentUrl,
      siteName: 'UnicTava',
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Educação 3D - UnicTava' }],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Educação e Treinamento 3D | UnicTava Milano`,
      description: `Transforme o ensino com experiências imersivas e tecnológicas de aprendizado 3D.`,
      images: [ogImage],
    },
  }
}

export default function Educacao3DLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
