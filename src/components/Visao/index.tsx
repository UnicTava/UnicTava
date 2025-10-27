'use client'

import React, { useRef, useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import styles from './Visao.module.css'

export function Visao() {
  const t = useTranslations('about.vision')
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

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
      <div className={styles.backgroundImage}>
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={styles.bgImage}
        >
          <source src="/imagem/visao.mp4" type="video/mp4" />
        </video>
        <div className={styles.imageOverlay} />
      </div>

      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <div className={styles.content}>
          <h2 className={`${styles.title} ${styles.holographicText}`}>{t('title')}</h2>
          <p className={styles.description}>
            {t('description')}
          </p>
          <div className={styles.videoContainer}>
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className={styles.video}
            >
              <source src="/imagem/visao.mp4" type="video/mp4" />
            </video>
            <div className={styles.videoOverlay} />
          </div>
        </div>
      </div>
    </section>
  )
}