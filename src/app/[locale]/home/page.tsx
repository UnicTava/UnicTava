'use client'

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { Hero } from '@/components/Hero'
import { ServicesSection } from '@/components/ServicesSection'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import { StardustCanvas } from '@/components/StardustCanvas'

export default function HomePage() {
  return (
    <main style={{ background: 'var(--home-background)', position: 'relative', minHeight: '100vh' }}>
      <StardustCanvas mode="page" />
      <Navigation />
      <Hero />
      <ServicesSection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
