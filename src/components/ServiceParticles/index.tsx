'use client'

import React, { useEffect, useRef } from 'react'
import styles from './ServiceParticles.module.css'

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  floatPhase: number
  rotationSpeed: number
}

interface ServiceParticlesProps {
  className?: string
}

export const ServiceParticles: React.FC<ServiceParticlesProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationIdRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size to match container
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles with 3D tech theme
    const particleCount = 150

    particlesRef.current = Array.from({ length: particleCount }, () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 3 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.2,
        color: Math.random() > 0.5 ? '96, 92, 207' : '150, 146, 230',
        floatPhase: Math.random() * Math.PI * 2,
        rotationSpeed: Math.random() * 0.02 + 0.01
      }
    })

    // Animation loop
    let time = 0
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += 0.005

      particlesRef.current.forEach((particle) => {
        // Gentle floating motion
        particle.floatPhase += particle.rotationSpeed
        const floatX = Math.sin(particle.floatPhase) * 0.5
        const floatY = Math.cos(particle.floatPhase * 0.7) * 0.3

        // Update position
        particle.x += particle.vx + floatX
        particle.y += particle.vy + floatY

        // Wrap around edges
        if (particle.x < -10) particle.x = canvas.width + 10
        if (particle.x > canvas.width + 10) particle.x = -10
        if (particle.y < -10) particle.y = canvas.height + 10
        if (particle.y > canvas.height + 10) particle.y = -10

        // Calculate depth-based properties
        const depthFactor = 1 / particle.z
        const finalOpacity = particle.opacity * depthFactor
        const finalSize = particle.size * depthFactor

        // Create glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, finalSize * 3
        )
        gradient.addColorStop(0, `rgba(${particle.color}, ${finalOpacity})`)
        gradient.addColorStop(0.5, `rgba(${particle.color}, ${finalOpacity * 0.3})`)
        gradient.addColorStop(1, `rgba(${particle.color}, 0)`)

        // Draw particle with glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, finalSize * 3, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw core particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, finalSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particle.color}, ${finalOpacity * 1.5})`
        ctx.fill()
      })

      // Add subtle animated overlay
      const overlayOpacity = 0.01 + Math.sin(time) * 0.005
      ctx.fillStyle = `rgba(96, 92, 207, ${overlayOpacity})`
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      animationIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.serviceParticles} ${className || ''}`}
    />
  )
}