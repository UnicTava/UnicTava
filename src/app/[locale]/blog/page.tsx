'use client'

import { Navigation } from '@/components/Navigation'
import Footer from '@/components/Footer'
import { PageTransition } from '@/components/PageTransition'
import { StardustCanvas } from '@/components/StardustCanvas'
import Link from 'next/link'
import { useLocale } from 'next-intl'
import styles from './blog.module.css'

// Dados de exemplo - em produção viriam do Supabase
const blogPosts = [
  {
    id: 1,
    slug: 'futuro-inteligencia-artificial-3d',
    title: 'O Futuro da Inteligência Artificial 3D: Avatares que Pensam e Interagem',
    excerpt: 'Descubra como os avatares 3D com IA estão revolucionando o atendimento ao cliente, treinamentos corporativos e experiências digitais.',
    category: 'Inteligência Artificial',
    date: '2025-01-15',
    readTime: '8 min',
    image: '/blog/ia-3d-future.jpg'
  },
  {
    id: 2,
    slug: 'realidade-virtual-treinamento-industrial',
    title: 'Como a Realidade Virtual está Transformando o Treinamento Industrial',
    excerpt: 'Explore casos reais de empresas que reduziram custos e aumentaram a segurança com simulações VR.', 
    category: 'Realidade Virtual',
    date: '2025-01-10',
    readTime: '6 min',
    image: '/blog/vr-training.jpg'
  },
  {
    id: 3,
    slug: 'cinematica-3d-games-vs-publicidade',
    title: 'Cinemática 3D: Diferenças entre Jogos e Publicidade',
    excerpt: 'Entenda as particularidades técnicas e artísticas de produzir cinemáticas para diferentes indústrias.',
    category: 'Cinemática 3D',
    date: '2025-01-05',
    readTime: '10 min',
    image: '/blog/cinematic-comparison.jpg'
  }
]

export default function BlogPage() {
  const locale = useLocale()

  return (
    <PageTransition>
      <main className={styles.main}>
        <StardustCanvas mode="page" />
        <Navigation />

        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Blog UnicTava</h1>
            <p className={styles.subtitle}>
              Insights, tendências e tutoriais sobre tecnologias 3D, IA, VR, AR e desenvolvimento de jogos
            </p>
          </div>
        </section>

        <section className={styles.postsSection}>
          <div className={styles.postsGrid}>
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/${locale}/blog/${post.slug}`}
                className={styles.postCard}
              >
                <article>
                  <div className={styles.postImage}>
                    <span className={styles.category}>{post.category}</span>
                  </div>
                  <div className={styles.postContent}>
                    <time className={styles.date}>{post.date}</time>
                    <h2 className={styles.postTitle}>{post.title}</h2>
                    <p className={styles.excerpt}>{post.excerpt}</p>
                    <div className={styles.postMeta}>
                      <span className={styles.readTime}>{post.readTime} de leitura</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
