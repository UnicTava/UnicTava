import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import CookieConsent from '@/components/CookieConsent'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { OrganizationSchema, WebsiteSchema } from '@/components/StructuredData'
import { GoogleAnalytics } from '@/components/GoogleAnalytics'
import '../globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
})

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const messages = await getMessages({ locale })
  const metadata = messages.metadata as any

  const baseUrl = 'https://unictava.com'
  const currentUrl = `${baseUrl}/${locale}`
  const ogImage = `${baseUrl}/hero-background.png`

  // Títulos e descrições otimizados por idioma
  const seoTitle = locale === 'pt-BR' 
    ? 'UnicTava Milano | Soluções 3D, IA, VR, AR e Jogos | Líder em Tecnologias Imersivas'
    : locale === 'it'
    ? 'UnicTava Milano | Soluzioni 3D, IA, VR, AR e Giochi | Leader Tecnologie Immersive'
    : 'UnicTava Milano | 3D Solutions, AI, VR, AR & Games | Immersive Technology Leader'

  const seoDescription = locale === 'pt-BR'
    ? 'UnicTava: especialistas em inteligência artificial 3D, realidade virtual, realidade aumentada, simulações industriais, desenvolvimento de jogos e cinemática 3D em Milano. Transforme seu negócio com tecnologias imersivas de ponta.'
    : locale === 'it'
    ? 'UnicTava: esperti in intelligenza artificiale 3D, realtà virtuale, realtà aumentata, simulazioni industriali, sviluppo giochi e cinematica 3D a Milano. Trasforma il tuo business con tecnologie immersive.'
    : 'UnicTava: experts in 3D artificial intelligence, virtual reality, augmented reality, industrial simulations, game development and 3D cinematics in Milano. Transform your business with cutting-edge immersive technologies.'

  // Google Search Console verification
  const verification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

  return {
    verification: verification ? {
      google: verification,
    } : undefined,
    title: seoTitle,
    description: seoDescription,
    keywords: [
      '3D Milano',
      'inteligência artificial 3D',
      'realidade virtual',
      'realidade aumentada',
      'VR AR',
      'simulação 3D',
      'desenvolvimento jogos 3D',
      'cinemática 3D',
      'avatares 3D IA',
      'treinamento virtual',
      'UnicTava Milano',
      'tecnologias imersivas',
      'Unity Unreal Engine',
      'human bots 3D',
    ],
    authors: [{ name: 'UnicTava' }],
    creator: 'UnicTava',
    publisher: 'UnicTava',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        'pt-BR': `${baseUrl}/pt-BR`,
        'it': `${baseUrl}/it`,
        'en-GB': `${baseUrl}/en-GB`,
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: currentUrl,
      siteName: 'UnicTava',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: 'UnicTava - Soluções 3D e IA',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: [ogImage],
      creator: '@unictava',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages({ locale })

  // Google Analytics ID from environment
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  return (
    <html lang={locale} className={roboto.variable}>
      <head>
        <OrganizationSchema locale={locale} />
        <WebsiteSchema locale={locale} />
      </head>
      <body>
        {gaId && <GoogleAnalytics measurementId={gaId} />}
        <NextIntlClientProvider messages={messages}>
          <CookieConsent />
          <LanguageSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}