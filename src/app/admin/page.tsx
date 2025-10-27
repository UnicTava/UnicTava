'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { Logo } from '@/components/Logo'
import styles from './admin.module.css'

export const dynamic = 'force-dynamic'

export default function AdminLogin() {
  const t = useTranslations('admin.login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    // Check if already authenticated
    const checkAuth = async () => {
      const token = localStorage.getItem('adminToken')
      if (token) {
        router.push('/admin/dashboard')
      }
    }
    checkAuth()
  }, [router, isMounted])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Login failed')
      }

      // Store token and redirect
      localStorage.setItem('adminToken', data.token)
      router.push('/admin/dashboard')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  if (!isMounted) {
    return null
  }

  return (
    <div className={styles.loginContainer}>
      <div className={styles.backgroundPattern}>
        <div className={styles.cube1}></div>
        <div className={styles.cube2}></div>
        <div className={styles.cube3}></div>
      </div>

      <div className={styles.loginBox}>
        <div className={styles.loginHeader}>
          <Logo className={styles.logo} />
          <p className={styles.subtitle}>{t('title')}</p>
        </div>

        <form onSubmit={handleLogin} className={styles.loginForm}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">{t('username')}</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="unictava"
              required
              className={styles.input}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">{t('password')}</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={t('passwordPlaceholder')}
              required
              className={styles.input}
            />
          </div>

          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className={styles.loginButton}
          >
            {isLoading ? (
              <>
                <div className={styles.spinner}></div>
                {t('loggingIn')}
              </>
            ) : (
              t('loginButton')
            )}
          </button>
        </form>
      </div>
    </div>
  )
}