'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
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
      router.push('/servicos/educacao-treinamento-3d')
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
              {t('title')}
              <br />
              <span className={styles.highlight}>{t('titleHighlight')}</span>
            </h1>

            <p className={styles.description}>
              {t('description')}
            </p>

            <div className={styles.featuresGrid}>
              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>{t('feature1Title')}</h3>
                <p className={styles.featureText}>
                  {t('feature1Text')}
                </p>
              </div>

              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>{t('feature2Title')}</h3>
                <p className={styles.featureText}>
                  {t('feature2Text')}
                </p>
              </div>

              <div className={styles.feature}>
                <h3 className={styles.featureTitle}>{t('feature3Title')}</h3>
                <p className={styles.featureText}>
                  {t('feature3Text')}
                </p>
              </div>
            </div>
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