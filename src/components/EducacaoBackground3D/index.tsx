'use client'

import React from 'react'
import styles from './EducacaoBackground3D.module.css'

interface EducacaoBackground3DProps {
  className?: string
  videoSrc?: string
}

export const EducacaoBackground3D: React.FC<EducacaoBackground3DProps> = ({
  className = '',
  videoSrc = '/videos/educacao-background.mp4'
}) => {
  return (
    <div className={`${styles.educacaoBackground3D} ${className}`}>
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
