'use client'

import React, { useEffect, useRef, useCallback, useMemo } from 'react'
import styles from './ParticleRain3D.module.css'

// 3D Vector and Matrix utilities
class Vector3 {
  constructor(public x: number, public y: number, public z: number) {}

  add(v: Vector3): Vector3 {
    return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z)
  }

  multiply(scalar: number): Vector3 {
    return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar)
  }

  rotateX(angle: number): Vector3 {
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    return new Vector3(
      this.x,
      this.y * cos - this.z * sin,
      this.y * sin + this.z * cos
    )
  }

  rotateY(angle: number): Vector3 {
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    return new Vector3(
      this.x * cos + this.z * sin,
      this.y,
      -this.x * sin + this.z * cos
    )
  }

  rotateZ(angle: number): Vector3 {
    const cos = Math.cos(angle)
    const sin = Math.sin(angle)
    return new Vector3(
      this.x * cos - this.y * sin,
      this.x * sin + this.y * cos,
      this.z
    )
  }
}

// Enhanced 3D Particle with geometric shapes
interface Particle3D {
  position: Vector3
  velocity: Vector3
  acceleration: Vector3
  rotation: Vector3
  rotationSpeed: Vector3

  size: number
  opacity: number
  color: { r: number; g: number; b: number }
  glowIntensity: number

  type: 'cube' | 'tetrahedron' | 'octahedron' | 'sphere' | 'torus' | 'crystal'
  layer: number // 0 = background, 1 = mid, 2 = foreground

  pulsePhase: number
  pulseSpeed: number

  targetPosition?: Vector3
  isForming: boolean
  formationProgress: number

  life: number
  maxLife: number

  trail: Vector3[]
  maxTrailLength: number

  magneticInfluence: number
  turbulencePhase: number
}

interface ParticleRain3DProps {
  intensity?: 'low' | 'medium' | 'high' | 'ultra'
  enableReveal?: boolean
  theme?: 'tech' | 'cosmic' | 'matrix' | 'dream'
}

