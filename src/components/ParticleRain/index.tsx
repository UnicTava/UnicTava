'use client'

import React, { useEffect, useRef, useCallback } from 'react'
import styles from './ParticleRain.module.css'

interface RainParticle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  size: number
  opacity: number
  color: string
  targetX: number
  targetY: number
  targetZ: number
  originalX: number
  originalY: number
  originalZ: number
  formationProgress: number
  isInFormation: boolean
  side: 'left' | 'right'
  rainDelay: number
  glowIntensity: number
  pulsePhase: number
  pulseSpeed: number
  trail: Array<{ x: number; y: number; opacity: number }>
  rotationZ: number
  rotationSpeed: number
}

interface ParticleRainProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
  enableReveal?: boolean
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2

// Professional icon formations for tech services
const createIconFormations = (leftX: number, rightX: number, centerY: number) => {
  const formations: Record<string, Array<{x: number, y: number}>> = {}

  // Code icon (brackets) - left side
  formations.code = []
  const codeSize = 40
  // Left bracket <
  for (let i = 0; i <= 10; i++) {
    formations.code.push({
      x: leftX - 20,
      y: centerY - codeSize + (i * codeSize * 2 / 10)
    })
    formations.code.push({
      x: leftX - 20 - Math.abs(i - 5) * 4,
      y: centerY - codeSize + (i * codeSize * 2 / 10)
    })
  }
  // Right bracket >
  for (let i = 0; i <= 10; i++) {
    formations.code.push({
      x: leftX + 20,
      y: centerY - codeSize + (i * codeSize * 2 / 10)
    })
    formations.code.push({
      x: leftX + 20 + Math.abs(i - 5) * 4,
      y: centerY - codeSize + (i * codeSize * 2 / 10)
    })
  }

  // Design icon (palette) - right side
  formations.design = []
  const designRadius = 30
  // Circle outline
  for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 20) {
    formations.design.push({
      x: rightX + Math.cos(angle) * designRadius,
      y: centerY + Math.sin(angle) * designRadius
    })
  }
  // Brush handle
  for (let i = 0; i < 10; i++) {
    formations.design.push({
      x: rightX + designRadius,
      y: centerY + designRadius + i * 3
    })
  }

  // Rocket icon (launch) - left side variation
  formations.rocket = []
  // Rocket body
  for (let i = 0; i < 15; i++) {
    formations.rocket.push({
      x: leftX,
      y: centerY - 40 + i * 4
    })
    // Wings
    if (i > 10) {
      formations.rocket.push({
        x: leftX - 10 - (i - 10) * 2,
        y: centerY - 40 + i * 4
      })
      formations.rocket.push({
        x: leftX + 10 + (i - 10) * 2,
        y: centerY - 40 + i * 4
      })
    }
  }
  // Nose cone
  for (let i = 0; i < 5; i++) {
    formations.rocket.push({
      x: leftX - (5 - i),
      y: centerY - 45 - i * 3
    })
    formations.rocket.push({
      x: leftX + (5 - i),
      y: centerY - 45 - i * 3
    })
  }

  // AI Brain icon - right side alternative
  formations.brain = []
  // Brain outline (simplified neural network)
  const brainCenterX = rightX
  const brainCenterY = centerY
  // Nodes
  const nodePositions = [
    {x: 0, y: -30}, {x: -20, y: -20}, {x: 20, y: -20},
    {x: -30, y: 0}, {x: 0, y: 0}, {x: 30, y: 0},
    {x: -20, y: 20}, {x: 20, y: 20}, {x: 0, y: 30}
  ]
  nodePositions.forEach(pos => {
    // Create node clusters
    for (let i = 0; i < 5; i++) {
      const angle = (i / 5) * Math.PI * 2
      formations.brain.push({
        x: brainCenterX + pos.x + Math.cos(angle) * 3,
        y: brainCenterY + pos.y + Math.sin(angle) * 3
      })
    }
  })

  // 3D Cube icon - left side alternative
  formations.cube = []
  const cubeSize = 25
  const cubeCenterX = leftX
  const cubeCenterY = centerY
  // Front face
  for (let i = 0; i <= 8; i++) {
    formations.cube.push({
      x: cubeCenterX - cubeSize + (i % 3) * cubeSize,
      y: cubeCenterY - cubeSize + Math.floor(i / 3) * cubeSize
    })
  }
  // Back face (offset)
  for (let i = 0; i <= 8; i++) {
    formations.cube.push({
      x: cubeCenterX - cubeSize + 15 + (i % 3) * cubeSize,
      y: cubeCenterY - cubeSize - 15 + Math.floor(i / 3) * cubeSize
    })
  }
  // Connecting lines
  for (let i = 0; i < 4; i++) {
    const cornerX = i % 2 === 0 ? -cubeSize : cubeSize
    const cornerY = i < 2 ? -cubeSize : cubeSize
    for (let j = 0; j < 5; j++) {
      formations.cube.push({
        x: cubeCenterX + cornerX + j * 3,
        y: cubeCenterY + cornerY - j * 3
      })
    }
  }

  return formations
}

