'use client'

import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import styles from './ProposFuturo.module.css'

export function ProposFuturo() {
  const t = useTranslations('about.future')

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles.holographicText}`}>{t('title')}</h2>

        <p className={styles.description}>
          {t.rich('description', {
            highlight1: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            highlight2: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            highlight3: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            highlight4: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            highlight5: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            highlight6: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            highlight7: (chunks) => <span className={styles.highlight}>{chunks}</span>
          })}
        </p>

        <Link href="/home#contact-form-section" className={styles.ctaButton}>
          <span>{t('ctaButton')}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  )
}