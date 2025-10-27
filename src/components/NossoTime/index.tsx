'use client'

import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './NossoTime.module.css'

export function NossoTime() {
  const t = useTranslations('about.team')

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={`${styles.title} ${styles.holographicText}`}>{t('title')}</h2>

        <div className={styles.content}>
          <div className={styles.teamImage}>
            <Image
              src="/imagem/time.png"
              alt={t('imageAlt')}
              width={700}
              height={700}
              priority
              className={styles.teamPhoto}
            />
          </div>

          <div className={styles.textContent}>
            <p className={styles.description}>
              {t('description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}