'use client'

import { useState, type MouseEvent } from 'react'
import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'
import { PageTransition } from '@/components/PageTransition'
import { useTranslations } from 'next-intl'
import { StardustCanvas } from '@/components/StardustCanvas'
import {
  GamificationIcon,
  VirtualClassroomIcon,
  LabSimulationIcon,
  OperationalTrainingIcon,
  MultimediaIcon,
  Avatar3DIcon,
  LLMIcon,
  ServerIcon,
  DashboardIcon,
  JudicialSimIcon,
  IndustrialToolIcon,
  EducationalSimIcon
} from '@/components/Icons/AIServiceIcons'
import styles from './educacao3d.module.css'

export default function EducacaoTreinamento3DPage() {
  const t = useTranslations('educationService')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [expandedWhatItDoes, setExpandedWhatItDoes] = useState<number | null>(null)
  const [openModal, setOpenModal] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const toggleWhatItDoes = (index: number) => {
    setExpandedWhatItDoes(expandedWhatItDoes === index ? null : index)
  }

  const handleCardMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const percentX = (event.clientX - rect.left) / rect.width
    const percentY = (event.clientY - rect.top) / rect.height

    const rotateX = (0.5 - percentY) * 12
    const rotateY = (percentX - 0.5) * 12

    card.style.setProperty('--card-rotate-x', `${rotateX}deg`)
    card.style.setProperty('--card-rotate-y', `${rotateY}deg`)
    card.style.setProperty('--pointer-x', `${percentX * 100}%`)
    card.style.setProperty('--pointer-y', `${percentY * 100}%`)
  }

  const resetCardTilt = (event: MouseEvent<HTMLDivElement>) => {
    const card = event.currentTarget
    card.style.setProperty('--card-rotate-x', '0deg')
    card.style.setProperty('--card-rotate-y', '0deg')
    card.style.setProperty('--pointer-x', '50%')
    card.style.setProperty('--pointer-y', '50%')
  }

  return (
    <PageTransition>
      <main className={styles.main}>
      <StardustCanvas mode="page" />
      <Navigation />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroGrid}>
          {/* Left Content */}
          <div className={styles.heroLeft}>
            <div className={styles.heroContent}>
              <div className={styles.titleContainer}>
                <h1 className={styles.mainTitle}>
                  {t('hero.mainTitle')}
                </h1>
                <h2 className={styles.heroTitle}>
                  {t('hero.title')}
                </h2>
              </div>
            </div>

            <p className={styles.heroDescription}>
              {t('hero.description')}
            </p>
          </div>

          {/* Right Video Card */}
          <div className={styles.heroRight}>
            <div className={styles.chipContainer}>
              <div className={styles.videoCard}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.cardVideo}
                >
                  <source src="/video/EDUCATION.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que fazemos Section */}
      <section className={styles.whatItDoesSection}>
        <div className={styles.sectionTitleWrapper}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionTitle}>{t('whatItDoes.title')}</h2>
          </div>
        </div>
        <div className={styles.whatItDoesContainer}>
          {/* Item 1 */}
          <div className={styles.whatItDoesItem}>
            <div className={styles.whatItDoesQuestion} onClick={() => toggleWhatItDoes(0)}>
              <span>{t('whatItDoes.item1Title')}</span>
              <span className={styles.whatItDoesIcon}>{expandedWhatItDoes === 0 ? '−' : '+'}</span>
            </div>
            {expandedWhatItDoes === 0 && (
              <div className={styles.whatItDoesAnswer}>
                <p>{t('whatItDoes.item1Text')}</p>
              </div>
            )}
          </div>

          {/* Item 2 */}
          <div className={styles.whatItDoesItem}>
            <div className={styles.whatItDoesQuestion} onClick={() => toggleWhatItDoes(1)}>
              <span>{t('whatItDoes.item2Title')}</span>
              <span className={styles.whatItDoesIcon}>{expandedWhatItDoes === 1 ? '−' : '+'}</span>
            </div>
            {expandedWhatItDoes === 1 && (
              <div className={styles.whatItDoesAnswer}>
                <p>{t('whatItDoes.item2Text')}</p>
              </div>
            )}
          </div>

          {/* Item 3 */}
          <div className={styles.whatItDoesItem}>
            <div className={styles.whatItDoesQuestion} onClick={() => toggleWhatItDoes(2)}>
              <span>{t('whatItDoes.item3Title')}</span>
              <span className={styles.whatItDoesIcon}>{expandedWhatItDoes === 2 ? '−' : '+'}</span>
            </div>
            {expandedWhatItDoes === 2 && (
              <div className={styles.whatItDoesAnswer}>
                <p>{t('whatItDoes.item3Text')}</p>
              </div>
            )}
          </div>

          {/* Item 4 */}
          <div className={styles.whatItDoesItem}>
            <div className={styles.whatItDoesQuestion} onClick={() => toggleWhatItDoes(3)}>
              <span>{t('whatItDoes.item4Title')}</span>
              <span className={styles.whatItDoesIcon}>{expandedWhatItDoes === 3 ? '−' : '+'}</span>
            </div>
            {expandedWhatItDoes === 3 && (
              <div className={styles.whatItDoesAnswer}>
                <p>{t('whatItDoes.item4Text')}</p>
              </div>
            )}
          </div>

          {/* Item 5 */}
          <div className={styles.whatItDoesItem}>
            <div className={styles.whatItDoesQuestion} onClick={() => toggleWhatItDoes(4)}>
              <span>{t('whatItDoes.item5Title')}</span>
              <span className={styles.whatItDoesIcon}>{expandedWhatItDoes === 4 ? '−' : '+'}</span>
            </div>
            {expandedWhatItDoes === 4 && (
              <div className={styles.whatItDoesAnswer}>
                <p>{t('whatItDoes.item5Text')}</p>
              </div>
            )}
          </div>

          {/* Item 6 */}
          <div className={styles.whatItDoesItem}>
            <div className={styles.whatItDoesQuestion} onClick={() => toggleWhatItDoes(5)}>
              <span>{t('whatItDoes.item6Title')}</span>
              <span className={styles.whatItDoesIcon}>{expandedWhatItDoes === 5 ? '−' : '+'}</span>
            </div>
            {expandedWhatItDoes === 5 && (
              <div className={styles.whatItDoesAnswer}>
                <p>{t('whatItDoes.item6Text')}</p>
              </div>
            )}
          </div>
        </div>
        <p className={styles.whatItDoesConclusion}>{t('whatItDoes.conclusion')}</p>
      </section>

      {/* Vantagens - BENTO GRID */}
      <section className={styles.vantagensSection}>
        <div className={styles.sectionTitleWrapper}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionTitle}>{t('advantages.title')}</h2>
          </div>
        </div>
        <div className={styles.advantagesBentoGrid}>
          {/* Row 1 - Card Normal: Aprendizagem acelerada */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item1Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item1Text')}</p>
          </div>

          {/* Row 1 - Card Normal: Maior engajamento */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item2Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item2Text')}</p>
          </div>

          {/* Row 2 - Card Grande: Totalmente adaptável */}
          <div className={`${styles.advantageCard} ${styles.cardLarge}`}>
            <h3 className={styles.advantageTitle}>{t('advantages.item3Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item3Text')}</p>
          </div>

          {/* Row 2 - Card Normal: Redução de custos */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item4Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item4Text')}</p>
          </div>

          {/* Row 3 - Card Normal: Replicável e escalável */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item5Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item5Text')}</p>
          </div>

          {/* Row 3 - Card Grande: Resultados mensuráveis */}
          <div className={`${styles.advantageCard} ${styles.cardLarge}`}>
            <h3 className={styles.advantageTitle}>{t('advantages.item6Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item6Text')}</p>
          </div>
        </div>
      </section>

      {/* Tecnologias + Tipos de Experiências - SEÇÃO UNIFICADA */}
      <section className={styles.tecnologiasSection}>
        <div className={styles.sectionTitleWrapper}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionTitle}>{t('experienceTypes.title')}</h2>
          </div>
        </div>

        <div className={styles.technologiesGrid}>
          {/* Card 1: Gráficos 3D Avançados */}
          <div className={styles.techCard} onClick={() => setOpenModal(1)}>
            <div className={styles.techCardIconWrapper}>
              <Avatar3DIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item1Title')}</h3>
          </div>

          {/* Card 2: Realidade Virtual (VR) e Aumentada (AR) */}
          <div className={styles.techCard} onClick={() => setOpenModal(2)}>
            <div className={styles.techCardIconWrapper}>
              <ServerIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item2Title')}</h3>
          </div>

          {/* Card 3: Inteligência Artificial */}
          <div className={styles.techCard} onClick={() => setOpenModal(3)}>
            <div className={styles.techCardIconWrapper}>
              <LLMIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item3Title')}</h3>
          </div>

          {/* Card 4: Plataformas de E-Learning */}
          <div className={styles.techCard} onClick={() => setOpenModal(4)}>
            <div className={styles.techCardIconWrapper}>
              <DashboardIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item4Title')}</h3>
          </div>

          {/* Card 5: Formação Gamificada */}
          <div className={styles.techCard} onClick={() => setOpenModal(5)}>
            <div className={styles.techCardIconWrapper}>
              <GamificationIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('experienceTypes.item1Title')}</h3>
          </div>

          {/* Card 6: Salas de Aula Virtuais em 3D */}
          <div className={styles.techCard} onClick={() => setOpenModal(6)}>
            <div className={styles.techCardIconWrapper}>
              <VirtualClassroomIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('experienceTypes.item2Title')}</h3>
          </div>

          {/* Card 7: Laboratórios e Práticas Simuladas */}
          <div className={styles.techCard} onClick={() => setOpenModal(7)}>
            <div className={styles.techCardIconWrapper}>
              <LabSimulationIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('experienceTypes.item3Title')}</h3>
          </div>

          {/* Card 8: Treinamentos Operacionais */}
          <div className={styles.techCard} onClick={() => setOpenModal(8)}>
            <div className={styles.techCardIconWrapper}>
              <OperationalTrainingIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('experienceTypes.item4Title')}</h3>
          </div>

          {/* Card 9: Experiências Multimídia */}
          <div className={styles.techCard} onClick={() => setOpenModal(9)}>
            <div className={styles.techCardIconWrapper}>
              <MultimediaIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('experienceTypes.item5Title')}</h3>
          </div>
        </div>
      </section>

      {/* Modal Universal com Carrossel 3D - IGUAL À PÁGINA IA 3D */}
      {openModal !== null && (() => {
        const allCards = [
          // Tecnologias (1-4)
          { id: 1, icon: Avatar3DIcon, title: t('technologies.item1Title'), text: t('technologies.item1Text') },
          { id: 2, icon: ServerIcon, title: t('technologies.item2Title'), text: t('technologies.item2Text') },
          { id: 3, icon: LLMIcon, title: t('technologies.item3Title'), text: t('technologies.item3Text') },
          { id: 4, icon: DashboardIcon, title: t('technologies.item4Title'), text: t('technologies.item4Text') },
          // Tipos de Experiências (5-9)
          { id: 5, icon: GamificationIcon, title: t('experienceTypes.item1Title'), text: t('experienceTypes.item1Text') },
          { id: 6, icon: VirtualClassroomIcon, title: t('experienceTypes.item2Title'), text: t('experienceTypes.item2Text') },
          { id: 7, icon: LabSimulationIcon, title: t('experienceTypes.item3Title'), text: t('experienceTypes.item3Text') },
          { id: 8, icon: OperationalTrainingIcon, title: t('experienceTypes.item4Title'), text: t('experienceTypes.item4Text') },
          { id: 9, icon: MultimediaIcon, title: t('experienceTypes.item5Title'), text: t('experienceTypes.item5Text') }
        ]

        const currentIndex = allCards.findIndex(card => card.id === openModal)

        // Lógica circular
        const leftIndex = currentIndex === 0 ? allCards.length - 1 : currentIndex - 1
        const rightIndex = currentIndex === allCards.length - 1 ? 0 : currentIndex + 1

        const leftCard = allCards[leftIndex]
        const centerCard = allCards[currentIndex]
        const rightCard = allCards[rightIndex]

        const LeftIcon = leftCard?.icon
        const CenterIcon = centerCard?.icon
        const RightIcon = rightCard?.icon

        return (
          <div className={styles.carouselOverlay} onClick={() => setOpenModal(null)}>
            <div className={styles.carouselContainer} onClick={(e) => e.stopPropagation()}>
              {/* Carrossel de 3 Cards */}
              <div className={styles.carouselCards} key={`carousel-${openModal}`}>
                {/* Card Esquerdo - Esmaecido */}
                <div className={`${styles.carouselCard} ${styles.carouselCardLeft}`} key={`left-${leftCard.id}`}>
                  <div className={styles.carouselCardIconWrapper}>
                    {LeftIcon && <LeftIcon className={styles.carouselCardIcon} size={48} />}
                  </div>
                  <h3 className={styles.carouselCardTitle}>{leftCard?.title}</h3>
                </div>

                {/* Card Central - Destacado com Modal */}
                <div className={`${styles.carouselCard} ${styles.carouselCardCenter}`} key={`center-${centerCard.id}`}>
                  <div className={styles.carouselCardIconWrapper}>
                    {CenterIcon && <CenterIcon className={styles.carouselCardIcon} size={48} />}
                  </div>
                  <h3 className={styles.carouselCardTitle}>{centerCard?.title}</h3>

                  {/* Modal sobre o card central */}
                  <div className={styles.modalContent} onClick={(e) => e.stopPropagation()} key={`modal-${centerCard.id}`}>
                    <button className={styles.modalCloseButton} onClick={() => setOpenModal(null)}>
                      ×
                    </button>

                    <div className={styles.modalHeader}>
                      <div className={styles.modalIconWrapper}>
                        {CenterIcon && <CenterIcon className={styles.modalIcon} size={48} />}
                      </div>
                      <h2 className={styles.modalTitle}>{centerCard?.title}</h2>
                    </div>

                    <div className={styles.modalBody}>
                      <p>{centerCard?.text}</p>
                    </div>
                  </div>
                </div>

                {/* Card Direito - Esmaecido */}
                <div className={`${styles.carouselCard} ${styles.carouselCardRight}`} key={`right-${rightCard.id}`}>
                  <div className={styles.carouselCardIconWrapper}>
                    {RightIcon && <RightIcon className={styles.carouselCardIcon} size={48} />}
                  </div>
                  <h3 className={styles.carouselCardTitle}>{rightCard?.title}</h3>
                </div>
              </div>

              {/* Navegação com Setas Discretas */}
              <div className={styles.carouselNavigation}>
                <button
                  className={styles.carouselNavArrow}
                  onClick={() => setOpenModal(leftCard.id)}
                  aria-label="Anterior"
                >
                  ←
                </button>
                <div className={styles.carouselNavDots}>
                  {allCards.map((_, idx) => (
                    <span
                      key={idx}
                      className={`${styles.carouselNavDot} ${idx === currentIndex ? styles.carouselNavDotActive : ''}`}
                    />
                  ))}
                </div>
                <button
                  className={styles.carouselNavArrow}
                  onClick={() => setOpenModal(rightCard.id)}
                  aria-label="Próximo"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        )
      })()}

      {/* Projetos Section */}
      <section className={styles.projetosSection}>
        <div className={styles.sectionTitleWrapper}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
          </div>
        </div>
        <div className={styles.projetosList}>
          <div
            className={`${styles.serviceCard} ${styles.serviceCardJuridico}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <JudicialSimIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item1Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item1Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardIndustrial}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <IndustrialToolIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item2Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item2Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardEducacional}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <EducationalSimIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item3Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item3Text')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.faqTitleWrapper}>
          <div className={styles.titleContainer}>
            <h2 className={styles.faqTitle}>{t('faq.title')}</h2>
          </div>
        </div>
        <div className={styles.faqContainer}>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleFaq(0)}>
              <span>{t('faq.question1')}</span>
              <span className={styles.faqIcon}>{expandedFaq === 0 ? '−' : '+'}</span>
            </div>
            {expandedFaq === 0 && (
              <div className={styles.faqAnswer}>
                {t('faq.answer1')}
              </div>
            )}
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleFaq(1)}>
              <span>{t('faq.question2')}</span>
              <span className={styles.faqIcon}>{expandedFaq === 1 ? '−' : '+'}</span>
            </div>
            {expandedFaq === 1 && (
              <div className={styles.faqAnswer}>
                {t('faq.answer2')}
              </div>
            )}
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleFaq(2)}>
              <span>{t('faq.question3')}</span>
              <span className={styles.faqIcon}>{expandedFaq === 2 ? '−' : '+'}</span>
            </div>
            {expandedFaq === 2 && (
              <div className={styles.faqAnswer}>
                {t('faq.answer3')}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </PageTransition>
  )
}
