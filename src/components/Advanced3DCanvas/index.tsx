'use client'

import React, { useEffect, useRef, useCallback } from 'react'
import styles from './Advanced3DCanvas.module.css'

interface Particle3D {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  size: number
  opacity: number
  color: string
  rotationX: number
  rotationY: number
  rotationZ: number
  rotationSpeedX: number
  rotationSpeedY: number
  rotationSpeedZ: number
  shape: 'sphere' | 'cube' | 'tetrahedron' | 'diamond'
  pulsePhase: number
  pulseSpeed: number
  connectionStrength: number
  trail: Array<{ x: number; y: number; opacity: number }>
  // Formation system properties
  targetX: number
  targetY: number
  targetZ: number
  originalX: number
  originalY: number
  originalZ: number
  formationProgress: number
  isInFormation: boolean
}

interface Advanced3DCanvasProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
  showTextFormation?: boolean
}

// Formation patterns for different shapes
type FormationPattern = Array<{ x: number; y: number; z: number }>

const createFormationPatterns = (centerX: number, centerY: number): Record<string, FormationPattern> => {
  const patterns: Record<string, FormationPattern> = {}

  // 3D Cube formation with perfect geometry
  patterns.cube = []
  const cubeSize = 120
  const cubePoints = [
    // Front face corners
    [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
    // Back face corners
    [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
    // Edge midpoints for more definition
    [0, -1, -1], [0, 1, -1], [0, -1, 1], [0, 1, 1],
    [-1, 0, -1], [1, 0, -1], [-1, 0, 1], [1, 0, 1],
    [-1, -1, 0], [1, -1, 0], [1, 1, 0], [-1, 1, 0]
  ]
  
  for (let i = 0; i < 80; i++) {
    const point = cubePoints[i % cubePoints.length]
    const scale = 1 + (i / 80) * 0.5
    patterns.cube.push({
      x: centerX + point[0] * cubeSize * scale,
      y: centerY + point[1] * cubeSize * scale,
      z: 5 + point[2] * 2
    })
  }

  // Perfect circle/ring formation
  patterns.ring = []
  const ringRadius = 150
  const ringLayers = 3
  for (let layer = 0; layer < ringLayers; layer++) {
    const layerRadius = ringRadius * (0.8 + layer * 0.2)
    const particlesInLayer = Math.floor(80 / ringLayers)
    for (let i = 0; i < particlesInLayer; i++) {
      const angle = (i / particlesInLayer) * Math.PI * 2
      patterns.ring.push({
        x: centerX + Math.cos(angle) * layerRadius,
        y: centerY + Math.sin(angle) * layerRadius,
        z: 5 + Math.sin(angle * 2) * 2
      })
    }
  }

  // Double helix DNA formation
  patterns.helix = []
  const helixHeight = 300
  const helixRadius = 80
  for (let i = 0; i < 80; i++) {
    const t = i / 40
    const angle = t * Math.PI * 4
    const strand = i % 2
    patterns.helix.push({
      x: centerX + Math.cos(angle + strand * Math.PI) * helixRadius,
      y: centerY - helixHeight / 2 + t * helixHeight,
      z: 5 + Math.sin(angle) * 2
    })
  }

  // Pyramid formation
  patterns.pyramid = []
  const pyramidLevels = 5
  let particleIndex = 0
  for (let level = 0; level < pyramidLevels; level++) {
    const levelSize = (pyramidLevels - level) * 40
    const particlesInLevel = (pyramidLevels - level) * 4
    const y = centerY + level * 50 - 100
    
    for (let i = 0; i < particlesInLevel && particleIndex < 80; i++) {
      const angle = (i / particlesInLevel) * Math.PI * 2
      patterns.pyramid.push({
        x: centerX + Math.cos(angle) * levelSize,
        y: y,
        z: 3 + level * 1.5
      })
      particleIndex++
    }
  }

  // Heart shape formation
  patterns.heart = []
  for (let i = 0; i < 80; i++) {
    const t = (i / 80) * Math.PI * 2
    const x = 16 * Math.pow(Math.sin(t), 3)
    const y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))
    patterns.heart.push({
      x: centerX + x * 8,
      y: centerY + y * 8,
      z: 5 + Math.sin(t * 2) * 2
    })
  }

  // Infinity symbol formation
  patterns.infinity = []
  for (let i = 0; i < 80; i++) {
    const t = (i / 80) * Math.PI * 4
    const scale = 120
    patterns.infinity.push({
      x: centerX + (scale * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t)),
      y: centerY + (scale * Math.sin(t) * Math.cos(t)) / (1 + Math.sin(t) * Math.sin(t)),
      z: 5 + Math.sin(t) * 2
    })
  }

  // Grid matrix formation
  patterns.grid = []
  const gridSize = 8
  const gridSpacing = 40
  let gridIndex = 0
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize && gridIndex < 80; col++) {
      patterns.grid.push({
        x: centerX + (col - gridSize / 2) * gridSpacing,
        y: centerY + (row - gridSize / 2) * gridSpacing,
        z: 5 + Math.sin(row * 0.5 + col * 0.5) * 2
      })
      gridIndex++
    }
  }

  // Spiral galaxy formation
  patterns.galaxy = []
  for (let i = 0; i < 80; i++) {
    const angle = (i / 80) * Math.PI * 6
    const radius = 20 + (i / 80) * 150
    patterns.galaxy.push({
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius,
      z: 5 + (i / 80) * 4
    })
  }

  return patterns
}

