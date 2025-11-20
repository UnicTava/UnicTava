'use client'

import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'
import { PageTransition } from '@/components/PageTransition'
import { StardustCanvas } from '@/components/StardustCanvas'
import { Button } from '@/components/Button'
import { CallMadeIcon } from '@/components/Button/icons'
import Link from 'next/link'
import styles from './servicos.module.css'

export default function ServicosPage() {
  const t = useTranslations('servicesPage')
  const params = useParams()
  const locale = params?.locale as string || 'pt-BR'

  return (
    <PageTransition>
      <main className={styles.main}>
      <StardustCanvas mode="page" />

      <Navigation />

      {/* Hero Section */}
      <section className={styles.hero}>
        {/* <GeometricBackground3D className={styles.heroBackground} intensity="medium" /> */}
        <div className={styles.heroGrid}>
          {/* Left Content */}
          <div className={styles.heroLeft}>
            <div className={styles.heroContent}>
              <h1 className={styles.mainTitle}>
                {t('ai.mainTitle')}
              </h1>
              <h2 className={styles.heroTitle}>
                {t('ai.heroTitle')}
              </h2>
            </div>

            <p className={styles.heroDescription}>
              {t('ai.description')}
            </p>

            <div className={styles.buttonWrapper}>
              <Link href={`/${locale}/servicos/inteligencia-artificial-3d`}>
                <Button
                  variant="secondary"
                  size="small"
                  icon={<CallMadeIcon />}
                >
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right 3D Cards */}
          <div className={styles.heroRight}>
            <div className={styles.cardsContainer}>
              {/* Main Featured Card with 3D overlay */}
              <Link href={`/${locale}/servicos/inteligencia-artificial-3d`} className={styles.cardLink}>
                <div className={styles.featuredCard}>
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematica 3D Section */}
      <section className={styles.cinematicaSection}>
        {/* <GeometricBackground3D className={styles.heroBackground} intensity="medium" /> */}
        <div className={styles.cinematicaGrid}>
          {/* Left 3D Card */}
          <div className={styles.cinematicaLeft}>
            <div className={styles.cardsContainer}>
              <Link href={`/${locale}/servicos/simulacros`} className={styles.cardLink}>
                <div className={styles.featuredCardCinematica}>
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
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className={styles.cinematicaRight}>
            <div className={styles.heroContent}>
              <h1 className={styles.mainTitle}>
                {t('cinematics.mainTitle')}
              </h1>
              <h2 className={styles.heroTitle}>
                {t('cinematics.heroTitle')}
              </h2>
            </div>

            <p className={styles.heroDescription}>
              {t('cinematics.description')}
            </p>

            <div className={styles.buttonWrapper}>
              <Link href={`/${locale}/servicos/simulacros`}>
                <Button
                  variant="secondary"
                  size="small"
                  icon={<CallMadeIcon />}
                >
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Simulacao 3D Section */}
      <section className={styles.simulacaoSection}>
        <div className={styles.simulacaoGrid}>
          {/* Left Content */}
          <div className={styles.simulacaoLeft}>
            <div className={styles.heroContent}>
              <h1 className={styles.mainTitle}>
                {t('simulation.mainTitle')}
              </h1>
              <h2 className={styles.heroTitle}>
                {t('simulation.heroTitle')}
              </h2>
            </div>

            <p className={styles.heroDescription}>
              {t('simulation.description')}
            </p>

            <div className={styles.buttonWrapper}>
              <Link href={`/${locale}/servicos/simulacao-3d`}>
                <Button
                  variant="secondary"
                  size="small"
                  icon={<CallMadeIcon />}
                >
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right 3D Card */}
          <div className={styles.simulacaoRight}>
            <div className={styles.cardsContainer}>
              <Link href={`/${locale}/servicos/simulacao-3d`} className={styles.cardLink}>
                <div className={styles.featuredCardSimulacao}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.cardVideo}
                  >
                    <source src="/video/SIMULATION.mp4" type="video/mp4" />
                  </video>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Educacao e Treinamento 3D Section */}
      <section className={styles.educacaoSection}>
        <div className={styles.educacaoGrid}>
          {/* Left 3D Card */}
          <div className={styles.educacaoLeft}>
            <div className={styles.cardsContainer}>
              <Link href={`/${locale}/servicos/educacao-treinamento-3d`} className={styles.cardLink}>
                <div className={styles.featuredCardEducacao}>
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
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className={styles.educacaoRight}>
            <div className={styles.heroContent}>
              <h1 className={styles.mainTitle}>
                {t('education.mainTitle')}
              </h1>
              <h2 className={styles.heroTitle}>
                {t('education.heroTitle')}
              </h2>
            </div>

            <p className={styles.heroDescription}>
              {t('education.description')}
            </p>

            <div className={styles.buttonWrapper}>
              <Link href={`/${locale}/servicos/educacao-treinamento-3d`}>
                <Button
                  variant="secondary"
                  size="small"
                  icon={<CallMadeIcon />}
                >
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Jogos 3D Section */}
      <section className={styles.jogosSection}>
        <div className={styles.jogosGrid}>
          {/* Left Content */}
          <div className={styles.jogosLeft}>
            <div className={styles.heroContent}>
              <h1 className={styles.mainTitle}>
                {t('games.mainTitle')}
              </h1>
              <h2 className={styles.heroTitle}>
                {t('games.heroTitle')}
              </h2>
            </div>

            <p className={styles.heroDescription}>
              {t('games.description')}
            </p>

            <div className={styles.buttonWrapper}>
              <Link href={`/${locale}/servicos/desenvolvimento-jogos-3d`}>
                <Button
                  variant="secondary"
                  size="small"
                  icon={<CallMadeIcon />}
                >
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>

          {/* Right 3D Card */}
          <div className={styles.jogosRight}>
            <div className={styles.cardsContainer}>
              <Link href={`/${locale}/servicos/desenvolvimento-jogos-3d`} className={styles.cardLink}>
                <div className={styles.featuredCardJogos}>
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VR e AR Section */}
      <section className={styles.vrArSection}>
        <div className={styles.vrArGrid}>
          {/* Left 3D Card */}
          <div className={styles.vrArLeft}>
            <div className={styles.cardsContainer}>
              <Link href={`/${locale}/servicos/vr-ar`} className={styles.cardLink}>
                <div className={styles.featuredCardVrAr}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={styles.cardVideo}
                  >
                    <source src="/video/VR (2).mp4" type="video/mp4" />
                  </video>
                </div>
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className={styles.vrArRight}>
            <div className={styles.heroContent}>
              <h1 className={styles.mainTitle}>
                {t('vrar.mainTitle')}
              </h1>
              <h2 className={styles.heroTitle}>
                {t('vrar.heroTitle')}
              </h2>
            </div>

            <p className={styles.heroDescription}>
              {t('vrar.description')}
            </p>

            <div className={styles.buttonWrapper}>
              <Link href={`/${locale}/servicos/vr-ar`}>
                <Button
                  variant="secondary"
                  size="small"
                  icon={<CallMadeIcon />}
                >
                  {t('learnMore')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
    </PageTransition>
  )
}