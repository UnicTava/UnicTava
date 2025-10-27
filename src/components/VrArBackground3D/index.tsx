'use client'

import React from 'react'
import styles from './VrArBackground3D.module.css'

interface VrArBackground3DProps {
  className?: string
  videoSrc?: string
}

export const VrArBackground3D: React.FC<VrArBackground3DProps> = ({
  className = '',
  videoSrc = '/videos/vr-ar-background.mp4'
}) => {
  return (
    <div className={`${styles.vrArBackground3D} ${className}`}>
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
