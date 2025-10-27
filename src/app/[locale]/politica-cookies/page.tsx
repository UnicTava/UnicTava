import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import type { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'
import styles from './politica.module.css'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'cookiePolicy' })

  return {
    title: `${t('pageTitle')} | UnicTava`,
    description: t('metaDescription'),
  }
}

export default function CookiePolicyPage() {
  const t = useTranslations('cookiePolicy')

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
            <div className={styles.paragraph}>
              <p>{t('section2.intro')}</p>
              <ul className={styles.list}>
                <li>
                  <strong>{t('section2.cookie1.name')}</strong> - {t('section2.cookie1.description')}
                </li>
                <li>
                  <strong>{t('section2.cookie2.name')}</strong> - {t('section2.cookie2.description')}
                </li>
                <li>
                  <strong>{t('section2.cookie3.name')}</strong> - {t('section2.cookie3.description')}
                </li>
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section3.title')}</h2>
            <div className={styles.paragraph}>
              <p>{t('section3.intro')}</p>
              <ul className={styles.list}>
                <li>
                  <strong>{t('section3.cookie1.name')}</strong> - {t('section3.cookie1.description')}
                </li>
                <li>
                  <strong>{t('section3.cookie2.name')}</strong> - {t('section3.cookie2.description')}
                </li>
              </ul>
              <p className={styles.note}>{t('section3.note')}</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section4.title')}</h2>
            <div className={styles.paragraph}>
              <p>{t('section4.content1')}</p>
              <p>{t('section4.content2')}</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section5.title')}</h2>
            <p className={styles.paragraph}>{t('section5.content')}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section6.title')}</h2>
            <p className={styles.paragraph}>{t('section6.content')}</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>{t('section7.title')}</h2>
            <p className={styles.paragraph}>
              {t('section7.content')}
              <br />
              <a href="mailto:privacidade@unictava.com" className={styles.link}>
                privacidade@unictava.com
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
