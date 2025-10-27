'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import styles from './LineEngine.module.css'

interface LineEngineProps {
  className?: string
}

export const LineEngine: React.FC<LineEngineProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const frameRef = useRef<number>(0)
  const timeRef = useRef(0)
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 })
  const particleSystemRef = useRef<THREE.Points | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    sceneRef.current = scene

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      10000
    )
    camera.position.z = 300
    cameraRef.current = camera

    // Renderer setup - expand to cover both sections
    const renderer = new THREE.WebGLRenderer({
      antialias: false, // Disable antialiasing for performance
      alpha: true,
      powerPreference: "high-performance"
    })

    // Calculate total height including content section
    const heroHeight = window.innerHeight
    const contentSection = document.querySelector('[class*="contentSection"]')
    const contentHeight = contentSection ? contentSection.clientHeight : 400
    const totalHeight = heroHeight + contentHeight

    renderer.setSize(window.innerWidth, totalHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)) // Limit pixel ratio
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create particle wave system - optimized for performance
    const PARTICLE_COUNT = 3000 // Reduced for better performance
    const GRID_SIZE = 60 // Reduced grid size
    const SPACING = 12 // Increased spacing

    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(PARTICLE_COUNT * 3)
    const colors = new Float32Array(PARTICLE_COUNT * 3)
    const sizes = new Float32Array(PARTICLE_COUNT)
    const phases = new Float32Array(PARTICLE_COUNT)

    // Initialize particles in a grid
    let index = 0
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        if (index >= PARTICLE_COUNT) break

        const x = (i - GRID_SIZE / 2) * SPACING
        const y = (j - GRID_SIZE / 2) * SPACING

        positions[index * 3] = x
        positions[index * 3 + 1] = y
        positions[index * 3 + 2] = 0

        // Random phase for each particle
        phases[index] = Math.random() * Math.PI * 2

        // Size variation - increased for better visibility
        sizes[index] = Math.random() * 6 + 3

        // Initial colors
        colors[index * 3] = 0.5
        colors[index * 3 + 1] = 0.5
        colors[index * 3 + 2] = 1.0

        index++
      }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('customColor', new THREE.BufferAttribute(colors, 3))
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
    geometry.setAttribute('phase', new THREE.BufferAttribute(phases, 1))

    // Shader material for wave effect
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        mousePosition: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        attribute float size;
        attribute vec3 customColor;
        attribute float phase;

        varying vec3 vColor;
        varying float vAlpha;

        uniform float time;
        uniform vec2 mousePosition;

        // Noise function for organic movement
        float noise(vec2 p) {
          return sin(p.x) * sin(p.y);
        }

        void main() {
          vec3 pos = position;
          vec3 originalPos = position;

          // Multiple wave layers for complex motion
          float frequency1 = 0.02;
          float frequency2 = 0.01;
          float frequency3 = 0.015;

          // Primary wave - large, slow movement
          float wave1 = sin(originalPos.x * frequency1 + time * 1.2) *
                       cos(originalPos.y * frequency1 + time * 0.8) * 40.0;

          // Secondary wave - medium movement
          float wave2 = sin(originalPos.y * frequency2 + time * 1.5 + phase) *
                       sin(originalPos.x * frequency2 + time * 1.0) * 25.0;

          // Tertiary wave - small, fast ripples
          float wave3 = sin((originalPos.x + originalPos.y) * frequency3 + time * 2.0) * 15.0;

          // Combine waves for Z displacement
          pos.z = wave1 + wave2 + wave3;

          // Add floating dust movement
          float dustX = sin(time * 0.7 + phase * 2.0) * 8.0;
          float dustY = cos(time * 0.5 + phase * 3.0) * 8.0;
          pos.x += dustX + noise(vec2(time * 0.3, phase)) * 5.0;
          pos.y += dustY + noise(vec2(phase, time * 0.4)) * 5.0;

          // Mouse interaction creates ripples
          vec2 mouseOffset = mousePosition * 200.0;
          float mouseDist = distance(originalPos.xy, mouseOffset);
          float mouseInfluence = smoothstep(300.0, 0.0, mouseDist);

          // Create expanding ripple from mouse
          float ripple = sin(mouseDist * 0.05 - time * 4.0) * mouseInfluence * 30.0;
          pos.z += ripple;

          // Dynamic color based on wave position and time
          float colorShift = (pos.z + 100.0) / 200.0;
          float timeShift = sin(time * 0.5) * 0.3;

          vColor = mix(
            vec3(0.1 + timeShift, 0.4, 1.0),  // Blue
            vec3(1.0, 0.1 + timeShift, 0.6),  // Pink/Purple
            colorShift + sin(time + phase) * 0.2
          );

          // Alpha based on z depth with pulsing
          float pulse = sin(time * 2.0 + phase) * 0.2 + 0.8;
          vAlpha = (1.0 - abs(pos.z) / 250.0) * pulse;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;

          // Perspective size with slight pulsing
          float sizePulse = 1.0 + sin(time * 3.0 + phase) * 0.2;
          gl_PointSize = size * sizePulse * (300.0 / -mvPosition.z);
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec2 center = gl_PointCoord - 0.5;
          float dist = length(center);

          if (dist > 0.5) discard;

          // Create soft glow effect
          float strength = 1.0 - dist * 2.0;
          strength = pow(strength, 2.0);

          float alpha = strength * vAlpha * 0.9;

          // Add slight color enhancement for glow
          vec3 glowColor = vColor * (1.0 + strength * 0.5);

          gl_FragColor = vec4(glowColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    })

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)
    particleSystemRef.current = particles

    // Mouse tracking for expanded area
    const handleMouseMove = (event: MouseEvent) => {
      // Account for scroll position in the expanded canvas
      const scrollY = window.scrollY
      const relativeY = event.clientY + scrollY

      mouseRef.current.targetX = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.targetY = -(relativeY / totalHeight) * 2 + 1
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (event.touches.length > 0) {
        const scrollY = window.scrollY
        const relativeY = event.touches[0].clientY + scrollY

        mouseRef.current.targetX = (event.touches[0].clientX / window.innerWidth) * 2 - 1
        mouseRef.current.targetY = -(relativeY / totalHeight) * 2 + 1
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove)

    // Animation loop with 60fps optimization
    let lastTime = performance.now()
    const targetFPS = 60
    const frameInterval = 1000 / targetFPS

    const animate = (currentTime: number = performance.now()) => {
      frameRef.current = requestAnimationFrame(animate)

      // Frame rate limiting for consistent 60fps
      const deltaTime = currentTime - lastTime
      if (deltaTime < frameInterval) return

      // Adjust for any frame drops
      lastTime = currentTime - (deltaTime % frameInterval)

      timeRef.current += 0.015 // Slightly faster for more fluid motion

      // Smooth mouse interpolation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.1
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.1

      // Update uniforms
      if (material) {
        material.uniforms.time.value = timeRef.current
        material.uniforms.mousePosition.value.set(mouseRef.current.x, mouseRef.current.y)
      }

      // Update colors dynamically for wave effect - optimized for 60fps
      if (Math.floor(timeRef.current * 30) % 2 === 0) { // Update every 2nd frame at 60fps
        const colors = geometry.attributes.customColor.array as Float32Array
        const positions = geometry.attributes.position.array as Float32Array

        for (let i = 0; i < PARTICLE_COUNT; i++) {
          const x = positions[i * 3]
          const y = positions[i * 3 + 1]

          // Create flowing color waves
          const waveOffset = timeRef.current * 1.5
          const colorWave = Math.sin(x * 0.003 + waveOffset) * 0.5 + 0.5
          const colorWave2 = Math.cos(y * 0.003 + waveOffset * 0.7) * 0.5 + 0.5

          // Gradient from blue to purple to pink
          colors[i * 3] = colorWave * 0.6 + 0.1 // R
          colors[i * 3 + 1] = colorWave2 * 0.2 + 0.1 // G
          colors[i * 3 + 2] = (1 - colorWave * 0.5) * 0.9 + 0.1 // B
        }

        geometry.attributes.customColor.needsUpdate = true
      }

      // Gentle camera movement
      if (cameraRef.current) {
        cameraRef.current.position.x = mouseRef.current.x * 30
        cameraRef.current.position.y = mouseRef.current.y * 20
        cameraRef.current.lookAt(0, 0, 0)
      }

      // Render
      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current)
      }
    }

    animate()

    // Handle resize for expanded area
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return

      // Recalculate total height including content section
      const heroHeight = window.innerHeight
      const contentSection = document.querySelector('[class*="contentSection"]')
      const contentHeight = contentSection ? contentSection.clientHeight : 400
      const newTotalHeight = heroHeight + contentHeight

      cameraRef.current.aspect = window.innerWidth / window.innerHeight
      cameraRef.current.updateProjectionMatrix()
      rendererRef.current.setSize(window.innerWidth, newTotalHeight)
    }
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)

      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }

      if (particles) {
        particles.geometry.dispose()
        if (particles.material instanceof THREE.Material) {
          particles.material.dispose()
        }
      }

      if (rendererRef.current) {
        rendererRef.current.dispose()
        if (containerRef.current && rendererRef.current.domElement) {
          containerRef.current.removeChild(rendererRef.current.domElement)
        }
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`${styles.lineEngine} ${className || ''}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none'
      }}
    />
  )
}