export const ParticleRain3D: React.FC<ParticleRain3DProps> = ({
  intensity = 'ultra',
  enableReveal = true,
  theme = 'tech'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const overlayCanvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle3D[]>([])
  const animationRef = useRef<number | null>(null)
  const mouseRef = useRef({ x: 0, y: 0, z: 0 })
  const timeRef = useRef(0)
  const cameraRef = useRef({
    position: new Vector3(0, 0, 1200),
    rotation: new Vector3(0, 0, 0),
    fov: 85,
    parallaxStrength: 0.8,
    depthOfField: true,
    focusDepth: 500,
    zNear: 100,
    zFar: 2000
  })
  const lightsRef = useRef([
    {
      position: new Vector3(0, -100, 500),
      color: { r: 255, g: 200, b: 150 },
      intensity: 1.2,
      radius: 800,
      type: 'point'
    },
    {
      position: new Vector3(-400, 200, 200),
      color: { r: 100, g: 150, b: 255 },
      intensity: 0.8,
      radius: 600,
      type: 'point'
    },
    {
      position: new Vector3(400, 200, 200),
      color: { r: 255, g: 100, b: 200 },
      intensity: 0.8,
      radius: 600,
      type: 'point'
    }
  ])

  // Theme color palettes with depth-based gradients
  const themes = useMemo(() => ({
    tech: [
      { r: 96, g: 92, b: 207 },    // Main purple
      { r: 150, g: 146, b: 230 },  // Light purple
      { r: 100, g: 200, b: 255 },  // Cyan
      { r: 255, g: 100, b: 200 },  // Pink
      { r: 200, g: 150, b: 255 },  // Lavender
      { r: 45, g: 212, b: 191 },   // Turquoise
      { r: 255, g: 150, b: 100 },  // Coral
      { r: 180, g: 100, b: 255 }   // Deep violet
    ],
    cosmic: [
      { r: 255, g: 100, b: 150 },  // Nebula pink
      { r: 100, g: 150, b: 255 },  // Deep space blue
      { r: 255, g: 200, b: 100 },  // Star gold
      { r: 150, g: 255, b: 200 },  // Aurora green
      { r: 200, g: 100, b: 255 }   // Cosmic purple
    ],
    matrix: [
      { r: 0, g: 255, b: 100 },    // Matrix green
      { r: 0, g: 200, b: 150 },    // Teal
      { r: 100, g: 255, b: 200 },  // Light green
      { r: 0, g: 150, b: 100 },    // Dark green
      { r: 50, g: 255, b: 150 }    // Mint
    ],
    dream: [
      { r: 255, g: 150, b: 200 },  // Rose
      { r: 200, g: 150, b: 255 },  // Violet
      { r: 150, g: 200, b: 255 },  // Sky
      { r: 255, g: 200, b: 150 },  // Peach
      { r: 200, g: 255, b: 200 }   // Mint
    ]
  }), [])

  // Enhanced 3D projection with depth of field and atmospheric perspective
  const project3D = useCallback((point: Vector3, canvas: HTMLCanvasElement): {
    x: number;
    y: number;
    scale: number;
    depth: number;
    blur: number;
    fogIntensity: number
  } => {
    const camera = cameraRef.current
    const fov = camera.fov * Math.PI / 180
    const aspectRatio = canvas.width / canvas.height
    const distance = 1000

    // Apply camera transformations with parallax
    const parallaxOffset = new Vector3(
      mouseRef.current.x * (camera.parallaxStrength || 0.8) * (point.z / 1000),
      mouseRef.current.y * (camera.parallaxStrength || 0.8) * (point.z / 1000),
      0
    )

    let transformed = point
      .add(parallaxOffset)
      .add(camera.position.multiply(-1))
      .rotateX(camera.rotation.x)
      .rotateY(camera.rotation.y + mouseRef.current.x * 0.0002)
      .rotateZ(camera.rotation.z)

    // Enhanced perspective projection with depth effects
    const scale = distance / (distance + transformed.z)
    const x = canvas.width / 2 + transformed.x * scale * (1 / Math.tan(fov / 2))
    const y = canvas.height / 2 + transformed.y * scale * (1 / Math.tan(fov / 2)) * aspectRatio

    // Calculate depth-based effects
    const depth = transformed.z
    const normalizedDepth = Math.max(0, Math.min(1, (depth + (camera.zFar || 2000)) / ((camera.zFar || 2000) * 2)))

    // Depth of field blur
    const focusDistance = camera.focusDepth || 500
    const depthDiff = Math.abs(depth - focusDistance)
    const blur = (camera.depthOfField || true) ? Math.min(depthDiff / 500, 1) * 3 : 0

    // Atmospheric fog
    const fogIntensity = Math.pow(normalizedDepth, 1.5)

    return { x, y, scale, depth, blur, fogIntensity }
  }, [])

  // Draw 3D geometric shapes
  const calculateLighting = useCallback((particle: Particle3D) => {
    const lights = lightsRef.current
    let lightR = 30, lightG = 30, lightB = 40 // Ambient light
    let totalIntensity = 0.3 // Base ambient

    lights.forEach(light => {
      const dx = particle.position.x - light.position.x
      const dy = particle.position.y - light.position.y
      const dz = particle.position.z - light.position.z
      const distance = Math.sqrt(dx*dx + dy*dy + dz*dz)

      if (distance < light.radius) {
        const attenuation = Math.pow(1 - (distance / light.radius), 2)
        const intensity = light.intensity * attenuation
        lightR += light.color.r * intensity
        lightG += light.color.g * intensity
        lightB += light.color.b * intensity
        totalIntensity = Math.min(1.5, totalIntensity + intensity)
      }
    })

    return {
      color: {
        r: Math.min(255, particle.color.r * 0.6 + lightR * 0.4),
        g: Math.min(255, particle.color.g * 0.6 + lightG * 0.4),
        b: Math.min(255, particle.color.b * 0.6 + lightB * 0.4)
      },
      intensity: totalIntensity
    }
  }, [])

  const draw3DShape = useCallback((
    ctx: CanvasRenderingContext2D,
    particle: Particle3D,
    screenPos: {
      x: number;
      y: number;
      scale: number;
      depth?: number;
      blur?: number;
      fogIntensity?: number
    }
  ) => {
    const size = particle.size * screenPos.scale
    const depthFade = screenPos.fogIntensity ? 1 - screenPos.fogIntensity * 0.5 : 1
    const opacity = particle.opacity * particle.glowIntensity * depthFade * (0.3 + screenPos.scale * 0.7)

    // Apply depth of field blur
    if (screenPos.blur && screenPos.blur > 0.1) {
      ctx.filter = `blur(${screenPos.blur}px)`
    }

    // Calculate dynamic lighting for this particle
    const lighting = calculateLighting(particle)
    const litColor = lighting.color
    const totalIntensity = lighting.intensity

    ctx.save()
    ctx.translate(screenPos.x, screenPos.y)

    // Enhanced glow effect with dynamic lighting
    const glowLayers = 3
    for (let i = glowLayers; i > 0; i--) {
      const layerOpacity = opacity * totalIntensity * (0.3 / i)
      const layerSize = size * (1 + i * 0.5)

      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, layerSize)
      gradient.addColorStop(0, `rgba(255, 255, 255, ${layerOpacity * 0.5})`)
      gradient.addColorStop(0.2, `rgba(${litColor.r}, ${litColor.g}, ${litColor.b}, ${layerOpacity})`)
      gradient.addColorStop(0.6, `rgba(${litColor.r}, ${litColor.g}, ${litColor.b}, ${layerOpacity * 0.5})`)
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(0, 0, layerSize, 0, Math.PI * 2)
      ctx.fill()
    }

    // Draw specific geometric shape
    ctx.save()
    ctx.rotate(particle.rotation.z)
    ctx.scale(screenPos.scale, screenPos.scale)

    switch (particle.type) {
      case 'cube':
        // Ultra-professional 3D cube with shading and depth
        const cubeVertices = [
          [-size, -size, -size], [size, -size, -size],
          [size, size, -size], [-size, size, -size],
          [-size, -size, size], [size, -size, size],
          [size, size, size], [-size, size, size]
        ].map(v => {
          const vec = new Vector3(v[0], v[1], v[2])
            .rotateX(particle.rotation.x + timeRef.current * 0.001)
            .rotateY(particle.rotation.y + timeRef.current * 0.0015)
            .rotateZ(particle.rotation.z + timeRef.current * 0.0005)
          return { x: vec.x, y: vec.y, z: vec.z }
        })

        // Define faces with normals for lighting
        const cubeFaces = [
          { verts: [0, 1, 2, 3], normal: {z: -1} }, // Front
          { verts: [4, 7, 6, 5], normal: {z: 1} },  // Back
          { verts: [0, 4, 5, 1], normal: {y: -1} }, // Bottom
          { verts: [2, 6, 7, 3], normal: {y: 1} },  // Top
          { verts: [0, 3, 7, 4], normal: {x: -1} }, // Left
          { verts: [1, 5, 6, 2], normal: {x: 1} }   // Right
        ]

        // Sort faces by depth
        cubeFaces.sort((a, b) => {
          const avgZA = a.verts.reduce((sum, i) => sum + cubeVertices[i].z, 0) / 4
          const avgZB = b.verts.reduce((sum, i) => sum + cubeVertices[i].z, 0) / 4
          return avgZB - avgZA
        })

        // Draw faces with lighting
        cubeFaces.forEach(face => {
          const avgZ = face.verts.reduce((sum, i) => sum + cubeVertices[i].z, 0) / 4
          const lightIntensity = 0.4 + (avgZ / size + 1) * 0.3
          const faceOpacity = opacity * lightIntensity

          // Fill with gradient for depth
          const gradient = ctx.createLinearGradient(
            cubeVertices[face.verts[0]].x, cubeVertices[face.verts[0]].y,
            cubeVertices[face.verts[2]].x, cubeVertices[face.verts[2]].y
          )
          gradient.addColorStop(0, `rgba(${litColor.r * 1.2}, ${litColor.g * 1.2}, ${litColor.b * 1.2}, ${faceOpacity * 0.4})`)
          gradient.addColorStop(1, `rgba(${litColor.r * 0.8}, ${litColor.g * 0.8}, ${litColor.b * 0.8}, ${faceOpacity * 0.2})`)

          ctx.fillStyle = gradient
          ctx.strokeStyle = `rgba(${litColor.r}, ${litColor.g}, ${litColor.b}, ${faceOpacity * 0.8})`
          ctx.lineWidth = 1.2 * screenPos.scale

          ctx.beginPath()
          ctx.moveTo(cubeVertices[face.verts[0]].x, cubeVertices[face.verts[0]].y)
          face.verts.forEach(i => ctx.lineTo(cubeVertices[i].x, cubeVertices[i].y))
          ctx.closePath()
          ctx.fill()
          ctx.stroke()
        })

        // Inner glow effect
        const cubeGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.8)
        cubeGlow.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.2})`)
        cubeGlow.addColorStop(0.5, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity * 0.1})`)
        cubeGlow.addColorStop(1, 'transparent')
        ctx.fillStyle = cubeGlow
        ctx.fillRect(-size, -size, size * 2, size * 2)
        break

      case 'tetrahedron':
        // Draw 3D tetrahedron
        const h = size * Math.sqrt(2/3)
        const tetraVertices = [
          new Vector3(0, -h, 0),
          new Vector3(-size, h/2, -size/Math.sqrt(3)),
          new Vector3(size, h/2, -size/Math.sqrt(3)),
          new Vector3(0, h/2, 2*size/Math.sqrt(3))
        ].map(v => v.rotateX(particle.rotation.x).rotateY(particle.rotation.y))

        const tetraFaces = [[0,1,2], [0,2,3], [0,3,1], [1,3,2]]
        tetraFaces.forEach(face => {
          ctx.strokeStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity * 0.7})`
          ctx.lineWidth = 1.2 * screenPos.scale
          ctx.beginPath()
          ctx.moveTo(tetraVertices[face[0]].x, tetraVertices[face[0]].y)
          face.forEach(i => ctx.lineTo(tetraVertices[i].x, tetraVertices[i].y))
          ctx.closePath()
          ctx.stroke()
        })
        break

      case 'octahedron':
        // Draw 3D octahedron (diamond shape)
        const octaVertices = [
          new Vector3(0, -size * 1.4, 0),  // Top
          new Vector3(0, size * 1.4, 0),   // Bottom
          new Vector3(-size, 0, 0),
          new Vector3(size, 0, 0),
          new Vector3(0, 0, -size),
          new Vector3(0, 0, size)
        ].map(v => v.rotateX(particle.rotation.x).rotateY(particle.rotation.y))

        const octaEdges = [
          [0,2], [0,3], [0,4], [0,5],
          [1,2], [1,3], [1,4], [1,5],
          [2,4], [4,3], [3,5], [5,2]
        ]

        ctx.strokeStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity})`
        ctx.lineWidth = 1.5 * screenPos.scale
        octaEdges.forEach(edge => {
          ctx.beginPath()
          ctx.moveTo(octaVertices[edge[0]].x, octaVertices[edge[0]].y)
          ctx.lineTo(octaVertices[edge[1]].x, octaVertices[edge[1]].y)
          ctx.stroke()
        })
        break

      case 'crystal':
        // Draw crystal formation
        const crystalHeight = size * 2
        const crystalPoints = 6

        for (let i = 0; i < crystalPoints; i++) {
          const angle = (i / crystalPoints) * Math.PI * 2
          const x = Math.cos(angle) * size * 0.7
          const y = Math.sin(angle) * size * 0.7

          // Crystal faces
          ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity * 0.3})`
          ctx.beginPath()
          ctx.moveTo(0, -crystalHeight)
          ctx.lineTo(x, y)
          ctx.lineTo(Math.cos((i + 1) / crystalPoints * Math.PI * 2) * size * 0.7,
                     Math.sin((i + 1) / crystalPoints * Math.PI * 2) * size * 0.7)
          ctx.closePath()
          ctx.fill()

          // Crystal edges
          ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.6})`
          ctx.lineWidth = 0.8 * screenPos.scale
          ctx.stroke()
        }
        break

      case 'torus':
        // Draw 3D torus (donut)
        const outerRadius = size
        const innerRadius = size * 0.4
        const segments = 12

        ctx.strokeStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity * 0.8})`
        ctx.lineWidth = 1 * screenPos.scale

        for (let i = 0; i < segments; i++) {
          const angle1 = (i / segments) * Math.PI * 2
          const angle2 = ((i + 1) / segments) * Math.PI * 2

          for (let j = 0; j < segments / 2; j++) {
            const ringAngle1 = (j / (segments/2)) * Math.PI * 2
            const ringAngle2 = ((j + 1) / (segments/2)) * Math.PI * 2

            const r1 = outerRadius + Math.cos(ringAngle1) * innerRadius
            const r2 = outerRadius + Math.cos(ringAngle2) * innerRadius

            ctx.beginPath()
            ctx.moveTo(
              Math.cos(angle1) * r1,
              Math.sin(angle1) * r1 + Math.sin(ringAngle1) * innerRadius
            )
            ctx.lineTo(
              Math.cos(angle2) * r1,
              Math.sin(angle2) * r1 + Math.sin(ringAngle1) * innerRadius
            )
            ctx.stroke()
          }
        }
        break

      case 'sphere':
      default:
        // Enhanced 3D sphere with latitude/longitude lines
        const latitudes = 6
        const longitudes = 8

        // Draw latitude lines
        ctx.strokeStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity * 0.3})`
        ctx.lineWidth = 0.5 * screenPos.scale

        for (let lat = 1; lat < latitudes; lat++) {
          const phi = (lat / latitudes) * Math.PI
          const radius = Math.sin(phi) * size
          const y = -Math.cos(phi) * size

          ctx.beginPath()
          ctx.arc(0, y, radius, 0, Math.PI * 2)
          ctx.stroke()
        }

        // Draw longitude lines
        for (let lon = 0; lon < longitudes; lon++) {
          const theta = (lon / longitudes) * Math.PI * 2

          ctx.beginPath()
          for (let lat = 0; lat <= latitudes; lat++) {
            const phi = (lat / latitudes) * Math.PI
            const x = Math.sin(phi) * Math.cos(theta) * size
            const y = -Math.cos(phi) * size

            if (lat === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          }
          ctx.stroke()
        }

        // Core glow
        const coreGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size)
        coreGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.8})`)
        coreGradient.addColorStop(0.5, `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity * 0.5})`)
        coreGradient.addColorStop(1, 'rgba(0, 0, 0, 0)')

        ctx.fillStyle = coreGradient
        ctx.beginPath()
        ctx.arc(0, 0, size, 0, Math.PI * 2)
        ctx.fill()
    }

    ctx.restore()

    // Reset filter to ensure no blur affects subsequent drawings
    ctx.filter = 'none'

    // Draw particle trail
    if (particle.trail.length > 1) {
      ctx.strokeStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${opacity * 0.3})`
      ctx.lineWidth = 1 * screenPos.scale
      ctx.beginPath()

      particle.trail.forEach((point, i) => {
        const trailScreen = project3D(point, ctx.canvas)
        if (i === 0) {
          ctx.moveTo(trailScreen.x, trailScreen.y)
        } else {
          const alpha = 1 - i / particle.trail.length
          ctx.globalAlpha = alpha * opacity * 0.3
          ctx.lineTo(trailScreen.x, trailScreen.y)
        }
      })
      ctx.stroke()
      ctx.globalAlpha = 1
    }

    ctx.restore()
  }, [project3D, calculateLighting])

  // Create professional icon formations in 3D
  const createFormation3D = useCallback((type: string, centerX: number, centerY: number): Vector3[] => {
    const positions: Vector3[] = []

    switch(type) {
      case 'helix':
        // DNA double helix
        for (let i = 0; i < 40; i++) {
          const t = i / 40 * Math.PI * 4
          const strand = i % 2
          positions.push(new Vector3(
            Math.cos(t + strand * Math.PI) * 100,
            (i - 20) * 15,
            Math.sin(t + strand * Math.PI) * 100
          ))
        }
        break

      case 'vortex':
        // Spiral vortex
        for (let i = 0; i < 50; i++) {
          const angle = i * 0.3
          const radius = i * 4
          const height = i * 5 - 125
          positions.push(new Vector3(
            Math.cos(angle) * radius,
            height,
            Math.sin(angle) * radius
          ))
        }
        break

      case 'grid3d':
        // 3D matrix grid
        const gridSize = 5
        for (let x = 0; x < gridSize; x++) {
          for (let y = 0; y < gridSize; y++) {
            for (let z = 0; z < 2; z++) {
              positions.push(new Vector3(
                (x - gridSize/2) * 60,
                (y - gridSize/2) * 60,
                (z - 0.5) * 120
              ))
            }
          }
        }
        break

      case 'constellation':
        // Star constellation pattern
        const stars = [
          [0, -100, 0], [50, -50, 30], [-50, -50, -30],
          [100, 0, 50], [-100, 0, -50], [30, 50, 100],
          [-30, 50, -100], [0, 100, 0]
        ]
        stars.forEach(star => {
          for (let i = 0; i < 5; i++) {
            positions.push(new Vector3(
              star[0] + (Math.random() - 0.5) * 20,
              star[1] + (Math.random() - 0.5) * 20,
              star[2] + (Math.random() - 0.5) * 20
            ))
          }
        })
        break

      case 'quantum':
        // Quantum field visualization
        for (let i = 0; i < 60; i++) {
          const theta = Math.random() * Math.PI * 2
          const phi = Math.random() * Math.PI
          const radius = 150 + Math.random() * 50

          positions.push(new Vector3(
            radius * Math.sin(phi) * Math.cos(theta),
            radius * Math.sin(phi) * Math.sin(theta),
            radius * Math.cos(phi)
          ))
        }
        break
    }

    // Offset to screen position
    return positions.map(p => new Vector3(
      p.x + centerX,
      p.y + centerY,
      p.z
    ))
  }, [])

  // Initialize enhanced particle system
  const initializeParticles = useCallback((canvas: HTMLCanvasElement) => {
    const counts = {
      low: 100,
      medium: 200,
      high: 350,
      ultra: 500
    }

    const particleCount = counts[intensity]
    const colors = themes[theme]
    const particles: Particle3D[] = []

    const shapes: Particle3D['type'][] = ['cube', 'tetrahedron', 'octahedron', 'sphere', 'torus', 'crystal']

    for (let i = 0; i < particleCount; i++) {
      const layer = Math.floor(Math.random() * 3)
      const z = -500 + layer * 500 + Math.random() * 300

      particles.push({
        position: new Vector3(
          (Math.random() - 0.5) * canvas.width * 1.5,
          -canvas.height - Math.random() * 500,
          z
        ),
        velocity: new Vector3(
          (Math.random() - 0.5) * 2,
          Math.random() * 3 + 2,
          (Math.random() - 0.5) * 1
        ),
        acceleration: new Vector3(0, 0.05, 0),
        rotation: new Vector3(
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2
        ),
        rotationSpeed: new Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
        size: Math.random() * 20 + 10,
        opacity: Math.random() * 0.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        glowIntensity: 1,
        type: shapes[Math.floor(Math.random() * shapes.length)],
        layer,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.05 + 0.02,
        isForming: false,
        formationProgress: 0,
        life: 0,
        maxLife: Math.random() * 200 + 100,
        trail: [],
        maxTrailLength: 10,
        magneticInfluence: 0,
        turbulencePhase: Math.random() * Math.PI * 2
      })
    }

    return particles
  }, [intensity, theme, themes])

  useEffect(() => {
    console.log('ParticleRain3D mounting...')
    const canvas = canvasRef.current
    const overlayCanvas = overlayCanvasRef.current
    if (!canvas || !overlayCanvas) {
      console.error('Canvas refs not found')
      return
    }

    const ctx = canvas.getContext('2d', { alpha: false })
    const overlayCtx = overlayCanvas.getContext('2d')
    if (!ctx || !overlayCtx) {
      console.error('Canvas context not available')
      return
    }
    console.log('Canvas initialized successfully')

    // Enable better rendering
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    // Resize handler
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      overlayCanvas.width = window.innerWidth
      overlayCanvas.height = window.innerHeight
    }
    resizeCanvas()

    // Mouse tracking with 3D depth
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left - canvas.width / 2
      const y = e.clientY - rect.top - canvas.height / 2

      // Smooth mouse position interpolation
      mouseRef.current.x += (x - mouseRef.current.x) * 0.1
      mouseRef.current.y += (y - mouseRef.current.y) * 0.1
      mouseRef.current.z = Math.sin(Date.now() * 0.001) * 50

      // Update primary light to follow mouse with delay
      if (lightsRef.current[0]) {
        lightsRef.current[0].position.x += (x - lightsRef.current[0].position.x) * 0.05
        lightsRef.current[0].position.y += (y - lightsRef.current[0].position.y) * 0.05
      }
    }

    const handleMouseWheel = (e: WheelEvent) => {
      // Só interceptar wheel se o mouse estiver sobre o canvas
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX
      const mouseY = e.clientY

      const isOverCanvas = mouseX >= rect.left && mouseX <= rect.right &&
                          mouseY >= rect.top && mouseY <= rect.bottom

      if (isOverCanvas && e.ctrlKey) {
        // Só fazer zoom com Ctrl + wheel
        e.preventDefault()
        const zoomSpeed = 50
        const newZ = cameraRef.current.position.z + e.deltaY * zoomSpeed / 100
        cameraRef.current.position.z = Math.max(600, Math.min(2000, newZ))
      }
      // Deixar o evento passar para permitir scroll normal da página
    }

    const handleMouseDown = (e: MouseEvent) => {
      // Create particle explosion at mouse position
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left - canvas.width / 2
      const y = e.clientY - rect.top - canvas.height / 2

      particlesRef.current.forEach(particle => {
        const dx = particle.position.x - x
        const dy = particle.position.y - y
        const distance = Math.sqrt(dx*dx + dy*dy)

        if (distance < 200) {
          const force = (1 - distance / 200) * 10
          particle.velocity.x += (dx / distance) * force
          particle.velocity.y += (dy / distance) * force
          particle.velocity.z += Math.random() * force - force/2
          particle.pulsePhase = 0
          particle.glowIntensity = Math.min(2, particle.glowIntensity + 0.5)
        }
      })
    }

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('wheel', handleMouseWheel, { passive: false })
    window.addEventListener('mousedown', handleMouseDown)

    // Initialize particles
    particlesRef.current = initializeParticles(canvas)
    console.log(`Initialized ${particlesRef.current.length} particles`)

    // Reveal animation state
    let revealProgress = 0
    const revealDuration = 4000
    const revealStart = Date.now()

    // Formation state
    let currentFormation = 'none'
    let formationTimer = 0
    const formationInterval = 8000
    let formationPositions: Vector3[] = []

    // Main animation loop
    const animate = () => {
      timeRef.current += 0.016

      // Clear canvas
      ctx.fillStyle = 'rgba(10, 10, 12, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Debug: Show particle count
      if (particlesRef.current.length === 0) {
        ctx.fillStyle = '#605CCF'
        ctx.font = '20px Arial'
        ctx.textAlign = 'center'
        ctx.fillText('Initializing 3D Particles...', canvas.width / 2, canvas.height / 2)
      }

      // Update reveal effect
      if (enableReveal && revealProgress < 1) {
        const elapsed = Date.now() - revealStart
        revealProgress = Math.min(elapsed / revealDuration, 1)

        // Draw reveal overlay
        overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height)
        overlayCtx.fillStyle = 'rgba(10, 10, 12, 1)'
        overlayCtx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height)

        // Create wave reveal effect
        const waveHeight = overlayCanvas.height * revealProgress
        const waveAmplitude = 100 * (1 - revealProgress)

        overlayCtx.globalCompositeOperation = 'destination-out'
        overlayCtx.beginPath()
        overlayCtx.moveTo(0, 0)

        for (let x = 0; x <= overlayCanvas.width; x += 10) {
          const waveY = waveHeight + Math.sin(x * 0.01 + timeRef.current * 5) * waveAmplitude
          overlayCtx.lineTo(x, waveY)
        }

        overlayCtx.lineTo(overlayCanvas.width, 0)
        overlayCtx.closePath()
        overlayCtx.fill()
        overlayCtx.globalCompositeOperation = 'source-over'

        if (revealProgress >= 1) {
          overlayCanvas.style.opacity = '0'
          overlayCanvas.style.transition = 'opacity 1s'
        }
      }

      // Update camera for dynamic view
      cameraRef.current.rotation.y = Math.sin(timeRef.current * 0.1) * 0.05
      cameraRef.current.rotation.x = Math.cos(timeRef.current * 0.15) * 0.03

      // Formation management
      formationTimer += 16
      if (formationTimer > formationInterval) {
        formationTimer = 0
        const formations = ['helix', 'vortex', 'grid3d', 'constellation', 'quantum', 'none']
        const nextIndex = (formations.indexOf(currentFormation) + 1) % formations.length
        currentFormation = formations[nextIndex]

        if (currentFormation !== 'none') {
          formationPositions = createFormation3D(currentFormation, 0, 0)
        }
      }

      // Performance optimization: Frustum culling and LOD
      const camera = cameraRef.current
      const visibleParticles = particlesRef.current.filter(particle => {
        // Basic frustum culling
        const margin = 200
        const screenPos = project3D(particle.position, canvas)
        return screenPos.x > -margin && screenPos.x < canvas.width + margin &&
               screenPos.y > -margin && screenPos.y < canvas.height + margin &&
               particle.position.z > -camera.zFar && particle.position.z < camera.zFar
      })

      // Sort visible particles by depth for proper rendering
      const sortedParticles = visibleParticles.sort((a, b) =>
        b.position.z - a.position.z
      )

      sortedParticles.forEach((particle, index) => {
        // Apply magnetic field from mouse
        const mouseDistance = Math.sqrt(
          Math.pow(particle.position.x - mouseRef.current.x, 2) +
          Math.pow(particle.position.y - mouseRef.current.y, 2) +
          Math.pow(particle.position.z - mouseRef.current.z, 2)
        )

        // Advanced 3D magnetic field interaction
        if (mouseDistance < 400) {
          const force = Math.pow(1 - mouseDistance / 400, 2)
          const dx = mouseRef.current.x - particle.position.x
          const dy = mouseRef.current.y - particle.position.y
          const dz = mouseRef.current.z - particle.position.z

          // Different behaviors based on particle type
          const behaviorType = particle.type
          let attractionFactor = 0.01
          let orbitalFactor = 0

          switch(behaviorType) {
            case 'sphere':
              attractionFactor = force * 0.015  // Strong attraction
              orbitalFactor = 0.3
              break
            case 'cube':
              attractionFactor = -force * 0.008  // Repulsion
              break
            case 'tetrahedron':
              attractionFactor = force * 0.01
              orbitalFactor = 0.5  // Strong orbital
              break
            case 'crystal':
              attractionFactor = Math.sin(timeRef.current * 0.001 + particle.pulsePhase) * force * 0.01
              orbitalFactor = 0.2
              break
            default:
              attractionFactor = force * 0.01
          }

          // Apply attraction/repulsion
          particle.velocity.x += dx * attractionFactor
          particle.velocity.y += dy * attractionFactor
          particle.velocity.z += dz * attractionFactor

          // Add orbital motion for close particles
          if (mouseDistance < 200 && orbitalFactor > 0) {
            const tangentX = -dy / mouseDistance
            const tangentY = dx / mouseDistance
            particle.velocity.x += tangentX * force * orbitalFactor
            particle.velocity.y += tangentY * force * orbitalFactor
            particle.velocity.z += Math.sin(timeRef.current * 0.002) * force * 0.1
          }

          // Enhance glow and pulse when near mouse
          particle.magneticInfluence = force
          particle.glowIntensity = 1 + force * 0.5
          particle.pulseSpeed = 0.05 + force * 0.05
        } else {
          // Gradually restore normal glow
          particle.glowIntensity = Math.max(0.8, particle.glowIntensity * 0.98)
          particle.magneticInfluence *= 0.95
        }

        // Formation behavior
        if (currentFormation !== 'none' && formationPositions[index % formationPositions.length]) {
          const target = formationPositions[index % formationPositions.length]
          particle.isForming = true
          particle.formationProgress = Math.min(particle.formationProgress + 0.02, 1)

          const t = particle.formationProgress
          particle.position.x += (target.x - particle.position.x) * t * 0.05
          particle.position.y += (target.y - particle.position.y) * t * 0.05
          particle.position.z += (target.z - particle.position.z) * t * 0.05

          particle.glowIntensity = 1 + t * 0.5
        } else {
          particle.isForming = false
          particle.formationProgress = Math.max(particle.formationProgress - 0.02, 0)
          particle.glowIntensity = 1 + Math.sin(particle.pulsePhase) * 0.3
        }

        // Turbulence and organic movement
        particle.turbulencePhase += 0.02
        const turbulenceX = Math.sin(particle.turbulencePhase) * 0.5
        const turbulenceY = Math.cos(particle.turbulencePhase * 1.3) * 0.3
        const turbulenceZ = Math.sin(particle.turbulencePhase * 0.7) * 0.2

        particle.velocity.x += turbulenceX
        particle.velocity.y += turbulenceY
        particle.velocity.z += turbulenceZ

        // Apply physics
        particle.velocity = particle.velocity.add(particle.acceleration)
        particle.position = particle.position.add(particle.velocity)
        particle.rotation = particle.rotation.add(particle.rotationSpeed)

        // Damping
        particle.velocity.x *= 0.98
        particle.velocity.y *= 0.99
        particle.velocity.z *= 0.98

        // Update pulse
        particle.pulsePhase += particle.pulseSpeed

        // Update trail
        particle.trail.unshift(new Vector3(
          particle.position.x,
          particle.position.y,
          particle.position.z
        ))
        if (particle.trail.length > particle.maxTrailLength) {
          particle.trail.pop()
        }

        // Reset particles that fall below screen
        if (particle.position.y > canvas.height + 200) {
          particle.position.y = -200 - Math.random() * 300
          particle.position.x = (Math.random() - 0.5) * canvas.width * 1.5
          particle.position.z = -500 + particle.layer * 500 + Math.random() * 300
          particle.velocity.y = Math.random() * 3 + 2
          particle.trail = []
        }

        // Update life
        particle.life++
        if (particle.life > particle.maxLife) {
          particle.opacity = Math.max(0, particle.opacity - 0.01)
          if (particle.opacity <= 0) {
            particle.life = 0
            particle.opacity = Math.random() * 0.5 + 0.5
          }
        }
      })

      // Draw particles with Level of Detail system
      sortedParticles.forEach((particle, index) => {
        const screenPos = project3D(particle.position, canvas)

        // Skip every other particle if too many for performance
        if (sortedParticles.length > 400 && index % 2 === 0 && particle.layer === 0) {
          return
        }

        // Level of Detail based on depth
        if (particle.position.z > 600 || screenPos.scale < 0.3) {
          // Far particles - simplified dots
          const simplifiedOpacity = particle.opacity * screenPos.scale * 0.5
          ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${simplifiedOpacity})`
          ctx.beginPath()
          ctx.arc(screenPos.x, screenPos.y, Math.max(1, particle.size * screenPos.scale * 0.5), 0, Math.PI * 2)
          ctx.fill()
        } else {
          // Near particles - full quality rendering
          draw3DShape(ctx, particle, screenPos)
        }
      })

      // Draw connections between nearby particles
      if (intensity === 'ultra' || intensity === 'high') {
        ctx.strokeStyle = 'rgba(150, 146, 230, 0.1)'
        ctx.lineWidth = 0.5

        for (let i = 0; i < sortedParticles.length - 1; i++) {
          for (let j = i + 1; j < sortedParticles.length; j++) {
            const distance = Math.sqrt(
              Math.pow(sortedParticles[i].position.x - sortedParticles[j].position.x, 2) +
              Math.pow(sortedParticles[i].position.y - sortedParticles[j].position.y, 2) +
              Math.pow(sortedParticles[i].position.z - sortedParticles[j].position.z, 2)
            )

            if (distance < 150) {
              const screen1 = project3D(sortedParticles[i].position, canvas)
              const screen2 = project3D(sortedParticles[j].position, canvas)

              const opacity = (1 - distance / 150) * 0.2
              ctx.globalAlpha = opacity
              ctx.beginPath()
              ctx.moveTo(screen1.x, screen1.y)
              ctx.lineTo(screen2.x, screen2.y)
              ctx.stroke()
              ctx.globalAlpha = 1
            }
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('wheel', handleMouseWheel)
      window.removeEventListener('mousedown', handleMouseDown)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [intensity, enableReveal, theme, themes, initializeParticles, project3D, draw3DShape, createFormation3D, calculateLighting])

  return (
    <>
      <canvas
        ref={overlayCanvasRef}
        className={styles.overlay}
        style={{
          display: enableReveal ? 'block' : 'none'
        }}
      />
      <canvas
        ref={canvasRef}
        className={styles.container}
      />
    </>
  )
}