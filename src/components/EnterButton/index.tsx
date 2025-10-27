'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { StardustCanvas } from '@/components/StardustCanvas'
import styles from './EnterButton.module.css'

interface EnterButtonProps {
  className?: string
}

export const EnterButton: React.FC<EnterButtonProps> = ({ className }) => {
  const [isExpanding, setIsExpanding] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setIsExpanding(true)
    
    // Navegua para a página principal após a animação
    setTimeout(() => {
      router.push('/home')
    }, 1500)
  }

  return (
    <div className={`${styles.container} ${className || ''}`}>
      {/* Stardust Canvas Animation */}
      <StardustCanvas isExpanding={isExpanding} />

      {/* Animação de fundo central */}
      <div className={`${styles.backgroundAnimation} ${isExpanding ? styles.fadeOut : ''}`} />
      
      {/* Botão ENTRE */}
      <button
        className={`${styles.enterButton} ${isExpanding ? styles.expanding : ''}`}
        onClick={handleClick}
        disabled={isExpanding}
      >
        {!isExpanding && 'ENTRE'}
      </button>
    </div>
  )
}