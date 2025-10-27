'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import styles from './NossaHistoria.module.css'

interface ExplosionParticle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  hue: number
}

export const NossaHistoria: React.FC = () => {
  const t = useTranslations('about.history')
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasExploded, setHasExploded] = useState(false)
  const particlesRef = useRef<ExplosionParticle[]>([])
  const animationRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Trigger when section is 50% visible
      if (rect.top < windowHeight * 0.5 && rect.bottom > 0) {
        if (!isVisible) {
          setIsVisible(true)
          if (!hasExploded) {
            triggerExplosion()
            setHasExploded(true)
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener('scroll', handleScroll)
  }, [isVisible, hasExploded])

  const triggerExplosion = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Create explosion particles
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const particleCount = 200

    particlesRef.current = Array.from({ length: particleCount }, () => {
      const angle = Math.random() * Math.PI * 2
      const speed = Math.random() * 15 + 5
      const hue = Math.random() * 60 + 250 // Purple to blue range

      return {
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: Math.random() * 4 + 2,
        opacity: 1,
        hue: hue
      }
    })

    // Animate explosion
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      let allParticlesGone = true

      particlesRef.current.forEach((particle) => {
        if (particle.opacity > 0) {
          allParticlesGone = false

          // Update particle
          particle.x += particle.vx
          particle.y += particle.vy
          particle.vx *= 0.98
          particle.vy *= 0.98
          particle.opacity *= 0.96

          // Draw particle with glow
          const gradient = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.radius * 3
          )
          gradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${particle.opacity})`)
          gradient.addColorStop(0.5, `hsla(${particle.hue}, 100%, 60%, ${particle.opacity * 0.5})`)
          gradient.addColorStop(1, `hsla(${particle.hue}, 100%, 50%, 0)`)

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius * 3, 0, Math.PI * 2)
          ctx.fill()

          // Bright core
          ctx.fillStyle = `hsla(${particle.hue}, 100%, 90%, ${particle.opacity})`
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      if (!allParticlesGone) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animate()
  }

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className={styles.section}>
      <canvas
        ref={canvasRef}
        className={`${styles.explosionCanvas} ${hasExploded ? styles.fadeOut : ''}`}
      />

      <div className={`${styles.container} ${isVisible ? styles.visible : ''}`}>
        <h2 className={`${styles.title} ${styles.holographicText}`}>{t('title')}</h2>

        <div className={styles.content}>
          <div className={styles.leftContent}>
            <p className={styles.description}>
              {t('description')}
            </p>
          </div>

          <div className={styles.rightContent}>
            <div className={styles.imageContainer}>
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className={styles.image}
                style={{ width: '100%', height: 'auto' }}
              >
                <source src="/imagem/nossa historia.mp4" type="video/mp4" />
              </video>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}