export const ParticleRain: React.FC<ParticleRainProps> = ({
  className,
  intensity = 'high',
  enableReveal = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<RainParticle[]>([])
  const animationIdRef = useRef<number | undefined>(undefined)
  const mouseRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)
  const revealRef = useRef({
    isRevealing: enableReveal,
    progress: 0,
    startTime: Date.now(),
    duration: 4000, // 4 seconds to reveal
    revealedHeight: 0
  })
  const formationRef = useRef({
    active: false,
    currentFormation: 'rain' as keyof ReturnType<typeof createIconFormations> | 'rain',
    formations: {} as ReturnType<typeof createIconFormations>,
    progress: 0,
    lastChange: 0,
    changeInterval: 6000, // Change formation every 6 seconds
    transitionDuration: 2000,
    cardBounds: { left: 0, right: 0, top: 0, bottom: 0 },
    lanes: { left: 0, right: 0, spread: 80 }
  })

  // Draw particle with professional glow effect
  const drawParticle = useCallback((
    ctx: CanvasRenderingContext2D,
    particle: RainParticle,
    screenX: number,
    screenY: number
  ) => {
    const depthFactor = 1 + (10 - particle.z) * 0.06
    const size = (particle.size / particle.z) * depthFactor
    const opacity = particle.opacity * (1 - particle.z / 15) * particle.glowIntensity

    ctx.save()
    ctx.translate(screenX, screenY)
    ctx.globalCompositeOperation = 'lighter'
    ctx.rotate(particle.rotationZ)
    ctx.shadowBlur = size * 1.8
    ctx.shadowColor = `rgba(${particle.color}, ${opacity * 0.45})`

    // Multi-layer glow for depth
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 3)
    const pulseEffect = Math.sin(particle.pulsePhase) * 0.2 + 0.8

    gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * pulseEffect})`)
    gradient.addColorStop(0.2, `rgba(${particle.color}, ${opacity * 0.8 * pulseEffect})`)
    gradient.addColorStop(0.5, `rgba(${particle.color}, ${opacity * 0.5})`)
    gradient.addColorStop(0.8, `rgba(${particle.color}, ${opacity * 0.2})`)
    gradient.addColorStop(1, `rgba(${particle.color}, 0)`)

    // Outer glow
    ctx.beginPath()
    ctx.arc(0, 0, size * 2.5, 0, Math.PI * 2)
    ctx.fillStyle = gradient
    ctx.fill()

    // Core
    ctx.beginPath()
    ctx.arc(0, 0, size * 0.8, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${opacity * pulseEffect * 0.9})`
    ctx.fill()

    ctx.restore()

    // Trail rendering removed for cleaner look
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const overlayCanvas = overlayCanvasRef.current
    if (!canvas || !overlayCanvas) return

    const ctx = canvas.getContext('2d')
    const overlayCtx = overlayCanvas.getContext('2d')
    if (!ctx || !overlayCtx) return

    const alignParticlesToSideStreams = (soft = false) => {
      const cardBounds = formationRef.current.cardBounds
      const hasCard = cardBounds.right > cardBounds.left
      const viewportWidth = canvas.width
      const leftLaneCenter = hasCard
        ? Math.max(120, cardBounds.left - 140)
        : viewportWidth * 0.28
      const rightLaneCenter = hasCard
        ? Math.min(viewportWidth - 120, cardBounds.right + 140)
        : viewportWidth * 0.72
      const laneSpread = Math.min(120, Math.max(70, viewportWidth * 0.08))

      formationRef.current.lanes = {
        left: leftLaneCenter,
        right: rightLaneCenter,
        spread: laneSpread
      }

      particlesRef.current.forEach((particle, index) => {
        particle.side = index < particlesRef.current.length / 2 ? 'left' : 'right'
        const laneCenter = particle.side === 'left'
          ? formationRef.current.lanes.left
          : formationRef.current.lanes.right

        if (!soft) {
          particle.x = laneCenter + (Math.random() - 0.5) * laneSpread
          particle.y = -Math.random() * 200 - 40
        }

        const desiredX = laneCenter + (Math.random() - 0.5) * (laneSpread * 0.6)
        particle.targetX = desiredX
        particle.originalX = desiredX
        particle.originalY = -Math.random() * 200 - 40
        particle.targetY = canvas.height + 120
        particle.isInFormation = false
        particle.formationProgress = 0
        particle.vx = 0
        particle.vy = Math.random() * 1.5 + 1.2
      })
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      overlayCanvas.width = window.innerWidth
      overlayCanvas.height = window.innerHeight

      // Update card bounds
      const cardElement = document.querySelector('[class*="developmentMessage"]')
      if (cardElement) {
        const rect = cardElement.getBoundingClientRect()
        formationRef.current.cardBounds = {
          left: rect.left,
          right: rect.right,
          top: rect.top,
          bottom: rect.bottom
        }
      }

      alignParticlesToSideStreams(true)

      const bounds = formationRef.current.cardBounds
      const hasCard = bounds.right > bounds.left
      const leftFormationX = hasCard
        ? bounds.left - 150
        : canvas.width * 0.25
      const rightFormationX = hasCard
        ? bounds.right + 150
        : canvas.width * 0.75
      const formationY = hasCard
        ? (bounds.top + bounds.bottom) / 2
        : canvas.height / 2

      formationRef.current.formations = createIconFormations(
        leftFormationX,
        rightFormationX,
        formationY
      )
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Initialize formations with proper positioning on sides
    const cardBounds = formationRef.current.cardBounds
    const hasCard = cardBounds.right > cardBounds.left
    const leftFormationX = hasCard
      ? cardBounds.left - 150
      : canvas.width * 0.25
    const rightFormationX = hasCard
      ? cardBounds.right + 150
      : canvas.width * 0.75
    const formationY = hasCard
      ? (cardBounds.top + cardBounds.bottom) / 2
      : canvas.height / 2

    formationRef.current.formations = createIconFormations(
      leftFormationX,
      rightFormationX,
      formationY
    )

    // Particle counts
    const counts = { low: 100, medium: 180, high: 250 }
    const particleCount = counts[intensity]

    // Color palette for professional look
    const colors = [
      '100, 200, 255', // Cyan
      '150, 100, 255', // Purple
      '255, 100, 200', // Pink
      '100, 255, 200', // Mint
      '255, 200, 100', // Gold
      '200, 150, 255'  // Lavender
    ]

    // Initialize particles
    particlesRef.current = Array.from({ length: particleCount }, (_, index) => {
      const side = index < particleCount / 2 ? 'left' : 'right'
      const cardBounds = formationRef.current.cardBounds

      // Position particles for reveal effect or normal rain
      let x: number
      let y: number

      if (enableReveal) {
        // For reveal: distribute particles across entire width
        x = Math.random() * canvas.width
        y = -Math.random() * 500 - 50 // Start well above screen
      } else {
        // For normal rain: position on sides of card
        if (side === 'left') {
          x = Math.random() * (cardBounds.left - 100) + 50
        } else {
          x = Math.random() * (canvas.width - cardBounds.right - 100) + cardBounds.right + 50
        }
        y = -Math.random() * canvas.height - 50
      }

      return {
        x,
        y,
        z: Math.random() * 10 + 1,
        vx: (Math.random() - 0.5) * 0.5,
        vy: Math.random() * 2 + 1, // Falling speed
        vz: 0,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        targetX: x,
        targetY: 0,
        targetZ: 5,
        originalX: x,
        originalY: -50,
        originalZ: Math.random() * 10 + 1,
        formationProgress: 0,
        isInFormation: false,
        side,
        rainDelay: Math.random() * 2,
        glowIntensity: 1,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        trail: [],
        rotationZ: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      }
    })

    if (!enableReveal) {
      alignParticlesToSideStreams()
    }

    const animate = () => {
      // Clear canvas completely each frame
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Handle reveal overlay
      if (revealRef.current.isRevealing) {
        const elapsed = Date.now() - revealRef.current.startTime
        const normalized = Math.min(elapsed / revealRef.current.duration, 1)
        const easedProgress = easeInOutSine(normalized)
        const revealHeight = canvas.height * easedProgress

        revealRef.current.progress = easedProgress
        revealRef.current.revealedHeight = revealHeight

        overlayCtx.setTransform(1, 0, 0, 1, 0, 0)
        overlayCtx.globalCompositeOperation = 'source-over'
        overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height)
        overlayCtx.fillStyle = 'rgba(0, 0, 0, 0.96)'
        overlayCtx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height)

        const waveAmplitude = 110
        const waveFrequency = 2.6
        const waveDiminish = 0.6 + 0.4 * (1 - easeOutCubic(normalized))
        const oscillation = timeRef.current * 10

        overlayCtx.save()
        overlayCtx.globalCompositeOperation = 'destination-out'
        overlayCtx.beginPath()
        overlayCtx.moveTo(0, 0)
        overlayCtx.lineTo(overlayCanvas.width, 0)
        for (let x = overlayCanvas.width; x >= 0; x -= overlayCanvas.width / 36) {
          const t = x / overlayCanvas.width
          const wave = Math.sin(t * Math.PI * waveFrequency + oscillation) * waveAmplitude * waveDiminish
          overlayCtx.lineTo(x, revealHeight + wave)
        }
        overlayCtx.closePath()
        overlayCtx.fillStyle = '#000'
        overlayCtx.fill()
        overlayCtx.restore()

        overlayCtx.save()
        overlayCtx.globalCompositeOperation = 'lighter'
        const glowGradient = overlayCtx.createLinearGradient(
          0,
          revealHeight - waveAmplitude * 0.8,
          0,
          revealHeight + waveAmplitude * 1.4
        )
        const glowPulse = 0.55 + Math.sin(timeRef.current * 6) * 0.25
        glowGradient.addColorStop(0.1, 'rgba(0, 0, 0, 0)')
        glowGradient.addColorStop(0.35, `rgba(90, 210, 255, ${0.35 * glowPulse})`)
        glowGradient.addColorStop(0.55, `rgba(200, 130, 255, ${0.45 * glowPulse})`)
        glowGradient.addColorStop(0.75, `rgba(255, 200, 220, ${0.28 * glowPulse})`)
        glowGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
        overlayCtx.fillStyle = glowGradient
        overlayCtx.fillRect(0, revealHeight - waveAmplitude, overlayCanvas.width, waveAmplitude * 2.2)
        overlayCtx.restore()

        if (normalized >= 1) {
          revealRef.current.isRevealing = false
          alignParticlesToSideStreams()
          formationRef.current.lastChange = Date.now()
          overlayCanvas.style.transition = 'opacity 1s ease-out'
          overlayCanvas.style.opacity = '0'
          setTimeout(() => {
            overlayCanvas.style.display = 'none'
          }, 1000)
        }
      }

      timeRef.current += 0.01
      const currentTime = Date.now()

      // Formation management (only after reveal is complete)
      if (!revealRef.current.isRevealing &&
          currentTime - formationRef.current.lastChange > formationRef.current.changeInterval) {
        formationRef.current.lastChange = currentTime
        formationRef.current.progress = 0

        // Cycle through formations alternating sides
        const leftFormations = ['code', 'rocket', 'cube']
        const rightFormations = ['design', 'brain']
        const formationSequence = ['rain', 'code', 'design', 'rocket', 'brain', 'cube']

        const currentIndex = formationSequence.indexOf(formationRef.current.currentFormation)
        const nextIndex = (currentIndex + 1) % formationSequence.length
        formationRef.current.currentFormation = formationSequence[nextIndex] as any

        if (formationRef.current.currentFormation !== 'rain') {
          const formation = formationRef.current.formations[formationRef.current.currentFormation]
          const isLeftFormation = leftFormations.includes(formationRef.current.currentFormation)

          if (formation) {
            // Split particles based on formation side
            const leftParticles = particlesRef.current.filter(p => p.side === 'left')
            const rightParticles = particlesRef.current.filter(p => p.side === 'right')

            // Use appropriate particles for the formation
            const targetParticles = isLeftFormation ? leftParticles : rightParticles
            const particlesPerPoint = Math.max(1, Math.floor(targetParticles.length / formation.length))

            targetParticles.forEach((particle, i) => {
              const pointIndex = Math.floor(i / particlesPerPoint)
              if (pointIndex < formation.length) {
                particle.targetX = formation[pointIndex].x + (Math.random() - 0.5) * 5
                particle.targetY = formation[pointIndex].y + (Math.random() - 0.5) * 5
                particle.targetZ = 3 + Math.random() * 2
                particle.isInFormation = true
                particle.formationProgress = 0
              }
            })

            // Keep other side particles in rain mode
            const otherParticles = isLeftFormation ? rightParticles : leftParticles
            otherParticles.forEach(particle => {
              particle.isInFormation = false
            })

            formationRef.current.active = true
          }
        } else {
          // Return to rain
          particlesRef.current.forEach(particle => {
            particle.isInFormation = false
            particle.targetX = particle.originalX
            particle.targetY = canvas.height + 100
            particle.formationProgress = 0
          })
          formationRef.current.active = false
        }
      }

      // Update formation progress
      if (formationRef.current.active) {
        formationRef.current.progress = Math.min(1, formationRef.current.progress + 0.01)
      }

      // Update particles
      particlesRef.current.forEach(particle => {
        // During reveal, particles fall straight down with higher speed
        if (revealRef.current.isRevealing) {
          particle.vy = 4 + Math.random() * 2 // Faster falling during reveal
          particle.vx *= 0.95 // Minimal horizontal movement
          particle.glowIntensity = 1.5 // Brighter during reveal

          // Reset particles that reach bottom during reveal
          if (particle.y > canvas.height + 50) {
            particle.y = -Math.random() * 200 - 50
            particle.x = Math.random() * canvas.width
            particle.vy = 4 + Math.random() * 2
          }
        } else if (particle.isInFormation && formationRef.current.active) {
          // Formation behavior (after reveal)
          const progress = formationRef.current.progress

          if (progress < 1) {
            // Move to formation
            const dx = particle.targetX - particle.x
            const dy = particle.targetY - particle.y
            const dz = particle.targetZ - particle.z

            particle.vx = dx * 0.05 * progress
            particle.vy = dy * 0.05 * progress
            particle.vz = dz * 0.05 * progress

            particle.glowIntensity = 1 + progress
          } else {
            // Hold position with floating
            particle.vx = Math.sin(timeRef.current * 2 + particle.pulsePhase) * 0.2
            particle.vy = Math.cos(timeRef.current * 2 + particle.pulsePhase) * 0.2
            particle.vz *= 0.95

            particle.glowIntensity = 1.1 + Math.sin(timeRef.current * 2) * 0.1
          }
        } else if (!revealRef.current.isRevealing) {
          const laneCenter = particle.side === 'left'
            ? formationRef.current.lanes.left || canvas.width * 0.28
            : formationRef.current.lanes.right || canvas.width * 0.72
          const laneSpread = formationRef.current.lanes.spread || 90
          const pull = laneCenter - particle.x

          particle.vx += pull * 0.015
          particle.vx += Math.sin((particle.y + timeRef.current * 120) * 0.015) * 0.05
          particle.vy = Math.min(particle.vy + 0.04, 6)
          particle.glowIntensity = 1.05 + Math.min(Math.abs(pull) * 0.02, 0.6)

          if (particle.y > canvas.height + 50) {
            particle.y = -Math.random() * 200 - 50
            particle.x = laneCenter + (Math.random() - 0.5) * laneSpread
            particle.vy = Math.random() * 1.5 + 1.2
            particle.originalX = particle.x
            particle.originalY = particle.y
          }
        }

        // Apply velocity
        particle.x += particle.vx
        particle.y += particle.vy
        particle.z += particle.vz

        // Dampening
        particle.vx *= 0.99
        particle.vy *= particle.isInFormation ? 0.95 : 0.999
        particle.vz *= 0.98

        // Update rotation
        particle.rotationZ += particle.rotationSpeed

        // Update pulse
        particle.pulsePhase += particle.pulseSpeed

        // Trail system disabled for cleaner appearance

        // Keep z in bounds
        if (particle.z < 1) particle.z = 1
        if (particle.z > 10) particle.z = 10
      })

      // Draw ambient effects on proper sides
      if (formationRef.current.active && formationRef.current.currentFormation !== 'rain') {
        const isLeftFormation = ['code', 'rocket', 'cube'].includes(formationRef.current.currentFormation)
        const glowX = isLeftFormation
          ? formationRef.current.cardBounds.left - 150
          : formationRef.current.cardBounds.right + 150
        const glowY = (formationRef.current.cardBounds.top + formationRef.current.cardBounds.bottom) / 2

        const ambientGlow = ctx.createRadialGradient(
          glowX, glowY, 0,
          glowX, glowY, 150
        )
        ambientGlow.addColorStop(0, `rgba(100, 200, 255, ${0.015 * formationRef.current.progress})`)
        ambientGlow.addColorStop(0.5, `rgba(150, 100, 255, ${0.008 * formationRef.current.progress})`)
        ambientGlow.addColorStop(1, 'rgba(100, 100, 200, 0)')
        ctx.fillStyle = ambientGlow
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // Sort and draw particles
      const sorted = [...particlesRef.current].sort((a, b) => b.z - a.z)
      sorted.forEach(particle => {
        const screenX = particle.x
        const screenY = particle.y
        drawParticle(ctx, particle, screenX, screenY)
      })

      animationIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [intensity, drawParticle])

  return (
    <>
      <canvas
        ref={overlayCanvasRef}
        className={`${styles.particleRevealOverlay} ${className || ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: enableReveal ? 1 : 0,
          display: enableReveal ? 'block' : 'none'
        }}
      />
      <canvas
        ref={canvasRef}
        className={`${styles.particleRain} ${className || ''}`}
      />
    </>
  )
}
