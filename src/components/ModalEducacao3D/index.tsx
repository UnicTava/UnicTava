'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations, useLocale } from 'next-intl'
import { InlineModal3D } from '@/components/InlineModal3D'
import { Button } from '@/components/Button'
import { CallMadeIcon } from '@/components/Button/icons'
import { PageTransition } from '@/components/PageTransition'
import styles from './ModalEducacao3D.module.css'

interface ModalEducacao3DProps {
  isOpen: boolean
  onClose: () => void
}

export const ModalEducacao3D: React.FC<ModalEducacao3DProps> = ({ isOpen, onClose }) => {
  const t = useTranslations('modals.education')
  const router = useRouter()
  const locale = useLocale()
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
      router.push(`/${locale}/servicos/educacao-treinamento-3d`)
    }, 1400)
  }

  return (
    <>
      <InlineModal3D isOpen={isOpen} onClose={onClose} className={`${styles.educacaoModal} ${isExpanding ? styles.expanding : ''}`}>
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
              src="/imagem/EDUCATION.png"
              alt={t('imageAlt')}
              className={styles.educacaoVisual}
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
    </>
  )
}