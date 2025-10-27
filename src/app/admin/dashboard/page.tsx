'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Logo } from '@/components/Logo'
import styles from './dashboard.module.css'
import ContactsList from '@/components/Admin/ContactsList'
import ProposalsList from '@/components/Admin/ProposalsList'
import ProjectsList from '@/components/Admin/ProjectsList'
import TestimonialsList from '@/components/Admin/TestimonialsList'

export const dynamic = 'force-dynamic'

export default function AdminDashboard() {
  const t = useTranslations('admin.dashboard')
  const [activeTab, setActiveTab] = useState<'contacts' | 'proposals' | 'projects' | 'testimonials'>('contacts')
  const [isLoading, setIsLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    // Check authentication
    const checkAuth = () => {
      const token = localStorage.getItem('adminToken')
      if (!token) {
        router.push('/admin')
      } else {
        setIsLoading(false)
      }
    }
    checkAuth()
  }, [router, isMounted])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    router.push('/admin')
  }

  if (!isMounted || isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    )
  }

  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoSection}>
            <Logo className={styles.logo} />
            <span className={styles.adminBadge}>{t('adminBadge')}</span>
          </div>

          <nav className={styles.nav}>
            <button
              className={`${styles.navTab} ${activeTab === 'contacts' ? styles.active : ''}`}
              onClick={() => setActiveTab('contacts')}
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M12,1.5A5.5,5.5 0 0,0 6.5,7A5.5,5.5 0 0,0 12,12.5A5.5,5.5 0 0,0 17.5,7A5.5,5.5 0 0,0 12,1.5M12,3.5A3.5,3.5 0 0,1 15.5,7A3.5,3.5 0 0,1 12,10.5A3.5,3.5 0 0,1 8.5,7A3.5,3.5 0 0,1 12,3.5M12,14C7,14 2.73,16.39 1,20H23C21.27,16.39 17,14 12,14Z"/>
              </svg>
              {t('contacts')}
            </button>

            <button
              className={`${styles.navTab} ${activeTab === 'proposals' ? styles.active : ''}`}
              onClick={() => setActiveTab('proposals')}
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M9,10H7V12H9V10M13,10H11V12H13V10M17,10H15V12H17V10M19,3H18V1H16V3H8V1H6V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M19,19H5V8H19V19Z"/>
              </svg>
              {t('proposals')}
            </button>

            <button
              className={`${styles.navTab} ${activeTab === 'projects' ? styles.active : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"/>
              </svg>
              {t('projects')}
            </button>

            <button
              className={`${styles.navTab} ${activeTab === 'testimonials' ? styles.active : ''}`}
              onClick={() => setActiveTab('testimonials')}
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22H9M10,16V19.08L13.08,16H20V4H4V16H10M6,7H18V9H6V7M6,11H15V13H6V11Z"/>
              </svg>
              {t('testimonials')}
            </button>
          </nav>

          <button onClick={handleLogout} className={styles.logoutButton}>
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z"/>
            </svg>
            {t('logout')}
          </button>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.contentWrapper}>
          <div className={styles.titleSection}>
            <h2 className={styles.pageTitle}>
              {activeTab === 'contacts'
                ? t('contactsTitle')
                : activeTab === 'proposals'
                ? t('proposalsTitle')
                : activeTab === 'projects'
                ? t('projectsTitle')
                : t('testimonialsTitle')}
            </h2>
            <p className={styles.pageDescription}>
              {activeTab === 'contacts'
                ? t('contactsDescription')
                : activeTab === 'proposals'
                ? t('proposalsDescription')
                : activeTab === 'projects'
                ? t('projectsDescription')
                : t('testimonialsDescription')}
            </p>
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'contacts' ? (
              <ContactsList />
            ) : activeTab === 'proposals' ? (
              <ProposalsList />
            ) : activeTab === 'projects' ? (
              <ProjectsList />
            ) : (
              <TestimonialsList />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}