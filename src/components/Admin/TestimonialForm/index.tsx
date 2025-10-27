'use client'

import { useState, useEffect, FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { useTranslations } from 'next-intl'
import styles from './TestimonialForm.module.css'
import { Testimonial, TestimonialFormData } from '@/lib/supabase-types'

interface TestimonialFormProps {
  testimonial?: Testimonial | null
  onClose: () => void
  onSave: () => void
}

export default function TestimonialForm({ testimonial, onClose, onSave }: TestimonialFormProps) {
  const t = useTranslations('admin.testimonials')

  const [formData, setFormData] = useState<TestimonialFormData>({
    name_pt: '',
    name_en: '',
    name_it: '',
    position_pt: '',
    position_en: '',
    position_it: '',
    company_pt: '',
    company_en: '',
    company_it: '',
    quote_pt: '',
    quote_en: '',
    quote_it: '',
    avatar_url: '',
    status: 'draft',
    display_order: 0
  })

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [uploadingAvatar, setUploadingAvatar] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (testimonial) {
      setFormData({
        name_pt: testimonial.name_pt,
        name_en: testimonial.name_en,
        name_it: testimonial.name_it,
        position_pt: testimonial.position_pt,
        position_en: testimonial.position_en,
        position_it: testimonial.position_it,
        company_pt: testimonial.company_pt,
        company_en: testimonial.company_en,
        company_it: testimonial.company_it,
        quote_pt: testimonial.quote_pt,
        quote_en: testimonial.quote_en,
        quote_it: testimonial.quote_it,
        avatar_url: testimonial.avatar_url || '',
        status: testimonial.status,
        display_order: testimonial.display_order
      })
    }
  }, [testimonial])

  const handleInputChange = (field: keyof TestimonialFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingAvatar(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('file', file)
      if (testimonial?.id) {
        formData.append('testimonialId', testimonial.id)
      }

      const token = localStorage.getItem('adminToken')
      const response = await fetch('/api/admin/testimonials/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to upload avatar')
      }

      const data = await response.json()
      handleInputChange('avatar_url', data.url)
    } catch (err) {
      setError('Erro ao fazer upload da foto')
      console.error(err)
    } finally {
      setUploadingAvatar(false)
    }
  }

  const handleRemoveAvatar = () => {
    handleInputChange('avatar_url', '')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const token = localStorage.getItem('adminToken')
      const url = testimonial
        ? `/api/admin/testimonials/${testimonial.id}`
        : '/api/admin/testimonials'
      const method = testimonial ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to save testimonial')
      }

      onSave()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao salvar testemunho')
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) return null

  const modalContent = (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>{testimonial ? t('edit') : t('create')}</h2>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Foto</h3>

            <div className={styles.imageUpload}>
              {formData.avatar_url ? (
                <div className={styles.avatarPreview}>
                  <img src={formData.avatar_url} alt="Avatar" />
                  <button
                    type="button"
                    className={styles.removeImage}
                    onClick={handleRemoveAvatar}
                  >
                    {t('remove')}
                  </button>
                </div>
              ) : (
                <label className={styles.uploadButton}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    disabled={uploadingAvatar}
                  />
                  {uploadingAvatar ? t('uploading') : t('uploadAvatar')}
                </label>
              )}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t('names')}</h3>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('namePt')} *</label>
              <input
                type="text"
                className={styles.input}
                value={formData.name_pt}
                onChange={(e) => handleInputChange('name_pt', e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('nameEn')} *</label>
              <input
                type="text"
                className={styles.input}
                value={formData.name_en}
                onChange={(e) => handleInputChange('name_en', e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('nameIt')} *</label>
              <input
                type="text"
                className={styles.input}
                value={formData.name_it}
                onChange={(e) => handleInputChange('name_it', e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t('positions')}</h3>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('positionPt')} *</label>
              <input
                type="text"
                className={styles.input}
                value={formData.position_pt}
                onChange={(e) => handleInputChange('position_pt', e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('positionEn')} *</label>
              <input
                type="text"
                className={styles.input}
                value={formData.position_en}
                onChange={(e) => handleInputChange('position_en', e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('positionIt')} *</label>
              <input
                type="text"
                className={styles.input}
                value={formData.position_it}
                onChange={(e) => handleInputChange('position_it', e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t('companies')}</h3>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('companyPt')} *</label>
              <input
                type="text"
                className={styles.input}
                value={formData.company_pt}
                onChange={(e) => handleInputChange('company_pt', e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('companyEn')} *</label>
              <input
                type="text"
                className={styles.input}
                value={formData.company_en}
                onChange={(e) => handleInputChange('company_en', e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('companyIt')} *</label>
              <input
                type="text"
                className={styles.input}
                value={formData.company_it}
                onChange={(e) => handleInputChange('company_it', e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t('quotes')}</h3>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('quotePt')} *</label>
              <textarea
                className={styles.textarea}
                value={formData.quote_pt}
                onChange={(e) => handleInputChange('quote_pt', e.target.value)}
                rows={4}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('quoteEn')} *</label>
              <textarea
                className={styles.textarea}
                value={formData.quote_en}
                onChange={(e) => handleInputChange('quote_en', e.target.value)}
                rows={4}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('quoteIt')} *</label>
              <textarea
                className={styles.textarea}
                value={formData.quote_it}
                onChange={(e) => handleInputChange('quote_it', e.target.value)}
                rows={4}
                required
              />
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t('settings')}</h3>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>{t('status')}</label>
                <select
                  className={styles.select}
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value as 'draft' | 'published')}
                >
                  <option value="draft">{t('statusDraft')}</option>
                  <option value="published">{t('statusPublished')}</option>
                </select>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>{t('displayOrder')}</label>
                <input
                  type="number"
                  className={styles.input}
                  value={formData.display_order}
                  onChange={(e) => handleInputChange('display_order', parseInt(e.target.value) || 0)}
                  min="0"
                />
              </div>
            </div>
          </div>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelButton}
              onClick={onClose}
              disabled={isLoading}
            >
              {t('cancel')}
            </button>
            <button
              type="submit"
              className={styles.saveButton}
              disabled={isLoading}
            >
              {isLoading ? t('saving') : t('save')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
