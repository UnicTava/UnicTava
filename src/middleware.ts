import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'

export default createMiddleware(routing)

export const config = {
  matcher: ['/', '/(pt-BR|en-GB|it)/:path*', '/((?!_next|_vercel|admin|api|.*\\..*).*)']
}