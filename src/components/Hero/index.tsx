'use client'

import React from 'react'
// import { StardustCanvas } from '@/components/StardustCanvas'
// import { LineEngine } from '@/components/LineEngine'
import { Logo } from '@/components/Logo'
import styles from './Hero.module.css'

interface HeroProps {
  className?: string
}

export const Hero: React.FC<HeroProps> = ({ className }) => {

  return (
    <div className={styles.heroWrapper}>
      {/* Commented particles for reference */}
      {/* <div className={styles.particlesContainer}>
        <StardustCanvas />
        <LineEngine />
      </div> */}

      {/* Hero section with logo */}
      <section className={`${styles.heroContainer} ${className || ''}`}>
        <div className={styles.backgroundImage} />

        <div className={styles.heroContent}>
          <div className={styles.logoWrapper}>
            <Logo className={styles.heroLogo} />
          </div>
        </div>
      </section>
    </div>
  )
}
