'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useTranslations } from 'next-intl'
import { ModalAI3D } from '@/components/ModalAI3D'
import { ModalCinematica3D } from '@/components/ModalCinematica3D'
import { ModalSimulacao3D } from '@/components/ModalSimulacao3D'
import { ModalEducacao3D } from '@/components/ModalEducacao3D'
import { ModalJogos3D } from '@/components/ModalJogos3D'
import { ModalRealidadeVirtual } from '@/components/ModalRealidadeVirtual'
import styles from './ServicesSection.module.css'

interface ServicesSectionProps {
  className?: string
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ className }) => {
  const t = useTranslations('services')
  const [isVisible, setIsVisible] = useState(false)
  const [visibleImages, setVisibleImages] = useState<number[]>([])
  const [isAIModalOpen, setIsAIModalOpen] = useState(false)
  const [isCinematicaModalOpen, setIsCinematicaModalOpen] = useState(false)
  const [isSimulacaoModalOpen, setIsSimulacaoModalOpen] = useState(false)
  const [isEducacaoModalOpen, setIsEducacaoModalOpen] = useState(false)
  const [isJogosModalOpen, setIsJogosModalOpen] = useState(false)
  const [isRealidadeVirtualModalOpen, setIsRealidadeVirtualModalOpen] = useState(false)
  const [clickedCard, setClickedCard] = useState<number | null>(null)
  const [scrollY, setScrollY] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const fullText = t('sectionTitle')

  const handleCardClick = (cardIndex: number) => {
    setClickedCard(cardIndex)

    // Abre o modal imediatamente com animação suave
    requestAnimationFrame(() => {
      switch (cardIndex) {
        case 0: // Card de programação (image-7.png) - Inteligência Artificial 3D
          setIsAIModalOpen(true)
          break
        case 1: // Card da claquete (image-9.png) - Cinematica 3D
          setIsCinematicaModalOpen(true)
          break
        case 2: // Card do avatar (image-1-5c505d.png) - Simulação 3D
          setIsSimulacaoModalOpen(true)
          break
        case 3: // Card dos óculos VR (image-5.png) - Educação e Treinamento 3D
          setIsEducacaoModalOpen(true)
          break
        case 4: // Card da claquete (image-3.png) - Desenvolvimento de Jogos 3D
          setIsJogosModalOpen(true)
          break
        case 5: // Card do chip AI (image-6.png) - Realidade Virtual e Aumentada
          setIsRealidadeVirtualModalOpen(true)
          break
        default:
          console.log(`Card ${cardIndex} clicked - Modal não implementado ainda`)
      }
      
      // Remove a classe clicked após a animação
      setTimeout(() => setClickedCard(null), 150)
    })
  }

  // Intersection Observer para detectar quando a seção está visível
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3, // Inicia a animação quando 30% da seção está visível
        rootMargin: '-50px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])


  // Animação em duas ondas das imagens quando a seção fica visível
  useEffect(() => {
    if (!isVisible) return

    console.log('🎬 Iniciando animação das imagens em duas ondas...')

    // Reset das imagens visíveis para garantir estado limpo
    setVisibleImages([])

    // Função para mostrar as imagens em duas ondas
    const showImagesInWaves = () => {
      // Primeira onda: cards 0, 1, 2 (linha superior) com pequeno stagger
      setTimeout(() => {
        setVisibleImages([0])
        console.log('Card 0 mostrado')
      }, 0)

      setTimeout(() => {
        setVisibleImages(prev => [...prev, 1])
        console.log('Card 1 mostrado')
      }, 150)

      setTimeout(() => {
        setVisibleImages(prev => [...prev, 2])
        console.log('Card 2 mostrado')
      }, 300)

      // Segunda onda: cards 3, 4, 5 (linha inferior) após delay
      setTimeout(() => {
        setVisibleImages(prev => [...prev, 3])
        console.log('Card 3 mostrado - segunda onda')
      }, 600)

      setTimeout(() => {
        setVisibleImages(prev => [...prev, 4])
        console.log('Card 4 mostrado')
      }, 750)

      setTimeout(() => {
        setVisibleImages(prev => [...prev, 5])
        console.log('Card 5 mostrado')
      }, 900)
    }

    // Inicia a animação das imagens com um pequeno delay após a seção ficar visível
    setTimeout(showImagesInWaves, 400)

  }, [isVisible])

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const speed = 0.5
        const yPos = rect.top * speed
        setScrollY(yPos)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services-section"
      className={`${styles.servicesContainer} ${className || ''}`}
    >
      {/* Background com imagem */}
      <div className={styles.backgroundImage} />

      <div
        className={styles.contentLayer}
        style={{
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      >
        {/* Subtítulo descritivo com fade-in suave */}
        <h3 className={`${styles.sectionSubtitle} ${isVisible ? styles.fadeIn : ''}`}>
          {fullText}
        </h3>

        {/* Grid de imagens 3D */}
        <div className={styles.imagesGrid}>
          {/* Linha superior */}
          <div className={styles.gridRow}>
            <div
              className={`${styles.imageFrame} ${visibleImages.includes(0) ? styles.imageVisible : styles.imageHidden} ${clickedCard === 0 ? styles.cardClicked : ''}`}
              onClick={() => handleCardClick(0)}
            >
              <div className={styles.card} />
              <div className={styles.imageContainer}>
                <img
                  src="/imagem/IA.png"
                  alt={t('altAI')}
                  className={styles.serviceImage}
                />
              </div>
            </div>

            <div
              className={`${styles.imageFrame} ${visibleImages.includes(1) ? styles.imageVisible : styles.imageHidden} ${clickedCard === 1 ? styles.cardClicked : ''}`}
              onClick={() => handleCardClick(1)}
            >
              <div className={styles.card} />
              <div className={styles.imageContainer}>
                <img
                  src="/imagem/CINEMATIC.png"
                  alt={t('altCinematic')}
                  className={styles.serviceImage}
                />
              </div>
            </div>

            <div
              className={`${styles.imageFrame} ${visibleImages.includes(2) ? styles.imageVisible : styles.imageHidden} ${clickedCard === 2 ? styles.cardClicked : ''}`}
              onClick={() => handleCardClick(2)}
            >
              <div className={styles.card} />
              <div className={styles.imageContainer}>
                <img
                  src="/imagem/SIMULATION.png"
                  alt={t('altSimulation')}
                  className={styles.serviceImage}
                />
              </div>
            </div>
          </div>

          {/* Linha inferior */}
          <div className={styles.gridRow}>
            <div
              className={`${styles.imageFrame} ${visibleImages.includes(3) ? styles.imageVisible : styles.imageHidden} ${clickedCard === 3 ? styles.cardClicked : ''}`}
              onClick={() => handleCardClick(3)}
            >
              <div className={styles.card} />
              <div className={styles.imageContainer}>
                <img
                  src="/imagem/EDUCATION.png"
                  alt={t('altEducation')}
                  className={styles.serviceImage}
                />
              </div>
            </div>

            <div
              className={`${styles.imageFrame} ${visibleImages.includes(4) ? styles.imageVisible : styles.imageHidden} ${clickedCard === 4 ? styles.cardClicked : ''}`}
              onClick={() => handleCardClick(4)}
            >
              <div className={styles.card} />
              <div className={styles.imageContainer}>
                <img
                  src="/imagem/GAMING.png"
                  alt={t('altGames')}
                  className={styles.serviceImage}
                />
              </div>
            </div>

            <div
              className={`${styles.imageFrame} ${visibleImages.includes(5) ? styles.imageVisible : styles.imageHidden} ${clickedCard === 5 ? styles.cardClicked : ''}`}
              onClick={() => handleCardClick(5)}
            >
              <div className={styles.card} />
              <div className={styles.imageContainer}>
                <img
                  src="/imagem/VR.png"
                  alt={t('altVR')}
                  className={styles.serviceImage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de IA 3D */}
      <ModalAI3D
        isOpen={isAIModalOpen}
        onClose={() => setIsAIModalOpen(false)}
      />

      {/* Modal de Cinemática 3D */}
      <ModalCinematica3D
        isOpen={isCinematicaModalOpen}
        onClose={() => setIsCinematicaModalOpen(false)}
      />

      {/* Modal de Simulação 3D */}
      <ModalSimulacao3D
        isOpen={isSimulacaoModalOpen}
        onClose={() => setIsSimulacaoModalOpen(false)}
      />

      {/* Modal de Educação e Treinamento 3D */}
      <ModalEducacao3D
        isOpen={isEducacaoModalOpen}
        onClose={() => setIsEducacaoModalOpen(false)}
      />

      {/* Modal de Desenvolvimento de Jogos 3D */}
      <ModalJogos3D
        isOpen={isJogosModalOpen}
        onClose={() => setIsJogosModalOpen(false)}
      />

      {/* Modal de Realidade Virtual e Aumentada */}
      <ModalRealidadeVirtual
        isOpen={isRealidadeVirtualModalOpen}
        onClose={() => setIsRealidadeVirtualModalOpen(false)}
      />
    </section>
  )
}