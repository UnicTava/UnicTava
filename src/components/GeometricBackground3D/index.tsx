'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import styles from './GeometricBackground3D.module.css'

interface GeometricShape3D {
  mesh: THREE.Mesh
  velocity: THREE.Vector3
  rotationSpeed: THREE.Vector3
  targetY: number
  hasPinkGlow: boolean
  settled: boolean
}

interface GeometricBackground3DProps {
  className?: string
  intensity?: 'low' | 'medium' | 'high'
}

export const GeometricBackground3D: React.FC<GeometricBackground3DProps> = ({
  className = '',
  intensity = 'medium'
}) => {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const frameRef = useRef<number>(0)
  const shapesRef = useRef<GeometricShape3D[]>([])

  useEffect(() => {
    if (!mountRef.current) return

    console.log('GeometricBackground3D mounting...')
    const width = mountRef.current.clientWidth
    const height = mountRef.current.clientHeight

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.set(0, 0, 100)
    camera.lookAt(0, 0, 0)

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: intensity === 'high' ? 'high-performance' : 'default'
    })
    rendererRef.current = renderer
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    // Lighting - enhanced for better visibility
    const ambientLight = new THREE.AmbientLight(0x9692e6, 1.2)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(10, 10, 5)
    scene.add(directionalLight)

    const directionalLight2 = new THREE.DirectionalLight(0xff64c8, 0.6)
    directionalLight2.position.set(-10, -10, 5)
    scene.add(directionalLight2)

    // Create geometric shapes
    const shapes: GeometricShape3D[] = []
    const shapeCount = intensity === 'high' ? 25 : intensity === 'medium' ? 20 : 15

    for (let i = 0; i < shapeCount; i++) {
      // Geometry - mix of different shapes like in the card
      const size = 10 + Math.random() * 15
      let geometry: THREE.BufferGeometry

      const shapeType = Math.random()
      if (shapeType < 0.4) {
        // Square/Cube
        geometry = new THREE.BoxGeometry(size, size, size * 0.4)
      } else if (shapeType < 0.7) {
        // Rectangle
        geometry = new THREE.BoxGeometry(size * 1.5, size, size * 0.4)
      } else {
        // Trapezoid-like shape (using BoxGeometry)
        geometry = new THREE.BoxGeometry(size, size * 1.2, size * 0.4)
      }

      // Material - dark with subtle variations (matching card style)
      const hasPinkGlow = Math.random() > 0.7

      const material = new THREE.MeshPhysicalMaterial({
        color: hasPinkGlow ? 0x4a3a4e : 0x3a3a45,
        metalness: 0.7,
        roughness: 0.15,
        clearcoat: 0.8,
        clearcoatRoughness: 0.2,
        emissive: hasPinkGlow ? 0xff64c8 : 0x9692e6,
        emissiveIntensity: hasPinkGlow ? 0.25 : 0.15,
        transparent: true,
        opacity: 0.95,
        side: THREE.DoubleSide
      })

      const mesh = new THREE.Mesh(geometry, material)

      // Random starting position (above viewport)
      mesh.position.x = (Math.random() - 0.5) * 120
      mesh.position.y = 60 + Math.random() * 80
      mesh.position.z = (Math.random() - 0.5) * 50

      // Random rotation
      mesh.rotation.x = Math.random() * Math.PI
      mesh.rotation.y = Math.random() * Math.PI
      mesh.rotation.z = Math.random() * Math.PI

      scene.add(mesh)

      // Add pink glow edges for some shapes (matching card style)
      if (hasPinkGlow) {
        const edgeGeometry = new THREE.EdgesGeometry(geometry)
        const edgeMaterial = new THREE.LineBasicMaterial({
          color: 0xff64c8,
          linewidth: 2,
          transparent: true,
          opacity: 0.6
        })
        const edges = new THREE.LineSegments(edgeGeometry, edgeMaterial)
        mesh.add(edges)
      }

      shapes.push({
        mesh,
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          -0.3 - Math.random() * 0.2,
          (Math.random() - 0.5) * 0.02
        ),
        rotationSpeed: new THREE.Vector3(
          Math.random() * 0.02 - 0.01,
          Math.random() * 0.02 - 0.01,
          Math.random() * 0.02 - 0.01
        ),
        targetY: -30 + Math.random() * 60,
        hasPinkGlow,
        settled: false
      })
    }

    shapesRef.current = shapes
    console.log(`Created ${shapes.length} animated shapes`)

    // Add some static background shapes for depth (very subtle)
    for (let i = 0; i < 8; i++) {
      const bgSize = 8 + Math.random() * 12
      const bgGeometry = new THREE.BoxGeometry(bgSize, bgSize, bgSize * 0.15)

      const bgMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x0a0a0f,
        metalness: 0.95,
        roughness: 0.6,
        transparent: true,
        opacity: 0.1,
        side: THREE.DoubleSide
      })

      const bgMesh = new THREE.Mesh(bgGeometry, bgMaterial)
      bgMesh.position.x = (Math.random() - 0.5) * 100
      bgMesh.position.y = (Math.random() - 0.5) * 60
      bgMesh.position.z = -40 - Math.random() * 20

      bgMesh.rotation.x = Math.random() * Math.PI
      bgMesh.rotation.y = Math.random() * Math.PI

      scene.add(bgMesh)
    }

    // Animation loop
    const clock = new THREE.Clock()
    const animate = () => {
      frameRef.current = requestAnimationFrame(animate)
      const elapsedTime = clock.getElapsedTime()

      // Animate shapes
      shapesRef.current.forEach((shape, index) => {
        if (!shape.settled) {
          // Falling motion
          shape.mesh.position.add(shape.velocity)

          // Check if reached target
          if (shape.mesh.position.y <= shape.targetY) {
            shape.settled = true
            shape.velocity.set(0, 0, 0)

            // Add settling bounce effect
            shape.mesh.position.y = shape.targetY
          }
        } else {
          // Gentle floating for settled shapes
          shape.mesh.position.y = shape.targetY + Math.sin(elapsedTime * 0.5 + index) * 0.5
          shape.mesh.position.x += Math.sin(elapsedTime * 0.3 + index) * 0.01
        }

        // Continuous rotation
        shape.mesh.rotation.x += shape.rotationSpeed.x
        shape.mesh.rotation.y += shape.rotationSpeed.y
        shape.mesh.rotation.z += shape.rotationSpeed.z

        // Pulsing glow effect for pink shapes
        if (shape.hasPinkGlow && shape.mesh.material instanceof THREE.MeshPhysicalMaterial) {
          shape.mesh.material.emissiveIntensity = 0.25 + Math.sin(elapsedTime * 2 + index) * 0.15
        }

        // Reset shapes that fall too far or have settled for too long
        if (shape.mesh.position.y < -80 || (shape.settled && Math.random() < 0.003)) {
          shape.mesh.position.x = (Math.random() - 0.5) * 120
          shape.mesh.position.y = 60 + Math.random() * 80
          shape.mesh.position.z = (Math.random() - 0.5) * 50
          shape.velocity.y = -0.3 - Math.random() * 0.2
          shape.settled = false
        }
      })

      // Subtle camera movement
      camera.position.x = Math.sin(elapsedTime * 0.1) * 2
      camera.position.y = Math.cos(elapsedTime * 0.15) * 2
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current) return
      const newWidth = mountRef.current.clientWidth
      const newHeight = mountRef.current.clientHeight

      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('resize', handleResize)

    // Mouse interaction
    const handleMouseMove = (event: MouseEvent) => {
      const mouseX = (event.clientX / width - 0.5) * 2
      const mouseY = -(event.clientY / height - 0.5) * 2

      shapesRef.current.forEach((shape, index) => {
        if (shape.settled) {
          const force = 0.05
          shape.mesh.position.x += mouseX * force * (index % 3 + 1) * 0.1
          shape.mesh.position.z += mouseY * force * (index % 3 + 1) * 0.1
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
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
      className={`${styles.geometricBackground3D} ${className}`}
      data-intensity={intensity}
    />
  )
}