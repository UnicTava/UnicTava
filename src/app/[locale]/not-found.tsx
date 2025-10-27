import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function NotFound() {
  const t = useTranslations('notFound')

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#050505',
      color: '#F6F6F6',
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '72px', marginBottom: '20px' }}>{t('title')}</h1>
      <h2 style={{ fontSize: '32px', marginBottom: '20px' }}>{t('subtitle')}</h2>
      <p style={{ fontSize: '18px', marginBottom: '40px', color: '#999' }}>{t('description')}</p>
      <Link href="/" style={{
        padding: '12px 24px',
        backgroundColor: '#6B63E0',
        color: 'white',
        borderRadius: '8px',
        textDecoration: 'none'
      }}>
        {t('backToHome')}
      </Link>
    </div>
  )
}