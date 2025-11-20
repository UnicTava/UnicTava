'use client'

import { useEffect, useState } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Script from 'next/script'
import * as CookieConsent from 'vanilla-cookieconsent'

interface GoogleAnalyticsProps {
  measurementId: string
}

export function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [analyticsAccepted, setAnalyticsAccepted] = useState(false)

  // Check if analytics cookies are accepted
  useEffect(() => {
    const checkConsent = () => {
      const cookie = CookieConsent.getCookie()
      const accepted = cookie?.categories?.includes('analytics')
      setAnalyticsAccepted(!!accepted)
    }

    // Check initially
    checkConsent()

    // Listen for consent changes
    window.addEventListener('cc:onChange', checkConsent)
    
    return () => {
      window.removeEventListener('cc:onChange', checkConsent)
    }
  }, [])

  // Track page views when route changes
  useEffect(() => {
    if (!measurementId || !window.gtag || !analyticsAccepted) return

    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
    
    window.gtag('config', measurementId, {
      page_path: url,
    })
  }, [pathname, searchParams, measurementId, analyticsAccepted])

  // Only load scripts if analytics is accepted
  if (!measurementId || !analyticsAccepted) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
}
