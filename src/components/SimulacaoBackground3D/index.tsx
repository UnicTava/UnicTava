'use client'

import React from 'react'
import styles from './SimulacaoBackground3D.module.css'

interface SimulacaoBackground3DProps {
  className?: string
  videoSrc?: string
}

export const SimulacaoBackground3D: React.FC<SimulacaoBackground3DProps> = ({
  className = '',
  videoSrc = '/videos/simulacao-background.mp4'
}) => {
  return (
    <div className={`${styles.simulacaoBackground3D} ${className}`}>
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
