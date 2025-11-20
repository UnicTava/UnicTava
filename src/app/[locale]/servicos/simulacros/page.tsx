'use client'

import { useState, type MouseEvent } from 'react'
import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'
import { PageTransition } from '@/components/PageTransition'
import { useTranslations, useLocale } from 'next-intl'
import { StardustCanvas } from '@/components/StardustCanvas'
import {
  Printer3DIcon,
  MaterialsIcon,
  EmbeddedElectronicsIcon,
  MicrocontrollerIcon,
  SensorIcon,
  HapticIcon,
  CalibrationIcon,
  FirmwareIcon,
  PistolIcon,
  TaserIcon,
  SubmachineIcon,
  IndustrialToolIcon
} from '@/components/Icons/AIServiceIcons'
import styles from './simulacros.module.css'

export default function SimulacrosPage() {
  const t = useTranslations('cinematicsService')
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
                  <source src="/video/CINEMATIC.mp4" type="video/mp4" />
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
                <ul className={styles.whatItDoesList}>
                  {t.raw('whatItDoes.item1List').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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
                <ul className={styles.whatItDoesList}>
                  {t.raw('whatItDoes.item2List').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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
                  {t.raw('whatItDoes.item3List').map((item: string, index: number) => (
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
                <ul className={styles.whatItDoesList}>
                  {t.raw('whatItDoes.item4List').map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
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
          {/* Row 1 - Card Grande: Treinamento Realista */}
          <div className={`${styles.advantageCard} ${styles.cardLarge}`}>
            <h3 className={styles.advantageTitle}>{t('advantages.item1Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item1Text')}</p>
          </div>

          {/* Row 1 - Card Normal: Total Segurança */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item2Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item2Text')}</p>
          </div>

          {/* Row 2 - Card Normal: Precisão e Controle */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item3Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item3Text')}</p>
          </div>

          {/* Row 2 - Card Grande: Projetos Feitos Sob Medida */}
          <div className={`${styles.advantageCard} ${styles.cardLarge}`}>
            <h3 className={styles.advantageTitle}>{t('advantages.item4Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item4Text')}</p>
          </div>

          {/* Row 3 - Card Normal: Compatibilidade Total */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item5Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item5Text')}</p>
          </div>

          {/* Row 3 - Card Normal: Possibilidade de Telemetria */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item6Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item6Text')}</p>
          </div>

          {/* Row 3 - Card Normal: Atualização Rápida */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item7Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item7Text')}</p>
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
          {/* Card 1: Impressão 3D */}
          <div className={styles.techCard} onClick={() => setOpenModal(1)}>
            <div className={styles.techCardIconWrapper}>
              <Printer3DIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item1Title')}</h3>
          </div>

          {/* Card 2: Materiais Técnicos */}
          <div className={styles.techCard} onClick={() => setOpenModal(2)}>
            <div className={styles.techCardIconWrapper}>
              <MaterialsIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item2Title')}</h3>
          </div>

          {/* Card 3: Eletrônica Embarcada */}
          <div className={styles.techCard} onClick={() => setOpenModal(3)}>
            <div className={styles.techCardIconWrapper}>
              <EmbeddedElectronicsIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item3Title')}</h3>
          </div>

          {/* Card 4: Microcontroladores */}
          <div className={styles.techCard} onClick={() => setOpenModal(4)}>
            <div className={styles.techCardIconWrapper}>
              <MicrocontrollerIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item4Title')}</h3>
          </div>

          {/* Card 5: Sensores */}
          <div className={styles.techCard} onClick={() => setOpenModal(5)}>
            <div className={styles.techCardIconWrapper}>
              <SensorIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item5Title')}</h3>
          </div>

          {/* Card 6: Feedback Haptic */}
          <div className={styles.techCard} onClick={() => setOpenModal(6)}>
            <div className={styles.techCardIconWrapper}>
              <HapticIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item6Title')}</h3>
          </div>

          {/* Card 7: Calibração */}
          <div className={styles.techCard} onClick={() => setOpenModal(7)}>
            <div className={styles.techCardIconWrapper}>
              <CalibrationIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item7Title')}</h3>
          </div>

          {/* Card 8: Firmware */}
          <div className={styles.techCard} onClick={() => setOpenModal(8)}>
            <div className={styles.techCardIconWrapper}>
              <FirmwareIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item8Title')}</h3>
          </div>
        </div>

        {/* MODAL CARROSSEL */}
        {openModal !== null && (() => {
          const techCards = [
            { id: 1, icon: Printer3DIcon, title: t('technologies.item1Title'), text: t('technologies.item1Text') },
            { id: 2, icon: MaterialsIcon, title: t('technologies.item2Title'), text: t('technologies.item2Text') },
            { id: 3, icon: EmbeddedElectronicsIcon, title: t('technologies.item3Title'), text: t('technologies.item3Text') },
            { id: 4, icon: MicrocontrollerIcon, title: t('technologies.item4Title'), text: t('technologies.item4Text') },
            { id: 5, icon: SensorIcon, title: t('technologies.item5Title'), text: t('technologies.item5Text') },
            { id: 6, icon: HapticIcon, title: t('technologies.item6Title'), text: t('technologies.item6Text') },
            { id: 7, icon: CalibrationIcon, title: t('technologies.item7Title'), text: t('technologies.item7Text') },
            { id: 8, icon: FirmwareIcon, title: t('technologies.item8Title'), text: t('technologies.item8Text') }
          ]

          const currentIndex = techCards.findIndex(card => card.id === openModal)
          const leftIndex = currentIndex === 0 ? techCards.length - 1 : currentIndex - 1
          const rightIndex = currentIndex === techCards.length - 1 ? 0 : currentIndex + 1

          const LeftIcon = techCards[leftIndex].icon
          const CenterIcon = techCards[currentIndex].icon
          const RightIcon = techCards[rightIndex].icon

          return (
            <div className={styles.carouselOverlay} onClick={() => setOpenModal(null)}>
              <div className={styles.carouselContainer} onClick={(e) => e.stopPropagation()}>
                <div className={styles.carouselCards}>
                  {/* Card Esquerdo (faded) */}
                  <div className={`${styles.carouselCard} ${styles.carouselCardLeft}`}>
                    <div className={styles.techCardIconWrapper}>
                      <LeftIcon className={styles.techCardIcon} size={40} />
                    </div>
                    <h3 className={styles.techCardTitle}>{techCards[leftIndex].title}</h3>
                  </div>

                  {/* Card Central (highlighted) com modal */}
                  <div className={`${styles.carouselCard} ${styles.carouselCardCenter}`}>
                    <div className={styles.modalContent}>
                      <div className={styles.modalHeader}>
                        <div className={styles.modalIconWrapper}>
                          <CenterIcon className={styles.modalIcon} size={56} />
                        </div>
                        <h2 className={styles.modalTitle}>{techCards[currentIndex].title}</h2>
                        <button className={styles.modalCloseButton} onClick={() => setOpenModal(null)}>×</button>
                      </div>
                      <div className={styles.modalBody}>
                        <p>{techCards[currentIndex].text}</p>
                      </div>
                    </div>
                  </div>

                  {/* Card Direito (faded) */}
                  <div className={`${styles.carouselCard} ${styles.carouselCardRight}`}>
                    <div className={styles.techCardIconWrapper}>
                      <RightIcon className={styles.techCardIcon} size={40} />
                    </div>
                    <h3 className={styles.techCardTitle}>{techCards[rightIndex].title}</h3>
                  </div>
                </div>

                {/* Navegação */}
                <div className={styles.carouselNavigation}>
                  <button
                    className={styles.carouselNavArrow}
                    onClick={(e) => {
                      e.stopPropagation()
                      setOpenModal(techCards[leftIndex].id)
                    }}
                  >
                    ‹
                  </button>
                  <div className={styles.carouselNavDots}>
                    {techCards.map((card, index) => (
                      <button
                        key={card.id}
                        className={`${styles.carouselNavDot} ${index === currentIndex ? styles.carouselNavDotActive : ''}`}
                        onClick={(e) => {
                          e.stopPropagation()
                          setOpenModal(card.id)
                        }}
                      />
                    ))}
                  </div>
                  <button
                    className={styles.carouselNavArrow}
                    onClick={(e) => {
                      e.stopPropagation()
                      setOpenModal(techCards[rightIndex].id)
                    }}
                  >
                    ›
                  </button>
                </div>
              </div>
            </div>
          )
        })()}
      </section>

      {/* Projetos Section */}
      <section className={styles.projetosSection}>
        <div className={styles.sectionTitleWrapper}>
          <div className={styles.titleContainer}>
            <h2 className={styles.sectionTitle}>{t('projects.title')}</h2>
          </div>
        </div>
        <div className={styles.projetosList}>
          <div
            className={`${styles.serviceCard} ${styles.serviceCardTreinamento}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <PistolIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item1Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item1Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardAtendimento}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <TaserIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item2Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item2Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardSimulacao}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <SubmachineIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item3Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item3Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardTreinamento}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <IndustrialToolIcon size={64} className={styles.icon} />
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

          <div className={styles.faqItem}>
            <div className={styles.faqQuestion} onClick={() => toggleFaq(6)}>
              <span>{t('faq.question7')}</span>
              <span className={styles.faqIcon}>{expandedFaq === 6 ? '−' : '+'}</span>
            </div>
            {expandedFaq === 6 && (
              <div className={styles.faqAnswer}>
                {t('faq.answer7')}
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
