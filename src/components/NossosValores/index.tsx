'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import styles from './NossosValores.module.css'

const iconos = [
  '/images/sobre-nos/valores-icon-1.svg',
  '/images/sobre-nos/valores-icon-2.svg',
  '/images/sobre-nos/valores-icon-3.svg'
]

export function NossosValores() {
  const t = useTranslations('about.values')
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  // Get translated values data
  const valoresData = t.raw('items') as Array<{ title: string; description: string }>

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (rect.top < windowHeight * 0.7 && rect.bottom > 0) {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 className={styles.title}>{t('title')}</h2>

        <div className={styles.valoresGrid}>
          {valoresData.map((valor, index) => (
            <div
              key={index}
              className={`${styles.card} ${hoveredCard === index ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={styles.iconContainer}>
                <Image
                  src={iconos[index]}
                  alt={valor.title}
                  width={120}
                  height={120}
                  className={styles.cardIcon}
                  priority
                />
              </div>
              <h3 className={styles.valueTitle}>{valor.title}</h3>
              <p className={styles.valueDescription}>{valor.description}</p>
              <div className={styles.glowEffect} />
              <div className={styles.particleTrail} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}