'use client'

import React from 'react'
import styles from './JogosBackground3D.module.css'

interface JogosBackground3DProps {
  className?: string
  videoSrc?: string
}

export const JogosBackground3D: React.FC<JogosBackground3DProps> = ({
  className = '',
  videoSrc = '/videos/jogos-background.mp4'
}) => {
  return (
    <div className={`${styles.jogosBackground3D} ${className}`}>
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
