import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'UnicTava - Transformamos ideias em experiências 3D imersivas',
  description: 'Soluções visuais, técnicas e interativas para empresas que querem inovar.',
  keywords: ['3D', 'experiências imersivas', 'soluções visuais', 'tecnologia', 'inovação'],
  authors: [{ name: 'UnicTava' }],
  creator: 'UnicTava',
  publisher: 'UnicTava',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={roboto.variable}>
      <body>
        {children}
      </body>
    </html>
  )
}