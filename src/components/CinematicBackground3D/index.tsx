'use client'

import React from 'react'
import styles from './CinematicBackground3D.module.css'

interface CinematicBackground3DProps {
  className?: string
  videoSrc?: string
}

export const CinematicBackground3D: React.FC<CinematicBackground3DProps> = ({
  className = '',
  videoSrc = '/videos/cinematica-background.mp4'
}) => {
  return (
    <div className={`${styles.cinematicBackground3D} ${className}`}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.backgroundVideo}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  )
}
