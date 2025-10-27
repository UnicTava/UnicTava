'use client'

import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { Logo } from '@/components/Logo'
import styles from './LoadingScreen.module.css'

export const LoadingScreen: React.FC = () => {
  const [isComplete, setIsComplete] = useState(false)
  const router = useRouter()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Get current locale from URL or default to pt-BR
    const pathSegments = window.location.pathname.split('/')
    const locales = ['pt-BR', 'en', 'it']
    const locale = locales.find(l => pathSegments.includes(l)) || 'pt-BR'

    // Wait for video to complete (3 seconds)
    const timer = setTimeout(() => {
      setIsComplete(true)
      // Navigate after fade out animation completes (1 second)
      setTimeout(() => {
        router.push(`/${locale}/home`)
      }, 1000)
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className={`${styles.container} ${isComplete ? styles.fadeOut : ''}`}>
      <div className={styles.loadingContainer}>
        <div className={styles.loadingWrapper}>
          {/* Logo overlaid on video */}
          <div className={styles.logoWrapper}>
            <Logo className={styles.loadingLogo} />
          </div>

          {/* Loading Video */}
          <div className={styles.videoWrapper}>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className={styles.loadingVideo}
            >
              <source src="/video/LOADING.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}
