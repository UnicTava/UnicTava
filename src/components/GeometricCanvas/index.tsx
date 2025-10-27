'use client'

import React, { useEffect, useRef } from 'react'
import styles from './GeometricCanvas.module.css'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  targetX: number
  targetY: number
  angle: number
  orbitRadius: number
  orbitSpeed: number
  pulsePhase: number
  color: string
  index: number
  baseAngle: number
  trail: { x: number; y: number; opacity: number }[]
  energy: number
  hue: number
}

interface Connection {
  nodeA: Node
  nodeB: Node
  strength: number
}

type FormationType = 'circle' | 'hexagon' | 'spiral' | 'wave' | 'triangle' | 'infinity' | 'star' |
  'dna' | 'grid' | 'flower' | 'heart' | 'diamond' | 'cross' | 'butterfly' | 'figure8'

export const GeometricCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const connectionsRef = useRef<Connection[]>([])
  const animationIdRef = useRef<number | undefined>(undefined)
  const mouseRef = useRef({ x: 0, y: 0 })
  const formationRef = useRef<FormationType>('circle')
  const formationProgressRef = useRef(0)
  const nextFormationRef = useRef<FormationType>('hexagon')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Initialize geometric nodes
    const nodeCount = 120 // Reduced for cleaner appearance with thin lines
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    nodesRef.current = Array.from({ length: nodeCount }, (_, i) => {
      const angle = (i / nodeCount) * Math.PI * 2
      const distance = Math.random() * Math.min(canvas.width, canvas.height) * 0.4
      const orbitRadius = distance
      const hue = (i / nodeCount) * 60 + 250 // Purple to blue range

      return {
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        vx: 0,
        vy: 0,
        radius: Math.random() * 0.8 + 0.4, // Smaller nodes for thinner appearance
        targetX: centerX,
        targetY: centerY,
        angle: angle,
        orbitRadius: orbitRadius,
        orbitSpeed: Math.random() * 0.005 + 0.001,
        pulsePhase: Math.random() * Math.PI * 2,
        color: Math.random() > 0.5 ? '147, 51, 234' : '96, 92, 207',
        index: i,
        baseAngle: angle,
        trail: [],
        energy: 1,
        hue: hue
      }
    })

    // Formation calculation functions
    const getFormationPosition = (
      formation: FormationType,
      index: number,
      total: number,
      time: number
    ) => {
      const t = index / total
      const radius = Math.min(canvas.width, canvas.height) * 0.35

      switch (formation) {
        case 'circle':
          const circleAngle = t * Math.PI * 2
          return {
            x: centerX + Math.cos(circleAngle) * radius,
            y: centerY + Math.sin(circleAngle) * radius
          }

        case 'hexagon':
          const side = Math.floor(index / (total / 6))
          const sideProgress = (index % (total / 6)) / (total / 6)
          const hexAngle = (side * Math.PI) / 3
          const nextHexAngle = ((side + 1) * Math.PI) / 3
          return {
            x: centerX + Math.cos(hexAngle + sideProgress * (nextHexAngle - hexAngle)) * radius,
            y: centerY + Math.sin(hexAngle + sideProgress * (nextHexAngle - hexAngle)) * radius
          }

        case 'spiral':
          const spiralAngle = t * Math.PI * 8
          const spiralRadius = radius * t
          return {
            x: centerX + Math.cos(spiralAngle) * spiralRadius,
            y: centerY + Math.sin(spiralAngle) * spiralRadius
          }

        case 'wave':
          const waveX = (t - 0.5) * canvas.width * 0.8
          const waveY = Math.sin(t * Math.PI * 4 + time * 2) * radius * 0.5
          return {
            x: centerX + waveX,
            y: centerY + waveY
          }

        case 'triangle':
          const triSide = Math.floor(t * 3)
          const triProgress = (t * 3) % 1
          const points = [
            { x: centerX, y: centerY - radius },
            { x: centerX - radius * 0.866, y: centerY + radius * 0.5 },
            { x: centerX + radius * 0.866, y: centerY + radius * 0.5 }
          ]
          const start = points[triSide]
          const end = points[(triSide + 1) % 3]
          return {
            x: start.x + (end.x - start.x) * triProgress,
            y: start.y + (end.y - start.y) * triProgress
          }

        case 'infinity':
          const infAngle = t * Math.PI * 2
          const scale = radius * 0.8
          return {
            x: centerX + (scale * 2 * Math.cos(infAngle)) / (1 + Math.sin(infAngle) * Math.sin(infAngle)),
            y: centerY + (scale * Math.sin(infAngle) * Math.cos(infAngle)) / (1 + Math.sin(infAngle) * Math.sin(infAngle))
          }

        case 'star':
          const starPoints = 5
          const starAngle = t * Math.PI * 2 * starPoints
          const starRadius = (index % 2 === 0) ? radius : radius * 0.5
          return {
            x: centerX + Math.cos(starAngle) * starRadius,
            y: centerY + Math.sin(starAngle) * starRadius
          }

        case 'dna':
          const dnaAngle = t * Math.PI * 4
          const dnaRadius = radius * 0.5
          const helixOffset = Math.sin(dnaAngle) * dnaRadius
          return {
            x: centerX + helixOffset,
            y: centerY + (t - 0.5) * canvas.height * 0.6
          }

        case 'grid':
          const gridSize = 10
          const gridX = Math.floor(t * gridSize) % gridSize
          const gridY = Math.floor((t * gridSize) / gridSize)
          const cellSize = radius * 2 / gridSize
          return {
            x: centerX - radius + gridX * cellSize + cellSize/2,
            y: centerY - radius + gridY * cellSize + cellSize/2
          }

        case 'flower':
          const petals = 6
          const petalAngle = t * Math.PI * 2
          const petalRadius = radius * (0.5 + 0.5 * Math.sin(petalAngle * petals))
          return {
            x: centerX + Math.cos(petalAngle) * petalRadius,
            y: centerY + Math.sin(petalAngle) * petalRadius
          }

        case 'heart':
          const heartT = t * Math.PI * 2
          const heartScale = radius * 0.03
          return {
            x: centerX + heartScale * 16 * Math.pow(Math.sin(heartT), 3),
            y: centerY - heartScale * (13 * Math.cos(heartT) - 5 * Math.cos(2 * heartT) -
                2 * Math.cos(3 * heartT) - Math.cos(4 * heartT))
          }

        case 'diamond':
          const diamondProgress = t * 4
          const diamondSide = Math.floor(diamondProgress)
          const diamondSideProgress = diamondProgress % 1
          const diamondPoints = [
            { x: centerX, y: centerY - radius },
            { x: centerX + radius * 0.7, y: centerY },
            { x: centerX, y: centerY + radius },
            { x: centerX - radius * 0.7, y: centerY }
          ]
          const dStart = diamondPoints[diamondSide % 4]
          const dEnd = diamondPoints[(diamondSide + 1) % 4]
          return {
            x: dStart.x + (dEnd.x - dStart.x) * diamondSideProgress,
            y: dStart.y + (dEnd.y - dStart.y) * diamondSideProgress
          }

        case 'cross':
          const crossArm = Math.floor(t * 4)
          const armProgress = (t * 4) % 1
          const crossLength = radius * 0.8
          const arms = [
            { sx: centerX, sy: centerY, ex: centerX, ey: centerY - crossLength },
            { sx: centerX, sy: centerY, ex: centerX + crossLength, ey: centerY },
            { sx: centerX, sy: centerY, ex: centerX, ey: centerY + crossLength },
            { sx: centerX, sy: centerY, ex: centerX - crossLength, ey: centerY }
          ]
          const arm = arms[crossArm % 4]
          return {
            x: arm.sx + (arm.ex - arm.sx) * armProgress,
            y: arm.sy + (arm.ey - arm.sy) * armProgress
          }

        case 'butterfly':
          const butterflyT = t * Math.PI * 2
          const butterflyScale = radius * 0.15
          const butterflyExp = Math.exp(Math.cos(butterflyT)) - 2 * Math.cos(4 * butterflyT) -
                               Math.pow(Math.sin(butterflyT / 12), 5)
          return {
            x: centerX + butterflyScale * Math.sin(butterflyT) * butterflyExp,
            y: centerY - butterflyScale * Math.cos(butterflyT) * butterflyExp
          }

        case 'figure8':
          const fig8Angle = t * Math.PI * 2
          const fig8Scale = radius * 0.7
          return {
            x: centerX + fig8Scale * Math.sin(fig8Angle),
            y: centerY + fig8Scale * Math.sin(fig8Angle * 2) * 0.5
          }

        default:
          return { x: centerX, y: centerY }
      }
    }

    // Formation sequence - all shapes in rotation
    const formations: FormationType[] = [
      'circle', 'hexagon', 'spiral', 'wave', 'triangle', 'infinity', 'star',
      'dna', 'grid', 'flower', 'heart', 'diamond', 'cross', 'butterfly', 'figure8'
    ]
    let currentFormationIndex = 0

    // Create connections between nearby nodes
    const updateConnections = () => {
      connectionsRef.current = []
      const maxDistance = 80 // Reduced connection distance for cleaner appearance

      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const nodeA = nodesRef.current[i]
          const nodeB = nodesRef.current[j]
          const dx = nodeA.x - nodeB.x
          const dy = nodeA.y - nodeB.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            connectionsRef.current.push({
              nodeA,
              nodeB,
              strength: 1 - (distance / maxDistance)
            })
          }
        }
      }
    }

    // Animation loop with 60fps optimization
    let time = 0
    let lastTime = performance.now()
    const targetFPS = 60
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime: number = performance.now()) => {
      animationIdRef.current = requestAnimationFrame(animate)

      // Frame rate limiting for consistent 60fps
      const deltaTime = currentTime - lastTime
      if (deltaTime < frameInterval) return

      // Adjust for any frame drops
      lastTime = currentTime - (deltaTime % frameInterval)

      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      time += 0.01

      // Update formation transition
      formationProgressRef.current += 0.002
      if (formationProgressRef.current >= 1) {
        formationProgressRef.current = 0
        formationRef.current = nextFormationRef.current
        currentFormationIndex = (currentFormationIndex + 1) % formations.length
        nextFormationRef.current = formations[(currentFormationIndex + 1) % formations.length]
      }

      // Update nodes
      nodesRef.current.forEach((node) => {
        // Get current and next formation positions
        const currentPos = getFormationPosition(
          formationRef.current,
          node.index,
          nodesRef.current.length,
          time
        )
        const nextPos = getFormationPosition(
          nextFormationRef.current,
          node.index,
          nodesRef.current.length,
          time
        )

        // Smooth transition between formations
        const progress = formationProgressRef.current
        const smoothProgress = progress * progress * (3 - 2 * progress) // Smooth step

        node.targetX = currentPos.x + (nextPos.x - currentPos.x) * smoothProgress
        node.targetY = currentPos.y + (nextPos.y - currentPos.y) * smoothProgress

        // Add rotation effect
        node.angle += node.orbitSpeed

        // Mouse influence
        const mouseDistance = Math.sqrt(
          Math.pow(mouseRef.current.x - node.x, 2) +
          Math.pow(mouseRef.current.y - node.y, 2)
        )

        if (mouseDistance < 200) {
          const repelStrength = (1 - mouseDistance / 200) * 30
          const angle = Math.atan2(
            node.y - mouseRef.current.y,
            node.x - mouseRef.current.x
          )
          node.vx += Math.cos(angle) * repelStrength * 0.01
          node.vy += Math.sin(angle) * repelStrength * 0.01
        }

        // Smooth movement to target
        const dx = node.targetX - node.x
        const dy = node.targetY - node.y

        node.vx += dx * 0.02
        node.vy += dy * 0.02

        // Apply physics
        node.vx *= 0.92
        node.vy *= 0.92

        node.x += node.vx
        node.y += node.vy

        // Pulse effect
        node.pulsePhase += 0.02

        // Update energy based on movement
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy)
        node.energy = Math.min(2, node.energy * 0.98 + speed * 0.05)

        // Update trail
        node.trail.push({ x: node.x, y: node.y, opacity: 1 })
        if (node.trail.length > 10) {
          node.trail.shift()
        }
        node.trail.forEach((point, i) => {
          point.opacity *= 0.9
        })

        // Dynamic color shift
        node.hue += 0.2
        if (node.hue > 310) node.hue = 250
      })

      // Update connections
      updateConnections()

      // Draw energy connections with gradient
      connectionsRef.current.forEach((connection) => {
        const gradient = ctx.createLinearGradient(
          connection.nodeA.x, connection.nodeA.y,
          connection.nodeB.x, connection.nodeB.y
        )
        const avgEnergy = (connection.nodeA.energy + connection.nodeB.energy) / 2

        gradient.addColorStop(0, `hsla(${connection.nodeA.hue}, 100%, 60%, ${connection.strength * 0.4 * avgEnergy})`)
        gradient.addColorStop(0.5, `hsla(280, 100%, 70%, ${connection.strength * 0.6 * avgEnergy})`)
        gradient.addColorStop(1, `hsla(${connection.nodeB.hue}, 100%, 60%, ${connection.strength * 0.4 * avgEnergy})`)

        ctx.beginPath()
        ctx.moveTo(connection.nodeA.x, connection.nodeA.y)
        ctx.lineTo(connection.nodeB.x, connection.nodeB.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = Math.max(0.05, connection.strength * 0.1 * avgEnergy) // Extremely ultrathin lines
        ctx.stroke()
      })

      // Draw nodes with trails and enhanced effects
      nodesRef.current.forEach((node) => {
        // Draw trail
        node.trail.forEach((point, i) => {
          if (i > 0) {
            const prevPoint = node.trail[i - 1]
            const gradient = ctx.createLinearGradient(prevPoint.x, prevPoint.y, point.x, point.y)
            gradient.addColorStop(0, `hsla(${node.hue}, 100%, 50%, ${prevPoint.opacity * 0.3})`)
            gradient.addColorStop(1, `hsla(${node.hue}, 100%, 50%, ${point.opacity * 0.3})`)

            ctx.beginPath()
            ctx.moveTo(prevPoint.x, prevPoint.y)
            ctx.lineTo(point.x, point.y)
            ctx.strokeStyle = gradient
            ctx.lineWidth = Math.max(0.05, node.radius * point.opacity * 0.05) // Extremely ultrathin trail lines
            ctx.stroke()
          }
        })

        // Outer glow with energy pulse
        const glowRadius = node.radius * 8 * node.energy
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowRadius
        )

        glowGradient.addColorStop(0, `hsla(${node.hue}, 100%, 70%, ${0.8 * node.energy})`)
        glowGradient.addColorStop(0.3, `hsla(${node.hue}, 80%, 60%, ${0.4 * node.energy})`)
        glowGradient.addColorStop(0.7, `hsla(${node.hue + 20}, 70%, 50%, ${0.1 * node.energy})`)
        glowGradient.addColorStop(1, `hsla(${node.hue}, 60%, 40%, 0)`)

        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, glowRadius, 0, Math.PI * 2)
        ctx.fill()

        // Inner bright core
        const coreGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 2
        )
        coreGradient.addColorStop(0, `hsla(${node.hue}, 100%, 90%, 1)`)
        coreGradient.addColorStop(0.5, `hsla(${node.hue}, 100%, 70%, 0.8)`)
        coreGradient.addColorStop(1, `hsla(${node.hue}, 100%, 50%, 0)`)

        ctx.fillStyle = coreGradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 2 * node.energy, 0, Math.PI * 2)
        ctx.fill()

        // Ultra bright center
        ctx.fillStyle = `hsla(${node.hue}, 100%, 95%, ${node.energy})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 0.8, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={styles.geometricCanvas}
    />
  )
}