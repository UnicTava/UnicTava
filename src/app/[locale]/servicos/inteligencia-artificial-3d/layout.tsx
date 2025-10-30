import { Metadata } from 'next'
import { getMessages } from 'next-intl/server'
import { ServiceSchema, BreadcrumbSchema, FAQPageSchema } from '@/components/StructuredData'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const messages = await getMessages({ locale })
  const t = messages.aiService as any

  const baseUrl = 'https://unictava.com'
  const currentUrl = `${baseUrl}/${locale}/servicos/inteligencia-artificial-3d`
  const ogImage = `${baseUrl}/ai-3d-visual.png`

  return {
    title: `Inteligência Artificial 3D | Avatares Interativos com IA | UnicTava Milano`,
    description: `Soluções avançadas de Inteligência Artificial 3D com avatares interativos, chatbots humanizados e treinamentos imersivos. Transforme seu atendimento digital com IA 3D da UnicTava.`,
    keywords: [
      'inteligência artificial 3D',
      'avatares 3D IA',
      'chatbot 3D',
      'human bot 3D',
      'IA conversacional',
      'assistente virtual 3D',
      'treinamento IA 3D',
      'machine learning 3D',
      'NLP 3D',
      'avatares interativos',
      'IA setorial',
      'digital humans',
      'UnicTava Milano',
    ],
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt-BR': `${baseUrl}/pt-BR/servicos/inteligencia-artificial-3d`,
        'it': `${baseUrl}/it/servicos/inteligencia-artificial-3d`,
        'en-GB': `${baseUrl}/en-GB/servicos/inteligencia-artificial-3d`,
      },
    },
    openGraph: {
      title: `Inteligência Artificial 3D | Avatares Interativos | UnicTava`,
      description: `Revolucione suas experiências com avatares 3D dotados de inteligência artificial. Treinamentos interativos, atendimento humanizado e assistência especializada.`,
      url: currentUrl,
      siteName: 'UnicTava',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'Inteligência Artificial 3D - UnicTava',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Inteligência Artificial 3D | UnicTava Milano`,
      description: `Avatares 3D com IA, chatbots humanizados e treinamentos interativos. Revolucione seu atendimento digital.`,
      images: [ogImage],
    },
  }
}

export default function InteligenciaArtificial3DLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  return (
    <>
      {children}
    </>
  )
}
