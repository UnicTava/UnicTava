'use client'

import React, { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Logo } from '@/components/Logo'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { StardustCanvas } from '@/components/StardustCanvas'
import styles from './Navigation.module.css'

interface NavigationProps {
  className?: string
}

export const Navigation: React.FC<NavigationProps> = ({ className }) => {
  const t = useTranslations('navigation')
  const locale = useLocale()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleLogoClick = () => {
    const currentPath = window.location.pathname
    if (currentPath.includes('/home') || currentPath === `/${locale}` || currentPath === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      window.location.href = `/${locale}/home`
    }
  }

  const handleNavClick = (section: string) => {
    const currentPath = window.location.pathname

    switch (section) {
      case 'inicio':
        window.location.href = `/${locale}/home`
        break
      case 'servicos':
        window.location.href = `/${locale}/servicos`
        break
      case 'projetos':
        window.location.href = `/${locale}/projetos`
        break
      case 'sobre':
        window.location.href = `/${locale}/sobre-nos`
        break
      case 'contato':
        if (currentPath.includes('/home') || currentPath === `/${locale}` || currentPath === '/') {
          const contactSection = document.querySelector('#contact-form-section')
          if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' })
          }
        } else {
          window.location.href = `/${locale}/home#contact-form-section`
        }
        break
      default:
        console.log(`Navigate to ${section}`)
    }
  }

  return (
    <>
      <nav className={`${styles.navContainer} ${className || ''}`}>
        {/* Botão hambúrguer - visível apenas em mobile */}
        <button
          className={styles.hamburger}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Navegação desktop */}
        <div className={styles.navGroup}>
          <a className={styles.navItem} onClick={() => handleNavClick('inicio')}>
            {t('home')}
          </a>
          <a className={styles.navItem} onClick={() => handleNavClick('servicos')}>
            {t('services')}
          </a>
        </div>

        <div className={styles.logoWrapper}>
          <Logo onClick={handleLogoClick} />
        </div>

        <div className={styles.navGroup}>
          <a className={styles.navItem} onClick={() => handleNavClick('projetos')}>
            {t('projects')}
          </a>
          <a className={styles.navItem} onClick={() => handleNavClick('sobre')}>
            {t('about')}
          </a>
          <a className={styles.navItem} onClick={() => handleNavClick('contato')}>
            {t('contact')}
          </a>
        </div>
      </nav>

      {/* Menu mobile overlay */}
      {isMobileMenuOpen && (
        <>
          <div
            className={styles.mobileBackdrop}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className={styles.mobileMenu}>
            {/* Partículas de fundo */}
            <div className={styles.mobileMenuParticles}>
              <StardustCanvas />
              <div className={styles.backgroundImage} />
            </div>

            {/* Logo no topo do menu mobile */}
            <div className={styles.mobileMenuHeader}>
              <Logo onClick={handleLogoClick} />
            </div>

            <nav className={styles.mobileMenuNav}>
              <a
                className={styles.mobileNavItem}
                onClick={() => {
                  handleNavClick('inicio')
                  setIsMobileMenuOpen(false)
                }}
              >
                {t('home')}
              </a>
              <a
                className={styles.mobileNavItem}
                onClick={() => {
                  handleNavClick('servicos')
                  setIsMobileMenuOpen(false)
                }}
              >
                {t('services')}
              </a>
              <a
                className={styles.mobileNavItem}
                onClick={() => {
                  handleNavClick('projetos')
                  setIsMobileMenuOpen(false)
                }}
              >
                {t('projects')}
              </a>
              <a
                className={styles.mobileNavItem}
                onClick={() => {
                  handleNavClick('sobre')
                  setIsMobileMenuOpen(false)
                }}
              >
                {t('about')}
              </a>
              <a
                className={styles.mobileNavItem}
                onClick={() => {
                  handleNavClick('contato')
                  setIsMobileMenuOpen(false)
                }}
              >
                {t('contact')}
              </a>

              {/* Seletor de idioma no menu mobile */}
              <div className={styles.mobileLanguageSwitcher}>
                <div data-mobile-menu="true">
                  <LanguageSwitcher />
                </div>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}