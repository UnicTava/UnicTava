'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTranslations } from 'next-intl'
import styles from './ServiceExpandModal.module.css'

interface ServiceExpandModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  originRect?: DOMRect
  className?: string
}

export const ServiceExpandModal: React.FC<ServiceExpandModalProps> = ({
  isOpen,
  onClose,
  children,
  originRect,
  className
}) => {
  const t = useTranslations('accessibility')
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    if (isOpen && originRect) {
      // Pequeno delay para garantir que o modal está no DOM
      setTimeout(() => {
        setIsExpanded(true)
      }, 10)
    } else {
      setIsExpanded(false)
    }
  }, [isOpen, originRect])

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
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEscapeKey)
    return () => {
      document.removeEventListener('keydown', handleEscapeKey)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsExpanded(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === modalRef.current) {
      handleClose()
    }
  }

  if (!isOpen) return null

  // Calcula as posições iniciais baseadas no card clicado
  const initialStyle = originRect ? {
    left: `${originRect.left}px`,
    top: `${originRect.top}px`,
    width: `${originRect.width}px`,
    height: `${originRect.height}px`,
  } : {}

  return (
    <div
      ref={modalRef}
      className={`${styles.modalBackdrop} ${isExpanded ? styles.backdropVisible : ''}`}
      onClick={handleBackdropClick}
    >
      <div
        ref={contentRef}
        className={`${styles.modalContent} ${isExpanded ? styles.expanded : ''} ${className || ''}`}
        style={!isExpanded ? initialStyle : {}}
      >
        <button
          className={styles.closeButton}
          onClick={handleClose}
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
        <div className={`${styles.contentWrapper} ${isExpanded ? styles.contentVisible : ''}`}>
          {children}
        </div>
      </div>
    </div>
  )
}