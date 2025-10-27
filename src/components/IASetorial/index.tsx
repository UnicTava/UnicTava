'use client'

import React from 'react'
import { useTranslations } from 'next-intl'
import styles from './IASetorial.module.css'

export function IASetorial() {
  const t = useTranslations('iaSetorial')

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('title')}</h2>
        <p className={styles.description}>
          {t.rich('description', {
            highlight1: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            highlight2: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            highlight3: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            highlight4: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            highlight5: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            highlight6: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            highlight7: (chunks) => <span className={styles.highlight}>{chunks}</span>,
            highlight8: (chunks) => <span className={styles.highlight}>{chunks}</span>
          })}
        </p>
      </div>
    </section>
  )
}