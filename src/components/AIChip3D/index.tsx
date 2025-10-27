'use client'

import React, { useRef, useEffect, useMemo } from 'react'
import * as THREE from 'three'
import styles from './AIChip3D.module.css'

interface AIChip3DProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export const AIChip3D: React.FC<AIChip3DProps> = ({
  className = '',
  intensity = 'high'
}) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const frameRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetRotationRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    if (!mountRef.current) return

    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene
    scene.fog = new THREE.Fog(0x0a0a0a, 8, 20)

    // Camera setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 8)
    camera.lookAt(0, 0, 0)

    // Renderer setup with advanced options
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: intensity === 'high' ? 'high-performance' : 'default'
    })
    rendererRef.current = renderer
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    mountRef.current.appendChild(renderer.domElement)

    // Lighting setup
    const ambientLight = new THREE.AmbientLight(0x9692e6, 0.4)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xffffff, 1)
    mainLight.position.set(5, 5, 5)
    mainLight.castShadow = true
    mainLight.shadow.camera.far = 20
    mainLight.shadow.mapSize.width = 2048
    mainLight.shadow.mapSize.height = 2048
    scene.add(mainLight)

    const rimLight = new THREE.DirectionalLight(0x605ccf, 0.8)
    rimLight.position.set(-5, 3, -5)
    scene.add(rimLight)

    const bottomLight = new THREE.DirectionalLight(0x4340a7, 0.5)
    bottomLight.position.set(0, -5, 0)
    scene.add(bottomLight)

    // Point lights for glowing effect
    const glowLight1 = new THREE.PointLight(0x605ccf, 2, 10)
    glowLight1.position.set(2, 2, 2)
    scene.add(glowLight1)

    const glowLight2 = new THREE.PointLight(0x9692e6, 2, 10)
    glowLight2.position.set(-2, -2, 2)
    scene.add(glowLight2)

    // Main chip group
    const chipGroup = new THREE.Group()
    scene.add(chipGroup)

    // Chip base geometry with rounded edges
    const chipSize = 2.2
    const chipThickness = 0.4
    const chipGeometry = new THREE.BoxGeometry(chipSize, chipSize, chipThickness, 32, 32, 8)

    // Apply rounding to vertices
    const positionAttribute = chipGeometry.attributes.position
    const vertex = new THREE.Vector3()
    for (let i = 0; i < positionAttribute.count; i++) {
      vertex.fromBufferAttribute(positionAttribute, i)
      const distanceFromCenter = Math.sqrt(vertex.x * vertex.x + vertex.y * vertex.y)
      const maxDistance = chipSize * 0.5
      if (distanceFromCenter > maxDistance * 0.85) {
        const scale = (maxDistance * 0.85) / distanceFromCenter
        vertex.x *= scale
        vertex.y *= scale
      }
      positionAttribute.setXYZ(i, vertex.x, vertex.y, vertex.z)
    }
    chipGeometry.computeVertexNormals()

    // Main chip material with advanced properties
    const chipMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x605ccf,
      metalness: 0.7,
      roughness: 0.2,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      envMapIntensity: 1,
      emissive: 0x4340a7,
      emissiveIntensity: 0.1
    })

    const chipMesh = new THREE.Mesh(chipGeometry, chipMaterial)
    chipMesh.castShadow = true
    chipMesh.receiveShadow = true
    chipGroup.add(chipMesh)

    // AI text on chip
    const textGroup = new THREE.Group()

    // Create AI letters with extruded geometry
    const letterMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0xc8c5ff,
      emissiveIntensity: 0.3,
      clearcoat: 1,
      clearcoatRoughness: 0
    })

    // A letter
    const aShape = new THREE.Shape()
    aShape.moveTo(-0.3, -0.3)
    aShape.lineTo(-0.15, 0.3)
    aShape.lineTo(0, 0.3)
    aShape.lineTo(0.15, -0.3)
    aShape.lineTo(0.05, -0.3)
    aShape.lineTo(0, -0.05)
    aShape.lineTo(-0.05, -0.05)
    aShape.lineTo(-0.1, -0.3)
    aShape.closePath()

    // Add the horizontal bar of A
    const aHole = new THREE.Path()
    aHole.moveTo(-0.075, -0.05)
    aHole.lineTo(0.075, -0.05)
    aHole.lineTo(0.05, 0.05)
    aHole.lineTo(-0.05, 0.05)
    aShape.holes.push(aHole)

    const aGeometry = new THREE.ExtrudeGeometry(aShape, {
      depth: 0.1,
      bevelEnabled: true,
      bevelThickness: 0.02,
      bevelSize: 0.02,
      bevelSegments: 8
    })
    const aMesh = new THREE.Mesh(aGeometry, letterMaterial)
    aMesh.position.set(-0.3, 0, chipThickness / 2 + 0.05)
    aMesh.castShadow = true
    textGroup.add(aMesh)

    // I letter
    const iGeometry = new THREE.BoxGeometry(0.1, 0.6, 0.1)
    const iMesh = new THREE.Mesh(iGeometry, letterMaterial)
    iMesh.position.set(0.3, 0, chipThickness / 2 + 0.05)
    iMesh.castShadow = true
    textGroup.add(iMesh)

    chipGroup.add(textGroup)

    // Circuit pins (connection points)
    const pinGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.4, 16)
    const pinMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc8c5ff,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0x9692e6,
      emissiveIntensity: 0.2
    })

    const pinPositions = []
    const pinsPerSide = 8
    const pinSpacing = (chipSize - 0.4) / (pinsPerSide - 1)

    // Create pins on all 4 sides
    for (let i = 0; i < pinsPerSide; i++) {
      const offset = -chipSize / 2 + 0.2 + i * pinSpacing

      // Top pins
      const topPin = new THREE.Mesh(pinGeometry, pinMaterial)
      topPin.rotation.z = Math.PI / 2
      topPin.position.set(offset, chipSize / 2 + 0.15, 0)
      chipGroup.add(topPin)
      pinPositions.push(topPin.position)

      // Bottom pins
      const bottomPin = new THREE.Mesh(pinGeometry, pinMaterial)
      bottomPin.rotation.z = Math.PI / 2
      bottomPin.position.set(offset, -chipSize / 2 - 0.15, 0)
      chipGroup.add(bottomPin)
      pinPositions.push(bottomPin.position)

      // Left pins
      const leftPin = new THREE.Mesh(pinGeometry, pinMaterial)
      leftPin.position.set(-chipSize / 2 - 0.15, offset, 0)
      chipGroup.add(leftPin)
      pinPositions.push(leftPin.position)

      // Right pins
      const rightPin = new THREE.Mesh(pinGeometry, pinMaterial)
      rightPin.position.set(chipSize / 2 + 0.15, offset, 0)
      chipGroup.add(rightPin)
      pinPositions.push(rightPin.position)
    }

    // Circuit traces on chip surface
    const traceGroup = new THREE.Group()
    const traceMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xc8c5ff,
      metalness: 1,
      roughness: 0,
      emissive: 0x9692e6,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.8
    })

    // Create circuit pattern
    const traceWidth = 0.02
    const traceHeight = 0.01
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2
      const radius = 0.3 + Math.random() * 0.5
      const length = 0.2 + Math.random() * 0.4

      const traceGeometry = new THREE.BoxGeometry(length, traceWidth, traceHeight)
      const trace = new THREE.Mesh(traceGeometry, traceMaterial)
      trace.position.x = Math.cos(angle) * radius
      trace.position.y = Math.sin(angle) * radius
      trace.position.z = chipThickness / 2 + 0.005
      trace.rotation.z = angle
      traceGroup.add(trace)
    }
    chipGroup.add(traceGroup)

    // Floating particles around chip
    const particleGroup = new THREE.Group()
    const particles: THREE.Mesh[] = []
    const particleCount = intensity === 'high' ? 60 : intensity === 'medium' ? 40 : 20

    for (let i = 0; i < particleCount; i++) {
      const particleGeometry = new THREE.IcosahedronGeometry(0.03 + Math.random() * 0.04, 0)
      const particleMaterial = new THREE.MeshPhysicalMaterial({
        color: Math.random() > 0.5 ? 0x9692e6 : 0xc8c5ff,
        emissive: Math.random() > 0.5 ? 0x9692e6 : 0xc8c5ff,
        emissiveIntensity: 0.8,
        metalness: 0.8,
        roughness: 0.2,
        transparent: true,
        opacity: 0.8
      })

      const particle = new THREE.Mesh(particleGeometry, particleMaterial)
      const radius = 2 + Math.random() * 2
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      particle.position.x = radius * Math.sin(phi) * Math.cos(theta)
      particle.position.y = radius * Math.sin(phi) * Math.sin(theta)
      particle.position.z = radius * Math.cos(phi)

      particle.userData = {
        originalPosition: particle.position.clone(),
        speed: 0.5 + Math.random() * 1,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.02,
          y: (Math.random() - 0.5) * 0.02,
          z: (Math.random() - 0.5) * 0.02
        },
        orbitRadius: radius,
        orbitSpeed: 0.2 + Math.random() * 0.3,
        phase: Math.random() * Math.PI * 2
      }

      particles.push(particle)
      particleGroup.add(particle)
    }
    scene.add(particleGroup)

    // Data flow lines
    const lineGroup = new THREE.Group()
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x9692e6,
      transparent: true,
      opacity: 0.3,
      linewidth: 1
    })

    // Create connecting lines between pins
    for (let i = 0; i < 20; i++) {
      const points = []
      const start = pinPositions[Math.floor(Math.random() * pinPositions.length)]
      const end = pinPositions[Math.floor(Math.random() * pinPositions.length)]

      if (start && end && start !== end) {
        points.push(new THREE.Vector3(start.x, start.y, start.z))

        // Add curve points for smooth lines
        const mid = new THREE.Vector3(
          (start.x + end.x) / 2 + (Math.random() - 0.5) * 0.5,
          (start.y + end.y) / 2 + (Math.random() - 0.5) * 0.5,
          0.5 + Math.random() * 0.5
        )
        points.push(mid)
        points.push(new THREE.Vector3(end.x, end.y, end.z))

        const lineGeometry = new THREE.BufferGeometry().setFromPoints(points)
        const line = new THREE.Line(lineGeometry, lineMaterial)
        lineGroup.add(line)
      }
    }
    scene.add(lineGroup)

    // Holographic grid background
    const gridHelper = new THREE.GridHelper(20, 40, 0x4340a7, 0x232244)
    gridHelper.position.z = -3
    gridHelper.rotation.x = Math.PI / 2
    gridHelper.material.opacity = 0.1
    gridHelper.material.transparent = true
    scene.add(gridHelper)

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      const rect = mountRef.current?.getBoundingClientRect()
      if (rect) {
        mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
        mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

        targetRotationRef.current.x = mouseRef.current.y * 0.3
        targetRotationRef.current.y = mouseRef.current.x * 0.3
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    const clock = new THREE.Clock()
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Smooth chip rotation with mouse interaction
      chipGroup.rotation.x += (targetRotationRef.current.x - chipGroup.rotation.x) * 0.05
      chipGroup.rotation.y += (targetRotationRef.current.y - chipGroup.rotation.y) * 0.05
      chipGroup.rotation.z = Math.sin(elapsedTime * 0.3) * 0.05

      // Floating animation
      chipGroup.position.y = Math.sin(elapsedTime * 0.5) * 0.1

      // Animate particles
      particles.forEach((particle, index) => {
        const userData = particle.userData

        // Orbital motion
        const orbitAngle = elapsedTime * userData.orbitSpeed + userData.phase
        particle.position.x = userData.orbitRadius * Math.sin(orbitAngle) * Math.cos(orbitAngle * 0.5)
        particle.position.y = userData.orbitRadius * Math.cos(orbitAngle) * Math.sin(orbitAngle * 0.7)
        particle.position.z = userData.orbitRadius * Math.sin(orbitAngle * 0.3)

        // Individual rotation
        particle.rotation.x += userData.rotationSpeed.x
        particle.rotation.y += userData.rotationSpeed.y
        particle.rotation.z += userData.rotationSpeed.z

        // Pulsing effect
        const scale = 1 + Math.sin(elapsedTime * 2 + index) * 0.2
        particle.scale.set(scale, scale, scale)
      })

      // Animate circuit traces
      traceGroup.children.forEach((child, index) => {
        if (child instanceof THREE.Mesh) {
          const pulseIntensity = (Math.sin(elapsedTime * 3 + index * 0.5) + 1) * 0.5
          if (child.material instanceof THREE.MeshPhysicalMaterial) {
            child.material.emissiveIntensity = 0.3 + pulseIntensity * 0.7
          }
        }
      })

      // Animate connection lines
      lineGroup.children.forEach((line, index) => {
        if (line instanceof THREE.Line && line.material instanceof THREE.LineBasicMaterial) {
          const flowIntensity = (Math.sin(elapsedTime * 2 + index) + 1) * 0.5
          line.material.opacity = 0.1 + flowIntensity * 0.3
        }
      })

      // Pulsing glow lights
      glowLight1.intensity = 1.5 + Math.sin(elapsedTime * 2) * 0.5
      glowLight2.intensity = 1.5 + Math.cos(elapsedTime * 2) * 0.5

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight

      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
      scene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose()
          if (child.material instanceof THREE.Material) {
            child.material.dispose()
          }
        }
      })
    }
  }, [intensity])

  return (
    <div
      ref={mountRef}
      className={`${styles.aiChip3D} ${className}`}
      data-intensity={intensity}
    />
  )
}