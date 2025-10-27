'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'
import styles from './ContactForm.module.css'
import Ticker from '@/components/Ticker'
import Toast from '@/components/Toast'

interface ContactFormProps {
  className?: string
}

interface FormData {
  name: string
  email: string
  projectType: string
  message: string
  files: File[]
  privacyConsent: boolean
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
  const t = useTranslations('contact')
  const locale = useLocale()
  const [activeButton, setActiveButton] = useState<'contact' | 'proposal'>('proposal')
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: '',
    message: '',
    files: [],
    privacyConsent: false
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [toast, setToast] = useState<{
    show: boolean
    type: 'success' | 'error' | 'info'
    title: string
    message: string
  }>({
    show: false,
    type: 'success',
    title: '',
    message: ''
  })
  const sectionRef = useRef<HTMLElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-50px'
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData(prev => ({
      ...prev,
      files: [...prev.files, ...files]
    }))
  }

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      privacyConsent: e.target.checked
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (activeButton === 'contact') {
        // Simple contact form submission
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message
          })
        })

        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.error || 'Failed to submit contact form')
        }

        // Show success message
        setToast({
          show: true,
          type: 'success',
          title: t('successTitle'),
          message: t('successMessage')
        })

      } else {
        // Proposal form submission with files
        const formDataToSend = new FormData()
        formDataToSend.append('name', formData.name)
        formDataToSend.append('email', formData.email)
        formDataToSend.append('message', formData.message)

        // Add optional fields
        if (formData.projectType) formDataToSend.append('projectType', formData.projectType)

        // Add files
        formData.files.forEach((file) => {
          formDataToSend.append('files', file)
        })

        const response = await fetch('/api/proposal', {
          method: 'POST',
          body: formDataToSend
        })

        const result = await response.json()

        if (!response.ok) {
          throw new Error(result.error || 'Failed to submit proposal')
        }

        // Show success message
        const filesText = result.data?.filesUploaded > 0 ? t('successProposalFiles', { count: result.data.filesUploaded }) : ''
        setToast({
          show: true,
          type: 'success',
          title: t('successProposalTitle'),
          message: t('successProposalMessage', { files: filesText })
        })
      }

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: '',
        files: [],
        privacyConsent: false
      })

      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }

    } catch (error) {
      console.error('Erro ao enviar formulário:', error)
      setToast({
        show: true,
        type: 'error',
        title: t('errorTitle'),
        message: error instanceof Error ? error.message : t('errorMessage')
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const projectTypes = [
    t('projectTypes.ai'),
    t('projectTypes.cinematic'),
    t('projectTypes.simulation'),
    t('projectTypes.education'),
    t('projectTypes.games'),
    t('projectTypes.vrar'),
    t('projectTypes.other')
  ]

  return (
    <>
      {toast.show && (
        <Toast
          type={toast.type}
          title={toast.title}
          message={toast.message}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}
      <section
      ref={sectionRef}
      id="contact-form-section"
      className={`${styles.contactFormContainer} ${className || ''}`}
    >
      <div className={styles.backgroundPattern}>
        <div className={styles.decorativeElement1}></div>
        <div className={styles.decorativeElement2}></div>
      </div>

      <Ticker
        images={[
          '/Logo/16.png',
          '/Logo/17.png',
          '/Logo/18.png',
          '/Logo/19.png',
          '/Logo/20.png',
          '/Logo/21.png'
        ]}
        speed={45}
        imageHeight={70}
      />

      <div className={`${styles.contentLayer} ${isVisible ? styles.animated : ''}`}>
        <h2 className={styles.title}>
          {t('title')}
        </h2>

        <div className={styles.buttonToggle}>
          <button
            type="button"
            className={`${styles.toggleButton} ${activeButton === 'contact' ? styles.active : ''}`}
            onClick={() => setActiveButton('contact')}
          >
            <svg className={styles.buttonIcon} viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            {t('buttonContact')}
          </button>
          <button
            type="button"
            className={`${styles.toggleButton} ${activeButton === 'proposal' ? styles.active : styles.inactive}`}
            onClick={() => setActiveButton('proposal')}
          >
            <svg className={styles.buttonIcon} viewBox="0 0 24 24" width="24" height="24">
              <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17v-2h-1v-2h1v-2c-1.1 0-2-.9-2-2s.9-2 2-2v-2h1v2h2v2h-2v2c1.1 0 2 .9 2 2s-.9 2-2 2v2h-1z"/>
            </svg>
            {t('buttonProposal')}
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputsContainer}>
            <div className={styles.inputRow}>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="name">{t('name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('namePlaceholder')}
                  className={styles.input}
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="email">{t('email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('emailPlaceholder')}
                  className={styles.input}
                  required
                />
              </div>
            </div>

            {activeButton === 'proposal' && (
              <div className={styles.inputGroup}>
                <label className={styles.label} htmlFor="projectType">{t('projectType')}</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className={styles.select}
                >
                  <option value="">{t('projectTypePlaceholder')}</option>
                  {projectTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            )}

            <div className={styles.inputGroup}>
              <label className={styles.label} htmlFor="message">{t('message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder={t('messagePlaceholder')}
                className={styles.textarea}
                rows={6}
                required
              />
            </div>

            {activeButton === 'proposal' && (
              <div className={styles.fileUploadSection}>
                <label className={styles.fileUploadLabel}>
                  {t('fileUploadLabel')}
                </label>
                <div
                  className={styles.fileDropzone}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <div className={styles.fileDropzoneContent}>
                    <svg className={styles.uploadIcon} viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                    </svg>
                    <p className={styles.uploadText}>
                      {t('fileDragDrop')}<br />
                      {t('fileDragOr')}
                    </p>
                    <button type="button" className={styles.uploadButton}>
                      {t('fileClickUpload')}
                    </button>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileUpload}
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    className={styles.hiddenFileInput}
                  />
                </div>
                {formData.files.length > 0 && (
                  <div className={styles.filesList}>
                    {formData.files.map((file, index) => (
                      <div key={index} className={styles.fileItem}>
                        <span className={styles.fileName}>{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(index)}
                          className={styles.removeFileButton}
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className={styles.privacyCheckbox}>
            <input
              type="checkbox"
              id="privacyConsent"
              name="privacyConsent"
              checked={formData.privacyConsent}
              onChange={handleCheckboxChange}
              required
              className={styles.checkboxInput}
            />
            <label htmlFor="privacyConsent" className={styles.checkboxLabel}>
              {t('privacyConsentText')}{' '}
              <Link href={`/${locale}/politica-privacidade`} target="_blank" className={styles.privacyLink}>
                {t('privacyPolicyLink')}
              </Link>
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
          >
            {isSubmitting ? (
              <>
                <div className={styles.loadingSpinner}></div>
                {t('submitting')}
              </>
            ) : (
              <>
                <svg className={styles.sendIcon} viewBox="0 0 24 24" width="24" height="24">
                  <path fill="currentColor" d="M2,21L23,12L2,3V10L17,12L2,14V21Z"/>
                </svg>
                {t('submitButton')}
              </>
            )}
          </button>
        </form>
      </div>
    </section>
    </>
  )
}

export default ContactForm