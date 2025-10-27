'use client'

import { useState, type MouseEvent } from 'react'
import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'
import { PageTransition } from '@/components/PageTransition'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { StardustCanvas } from '@/components/StardustCanvas'
import styles from './ia3d.module.css'

export default function InteligenciaArtificial3DPage() {
  const t = useTranslations('aiService')
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
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
                  <source src="/video/IA.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
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
        <div className={styles.tagsContainer}>
          <div className={styles.tag}>
            <strong>{t('advantages.item1Title')}</strong>
            <p className={styles.tagDescription}>{t('advantages.item1Text')}</p>
          </div>
          <div className={styles.tag}>
            <strong>{t('advantages.item2Title')}</strong>
            <p className={styles.tagDescription}>{t('advantages.item2Text')}</p>
          </div>
          <div className={styles.tag}>
            <strong>{t('advantages.item3Title')}</strong>
            <p className={styles.tagDescription}>{t('advantages.item3Text')}</p>
          </div>
          <div className={styles.tag}>
            <strong>{t('advantages.item4Title')}</strong>
            <p className={styles.tagDescription}>{t('advantages.item4Text')}</p>
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
        <div className={styles.tagsContainer}>
          <div className={styles.tag}>
            <strong>{t('technologies.item1Title')}</strong>
            <p className={styles.tagDescription}>{t('technologies.item1Text')}</p>
          </div>
          <div className={styles.tag}>
            <strong>{t('technologies.item2Title')}</strong>
            <p className={styles.tagDescription}>{t('technologies.item2Text')}</p>
          </div>
          <div className={styles.tag}>
            <strong>{t('technologies.item3Title')}</strong>
            <p className={styles.tagDescription}>{t('technologies.item3Text')}</p>
          </div>
          <div className={styles.tag}>
            <strong>{t('technologies.item4Title')}</strong>
            <p className={styles.tagDescription}>{t('technologies.item4Text')}</p>
          </div>
        </div>
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
