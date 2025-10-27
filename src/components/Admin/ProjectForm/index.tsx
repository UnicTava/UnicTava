'use client'

import { useState, useEffect, FormEvent, KeyboardEvent } from 'react'
import { createPortal } from 'react-dom'
import { useTranslations } from 'next-intl'
import styles from './ProjectForm.module.css'
import { Project, ProjectFormData } from '@/lib/supabase-types'

interface ProjectFormProps {
  project?: Project | null
  onClose: () => void
  onSave: () => void
}

export default function ProjectForm({ project, onClose, onSave }: ProjectFormProps) {
  const t = useTranslations('admin.projects')

  const [formData, setFormData] = useState<ProjectFormData>({
    title_pt: '',
    title_en: '',
    title_it: '',
    description_pt: '',
    description_en: '',
    description_it: '',
    tags: [],
    thumbnail_url: '',
    gallery_urls: [],
    gallery_items: [],
    project_url: '',
    video_url: '',
    video_type: 'url',
    status: 'draft',
    display_order: 0
  })

  const [tagInput, setTagInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [uploadingThumbnail, setUploadingThumbnail] = useState(false)
  const [uploadingGallery, setUploadingGallery] = useState(false)
  const [uploadingVideo, setUploadingVideo] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (project) {
      setFormData({
        title_pt: project.title_pt,
        title_en: project.title_en,
        title_it: project.title_it,
        description_pt: project.description_pt || '',
        description_en: project.description_en || '',
        description_it: project.description_it || '',
        tags: project.tags || [],
        thumbnail_url: project.thumbnail_url || '',
        gallery_urls: project.gallery_urls || [],
        gallery_items: project.gallery_items || [],
        project_url: project.project_url || '',
        video_url: project.video_url || '',
        video_type: project.video_type || 'url',
        status: project.status,
        display_order: project.display_order
      })
    }
  }, [project])

  const handleInputChange = (field: keyof ProjectFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      handleInputChange('tags', [...formData.tags, tagInput.trim()])
      setTagInput('')
    }
  }

  const handleRemoveTag = (tag: string) => {
    handleInputChange('tags', formData.tags.filter(t => t !== tag))
  }

  const handleTagKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTag()
    }
  }

  const handleThumbnailUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingThumbnail(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('file', file)
      if (project?.id) {
        formData.append('projectId', project.id)
      }

      const token = localStorage.getItem('adminToken')
      const response = await fetch('/api/admin/projects/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to upload image')
      }

      const data = await response.json()
      handleInputChange('thumbnail_url', data.url)
    } catch (err) {
      setError('Erro ao fazer upload da imagem')
      console.error(err)
    } finally {
      setUploadingThumbnail(false)
    }
  }

  const handleGalleryUpload = async (e: React.ChangeEvent<HTMLInputElement>, mediaType: 'image' | 'video') => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploadingGallery(true)
    setError('')

    try {
      const currentGalleryLength = formData.gallery_items.length

      const uploadPromises = Array.from(files).map(async (file, index) => {
        const uploadFormData = new FormData()
        uploadFormData.append('file', file)
        if (project?.id) {
          uploadFormData.append('projectId', project.id)
        }

        const token = localStorage.getItem('adminToken')
        const endpoint = mediaType === 'video'
          ? '/api/admin/projects/upload-video'
          : '/api/admin/projects/upload'

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          },
          body: uploadFormData
        })

        if (!response.ok) {
          throw new Error(`Failed to upload ${mediaType}`)
        }

        const data = await response.json()
        return {
          id: `${Date.now()}-${Math.random()}`,
          type: mediaType,
          url: data.url,
          order: currentGalleryLength + index,
          video_type: mediaType === 'video' ? 'file' as const : undefined
        }
      })

      const newItems = await Promise.all(uploadPromises)
      handleInputChange('gallery_items', [...formData.gallery_items, ...newItems])

      if (mediaType === 'image') {
        const urls = newItems.map(item => item.url)
        handleInputChange('gallery_urls', [...formData.gallery_urls, ...urls])
      }
    } catch (err) {
      setError(`Erro ao fazer upload ${mediaType === 'video' ? 'dos vídeos' : 'das imagens'}`)
      console.error(err)
    } finally {
      setUploadingGallery(false)
    }
  }

  const handleRemoveThumbnail = () => {
    handleInputChange('thumbnail_url', '')
  }

  const handleRemoveGalleryImage = (url: string) => {
    handleInputChange('gallery_urls', formData.gallery_urls.filter(u => u !== url))
  }

  const handleRemoveGalleryItem = (itemId: string) => {
    const item = formData.gallery_items.find(i => i.id === itemId)
    if (item) {
      handleInputChange('gallery_items', formData.gallery_items.filter(i => i.id !== itemId))
      if (item.type === 'image') {
        handleInputChange('gallery_urls', formData.gallery_urls.filter(u => u !== item.url))
      }
    }
  }

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingVideo(true)
    setError('')

    try {
      const formData = new FormData()
      formData.append('file', file)
      if (project?.id) {
        formData.append('projectId', project.id)
      }

      const token = localStorage.getItem('adminToken')
      const response = await fetch('/api/admin/projects/upload-video', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      })

      if (!response.ok) {
        throw new Error('Failed to upload video')
      }

      const data = await response.json()
      handleInputChange('video_url', data.url)
      handleInputChange('video_type', 'file')
    } catch (err) {
      setError('Erro ao fazer upload do vídeo')
      console.error(err)
    } finally {
      setUploadingVideo(false)
    }
  }

  const handleRemoveVideo = () => {
    handleInputChange('video_url', '')
    handleInputChange('video_type', 'url')
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const token = localStorage.getItem('adminToken')
      const url = project
        ? `/api/admin/projects/${project.id}`
        : '/api/admin/projects'
      const method = project ? 'PUT' : 'POST'

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
        throw new Error(data.error || 'Failed to save project')
      }

      onSave()
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao salvar projeto')
    } finally {
      setIsLoading(false)
    }
  }

  if (!mounted) return null

  const modalContent = (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>{project ? t('edit') : t('create')}</h2>
          <button className={styles.closeButton} onClick={onClose}>×</button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t('titles')}</h3>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('titlePt')} *</label>
              <input
                type="text"
                className={styles.input}
                value={formData.title_pt}
                onChange={(e) => handleInputChange('title_pt', e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('titleEn')} *</label>
              <input
                type="text"
                className={styles.input}
                value={formData.title_en}
                onChange={(e) => handleInputChange('title_en', e.target.value)}
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('titleIt')} *</label>
              <input
                type="text"
                className={styles.input}
                value={formData.title_it}
                onChange={(e) => handleInputChange('title_it', e.target.value)}
                required
              />
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t('descriptions')}</h3>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('descriptionPt')}</label>
              <textarea
                className={styles.textarea}
                value={formData.description_pt}
                onChange={(e) => handleInputChange('description_pt', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('descriptionEn')}</label>
              <textarea
                className={styles.textarea}
                value={formData.description_en}
                onChange={(e) => handleInputChange('description_en', e.target.value)}
              />
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('descriptionIt')}</label>
              <textarea
                className={styles.textarea}
                value={formData.description_it}
                onChange={(e) => handleInputChange('description_it', e.target.value)}
              />
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t('details')}</h3>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('tags')}</label>
              <div className={styles.tagsInput}>
                {formData.tags.map(tag => (
                  <div key={tag} className={styles.tag}>
                    {tag}
                    <button
                      type="button"
                      className={styles.tagRemove}
                      onClick={() => handleRemoveTag(tag)}
                    >
                      ×
                    </button>
                  </div>
                ))}
                <div className={styles.tagInputWrapper}>
                  <input
                    type="text"
                    className={styles.tagInput}
                    placeholder={t('addTag')}
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                    onBlur={handleAddTag}
                  />
                </div>
              </div>
            </div>

            <div className={styles.inputGroup}>
              <label className={styles.label}>{t('projectUrl')}</label>
              <input
                type="url"
                className={styles.input}
                value={formData.project_url}
                onChange={(e) => handleInputChange('project_url', e.target.value)}
                placeholder="https://"
              />
              <small className={styles.hint}>
                Link externo do projeto (ex: site ao vivo, GitHub, portfolio, etc.)
              </small>
            </div>

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

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Vídeo (opcional)</h3>

            <div className={styles.inputGroup}>
              <label className={styles.label}>Tipo de vídeo</label>
              <div className={styles.radioGroup}>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="videoType"
                    value="url"
                    checked={formData.video_type === 'url'}
                    onChange={() => {
                      handleInputChange('video_type', 'url')
                      if (formData.video_url) {
                        handleInputChange('video_url', '')
                      }
                    }}
                  />
                  URL externa (YouTube, Vimeo, etc)
                </label>
                <label className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="videoType"
                    value="file"
                    checked={formData.video_type === 'file'}
                    onChange={() => handleInputChange('video_type', 'file')}
                  />
                  Arquivo (upload)
                </label>
              </div>
            </div>

            {formData.video_type === 'url' ? (
              <div className={styles.inputGroup}>
                <label className={styles.label}>URL do vídeo</label>
                <input
                  type="url"
                  className={styles.input}
                  value={formData.video_url}
                  onChange={(e) => handleInputChange('video_url', e.target.value)}
                  placeholder="https://youtube.com/watch?v=..."
                />
                <small className={styles.hint}>
                  Cole o link do YouTube, Vimeo ou outro serviço
                </small>
              </div>
            ) : (
              <div className={styles.imageUpload}>
                {formData.video_url && formData.video_type === 'file' ? (
                  <div className={styles.videoPreview}>
                    <video src={formData.video_url} controls style={{ width: '100%', maxHeight: '300px' }} />
                    <button
                      type="button"
                      className={styles.removeImage}
                      onClick={handleRemoveVideo}
                    >
                      {t('remove')}
                    </button>
                  </div>
                ) : (
                  <label className={styles.uploadButton}>
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleVideoUpload}
                      disabled={uploadingVideo}
                    />
                    {uploadingVideo ? t('uploading') : 'Fazer upload de vídeo'}
                  </label>
                )}
                <small className={styles.hint}>
                  Formatos: MP4, WebM, MOV (máx. 100MB)
                </small>
              </div>
            )}
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>{t('thumbnail')}</h3>

            <div className={styles.imageUpload}>
              {formData.thumbnail_url ? (
                <div className={styles.imagePreview}>
                  <img src={formData.thumbnail_url} alt="Thumbnail" />
                  <button
                    type="button"
                    className={styles.removeImage}
                    onClick={handleRemoveThumbnail}
                  >
                    {t('remove')}
                  </button>
                </div>
              ) : (
                <label className={styles.uploadButton}>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailUpload}
                    disabled={uploadingThumbnail}
                  />
                  {uploadingThumbnail ? t('uploading') : t('uploadThumbnail')}
                </label>
              )}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Galeria (Imagens e Vídeos)</h3>
            <p className={styles.sectionHint}>
              Adicione imagens e vídeos que serão exibidos na galeria de rolagem da página do projeto
            </p>

            <div className={styles.imageUpload}>
              <div className={styles.uploadButtonGroup}>
                <label className={styles.uploadButton}>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={(e) => handleGalleryUpload(e, 'image')}
                    disabled={uploadingGallery}
                  />
                  {uploadingGallery ? t('uploading') : 'Upload Imagens'}
                </label>

                <label className={styles.uploadButton}>
                  <input
                    type="file"
                    accept="video/*"
                    multiple
                    onChange={(e) => handleGalleryUpload(e, 'video')}
                    disabled={uploadingGallery}
                  />
                  {uploadingGallery ? t('uploading') : 'Upload Vídeos'}
                </label>
              </div>

              {formData.gallery_items.length > 0 && (
                <div className={styles.galleryGrid}>
                  {formData.gallery_items.sort((a, b) => a.order - b.order).map((item) => (
                    <div key={item.id} className={styles.galleryItem}>
                      {item.type === 'image' ? (
                        <img src={item.url} alt={`Gallery ${item.order + 1}`} />
                      ) : (
                        <div className={styles.videoPreview}>
                          <video src={item.url} style={{ width: '100%', height: 'auto' }} />
                          <div className={styles.videoLabel}>VIDEO</div>
                        </div>
                      )}
                      <button
                        type="button"
                        className={styles.removeImage}
                        onClick={() => handleRemoveGalleryItem(item.id)}
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
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
