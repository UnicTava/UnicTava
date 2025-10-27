'use client'

import React, { useEffect, useRef } from 'react'
import styles from './StardustCanvas.module.css'

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  turbulencePhase: number
  driftSpeed: number
}

interface StardustCanvasProps {
  isExpanding?: boolean
  mode?: 'section' | 'page'
}

export const StardustCanvas: React.FC<StardustCanvasProps> = ({ isExpanding, mode = 'section' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const animationIdRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true // Enable hardware acceleration
    }) as CanvasRenderingContext2D
    if (!ctx) return

    // Set canvas size - expand to cover both sections
    const resizeCanvas = () => {
      const desiredHeight = mode === 'page'
        ? window.innerHeight
        : canvas.parentElement?.clientHeight || window.innerHeight

      canvas.width = window.innerWidth
      canvas.height = desiredHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize dust particles - increased for expanded area
    const particleCount = mode === 'page' ? 1200 : 500

    particlesRef.current = Array.from({ length: particleCount }, () => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 3 + 1, // depth layer
        vx: 0,
        vy: 0,
        size: Math.random() * 1.5 + 0.5, // smaller, more subtle particles
        opacity: Math.random() * 0.5 + 0.3, // Opacidade mais sutil
        color: Math.random() > 0.6 ? '255, 255, 255' :
               Math.random() > 0.3 ? '207, 216, 246' : '150, 150, 200',
        turbulencePhase: Math.random() * Math.PI * 2,
        driftSpeed: Math.random() * 0.5 + 0.1
      }
    })

    // Optimized wind field function
    const getWindField = (x: number, y: number, time: number) => {
      // Single wind current for better performance
      const wind = {
        x: Math.sin(time * 0.1 + y * 0.002) * 0.3,
        y: Math.cos(time * 0.08 + x * 0.002) * 0.2
      }

      return wind
    }

    // Animation loop with 30fps optimization for better performance
    let time = 0
    let lastTime = performance.now()
    const targetFPS = 30 // Reduced FPS for better performance
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime: number = performance.now()) => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Frame rate limiting for consistent 30fps
      const deltaTime = currentTime - lastTime
      if (deltaTime < frameInterval) return

      // Adjust for any frame drops
      lastTime = currentTime - (deltaTime % frameInterval)

      // Clear canvas completely for better visibility
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      // Batch particle operations for better performance
      ctx.save()

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        // Get wind at particle position
        const wind = getWindField(particle.x, particle.y, time)
        
        // Brownian motion (random walk)
        const brownianX = (Math.random() - 0.5) * 0.2
        const brownianY = (Math.random() - 0.5) * 0.2

        // Simplified velocity update for better performance
        particle.vx = particle.vx * 0.98 + (wind.x + brownianX) * particle.driftSpeed
        particle.vy = particle.vy * 0.98 + (wind.y + brownianY) * particle.driftSpeed
        
        // Apply velocity with depth-based speed
        const depthFactor = 1 / particle.z
        particle.x += particle.vx * depthFactor
        particle.y += particle.vy * depthFactor
        
        // Subtle floating effect
        particle.turbulencePhase += 0.02
        const floatY = Math.sin(particle.turbulencePhase) * 0.3 * depthFactor
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0
        
        // Draw particle
        const finalX = particle.x
        const finalY = particle.y + floatY
        const finalOpacity = particle.opacity * depthFactor
        const finalSize = particle.size * depthFactor // Tamanho normal sem multiplicador extra
        
        // Draw simple circle for better performance
        ctx.beginPath()
        ctx.arc(finalX, finalY, finalSize, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${particle.color}, ${finalOpacity})`
        ctx.fill()
      })

      // Restore context state
      ctx.restore()

      // Simplified background overlay for better performance
      ctx.fillStyle = 'rgba(96, 92, 207, 0.01)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [mode])

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.stardustCanvas} ${mode === 'page' ? styles.pageCanvas : ''} ${isExpanding ? styles.fadeOut : ''}`}
    />
  )
}