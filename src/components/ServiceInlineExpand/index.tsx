'use client'

import React, { useEffect, useRef, useState } from 'react'
import styles from './ServiceInlineExpand.module.css'

interface ServiceInlineExpandProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  cardIndex: number
  className?: string
}

export const ServiceInlineExpand: React.FC<ServiceInlineExpandProps> = ({
  isOpen,
  onClose,
  children,
  cardIndex,
  className
}) => {
  const expandRef = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true)
      // Pequeno delay para garantir que o elemento está no DOM
      setTimeout(() => {
        setIsExpanded(true)
        // Scroll suave para o conteúdo expandido
        if (expandRef.current) {
          expandRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest'
          })
        }
      }, 10)
    } else {
      setIsExpanded(false)
      // Remove do DOM após animação
      setTimeout(() => {
        setShouldRender(false)
      }, 500)
    }
  }, [isOpen])

  const handleClose = () => {
    setIsExpanded(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  if (!shouldRender) return null

  // Determina em qual linha o card está (0-2 = linha superior, 3-5 = linha inferior)
  const isTopRow = cardIndex < 3

  return (
    <div
      ref={expandRef}
      className={`${styles.expandContainer} ${isExpanded ? styles.expanded : ''} ${className || ''}`}
      data-row={isTopRow ? 'top' : 'bottom'}
    >
      <div className={styles.expandContent}>
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Fechar"
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

      {/* Seta indicadora apontando para o card */}
      <div
        className={styles.arrow}
        style={{
          left: `${16.66 + (cardIndex % 3) * 33.33}%`
        }}
      />
    </div>
  )
}