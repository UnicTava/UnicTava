import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const baseUrl = 'https://unictava.com'
  const currentUrl = `${baseUrl}/${locale}/servicos/simulacros`
  const ogImage = `${baseUrl}/simulacros-vr-ar-visual.png`

  return {
    title: `Simulacros VR/AR | Dispositivos Profissionais para Realidade Virtual | UnicTava Milano`,
    description: `Simulacros profissionais e dispositivos inteligentes para VR/AR. Réplicas físicas com sensores, microcontroladores e firmware personalizado para treinamento realista.`,
    keywords: [
      'simulacros VR',
      'dispositivos VR/AR',
      'hardware VR',
      'treinamento VR',
      'simuladores profissionais',
      'haptic feedback',
      'microcontroladores VR',
      'impressão 3D VR',
      'sensores VR',
      'firmware VR',
      'dispositivos táticos',
      'UnicTava Milano',
      'realidade virtual treinamento',
    ],
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt-BR': `${baseUrl}/pt-BR/servicos/simulacros`,
        'it': `${baseUrl}/it/servicos/simulacros`,
        'en-GB': `${baseUrl}/en-GB/servicos/simulacros`,
      },
    },
    openGraph: {
      title: `Simulacros VR/AR | Dispositivos Profissionais | UnicTava`,
      description: `Desenvolvemos simulacros completos — hardware + software — para treinamento profissional em VR/AR. Réplicas físicas com sensores e calibração precisa.`,
      url: currentUrl,
      siteName: 'UnicTava',
      images: [{ url: ogImage, width: 1200, height: 630, alt: 'Simulacros VR/AR - UnicTava' }],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Simulacros VR/AR | UnicTava Milano`,
      description: `Simulacros profissionais e dispositivos inteligentes para treinamento em Realidade Virtual e Aumentada.`,
      images: [ogImage],
    },
  }
}

export default function SimulacrosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
