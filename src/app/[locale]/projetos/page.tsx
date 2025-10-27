'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import ProjectCard from '@/components/ProjectCard'
import styles from './projetos.module.css'
import { Project } from '@/lib/supabase-types'

export default function ProjectsPage() {
  const t = useTranslations('projects')
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const response = await fetch('/api/projects')

      if (response.ok) {
        const data = await response.json()
        setProjects(data)
      }
    } catch (error) {
      console.error('Error fetching projects:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Navigation />
      <main className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>{t('pageTitle')}</h1>
          <p className={styles.subtitle}>{t('pageSubtitle')}</p>
        </div>

        {isLoading ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>{t('loading')}</p>
          </div>
        ) : projects.length === 0 ? (
          <div className={styles.empty}>
            <svg viewBox="0 0 24 24" width="80" height="80">
              <path fill="currentColor" d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"/>
            </svg>
            <p className={styles.emptyText}>{t('noProjects')}</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  )
}
