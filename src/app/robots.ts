import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin',
          '/admin/*',
          '/api/admin/*'
        ],
      },
    ],
    sitemap: 'https://unictava.com/sitemap.xml',
  }
}
