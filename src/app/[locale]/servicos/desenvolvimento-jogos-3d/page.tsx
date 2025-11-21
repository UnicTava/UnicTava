'use client'

import { useState, type MouseEvent } from 'react'
import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'
import { PageTransition } from '@/components/PageTransition'
import { useTranslations, useLocale } from 'next-intl'
import { StardustCanvas } from '@/components/StardustCanvas'
import {
  PerformanceIcon,
  VisualQualityIcon,
  ControlIcon,
  FlexibilityIcon,
  CollaborationIcon
} from '@/components/Icons/GameServiceIcons'
import {
  CorporateGameIcon,
  EducationalGameIcon,
  MultiplayerGameIcon,
  NarrativeGameIcon
} from '@/components/Icons/GameProjectIcons'
import styles from './jogos3d.module.css'

export default function DesenvolvimentoJogos3DPage() {
  const t = useTranslations('gamesService')
  const locale = useLocale()
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

            <p className={styles.heroDescription}>
              {t('hero.description2')}
            </p>

            <p className={styles.heroDescription}>
              {t('hero.description3')}
            </p>

            <ul className={styles.heroBulletList}>
              {(t.raw('hero.bulletPoints') as string[]).map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>

            <p className={styles.heroDescription}>
              {t('hero.description4')}
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
                  <source src="/video/GAMING.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que desenvolvemos Section */}
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
                <ul className={styles.whatItDoesList}>
                  {(t.raw('whatItDoes.item3List') as string[]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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
                <ul className={styles.whatItDoesList}>
                  {(t.raw('whatItDoes.item5List') as string[]).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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

          {/* Item 7 */}
          <div className={styles.whatItDoesItem}>
            <div className={styles.whatItDoesQuestion} onClick={() => toggleWhatItDoes(6)}>
              <span>{t('whatItDoes.item7Title')}</span>
              <span className={styles.whatItDoesIcon}>{expandedWhatItDoes === 6 ? '−' : '+'}</span>
            </div>
            {expandedWhatItDoes === 6 && (
              <div className={styles.whatItDoesAnswer}>
                <p>{t('whatItDoes.item7Text')}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Vantagens Section */}
      <section className={styles.vantagensSection}>
        <div className={styles.sectionTitleWrapper}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionTitle}>{t('advantages.title')}</h2>
          </div>
        </div>
        <div className={styles.advantagesBentoGrid}>
          {/* Row 1, Col 1-2: Criação da Estrutura (Card Alto com lista) */}
          <div className={`${styles.advantageCard} ${styles.cardTall}`}>
            <h3 className={styles.advantageTitle}>{t('advantages.item2Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item2Text')}</p>
            <ul className={styles.advantageList}>
              {(t.raw('advantages.item2List') as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Row 1, Col 3: Entendimento do Objetivo */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item1Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item1Text')}</p>
          </div>

          {/* Row 2, Col 3: Programação e Gameplay */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item4Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item4Text')}</p>
          </div>

          {/* Row 3, Col 1-2: Modelagem e Arte 3D (Card Largo com lista) */}
          <div className={`${styles.advantageCard} ${styles.cardLarge}`}>
            <h3 className={styles.advantageTitle}>{t('advantages.item3Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item3Text')}</p>
            <ul className={styles.advantageList}>
              {(t.raw('advantages.item3List') as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Row 3, Col 3: Otimização Avançada */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item5Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item5Text')}</p>
          </div>

          {/* Row 4: Testes e Ajustes (Card Grande) */}
          <div className={`${styles.advantageCard} ${styles.cardLarge}`}>
            <h3 className={styles.advantageTitle}>{t('advantages.item6Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item6Text')}</p>
          </div>
        </div>
      </section>

      {/* Tecnologias Section */}
      <section className={styles.tecnologiasSection}>
        <div className={styles.sectionTitleWrapper}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionTitle}>{t('technologies.title')}</h2>
          </div>
        </div>

        <div className={styles.technologiesGrid}>
          {/* Card 1: Desempenho */}
          <div className={styles.techCard} onClick={() => setOpenModal(1)}>
            <div className={styles.techCardIconWrapper}>
              <PerformanceIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item1Title')}</h3>
          </div>

          {/* Card 2: Qualidade Visual */}
          <div className={styles.techCard} onClick={() => setOpenModal(2)}>
            <div className={styles.techCardIconWrapper}>
              <VisualQualityIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item2Title')}</h3>
          </div>

          {/* Card 3: Controle Total */}
          <div className={styles.techCard} onClick={() => setOpenModal(3)}>
            <div className={styles.techCardIconWrapper}>
              <ControlIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item3Title')}</h3>
          </div>

          {/* Card 4: Flexibilidade */}
          <div className={styles.techCard} onClick={() => setOpenModal(4)}>
            <div className={styles.techCardIconWrapper}>
              <FlexibilityIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item4Title')}</h3>
          </div>

          {/* Card 5: Colaboração */}
          <div className={styles.techCard} onClick={() => setOpenModal(5)}>
            <div className={styles.techCardIconWrapper}>
              <CollaborationIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item5Title')}</h3>
          </div>
        </div>
      </section>

      {/* Modal Universal com Carrossel 3D */}
      {openModal !== null && (() => {
        const techCards = [
          { id: 1, icon: PerformanceIcon, title: t('technologies.item1Title'), text: t('technologies.item1Text') },
          { id: 2, icon: VisualQualityIcon, title: t('technologies.item2Title'), text: t('technologies.item2Text') },
          { id: 3, icon: ControlIcon, title: t('technologies.item3Title'), text: t('technologies.item3Text') },
          { id: 4, icon: FlexibilityIcon, title: t('technologies.item4Title'), text: t('technologies.item4Text') },
          { id: 5, icon: CollaborationIcon, title: t('technologies.item5Title'), text: t('technologies.item5Text') }
        ]

        const currentIndex = techCards.findIndex(card => card.id === openModal)

        // Lógica circular
        const leftIndex = currentIndex === 0 ? techCards.length - 1 : currentIndex - 1
        const rightIndex = currentIndex === techCards.length - 1 ? 0 : currentIndex + 1

        const leftCard = techCards[leftIndex]
        const centerCard = techCards[currentIndex]
        const rightCard = techCards[rightIndex]

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
                  {techCards.map((_, idx) => (
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
            className={`${styles.serviceCard} ${styles.serviceCardCorporativo}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <CorporateGameIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item1Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item1Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardEducacional}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <EducationalGameIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item2Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item2Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardMultiplayer}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <MultiplayerGameIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item3Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item3Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardNarrativo}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <NarrativeGameIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item4Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item4Text')}</p>
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

          <div className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleFaq(3)}>
              <span>{t('faq.question4')}</span>
              <span className={styles.faqIcon}>{expandedFaq === 3 ? '−' : '+'}</span>
            </div>
            {expandedFaq === 3 && (
              <div className={styles.faqAnswer}>
                {t('faq.answer4')}
              </div>
            )}
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleFaq(4)}>
              <span>{t('faq.question5')}</span>
              <span className={styles.faqIcon}>{expandedFaq === 4 ? '−' : '+'}</span>
            </div>
            {expandedFaq === 4 && (
              <div className={styles.faqAnswer}>
                {t('faq.answer5')}
              </div>
            )}
          </div>

          <div className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleFaq(5)}>
              <span>{t('faq.question6')}</span>
              <span className={styles.faqIcon}>{expandedFaq === 5 ? '−' : '+'}</span>
            </div>
            {expandedFaq === 5 && (
              <div className={styles.faqAnswer}>
                {t('faq.answer6')}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaTitleWrapper}>
          <div className={styles.titleContainer}>
            <h2 className={styles.ctaTitle}>{t('cta.title')}</h2>
          </div>
        </div>
        <p className={styles.ctaSubtitle}>{t('cta.subtitle')}</p>
        <a href={`/${locale}/home#contact-form-section`} className={styles.ctaButton}>
          {t('cta.button')}
        </a>
      </section>

      <Footer />
    </main>
    </PageTransition>
  )
}
