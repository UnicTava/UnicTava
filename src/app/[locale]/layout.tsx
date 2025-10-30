import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import CookieConsent from '@/components/CookieConsent'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { OrganizationSchema, WebsiteSchema } from '@/components/StructuredData'
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

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords.split(', '),
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

  return (
    <html lang={locale} className={roboto.variable}>
      <head>
        <OrganizationSchema locale={locale} />
        <WebsiteSchema locale={locale} />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <CookieConsent />
          <LanguageSwitcher />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}