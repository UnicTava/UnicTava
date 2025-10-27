'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useTranslations } from 'next-intl'
import styles from './ProposalsList.module.css'

interface Proposal {
  id: string
  name: string
  email: string
  company?: string
  position?: string
  timeline?: string
  budget?: string
  project_type?: string
  message: string
  file_urls?: string[]
  created_at: string
}

export default function ProposalsList() {
  const t = useTranslations('admin.proposals')
  const tContact = useTranslations('contact.projectTypes')
  const [proposals, setProposals] = useState<Proposal[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState<string>('all')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    fetchProposals()
  }, [])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const originalOverflow = document.body.style.overflow

    if (selectedProposal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [isMounted, selectedProposal])

  const fetchProposals = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch('/api/admin/proposals', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setProposals(data)
      }
    } catch (error) {
      console.error('Error fetching proposals:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date)
  }

  const getFileIcon = (url: string) => {
    const extension = url.split('.').pop()?.toLowerCase()
    if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension || '')) {
      return '🖼️'
    } else if (extension === 'pdf') {
      return '📄'
    } else if (['doc', 'docx'].includes(extension || '')) {
      return '📝'
    }
    return '📎'
  }

  const filteredProposals = proposals.filter(proposal => {
    const matchesSearch =
      proposal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal.message.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesType = filterType === 'all' || proposal.project_type === filterType

    return matchesSearch && matchesType
  })

  const projectTypes = [
    { key: 'all', label: t('allTypes') },
    { key: tContact('ai'), label: tContact('ai') },
    { key: tContact('cinematic'), label: tContact('cinematic') },
    { key: tContact('simulation'), label: tContact('simulation') },
    { key: tContact('education'), label: tContact('education') },
    { key: tContact('games'), label: tContact('games') },
    { key: tContact('vrar'), label: tContact('vrar') },
    { key: tContact('other'), label: tContact('other') }
  ]

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

        <select
          className={styles.filterSelect}
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          {projectTypes.map(type => (
            <option key={type.key} value={type.key}>
              {type.label}
            </option>
          ))}
        </select>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{proposals.length}</span>
            <span className={styles.statLabel}>{t('total')}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              {proposals.filter(p => p.file_urls && p.file_urls.length > 0).length}
            </span>
            <span className={styles.statLabel}>{t('withAttachments')}</span>
          </div>
        </div>
      </div>

      <div className={styles.proposalsGrid}>
        {filteredProposals.length === 0 ? (
          <div className={styles.emptyState}>
            <svg viewBox="0 0 24 24" width="64" height="64">
              <path fill="currentColor" d="M19 3H5C3.89 3 3 3.89 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3M19 5V19H5V5H19M12 7V9H17V7H12M12 11V13H17V13H12M12 15V17H17V15H12M7 7V9H10V7H7M7 11V13H10V11H7M7 15V17H10V15H7"/>
            </svg>
            <p>{t('noProposals')}</p>
          </div>
        ) : (
          filteredProposals.map((proposal) => (
            <div
              key={proposal.id}
              className={styles.proposalCard}
              onClick={() => setSelectedProposal(proposal)}
            >
              <div className={styles.proposalHeader}>
                <div className={styles.proposalAvatar}>
                  {proposal.name.charAt(0).toUpperCase()}
                </div>
                <div className={styles.proposalInfo}>
                  <h3 className={styles.proposalName}>{proposal.name}</h3>
                  <p className={styles.proposalEmail}>{proposal.email}</p>
                  {proposal.company && (
                    <p className={styles.proposalCompany}>{proposal.company}</p>
                  )}
                </div>
              </div>

              {proposal.project_type && (
                <div className={styles.proposalType}>
                  <span className={styles.typeTag}>{proposal.project_type}</span>
                </div>
              )}

              <p className={styles.proposalMessage}>
                {proposal.message.length > 150
                  ? proposal.message.substring(0, 150) + '...'
                  : proposal.message}
              </p>

              <div className={styles.proposalFooter}>
                <div className={styles.footerInfo}>
                  {proposal.budget && (
                    <span className={styles.budgetTag}>💰 {proposal.budget}</span>
                  )}
                  {proposal.timeline && (
                    <span className={styles.timelineTag}>📅 {proposal.timeline}</span>
                  )}
                </div>

                <div className={styles.footerMeta}>
                  {proposal.file_urls && proposal.file_urls.length > 0 && (
                    <span className={styles.attachmentCount}>
                      📎 {proposal.file_urls.length} {t('files')}
                    </span>
                  )}
                  <span className={styles.proposalDate}>
                    {formatDate(proposal.created_at)}
                  </span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {isMounted && selectedProposal && createPortal(
        <div className={styles.modal} onClick={() => setSelectedProposal(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>{t('detailsTitle')}</h2>
              <button
                className={styles.closeButton}
                onClick={() => setSelectedProposal(null)}
              >
                ×
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.detailSection}>
                <h3>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 12C14.21 12 16 10.21 16 8S14.21 4 12 4 8 5.79 8 8 9.79 12 12 12M12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"/>
                  </svg>
                  {t('clientInfo')}
                </h3>
                <div className={styles.detailGrid}>
                  <div className={styles.detailItem}>
                    <label>{tContact('name')}</label>
                    <p>{selectedProposal.name}</p>
                  </div>
                  <div className={styles.detailItem}>
                    <label>{tContact('email')}</label>
                    <p>{selectedProposal.email}</p>
                  </div>
                  {selectedProposal.company && (
                    <div className={styles.detailItem}>
                      <label>{t('company')}</label>
                      <p>{selectedProposal.company}</p>
                    </div>
                  )}
                  {selectedProposal.position && (
                    <div className={styles.detailItem}>
                      <label>{t('position')}</label>
                      <p>{selectedProposal.position}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.detailSection}>
                <h3>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M19 3H14.82C14.4 1.84 13.3 1 12 1S9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M12 3C12.55 3 13 3.45 13 4S12.55 5 12 5 11 4.55 11 4 11.45 3 12 3M7 7H17V5H19V19H5V5H7V7M12 9L7 14L8.41 15.41L12 11.83L15.59 15.41L17 14L12 9Z"/>
                  </svg>
                  {t('projectDetails')}
                </h3>
                <div className={styles.detailGrid}>
                  {selectedProposal.project_type && (
                    <div className={styles.detailItem}>
                      <label>{t('projectType')}</label>
                      <p>{selectedProposal.project_type}</p>
                    </div>
                  )}
                  {selectedProposal.budget && (
                    <div className={styles.detailItem}>
                      <label>{t('budget')}</label>
                      <p>{selectedProposal.budget}</p>
                    </div>
                  )}
                  {selectedProposal.timeline && (
                    <div className={styles.detailItem}>
                      <label>{t('timeline')}</label>
                      <p>{selectedProposal.timeline}</p>
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.detailSection}>
                <h3>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16M7 9H17V11H7V9M7 6H17V8H7V6M7 12H15V14H7V12Z"/>
                  </svg>
                  {t('message')}
                </h3>
                <p className={styles.fullMessage}>{selectedProposal.message}</p>
              </div>

              {selectedProposal.file_urls && selectedProposal.file_urls.length > 0 && (
                <div className={styles.detailSection}>
                  <h3>
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M16.5 6V17.5C16.5 19.71 14.71 21.5 12.5 21.5S8.5 19.71 8.5 17.5V5C8.5 3.62 9.62 2.5 11 2.5S13.5 3.62 13.5 5V15.5C13.5 16.05 13.05 16.5 12.5 16.5S11.5 16.05 11.5 15.5V6H10V15.5C10 16.88 11.12 18 12.5 18S15 16.88 15 15.5V5C15 2.79 13.21 1 11 1S7 2.79 7 5V17.5C7 20.54 9.46 23 12.5 23S18 20.54 18 17.5V6H16.5Z"/>
                    </svg>
                    {t('attachments')} ({selectedProposal.file_urls.length})
                  </h3>
                  <div className={styles.attachmentsGrid}>
                    {selectedProposal.file_urls.map((url, index) => {
                      const fileName = url.split('/').pop() || t('file')
                      // Ensure the URL has the correct Supabase storage URL format
                      const fullUrl = url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/${url}`
                      return (
                        <a
                          key={index}
                          href={fullUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.attachmentItem}
                        >
                          <span className={styles.fileIcon}>{getFileIcon(url)}</span>
                          <span className={styles.fileName}>{fileName}</span>
                          <svg viewBox="0 0 24 24" width="16" height="16">
                            <path fill="currentColor" d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"/>
                          </svg>
                        </a>
                      )
                    })}
                  </div>
                </div>
              )}

              <div className={styles.detailSection}>
                <h3>
                  <svg viewBox="0 0 24 24" width="24" height="24">
                    <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M12.5 7H11V13L16.25 16.15L17 14.92L12.5 11.25V7Z"/>
                  </svg>
                  {t('sentDate')}
                </h3>
                <p style={{ fontSize: '1.1rem', color: '#f0f0f0' }}>{formatDate(selectedProposal.created_at)}</p>
              </div>
            </div>

            <div className={styles.modalActions}>
              <a
                href={`mailto:${selectedProposal.email}?subject=Re: Proposta de ${selectedProposal.project_type || 'Projeto'}`}
                className={styles.replyButton}
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z"/>
                </svg>
                {t('replyButton')}
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}
