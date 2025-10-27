'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import styles from './TestimonialsSection.module.css'
import { Testimonial } from '@/lib/supabase-types'

interface TestimonialsSectionProps {
  className?: string
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className }) => {
  const t = useTranslations('testimonials')
  const locale = useLocale()
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)

  // Fetch testimonials from database
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const { supabase } = await import('@/lib/supabase')

        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('status', 'published')
          .order('display_order', { ascending: true })
          .order('created_at', { ascending: false })

        if (error) {
          console.error('Error fetching testimonials:', error)
        } else if (data) {
          setTestimonials(data)
        }
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  // Auto-slide dos depoimentos com 60fps timing
  useEffect(() => {
    if (testimonials.length === 0) return

    let animationId: number
    let lastTime = performance.now()
    const slideInterval = 7000 // 7 seconds between slides
    let elapsedTime = 0

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime
      lastTime = currentTime
      elapsedTime += deltaTime

      if (elapsedTime >= slideInterval) {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
        elapsedTime = 0
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  // Helper function to get localized value
  const getLocalizedValue = (obj: Testimonial, field: 'name' | 'position' | 'company' | 'quote') => {
    const suffix = locale === 'pt-BR' ? '_pt' : locale === 'en-GB' ? '_en' : '_it'
    return obj[`${field}${suffix}` as keyof Testimonial] as string
  }

  if (isLoading) {
    return null
  }

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section
      ref={sectionRef}
      id="testimonials-section"
      className={`${styles.testimonialsContainer} ${className || ''}`}
    >
      {/* Background pattern */}
      <div className={styles.backgroundPattern} />

      {/* Decorative elements */}
      <div className={styles.decorativeElement1} />
      <div className={styles.decorativeElement2} />

      <div className={styles.contentLayer}>
        {/* Testimonials slider */}
        <div className={styles.testimonialsSlider}>
          <div
            className={styles.slidesContainer}
            style={{ transform: `translateX(-${currentSlide * 33.333333}%)` }}
          >
            {testimonials.map((testimonial, index) => {
              const getCardClasses = () => {
                const baseClasses = [styles.testimonialCard, styles.animated]

                if (index === currentSlide) {
                  baseClasses.push(styles.active)
                } else if (index === (currentSlide + 1) % testimonials.length) {
                  baseClasses.push(styles.next)
                } else if (index === (currentSlide - 1 + testimonials.length) % testimonials.length) {
                  baseClasses.push(styles.prev)
                }

                return baseClasses.join(' ')
              }

              return (
                <div key={testimonial.id} className={styles.testimonialSlide}>
                  <div className={getCardClasses()}>
                  {/* Background pattern for card */}
                  <div className={styles.cardBackground} />

                  <div className={styles.testimonialContent}>
                    <div className={styles.profileSection}>
                      <div className={styles.avatarContainer}>
                        <img
                          src={testimonial.avatar_url || '/assets/images/testimonials/default-avatar.png'}
                          alt={getLocalizedValue(testimonial, 'name')}
                          className={styles.avatar}
                        />
                      </div>

                      <div className={styles.profileInfo}>
                        <h3 className={styles.profileName}>{getLocalizedValue(testimonial, 'name')}</h3>
                        <p className={styles.profilePosition}>
                          {getLocalizedValue(testimonial, 'position')}, {getLocalizedValue(testimonial, 'company')}
                        </p>
                        <blockquote className={styles.quote}>
                          &ldquo;{getLocalizedValue(testimonial, 'quote')}&rdquo;
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>

        {/* Navigation dots */}
        <div className={styles.dotsContainer}>
          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


