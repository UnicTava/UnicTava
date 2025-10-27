'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import styles from './ProjectsList.module.css'
import { Project } from '@/lib/supabase-types'
import ProjectForm from '../ProjectForm'

export default function ProjectsList() {
  const t = useTranslations('admin.projects')
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingProject, setEditingProject] = useState<Project | null>(null)
  const [deletingProject, setDeletingProject] = useState<Project | null>(null)

  useEffect(() => {
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch('/api/admin/projects', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

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

  const handleCreateClick = () => {
    setEditingProject(null)
    setShowForm(true)
  }

  const handleEditClick = (project: Project) => {
    setEditingProject(project)
    setShowForm(true)
  }

  const handleDeleteClick = (project: Project) => {
    setDeletingProject(project)
  }

  const handleConfirmDelete = async () => {
    if (!deletingProject) return

    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch(`/api/admin/projects/${deletingProject.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        await fetchProjects()
        setDeletingProject(null)
      }
    } catch (error) {
      console.error('Error deleting project:', error)
    }
  }

  const handleFormClose = () => {
    setShowForm(false)
    setEditingProject(null)
  }

  const handleFormSave = () => {
    fetchProjects()
  }

  const filteredProjects = projects.filter(project =>
    project.title_pt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.title_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.title_it.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  const publishedCount = projects.filter(p => p.status === 'published').length
  const draftCount = projects.filter(p => p.status === 'draft').length

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p>{t('loading')}</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.searchBox}>
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"/>
          </svg>
          <input
            type="text"
            placeholder={t('searchPlaceholder')}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <button className={styles.createButton} onClick={handleCreateClick}>
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
          </svg>
          {t('create')}
        </button>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{projects.length}</span>
          <span className={styles.statLabel}>{t('total')}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{publishedCount}</span>
          <span className={styles.statLabel}>{t('published')}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>{draftCount}</span>
          <span className={styles.statLabel}>{t('drafts')}</span>
        </div>
      </div>

      <div className={styles.projectsGrid}>
        {filteredProjects.length === 0 ? (
          <div className={styles.emptyState}>
            <svg viewBox="0 0 24 24" width="64" height="64">
              <path fill="currentColor" d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"/>
            </svg>
            <p>{t('noProjects')}</p>
          </div>
        ) : (
          filteredProjects.map((project) => (
            <div key={project.id} className={styles.projectCard}>
              <div className={styles.projectThumbnail}>
                {project.thumbnail_url ? (
                  <img src={project.thumbnail_url} alt={project.title_pt} />
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                    <svg viewBox="0 0 24 24" width="48" height="48" style={{ color: '#444' }}>
                      <path fill="currentColor" d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"/>
                    </svg>
                  </div>
                )}
                <div className={`${styles.projectStatus} ${project.status === 'published' ? styles.statusPublished : styles.statusDraft}`}>
                  {project.status === 'published' ? t('statusPublished') : t('statusDraft')}
                </div>
              </div>

              <div className={styles.projectContent}>
                <h3 className={styles.projectTitle}>{project.title_pt}</h3>

                {project.tags.length > 0 && (
                  <div className={styles.projectTags}>
                    {project.tags.slice(0, 3).map(tag => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className={styles.tag}>+{project.tags.length - 3}</span>
                    )}
                  </div>
                )}
              </div>

              <div className={styles.projectActions}>
                <button
                  className={styles.actionButton}
                  onClick={() => handleEditClick(project)}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
                  </svg>
                  {t('edit')}
                </button>
                <button
                  className={`${styles.actionButton} ${styles.deleteButton}`}
                  onClick={() => handleDeleteClick(project)}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
                  </svg>
                  {t('delete')}
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {showForm && (
        <ProjectForm
          project={editingProject}
          onClose={handleFormClose}
          onSave={handleFormSave}
        />
      )}

      {deletingProject && (
        <div className={styles.confirmModal} onClick={() => setDeletingProject(null)}>
          <div className={styles.confirmContent} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.confirmTitle}>{t('confirmDelete')}</h3>
            <p className={styles.confirmText}>
              {t('confirmDeleteText', { title: deletingProject.title_pt })}
            </p>
            <div className={styles.confirmActions}>
              <button
                className={styles.cancelConfirm}
                onClick={() => setDeletingProject(null)}
              >
                {t('cancel')}
              </button>
              <button
                className={styles.confirmButton}
                onClick={handleConfirmDelete}
              >
                {t('delete')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
