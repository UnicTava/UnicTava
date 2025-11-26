'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { InlineModal3D } from '@/components/InlineModal3D'
import { Button } from '@/components/Button'
import { CallMadeIcon } from '@/components/Button/icons'
import { PageTransition } from '@/components/PageTransition'
import styles from './ModalAI3D.module.css'

interface ModalAI3DProps {
  isOpen: boolean
  onClose: () => void
}

export const ModalAI3D: React.FC<ModalAI3DProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('modals.ai')
  const router = useRouter()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isExpanding, setIsExpanding] = useState(false)

  const handleSaibaMais = () => {
    // Inicia a expansão do modal
    setIsExpanding(true)

    // Após um breve delay, inicia a transição
    setTimeout(() => {
      setIsTransitioning(true)
    }, 200)

    // Navega após a animação completar
    setTimeout(() => {
      router.push('/servicos/inteligencia-artificial-3d')
    }, 1400)
  }

  return (
    <>
      <InlineModal3D isOpen={isOpen} onClose={onClose} className={`${styles.aiModal} ${isExpanding ? styles.expanding : ''}`}>
        <div className={`${styles.modalContainer} ${isExpanding ? styles.expanding : ''}`}>
          {/* Seção Esquerda - Conteúdo */}
          <div className={styles.leftSection}>
            <div className={styles.content}>
            <h1 className={styles.title}>
              <span className={styles.highlight}>{t('titleHighlight')}</span>
            </h1>

            <h2 className={styles.subtitle}>
              {t('subtitle')}
            </h2>

            <p className={styles.description}>
              {t('description')}
            </p>
          </div>
        </div>

        {/* Seção Direita - Visual 3D */}
        <div className={styles.rightSection}>
          <div className={styles.visualContainer}>
            <img
              src="/imagem/IA.png"
              alt={t('imageAlt')}
              className={styles.aiVisual}
            />
            <div className={styles.imageGlow}></div>
          </div>

          <div className={styles.buttonContainer}>
            <Button
              variant="secondary"
              size="small"
              icon={<CallMadeIcon />}
              onClick={handleSaibaMais}
              className={styles.ctaButton}
            >
              {t('learnMore')}
            </Button>
          </div>
        </div>
        </div>
      </InlineModal3D>

      {/* PageTransition quando expandir - temporariamente desabilitado */}
      {/* {isTransitioning && <PageTransition />} */}
    </>
  )
}