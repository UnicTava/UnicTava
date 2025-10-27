'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useLocale, useTranslations } from 'next-intl'
import styles from './LanguageSwitcher.module.css'

interface Language {
  code: string
  shortCode: string
  flag: React.ReactNode
}

const BrazilFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="14" fill="#009B3A"/>
    <path d="M10 1L18 7L10 13L2 7L10 1Z" fill="#FFDF00"/>
    <circle cx="10" cy="7" r="3" fill="#002776"/>
  </svg>
)

const ItalyFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="6.67" height="14" fill="#009246"/>
    <rect x="6.67" width="6.67" height="14" fill="#F1F2F1"/>
    <rect x="13.33" width="6.67" height="14" fill="#CE2B37"/>
  </svg>
)

const UKFlag = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="14" fill="#012169"/>
    <path d="M0 0L20 14M20 0L0 14" stroke="white" strokeWidth="2.8"/>
    <path d="M0 0L20 14M20 0L0 14" stroke="#C8102E" strokeWidth="1.7"/>
    <path d="M10 0V14M0 7H20" stroke="white" strokeWidth="4.7"/>
    <path d="M10 0V14M0 7H20" stroke="#C8102E" strokeWidth="2.8"/>
  </svg>
)

const languages: Language[] = [
  { code: 'pt-BR', shortCode: 'BR', flag: <BrazilFlag /> },
  { code: 'it', shortCode: 'IT', flag: <ItalyFlag /> },
  { code: 'en-GB', shortCode: 'GB', flag: <UKFlag /> },
]

export const LanguageSwitcher: React.FC = () => {
  const t = useTranslations('accessibility')
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find((lang) => lang.code === currentLocale) || languages[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (languageCode: string) => {
    const segments = pathname.split('/').filter(Boolean)
    const currentLocaleIndex = segments.findIndex((segment) =>
      ['pt-BR', 'it', 'en-GB'].includes(segment)
    )

    if (currentLocaleIndex !== -1) {
      segments[currentLocaleIndex] = languageCode
    } else {
      segments.unshift(languageCode)
    }

    const newPath = `/${segments.join('/')}`
    router.push(newPath)
    setIsOpen(false)
  }

  return (
    <div className={styles.container} ref={dropdownRef}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t('selectLanguage')}
        aria-expanded={isOpen}
      >
        <span className={styles.flag}>{currentLanguage.flag}</span>
        <span className={styles.languageName}>{currentLanguage.shortCode}</span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M4 6L8 10L12 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {languages.map((language) => (
            <button
              key={language.code}
              className={`${styles.option} ${
                language.code === currentLocale ? styles.optionActive : ''
              }`}
              onClick={() => handleLanguageChange(language.code)}
            >
              <span className={styles.flag}>{language.flag}</span>
              <span className={styles.languageName}>{language.shortCode}</span>
              {language.code === currentLocale && (
                <svg className={styles.checkmark} width="16" height="16" viewBox="0 0 16 16">
                  <path
                    d="M13.5 4L6 11.5L2.5 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}