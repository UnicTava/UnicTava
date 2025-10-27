'use client'

import { useLocale } from 'next-intl'
import Link from 'next/link'
import styles from './ProjectCard.module.css'
import { Project } from '@/lib/supabase-types'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const locale = useLocale()

  const getLocalizedTitle = () => {
    switch (locale) {
      case 'pt-BR':
        return project.title_pt
      case 'en-GB':
        return project.title_en
      case 'it':
        return project.title_it
      default:
        return project.title_pt
    }
  }

  return (
    <Link href={`/${locale}/projetos/${project.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        {project.thumbnail_url ? (
          <img
            src={project.thumbnail_url}
            alt={getLocalizedTitle()}
            className={styles.image}
          />
        ) : (
          <div className={styles.noImage}>
            <svg viewBox="0 0 24 24" width="64" height="64">
              <path fill="currentColor" d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"/>
            </svg>
          </div>
        )}

        <div className={styles.overlay}>
          <h3 className={styles.title}>{getLocalizedTitle()}</h3>

          {project.tags && project.tags.length > 0 && (
            <div className={styles.tags}>
              {project.tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
