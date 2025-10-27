'use client'

import React, { useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import styles from './Modal3D.module.css'

interface Modal3DProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export const Modal3D: React.FC<Modal3DProps> = ({
  isOpen,
  onClose,
  children,
  className
}) => {
  const t = useTranslations('accessibility')
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const originalOverflow = document.body.style.overflow

    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalOverflow || 'auto'
    }

    return () => {
      document.body.style.overflow = originalOverflow || 'auto'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen, onClose])

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === modalRef.current) {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      ref={modalRef}
      className={`${styles.modalBackdrop} ${isOpen ? styles.backdropVisible : ''}`}
      onClick={handleBackdropClick}
    >
      <div
        ref={contentRef}
        className={`${styles.modalContent} ${isOpen ? styles.contentVisible : ''} ${className || ''}`}
      >
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label={t('closeModal')}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  )
}