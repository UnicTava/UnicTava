'use client'

import { useState, type MouseEvent } from 'react'
import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'
import { PageTransition } from '@/components/PageTransition'
import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { StardustCanvas } from '@/components/StardustCanvas'
import { ServiceSchema, BreadcrumbSchema, FAQPageSchema } from '@/components/StructuredData'
import {
  EducationalIcon,
  LegalIcon,
  CorporateIcon,
  AccountingIcon,
  PsychologyIcon,
  TourismIcon,
  ProfessionalTrainingIcon,
  Avatar3DIcon,
  LegalCustomIcon,
  LLMIcon,
  MultiAgentIcon,
  EmbeddingsIcon,
  KnowledgeBaseIcon,
  ServerIcon,
  DashboardIcon,
  ModularIcon
} from '@/components/Icons/AIServiceIcons'
import styles from './ia3d.module.css'

export default function InteligenciaArtificial3DPage() {
  const t = useTranslations('aiService')
  const locale = useLocale()
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [expandedWhatItDoes, setExpandedWhatItDoes] = useState<number | null>(null)
  const [openModal, setOpenModal] = useState<number | null>(null)

  const baseUrl = 'https://unictava.com'
  const currentUrl = `${baseUrl}/${locale}/servicos/inteligencia-artificial-3d`

  const breadcrumbItems = [
    { name: 'Home', url: `${baseUrl}/${locale}` },
    { name: 'Serviços', url: `${baseUrl}/${locale}/servicos` },
    { name: 'Inteligência Artificial 3D', url: currentUrl }
  ]

  const faqItems = [
    {
      question: t('faq.question1'),
      answer: t('faq.answer1')
    },
    {
      question: t('faq.question2'),
      answer: t('faq.answer2')
    },
    {
      question: t('faq.question3'),
      answer: t('faq.answer3')
    },
    {
      question: t('faq.question4'),
      answer: t('faq.answer4')
    },
    {
      question: t('faq.question5'),
      answer: t('faq.answer5')
    },
    {
      question: t('faq.question6'),
      answer: t('faq.answer6')
    },
    {
      question: t('faq.question7'),
      answer: t('faq.answer7')
    }
  ]

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
      <ServiceSchema 
        name="Inteligência Artificial 3D"
        description={t('hero.description')}
        url={currentUrl}
        locale={locale}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <FAQPageSchema faqs={faqItems} />
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

      {/* O que a nossa IA faz Section */}
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
                <ul className={styles.whatItDoesList}>
                  <li>Jurídico</li>
                  <li>Contabilidade</li>
                  <li>Psicologia</li>
                  <li>Marketing</li>
                  <li>Vendas</li>
                  <li>Educação & E-learning</li>
                  <li>Turismo</li>
                  <li>Saúde</li>
                  <li>Segurança corporativa</li>
                  <li>RH e Compliance</li>
                  <li>Treinamentos técnicos</li>
                  <li>Empresas públicas ou privadas</li>
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
                  <li>Chat web</li>
                  <li>Aplicativo</li>
                  <li>Integração com site</li>
                  <li>WhatsApp (se permitido)</li>
                  <li>Sistema interno</li>
                  <li>Avatar 3D (opcional)</li>
                  <li>Estações de treinamento</li>
                  <li>Desktop</li>
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
          {/* Row 1 - Card Grande: Interação Natural */}
          <div className={`${styles.advantageCard} ${styles.cardLarge}`}>
            <h3 className={styles.advantageTitle}>{t('advantages.item1Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item1Text')}</p>
          </div>

          {/* Row 1 - Card Normal: Eficiência */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item2Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item2Text')}</p>
          </div>

          {/* Row 2 - Card Normal: Economia */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item3Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item3Text')}</p>
          </div>

          {/* Row 2 - Card Grande: Personalização Total */}
          <div className={`${styles.advantageCard} ${styles.cardLarge}`}>
            <h3 className={styles.advantageTitle}>{t('advantages.item4Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item4Text')}</p>
          </div>

          {/* Row 3 - Card Grande: Segurança de Dados */}
          <div className={`${styles.advantageCard} ${styles.cardLarge}`}>
            <h3 className={styles.advantageTitle}>{t('advantages.item6Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item6Text')}</p>
          </div>

          {/* Row 3 - Card Normal: Acessibilidade */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item5Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item5Text')}</p>
          </div>

          {/* Row 4 - Card Normal: Multi-idiomas */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item7Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item7Text')}</p>
          </div>

          {/* Row 4 - Card Normal: Escalável */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item8Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item8Text')}</p>
          </div>

          {/* Row 4 - Card Normal: Integração */}
          <div className={styles.advantageCard}>
            <h3 className={styles.advantageTitle}>{t('advantages.item9Title')}</h3>
            <p className={styles.advantageText}>{t('advantages.item9Text')}</p>
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
          {/* Card 1: LLM - CLICÁVEL COM MODAL */}
          <div className={styles.techCard} onClick={() => setOpenModal(1)}>
            <div className={styles.techCardIconWrapper}>
              <LLMIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item1Title')}</h3>
          </div>

          {/* Card 2: Multi-Agente */}
          <div className={styles.techCard} onClick={() => setOpenModal(2)}>
            <div className={styles.techCardIconWrapper}>
              <MultiAgentIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item2Title')}</h3>
          </div>

          {/* Card 3: Embeddings */}
          <div className={styles.techCard} onClick={() => setOpenModal(3)}>
            <div className={styles.techCardIconWrapper}>
              <EmbeddingsIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item3Title')}</h3>
          </div>

          {/* Card 4: Base de Conhecimento */}
          <div className={styles.techCard} onClick={() => setOpenModal(4)}>
            <div className={styles.techCardIconWrapper}>
              <KnowledgeBaseIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item4Title')}</h3>
          </div>

          {/* Card 5: Avatares 3D */}
          <div className={styles.techCard} onClick={() => setOpenModal(5)}>
            <div className={styles.techCardIconWrapper}>
              <Avatar3DIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item5Title')}</h3>
          </div>

          {/* Card 6: Servidores */}
          <div className={styles.techCard} onClick={() => setOpenModal(6)}>
            <div className={styles.techCardIconWrapper}>
              <ServerIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item6Title')}</h3>
          </div>

          {/* Card 7: Dashboard */}
          <div className={styles.techCard} onClick={() => setOpenModal(7)}>
            <div className={styles.techCardIconWrapper}>
              <DashboardIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item7Title')}</h3>
          </div>

          {/* Card 8: Modular */}
          <div className={styles.techCard} onClick={() => setOpenModal(8)}>
            <div className={styles.techCardIconWrapper}>
              <ModularIcon className={styles.techCardIcon} size={48} />
            </div>
            <h3 className={styles.techCardTitle}>{t('technologies.item8Title')}</h3>
          </div>
        </div>
      </section>

      {/* Modal Universal com Carrossel 3D */}
      {openModal !== null && (() => {
        const techCards = [
          { id: 1, icon: LLMIcon, title: t('technologies.item1Title'), text: t('technologies.item1Text') },
          { id: 2, icon: MultiAgentIcon, title: t('technologies.item2Title'), text: t('technologies.item2Text') },
          { id: 3, icon: EmbeddingsIcon, title: t('technologies.item3Title'), text: t('technologies.item3Text') },
          { id: 4, icon: KnowledgeBaseIcon, title: t('technologies.item4Title'), text: t('technologies.item4Text') },
          { id: 5, icon: Avatar3DIcon, title: t('technologies.item5Title'), text: t('technologies.item5Text') },
          { id: 6, icon: ServerIcon, title: t('technologies.item6Title'), text: t('technologies.item6Text') },
          { id: 7, icon: DashboardIcon, title: t('technologies.item7Title'), text: t('technologies.item7Text') },
          { id: 8, icon: ModularIcon, title: t('technologies.item8Title'), text: t('technologies.item8Text') }
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
            className={`${styles.serviceCard} ${styles.serviceCardEducacional}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <EducationalIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item1Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item1Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardJuridico}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <LegalIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item2Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item2Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardCorporativo}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <CorporateIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item3Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item3Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardContabilidade}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <AccountingIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item4Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item4Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardPsicologia}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <PsychologyIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item5Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item5Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardTurismo}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <TourismIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item6Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item6Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardFormacao}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <ProfessionalTrainingIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item7Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item7Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardAvatar3D}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <Avatar3DIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item8Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item8Text')}</p>
            </div>
          </div>

          <div
            className={`${styles.serviceCard} ${styles.serviceCardJuridicoPersonalizado}`}
            onMouseMove={handleCardMouseMove}
            onMouseLeave={resetCardTilt}
          >
            <div className={styles.serviceCardIcon}>
              <LegalCustomIcon size={64} className={styles.icon} />
            </div>
            <div className={styles.serviceCardContent}>
              <h3 className={styles.serviceCardTitle}>{t('projects.item9Title')}</h3>
              <p className={styles.serviceCardDescription}>{t('projects.item9Text')}</p>
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
