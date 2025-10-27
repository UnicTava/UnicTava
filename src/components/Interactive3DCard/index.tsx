'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import styles from './Interactive3DCard.module.css'

interface Interactive3DCardProps {
  imageSrc: string
  imageAlt: string
  className?: string
}

export const Interactive3DCard: React.FC<Interactive3DCardProps> = ({
  imageSrc,
  imageAlt,
  className = ''
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Calculate rotation based on mouse position
    const x = e.clientX - centerX
    const y = e.clientY - centerY

    // Limit rotation to create smooth effect
    const maxRotation = 20
    const xRotation = -(y / (rect.height / 2)) * maxRotation
    const yRotation = (x / (rect.width / 2)) * maxRotation

    setRotateX(xRotation)
    setRotateY(yRotation)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div
      ref={cardRef}
      className={`${styles.interactive3DCard} ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `
          perspective(1000px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          translateZ(${isHovered ? '80px' : '0px'})
          scale(${isHovered ? 1.15 : 1})
        `
      }}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={600}
          height={600}
          style={{
            objectFit: 'contain',
            filter: 'brightness(1.2) contrast(1.1)',
            width: '100%',
            height: '100%'
          }}
          priority
        />
      </div>

      {/* 3D Glow Effects */}
      <div className={styles.glowEffects}>
        <div className={styles.glowTop} />
        <div className={styles.glowBottom} />
        <div className={styles.glowLeft} />
        <div className={styles.glowRight} />
      </div>

      {/* Dynamic shadow based on hover */}
      <div
        className={styles.dynamicShadow}
        style={{
          transform: `
            translateX(${-rotateY * 2}px)
            translateY(${-rotateX * 2}px)
            translateZ(-100px)
            scale(${isHovered ? 1.2 : 1})
          `,
          opacity: isHovered ? 0.3 : 0.1
        }}
      />
    </div>
  )
}