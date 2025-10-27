'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import styles from './ContactsList.module.css'

interface Contact {
  id: string
  name: string
  email: string
  message: string
  created_at: string
}

export default function ContactsList() {
  const t = useTranslations('admin.contacts')
  const [contacts, setContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchContacts()
  }, [])

  const fetchContacts = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await fetch('/api/admin/contacts', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setContacts(data)
      }
    } catch (error) {
      console.error('Error fetching contacts:', error)
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

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.message.toLowerCase().includes(searchTerm.toLowerCase())
  )

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

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>{contacts.length}</span>
            <span className={styles.statLabel}>{t('total')}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>
              {contacts.filter(c => {
                const date = new Date(c.created_at)
                const today = new Date()
                return date.toDateString() === today.toDateString()
              }).length}
            </span>
            <span className={styles.statLabel}>{t('today')}</span>
          </div>
        </div>
      </div>

      <div className={styles.contactsGrid}>
        {filteredContacts.length === 0 ? (
          <div className={styles.emptyState}>
            <svg viewBox="0 0 24 24" width="64" height="64">
              <path fill="currentColor" d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M20 16H5.2L4 17.2V4H20V16Z"/>
            </svg>
            <p>{t('noContacts')}</p>
          </div>
        ) : (
          filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className={styles.contactCard}
              onClick={() => setSelectedContact(contact)}
            >
              <div className={styles.contactHeader}>
                <div className={styles.contactAvatar}>
                  {contact.name.charAt(0).toUpperCase()}
                </div>
                <div className={styles.contactInfo}>
                  <h3 className={styles.contactName}>{contact.name}</h3>
                  <p className={styles.contactEmail}>{contact.email}</p>
                </div>
              </div>

              <p className={styles.contactMessage}>
                {contact.message.length > 150
                  ? contact.message.substring(0, 150) + '...'
                  : contact.message}
              </p>

              <div className={styles.contactFooter}>
                <span className={styles.contactDate}>
                  {formatDate(contact.created_at)}
                </span>
              </div>
            </div>
          ))
        )}
      </div>

      {selectedContact && (
        <div className={styles.modal} onClick={() => setSelectedContact(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>{t('detailsTitle')}</h2>
              <button
                className={styles.closeButton}
                onClick={() => setSelectedContact(null)}
              >
                ×
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.detailItem}>
                <label>{t('name')}</label>
                <p>{selectedContact.name}</p>
              </div>

              <div className={styles.detailItem}>
                <label>{t('email')}</label>
                <p>{selectedContact.email}</p>
              </div>

              <div className={styles.detailItem}>
                <label>{t('message')}</label>
                <p className={styles.fullMessage}>{selectedContact.message}</p>
              </div>

              <div className={styles.detailItem}>
                <label>{t('sentDate')}</label>
                <p>{formatDate(selectedContact.created_at)}</p>
              </div>
            </div>

            <div className={styles.modalActions}>
              <a
                href={`mailto:${selectedContact.email}`}
                className={styles.replyButton}
              >
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path fill="currentColor" d="M10,9V5L3,12L10,19V14.9C15,14.9 18.5,16.5 21,20C20,15 17,10 10,9Z"/>
                </svg>
                {t('replyButton')}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}