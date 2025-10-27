import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const messages = await getMessages({ locale: 'pt-BR' })

  return (
    <NextIntlClientProvider messages={messages} locale="pt-BR">
      {children}
    </NextIntlClientProvider>
  )
}
