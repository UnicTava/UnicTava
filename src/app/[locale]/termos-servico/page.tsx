import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './termos.module.css'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'termsOfService' })

  return {
    title: `${t('pageTitle')} | UnicTava`,
    description: t('metaDescription'),
  }
}

export default function TermsOfServicePage() {
  const t = useTranslations('termsOfService')

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.lastUpdated}>{t('lastUpdated')}: 07/10/2025</p>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section1.title')}</h2>
            <p className={styles.paragraph}>{t('section1.content')}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section2.title')}</h2>
            <p className={styles.paragraph}>{t('section2.content')}</p>
            <ul className={styles.list}>
              <li>{t('section2.service1')}</li>
              <li>{t('section2.service2')}</li>
              <li>{t('section2.service3')}</li>
              <li>{t('section2.service4')}</li>
              <li>{t('section2.service5')}</li>
              <li>{t('section2.service6')}</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section3.title')}</h2>
            <p className={styles.paragraph}>{t('section3.content')}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section4.title')}</h2>
            <div className={styles.paragraph}>
              <p>{t('section4.intro')}</p>
              <ul className={styles.list}>
                <li>{t('section4.prohibition1')}</li>
                <li>{t('section4.prohibition2')}</li>
                <li>{t('section4.prohibition3')}</li>
                <li>{t('section4.prohibition4')}</li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section5.title')}</h2>
            <div className={styles.paragraph}>
              <p>{t('section5.content1')}</p>
              <p>{t('section5.content2')}</p>
              <p>{t('section5.content3')}</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section6.title')}</h2>
            <p className={styles.paragraph}>{t('section6.content')}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section7.title')}</h2>
            <p className={styles.paragraph}>{t('section7.content')}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section8.title')}</h2>
            <p className={styles.paragraph}>{t('section8.content')}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section9.title')}</h2>
            <p className={styles.paragraph}>
              {t('section9.content')}
              <br />
              <a href="mailto:contato@unictava.com" className={styles.link}>
                contato@unictava.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
