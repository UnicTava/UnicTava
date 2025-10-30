import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const baseUrl = 'https://unictava.com'
  const currentUrl = `${baseUrl}/${locale}/projetos`

  return {
    title: `Projetos UnicTava | Portfólio 3D, VR, AR e IA | Cases de Sucesso`,
    description: `Explore nosso portfólio de projetos em 3D, realidade virtual, realidade aumentada, inteligência artificial e jogos. Cases de sucesso da UnicTava Milano.`,
    keywords: [
      'portfólio UnicTava',
      'projetos 3D',
      'cases VR AR',
      'projetos inteligência artificial',
      'galeria projetos 3D',
      'portfolio jogos 3D',
      'trabalhos UnicTava',
      'projetos realizados',
    ],
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt-BR': `${baseUrl}/pt-BR/projetos`,
        'it': `${baseUrl}/it/projetos`,
        'en-GB': `${baseUrl}/en-GB/projetos`,
      },
    },
    openGraph: {
      title: `Projetos UnicTava | Portfólio 3D, VR e IA`,
      description: `Explore nosso portfólio completo de projetos em tecnologias 3D, realidade virtual, IA e jogos.`,
      url: currentUrl,
      siteName: 'UnicTava',
      locale: locale,
      type: 'website',
    },
  }
}

export default function ProjetosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
