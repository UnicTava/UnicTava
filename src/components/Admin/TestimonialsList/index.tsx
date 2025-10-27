'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import styles from './TestimonialsList.module.css'
import { Testimonial } from '@/lib/supabase-types'
import TestimonialForm from '../TestimonialForm'

export default function TestimonialsList() {
  const t = useTranslations('admin.testimonials')
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null)
  const [deletingTestimonial, setDeletingTestimonial] = useState<Testimonial | null>(null)

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch('/api/admin/testimonials', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setTestimonials(data)
      }
    } catch (error) {
      console.error('Error fetching testimonials:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleCreateClick = () => {
    setEditingTestimonial(null)
    setShowForm(true)
  }

  const handleEditClick = (testimonial: Testimonial) => {
    setEditingTestimonial(testimonial)
    setShowForm(true)
  }

  const handleDeleteClick = (testimonial: Testimonial) => {
    setDeletingTestimonial(testimonial)
  }

  const handleConfirmDelete = async () => {
    if (!deletingTestimonial) return

    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch(`/api/admin/testimonials/${deletingTestimonial.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        await fetchTestimonials()
        setDeletingTestimonial(null)
      }
    } catch (error) {
      console.error('Error deleting testimonial:', error)
    }
  }

  const handleFormClose = () => {
    setShowForm(false)
    setEditingTestimonial(null)
  }

  const handleFormSave = () => {
    fetchTestimonials()
  }

  const filteredTestimonials = testimonials.filter(testimonial =>
    testimonial.name_pt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.name_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.name_it.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.company_pt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.company_en.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.company_it.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const publishedCount = testimonials.filter(t => t.status === 'published').length
  const draftCount = testimonials.filter(t => t.status === 'draft').length

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
          <span className={styles.statNumber}>{testimonials.length}</span>
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

      <div className={styles.testimonialsGrid}>
        {filteredTestimonials.length === 0 ? (
          <div className={styles.emptyState}>
            <svg viewBox="0 0 24 24" width="64" height="64">
              <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z"/>
            </svg>
            <p>{t('noTestimonials')}</p>
          </div>
        ) : (
          filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.testimonialHeader}>
                <div className={styles.avatarContainer}>
                  {testimonial.avatar_url ? (
                    <img src={testimonial.avatar_url} alt={testimonial.name_pt} className={styles.avatar} />
                  ) : (
                    <div className={styles.avatarPlaceholder}>
                      <svg viewBox="0 0 24 24" width="32" height="32">
                        <path fill="currentColor" d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                      </svg>
                    </div>
                  )}
                </div>
                <div className={`${styles.status} ${testimonial.status === 'published' ? styles.statusPublished : styles.statusDraft}`}>
                  {testimonial.status === 'published' ? t('statusPublished') : t('statusDraft')}
                </div>
              </div>

              <div className={styles.testimonialContent}>
                <h3 className={styles.testimonialName}>{testimonial.name_pt}</h3>
                <p className={styles.testimonialPosition}>{testimonial.position_pt}</p>
                <p className={styles.testimonialCompany}>{testimonial.company_pt}</p>
                <p className={styles.testimonialQuote}>&ldquo;{testimonial.quote_pt}&rdquo;</p>
              </div>

              <div className={styles.testimonialActions}>
                <button
                  className={styles.actionButton}
                  onClick={() => handleEditClick(testimonial)}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16">
                    <path fill="currentColor" d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"/>
                  </svg>
                  {t('edit')}
                </button>
                <button
                  className={`${styles.actionButton} ${styles.deleteButton}`}
                  onClick={() => handleDeleteClick(testimonial)}
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
        <TestimonialForm
          testimonial={editingTestimonial}
          onClose={handleFormClose}
          onSave={handleFormSave}
        />
      )}

      {deletingTestimonial && (
        <div className={styles.confirmModal} onClick={() => setDeletingTestimonial(null)}>
          <div className={styles.confirmContent} onClick={(e) => e.stopPropagation()}>
            <h3 className={styles.confirmTitle}>{t('confirmDelete')}</h3>
            <p className={styles.confirmText}>
              {t('confirmDeleteText', { name: deletingTestimonial.name_pt })}
            </p>
            <div className={styles.confirmActions}>
              <button
                className={styles.cancelConfirm}
                onClick={() => setDeletingTestimonial(null)}
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