export const Advanced3DCanvas: React.FC<Advanced3DCanvasProps> = ({
  className,
  intensity = 'high',
  showTextFormation = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle3D[]>([])
  const animationIdRef = useRef<number | undefined>(undefined)
  const mouseRef = useRef({ x: 0, y: 0 })
  const timeRef = useRef(0)
  const isLowPowerDevice = useRef(false)
  const lastMouseUpdate = useRef(0)
  const textFormationRef = useRef({
    active: false,
    progress: 0,
    positions: [] as Array<{x: number, y: number}>,
    targetText: 'UNICTAVA',
    centerY: 0,
    lastToggle: 0,
    holdDuration: 8000,
    transitionDuration: 3000
  })
  const mouseInteractionRef = useRef({
    isAttracting: false,
    repelStrength: 0,
    lastClickTime: 0
  })

  // Enhanced shape drawing with more complex geometry and effects
  const drawShape = useCallback((
    ctx: CanvasRenderingContext2D,
    particle: Particle3D,
    screenX: number,
    screenY: number,
    size: number,
    opacity: number
  ) => {
    ctx.save()
    ctx.translate(screenX, screenY)

    // Enhanced gradient with better glow
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2.2)
    const mainColor = particle.color
    const pulseEffect = Math.sin(particle.pulsePhase) * 0.2 + 0.85
    const depthGlow = Math.max(0.4, 1 - particle.z / 12)

    // Brighter gradient with nice glow
    gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * pulseEffect * 0.8})`)
    gradient.addColorStop(0.15, `rgba(${mainColor}, ${opacity * pulseEffect * depthGlow})`)
    gradient.addColorStop(0.5, `rgba(${mainColor}, ${opacity * 0.6 * depthGlow})`)
    gradient.addColorStop(0.8, `rgba(${mainColor}, ${opacity * 0.2 * depthGlow})`)
    gradient.addColorStop(1, `rgba(${mainColor}, 0)`)

    // Apply gentle rotation
    ctx.rotate(particle.rotationZ)

    switch (particle.shape) {
      case 'sphere':
        // Enhanced glowing sphere
        // Outer glow
        ctx.beginPath()
        ctx.arc(0, 0, size * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Middle layer
        const middleGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size)
        middleGradient.addColorStop(0, `rgba(${mainColor}, ${opacity * pulseEffect})`)
        middleGradient.addColorStop(1, `rgba(${mainColor}, ${opacity * 0.3})`)
        ctx.beginPath()
        ctx.arc(0, 0, size, 0, Math.PI * 2)
        ctx.fillStyle = middleGradient
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(0, 0, size * 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * pulseEffect * 0.6})`
        ctx.fill()

        // Highlight
        ctx.beginPath()
        ctx.arc(size * 0.3, -size * 0.3, size * 0.2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.8})`
        ctx.fill()
        break

      case 'cube':
        // Simple cube
        const cubeSize = size * 0.9

        ctx.fillStyle = gradient
        ctx.fillRect(-cubeSize, -cubeSize, cubeSize * 2, cubeSize * 2)

        // Simple edge
        ctx.strokeStyle = `rgba(${mainColor}, ${opacity * 0.5})`
        ctx.lineWidth = 1
        ctx.strokeRect(-cubeSize, -cubeSize, cubeSize * 2, cubeSize * 2)
        break

      case 'tetrahedron':
        // Simple triangle
        const tetraSize = size

        ctx.beginPath()
        ctx.moveTo(0, -tetraSize)
        ctx.lineTo(-tetraSize * 0.866, tetraSize * 0.5)
        ctx.lineTo(tetraSize * 0.866, tetraSize * 0.5)
        ctx.closePath()

        ctx.fillStyle = gradient
        ctx.fill()
        break

      case 'diamond':
        // Simple diamond shape
        const diamondSize = size

        ctx.beginPath()
        ctx.moveTo(0, -diamondSize)
        ctx.lineTo(-diamondSize * 0.7, 0)
        ctx.lineTo(0, diamondSize)
        ctx.lineTo(diamondSize * 0.7, 0)
        ctx.closePath()

        ctx.fillStyle = gradient
        ctx.fill()
        break
    }

    ctx.restore()
  }, [])

  // Balanced connection drawing
  const drawConnection = useCallback((
    ctx: CanvasRenderingContext2D,
    x1: number, y1: number,
    x2: number, y2: number,
    opacity: number,
    distance: number,
    particle1: Particle3D,
    particle2: Particle3D
  ) => {
    const maxDistance = 100
    const connectionOpacity = Math.max(0, (maxDistance - distance) / maxDistance) * opacity * 0.15

    if (connectionOpacity < 0.03) return

    // Soft glowing line
    const gradient = ctx.createLinearGradient(x1, y1, x2, y2)
    gradient.addColorStop(0, `rgba(150, 146, 230, ${connectionOpacity})`)
    gradient.addColorStop(0.5, `rgba(200, 197, 255, ${connectionOpacity * 1.2})`)
    gradient.addColorStop(1, `rgba(150, 146, 230, ${connectionOpacity})`)

    ctx.strokeStyle = gradient
    ctx.lineWidth = Math.max(0.5, connectionOpacity * 4)
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      if (now - lastMouseUpdate.current < 16) return // 60fps throttle

      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      lastMouseUpdate.current = now

      // Activate attraction on mouse movement
      mouseInteractionRef.current.isAttracting = true
    }

    const handleMouseClick = (e: MouseEvent) => {
      mouseInteractionRef.current.lastClickTime = Date.now()
      mouseInteractionRef.current.repelStrength = 1

      // Create ripple effect from click point
      particlesRef.current.forEach(particle => {
        const dx = particle.x - e.clientX
        const dy = particle.y - e.clientY
        const distance = Math.sqrt(dx * dx + dy * dy)
        if (distance < 300) {
          const force = (300 - distance) / 300
          particle.vx += (dx / distance) * force * 5
          particle.vy += (dy / distance) * force * 5
        }
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('click', handleMouseClick)

    // Initialize text formation positions if needed
    if (showTextFormation) {
      const createTextPositions = () => {
        const text = 'UNICTAVA'
        const positions: Array<{x: number, y: number}> = []
        const fontSize = 60
        const letterSpacing = fontSize * 0.8
        const startX = (canvas.width - text.length * letterSpacing) / 2

        // Get vertical position based on card location
        const cardElement = document.querySelector('[class*="developmentMessage"]')
        const cardBottom = cardElement ? cardElement.getBoundingClientRect().bottom : canvas.height * 0.6
        const formationY = cardBottom + 100

        textFormationRef.current.centerY = formationY

        // Create letter formations
        const letterPoints: Record<string, Array<{x: number, y: number}>> = {
          'U': [
            {x: 0, y: 0}, {x: 0, y: 20}, {x: 0, y: 40}, {x: 0, y: 60},
            {x: 10, y: 70}, {x: 20, y: 70}, {x: 30, y: 70},
            {x: 40, y: 60}, {x: 40, y: 40}, {x: 40, y: 20}, {x: 40, y: 0}
          ],
          'N': [
            {x: 0, y: 0}, {x: 0, y: 20}, {x: 0, y: 40}, {x: 0, y: 60}, {x: 0, y: 70},
            {x: 10, y: 20}, {x: 20, y: 40}, {x: 30, y: 60},
            {x: 40, y: 0}, {x: 40, y: 20}, {x: 40, y: 40}, {x: 40, y: 60}, {x: 40, y: 70}
          ],
          'I': [
            {x: 0, y: 0}, {x: 10, y: 0}, {x: 20, y: 0}, {x: 30, y: 0}, {x: 40, y: 0},
            {x: 20, y: 20}, {x: 20, y: 40}, {x: 20, y: 60},
            {x: 0, y: 70}, {x: 10, y: 70}, {x: 20, y: 70}, {x: 30, y: 70}, {x: 40, y: 70}
          ],
          'C': [
            {x: 10, y: 0}, {x: 20, y: 0}, {x: 30, y: 0}, {x: 40, y: 10},
            {x: 0, y: 10}, {x: 0, y: 20}, {x: 0, y: 40}, {x: 0, y: 50}, {x: 0, y: 60},
            {x: 10, y: 70}, {x: 20, y: 70}, {x: 30, y: 70}, {x: 40, y: 60}
          ],
          'T': [
            {x: 0, y: 0}, {x: 10, y: 0}, {x: 20, y: 0}, {x: 30, y: 0}, {x: 40, y: 0},
            {x: 20, y: 20}, {x: 20, y: 30}, {x: 20, y: 40}, {x: 20, y: 50}, {x: 20, y: 60}, {x: 20, y: 70}
          ],
          'A': [
            {x: 20, y: 0}, {x: 10, y: 20}, {x: 30, y: 20},
            {x: 5, y: 40}, {x: 35, y: 40},
            {x: 0, y: 60}, {x: 15, y: 50}, {x: 25, y: 50}, {x: 40, y: 60},
            {x: 0, y: 70}, {x: 40, y: 70}
          ],
          'V': [
            {x: 0, y: 0}, {x: 0, y: 10}, {x: 5, y: 30}, {x: 10, y: 50},
            {x: 15, y: 60}, {x: 20, y: 70},
            {x: 25, y: 60}, {x: 30, y: 50}, {x: 35, y: 30}, {x: 40, y: 10}, {x: 40, y: 0}
          ]
        }

        // Generate positions for each letter
        text.split('').forEach((letter, letterIndex) => {
          const letterX = startX + letterIndex * letterSpacing
          const points = letterPoints[letter] || []

          points.forEach(point => {
            positions.push({
              x: letterX + point.x,
              y: formationY + point.y - 35
            })
          })
        })

        return positions
      }

      textFormationRef.current.positions = createTextPositions()
    }

    // Detect low power device
    isLowPowerDevice.current = window.navigator.hardwareConcurrency <= 4 ||
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    // Balanced particle count for text formation
    const baseCounts = { low: 60, medium: 100, high: 140 }
    const mobileCounts = { low: 40, medium: 60, high: 80 }
    const particleCounts = isLowPowerDevice.current ? mobileCounts : baseCounts
    const particleCount = particleCounts[intensity]

    const shapes: Particle3D['shape'][] = ['sphere', 'cube', 'tetrahedron', 'diamond']
    const colors = [
      '96, 92, 207',    // Primary purple
      '150, 146, 230',  // Light purple
      '67, 64, 147',    // Dark purple
      '200, 197, 255',  // Very light purple
      '120, 116, 180',  // Medium purple
      '255, 100, 255',  // Magenta
      '100, 200, 255'   // Cyan
    ]

    particlesRef.current = Array.from({ length: particleCount }, () => {
      const z = Math.random() * 12 + 1
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      return {
        x,
        y,
        z,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 4 + 2,
        opacity: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotationX: Math.random() * Math.PI * 2,
        rotationY: Math.random() * Math.PI * 2,
        rotationZ: Math.random() * Math.PI * 2,
        rotationSpeedX: (Math.random() - 0.5) * 0.008,
        rotationSpeedY: (Math.random() - 0.5) * 0.008,
        rotationSpeedZ: (Math.random() - 0.5) * 0.008,
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.015 + 0.01,
        connectionStrength: Math.random() * 0.7 + 0.5,
        trail: [],
        // Formation properties
        targetX: x,
        targetY: y,
        targetZ: z,
        originalX: x,
        originalY: y,
        originalZ: z,
        formationProgress: 0,
        isInFormation: false
      }
    })

    const animate = () => {
      // Optimal fade for smooth trails
      ctx.fillStyle = 'rgba(10, 10, 10, 0.09)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Balanced animation timing
      timeRef.current += 0.001

      // Text formation management
      const currentTime = Date.now()
      const textFormation = textFormationRef.current

      if (showTextFormation && textFormation.positions.length > 0) {
        // Toggle between formation and free movement
        if (currentTime - textFormation.lastToggle > textFormation.holdDuration + textFormation.transitionDuration) {
          textFormation.active = !textFormation.active
          textFormation.lastToggle = currentTime
          textFormation.progress = 0

          if (textFormation.active) {
            // Assign particles to text positions
            const particlesPerPosition = Math.max(1, Math.floor(particlesRef.current.length / textFormation.positions.length))

            particlesRef.current.forEach((particle, index) => {
              const posIndex = Math.floor(index / particlesPerPosition)
              if (posIndex < textFormation.positions.length) {
                const target = textFormation.positions[posIndex]
                particle.targetX = target.x + (Math.random() - 0.5) * 10
                particle.targetY = target.y + (Math.random() - 0.5) * 10
                particle.targetZ = 5 + Math.random() * 3
                particle.isInFormation = true
              }
            })
          } else {
            // Release particles to free movement
            particlesRef.current.forEach(particle => {
              particle.isInFormation = false
              particle.targetX = particle.originalX
              particle.targetY = particle.originalY
              particle.targetZ = particle.originalZ
            })
          }
        }

        // Update formation progress
        if (textFormation.active && textFormation.progress < 1) {
          textFormation.progress = Math.min(1, textFormation.progress + 0.02)
        }
      }

      // Gentle mouse interaction
      const mouseForce = 0.0002
      const magneticRange = 200

      // Update particles with formation and physics
      particlesRef.current.forEach((particle, index) => {
        // Handle text formation movement
        if (showTextFormation && particle.isInFormation && textFormation.active) {
          const progress = textFormation.progress
          const easeProgress = progress * progress * (3 - 2 * progress) // Smooth ease

          if (progress < 1) {
            // Move towards formation
            const dx = particle.targetX - particle.x
            const dy = particle.targetY - particle.y
            const dz = particle.targetZ - particle.z

            particle.vx = dx * 0.05 * easeProgress
            particle.vy = dy * 0.05 * easeProgress
            particle.vz = dz * 0.05 * easeProgress
          } else {
            // Hold position with slight floating
            const floatX = Math.sin(timeRef.current * 2 + index) * 0.05
            const floatY = Math.cos(timeRef.current * 2 + index) * 0.05

            particle.vx = (particle.targetX - particle.x) * 0.1 + floatX
            particle.vy = (particle.targetY - particle.y) * 0.1 + floatY
            particle.vz *= 0.95
          }
        } else {
        // Professional mouse interaction
        const dx = mouseRef.current.x - particle.x
        const dy = mouseRef.current.y - particle.y
        const mouseDistance = Math.sqrt(dx * dx + dy * dy)

        // Dynamic interaction based on click
        const timeSinceClick = Date.now() - mouseInteractionRef.current.lastClickTime
        const isRippling = timeSinceClick < 2000

        if (mouseDistance < magneticRange) {
          const angle = Math.atan2(dy, dx)

          if (mouseInteractionRef.current.isAttracting && !isRippling) {
            // Subtle attraction towards mouse
            const force = (magneticRange - mouseDistance) * mouseForce * 0.4
            particle.vx += Math.cos(angle) * force
            particle.vy += Math.sin(angle) * force

            // Elegant orbital motion
            const orbitalForce = force * 0.2
            particle.vx += -Math.sin(angle + timeRef.current) * orbitalForce
            particle.vy += Math.cos(angle + timeRef.current) * orbitalForce
          }
        }

        // Balanced ambient field forces
        if (!particle.isInFormation || !textFormation.active) {
          const turbulence = 0.008
          const fieldX = Math.sin(timeRef.current + particle.y * 0.002) * turbulence
          const fieldY = Math.cos(timeRef.current + particle.x * 0.002) * turbulence
          const fieldZ = Math.sin(timeRef.current * 0.15) * 0.003

          particle.vx += fieldX
          particle.vy += fieldY
          particle.vz += fieldZ
        }
        } // Close else block from formation handling

        // Apply velocity with enhanced dampening
        particle.x += particle.vx
        particle.y += particle.vy
        particle.z += particle.vz

        // Dynamic dampening based on state
        const dampen = particle.isInFormation && textFormation.active ? 0.92 : 0.975
        particle.vx *= dampen
        particle.vy *= dampen
        particle.vz *= dampen

        // Smooth balanced rotations
        particle.rotationX += particle.rotationSpeedX * 0.2
        particle.rotationY += particle.rotationSpeedY * 0.2
        particle.rotationZ += particle.rotationSpeedZ * 0.2

        // Professional pulse effect
        particle.pulsePhase += particle.pulseSpeed

        // Smooth boundary wrapping
        if (particle.x < -80) particle.x = canvas.width + 80
        if (particle.x > canvas.width + 80) particle.x = -80
        if (particle.y < -80) particle.y = canvas.height + 80
        if (particle.y > canvas.height + 80) particle.y = -80

        if (particle.z < 0.5) particle.z = 12
        if (particle.z > 12) particle.z = 0.5

        // Minimal trail system
        if (intensity === 'high' && !isLowPowerDevice.current) {
          particle.trail.unshift({ x: particle.x, y: particle.y, opacity: 1 })
          if (particle.trail.length > 3) particle.trail.pop()
          particle.trail.forEach((point, i) => {
            point.opacity *= 0.7
          })
        }
      })

      // Balanced connection system
      if (intensity !== 'low' && !isLowPowerDevice.current) {
        const maxConnections = 12
        let connectionCount = 0

        for (let i = 0; i < particlesRef.current.length && connectionCount < maxConnections; i++) {
          const particle = particlesRef.current[i]
          const screenPos = {
            x: particle.x + (particle.z - 6) * 15,
            y: particle.y + (particle.z - 6) * 8
          }

          for (let j = i + 1; j < particlesRef.current.length && connectionCount < maxConnections; j++) {
            const otherParticle = particlesRef.current[j]
            const otherScreenPos = {
              x: otherParticle.x + (otherParticle.z - 6) * 15,
              y: otherParticle.y + (otherParticle.z - 6) * 8
            }

            const distance = Math.sqrt(
              Math.pow(screenPos.x - otherScreenPos.x, 2) +
              Math.pow(screenPos.y - otherScreenPos.y, 2)
            )

            if (distance < 80) {
              drawConnection(
                ctx,
                screenPos.x, screenPos.y,
                otherScreenPos.x, otherScreenPos.y,
                Math.min(particle.opacity, otherParticle.opacity),
                distance,
                particle,
                otherParticle
              )
              connectionCount++
            }
          }
        }
      }

      // Minimal trail rendering
      if (intensity === 'high' && !isLowPowerDevice.current) {
        const visibleParticles = particlesRef.current.filter(p =>
          p.x > -50 && p.x < canvas.width + 50 &&
          p.y > -50 && p.y < canvas.height + 50
        )

        visibleParticles.forEach(particle => {
          particle.trail.slice(0, 2).forEach((point, i) => {
            if (point.opacity > 0.3) {
              const trailSize = (particle.size / particle.z) * (point.opacity * 0.2)

              ctx.beginPath()
              ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2)
              ctx.fillStyle = `rgba(${particle.color}, ${point.opacity * 0.1})`
              ctx.fill()
            }
          })
        })
      }

      // Balanced ambient glow
      const glowGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      )
      glowGradient.addColorStop(0, `rgba(96, 92, 207, 0.015)`)
      glowGradient.addColorStop(0.5, `rgba(150, 146, 230, 0.008)`)
      glowGradient.addColorStop(1, `rgba(96, 92, 207, 0)`)
      ctx.fillStyle = glowGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Extra glow during text formation
      if (showTextFormation && textFormation.active && textFormation.progress > 0.5) {
        const formationGlow = ctx.createRadialGradient(
          canvas.width / 2, textFormation.centerY, 0,
          canvas.width / 2, textFormation.centerY, 400
        )
        formationGlow.addColorStop(0, `rgba(200, 197, 255, ${0.03 * textFormation.progress})`)
        formationGlow.addColorStop(0.5, `rgba(150, 146, 230, ${0.02 * textFormation.progress})`)
        formationGlow.addColorStop(1, `rgba(96, 92, 207, 0)`)
        ctx.fillStyle = formationGlow
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      }

      // Render particles with enhanced depth sorting and effects
      const sortedParticles = [...particlesRef.current].sort((a, b) => b.z - a.z)

      sortedParticles.forEach(particle => {
        const depthFactor = 18 / particle.z
        const screenX = particle.x + (particle.z - 6) * 20
        const screenY = particle.y + (particle.z - 6) * 10
        // Professional size and opacity
        const finalSize = particle.size * depthFactor
        const finalOpacity = particle.opacity * Math.min(1, depthFactor * 0.95)

        if (finalOpacity > 0.05 && screenX > -150 && screenX < canvas.width + 150 &&
            screenY > -150 && screenY < canvas.height + 150) {
          drawShape(ctx, particle, screenX, screenY, finalSize, finalOpacity)
        }
      })

      // Professional edge vignette
      const vignetteGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, Math.min(canvas.width, canvas.height) * 0.4,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      )
      vignetteGradient.addColorStop(0, `rgba(10, 10, 10, 0)`)
      vignetteGradient.addColorStop(0.7, `rgba(10, 10, 10, 0.1)`)
      vignetteGradient.addColorStop(1, `rgba(10, 10, 10, 0.3)`)
      ctx.fillStyle = vignetteGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Use setTimeout for lower-priority devices to maintain 30fps
      if (isLowPowerDevice.current) {
        animationIdRef.current = window.setTimeout(() => {
          animationIdRef.current = requestAnimationFrame(animate)
        }, 33) // ~30fps
      } else {
        animationIdRef.current = requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('click', handleMouseClick)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [intensity, drawShape, drawConnection])

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.advanced3DCanvas} ${className || ''}`}
      data-intensity={intensity}
    />
  )
}