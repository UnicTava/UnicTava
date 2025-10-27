'use client'

import React from 'react'
import styles from './Card3D.module.css'

interface Card3DProps {
  className?: string
  delay?: number
  imageUrl?: string
}

export const Card3D: React.FC<Card3DProps> = ({ 
  className,
  delay = 0,
  imageUrl
}) => {
  return (
    <div 
      className={`${styles.card} ${className || ''}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {imageUrl && (
        <div 
          className={styles.cardImage}
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
      )}
      <div className={styles.cardOverlay} />
    </div>
  )
}