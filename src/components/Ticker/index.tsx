'use client'

import React from 'react'
import Image from 'next/image'
import styles from './Ticker.module.css'

interface TickerProps {
  images?: string[]
  text?: string
  className?: string
  speed?: number
  imageHeight?: number
}

const Ticker: React.FC<TickerProps> = ({
  images,
  text,
  className,
  speed = 40,
  imageHeight = 40
}) => {
  const renderContent = () => {
    if (images && images.length > 0) {
      return images.map((imageSrc, index) => (
        <div key={index} className={styles.imageWrapper}>
          <Image
            src={imageSrc}
            alt={`Logo ${index + 1}`}
            width={imageHeight * 2}
            height={imageHeight}
            className={styles.tickerImage}
            style={{ height: `${imageHeight}px`, width: 'auto', objectFit: 'contain' }}
          />
        </div>
      ))
    }
    return <span className={styles.tickerText}>{text}</span>
  }

  return (
    <div className={`${styles.tickerContainer} ${className || ''}`}>
      <div
        className={styles.tickerContent}
        style={{ animationDuration: `${speed}s` }}
      >
        <div className={styles.tickerGroup}>
          {renderContent()}
        </div>
        <div className={styles.tickerGroup}>
          {renderContent()}
        </div>
        <div className={styles.tickerGroup}>
          {renderContent()}
        </div>
      </div>
    </div>
  )
}

export default Ticker