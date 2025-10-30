import React from 'react'

interface OrganizationSchemaProps {
  locale: string
}

export function OrganizationSchema({ locale }: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'UnicTava',
    url: `https://unictava.com/${locale}`,
    logo: 'https://unictava.com/Logo/logo.png',
    description: 'Soluções em 3D, Inteligência Artificial, Realidade Virtual e Desenvolvimento de Jogos',
    sameAs: [
      // Adicione aqui suas redes sociais
      // 'https://www.facebook.com/unictava',
      // 'https://www.linkedin.com/company/unictava',
      // 'https://www.instagram.com/unictava',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Portuguese', 'Italian', 'English']
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface WebsiteSchemaProps {
  locale: string
}

export function WebsiteSchema({ locale }: WebsiteSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'UnicTava',
    url: `https://unictava.com/${locale}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://unictava.com/${locale}/projetos?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ServiceSchemaProps {
  name: string
  description: string
  url: string
  locale: string
}

export function ServiceSchema({ name, description, url, locale }: ServiceSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'UnicTava',
      url: `https://unictava.com/${locale}`
    },
    areaServed: {
      '@type': 'Country',
      name: locale === 'pt-BR' ? 'Brazil' : locale === 'it' ? 'Italy' : 'United Kingdom'
    },
    url
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string
    url: string
  }>
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQPageSchemaProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function FAQPageSchema({ faqs }: FAQPageSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  image: string
  datePublished: string
  dateModified: string
  author: string
  locale: string
}

export function ArticleSchema({
  title,
  description,
  url,
  image,
  datePublished,
  dateModified,
  author,
  locale
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'UnicTava',
      logo: {
        '@type': 'ImageObject',
        url: 'https://unictava.com/Logo/logo.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url
    },
    inLanguage: locale
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
