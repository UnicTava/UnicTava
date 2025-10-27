'use client'

import React from 'react'
import { Navigation } from '@/components/Navigation'
import { NossaHistoria } from '@/components/NossaHistoria'
import { Missao } from '@/components/Missao'
import { Visao } from '@/components/Visao'
import { IASetorial } from '@/components/IASetorial'
import { NossosValores } from '@/components/NossosValores'
import { NossoTime } from '@/components/NossoTime'
import { TestimonialsSection } from '@/components/TestimonialsSection'
import { ProposFuturo } from '@/components/ProposFuturo'
import Footer from '@/components/Footer'
import styles from './sobre-nos.module.css'

export default function SobreNosPage() {
  return (
    <main className={styles.main}>
      <Navigation />
      <NossaHistoria />
      <Missao />
      <Visao />
      <IASetorial />
      <NossosValores />
      <NossoTime />
      <TestimonialsSection />
      <ProposFuturo />
      <Footer />
    </main>
  )
}