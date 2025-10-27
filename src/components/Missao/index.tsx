'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import styles from './Missao.module.css'

export function Missao() {
  const t = useTranslations('about.mission')
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Trigger visibility animation
      if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={`${styles.title} ${styles.holographicText}`}>{t('title')}</h2>
            <p className={styles.description}>
              {t('description')}
            </p>
          </div>
          <div className={styles.imageWrapper}>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className={styles.image}
            >
              <source src="/imagem/missao.mp4" type="video/mp4" />
            </video>
            <div className={styles.imageOverlay} />
          </div>
        </div>
      </div>
    </section>
  )
}