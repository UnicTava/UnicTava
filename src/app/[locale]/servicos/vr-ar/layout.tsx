import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const baseUrl = 'https://unictava.com'
  const currentUrl = `${baseUrl}/${locale}/servicos/vr-ar`
  const ogImage = `${baseUrl}/realidade-virtual-visual.png`

  return {
    title: `Realidade Virtual e Aumentada (VR/AR) | Experiências Imersivas | UnicTava Milano`,
    description: `Soluções completas de Realidade Virtual (VR) e Realidade Aumentada (AR). Design de interiores VR, pré-visualização AR, treinamento imersivo e experiências mistas de última geração.`,
    keywords: [
      'realidade virtual',
      'realidade aumentada',
      'VR',
      'AR',
      'experiências imersivas',
      'design interiores VR',
      'pré-visualização AR',
      'Oculus Rift',
      'HTC Vive',
      'Microsoft HoloLens',
      'Meta Quest',
      'mixed reality',
      'UnicTava Milano',
    ],
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt-BR': `${baseUrl}/pt-BR/servicos/vr-ar`,
        'it': `${baseUrl}/it/servicos/vr-ar`,
        'en-GB': `${baseUrl}/en-GB/servicos/vr-ar`,
      },
    },
    openGraph: {
      title: `Realidade Virtual e Aumentada | Experiências Imersivas | UnicTava`,
      description: `Inovação nas suas mãos com VR e AR. Design de interiores virtual, pré-visualização em canteiros e treinamento imersivo.`,
      url: currentUrl,
      siteName: 'UnicTava',
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'VR e AR - UnicTava' }],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Realidade Virtual e Aumentada (VR/AR) | UnicTava Milano`,
      description: `Experiências imersivas e mistas para diversas aplicações. VR e AR de ponta.`,
      images: [ogImage],
    },
  }
}

export default function VRARLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
