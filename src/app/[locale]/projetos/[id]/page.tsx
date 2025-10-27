'use client'

import { useState, useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { VideoModal } from '@/components/VideoModal'
import { StardustCanvas } from '@/components/StardustCanvas'
import styles from './projeto.module.css'
import { Project } from '@/lib/supabase-types'

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const t = useTranslations('projects')
  const locale = useLocale()
  const router = useRouter()
  const [project, setProject] = useState<Project | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [id, setId] = useState<string>('')
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const targetScrollRef = useRef(0)
  const currentScrollRef = useRef(0)
  const animationFrameRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    params.then(p => {
      setId(p.id)
      fetchProject(p.id)
    })
  }, [])

  useEffect(() => {
    const style = document.createElement('style')
    style.id = 'hide-scrollbar'
    style.textContent = `
      body {
        scrollbar-width: none !important;
        -ms-overflow-style: none !important;
        background: #050505 !important;
      }
      body::-webkit-scrollbar {
        display: none !important;
      }
    `
    document.head.appendChild(style)

    return () => {
      const styleElement = document.getElementById('hide-scrollbar')
      if (styleElement) {
        styleElement.remove()
      }
    }
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container || !project || isVideoModalOpen) return

    currentScrollRef.current = container.scrollLeft
    targetScrollRef.current = container.scrollLeft

    const animate = () => {
      const diff = targetScrollRef.current - currentScrollRef.current

      if (Math.abs(diff) > 0.1) {
        currentScrollRef.current += diff * 0.15
        container.scrollLeft = currentScrollRef.current

        const maxScroll = container.scrollWidth - container.clientWidth
        const progress = maxScroll > 0 ? (currentScrollRef.current / maxScroll) * 100 : 0
        setScrollProgress(progress)
      }

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    const handleWheel = (e: WheelEvent) => {
      const maxScroll = container.scrollWidth - container.clientWidth
      const isAtEnd = targetScrollRef.current >= maxScroll - 1
      const isAtStart = targetScrollRef.current <= 1
      const scrollingDown = e.deltaY > 0
      const scrollingUp = e.deltaY < 0

      if ((isAtEnd && scrollingDown) || (isAtStart && scrollingUp)) {
        return
      }

      e.preventDefault()

      targetScrollRef.current += e.deltaY * 1.2
      targetScrollRef.current = Math.max(0, Math.min(targetScrollRef.current, maxScroll))
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [project, isVideoModalOpen])

  const fetchProject = async (projectId: string) => {
    try {
      const response = await fetch('/api/projects')

      if (response.ok) {
        const data = await response.json()
        const foundProject = data.find((p: Project) => p.id === projectId)
        setProject(foundProject || null)
      }
    } catch (error) {
      console.error('Error fetching project:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getLocalizedContent = () => {
    if (!project) return { title: '', description: '' }

    switch (locale) {
      case 'pt-BR':
        return {
          title: project.title_pt,
          description: project.description_pt
        }
      case 'en-GB':
        return {
          title: project.title_en,
          description: project.description_en
        }
      case 'it':
        return {
          title: project.title_it,
          description: project.description_it
        }
      default:
        return {
          title: project.title_pt,
          description: project.description_pt
        }
    }
  }

  const handleBack = () => {
    router.push(`/${locale}/projetos`)
  }

  if (isLoading) {
    return (
      <>
        <StardustCanvas mode="page" />
        <Navigation />
        <main className={styles.container}>
          <motion.div
            className={styles.loading}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.spinner}></div>
            <p className={styles.loadingText}>{t('loading')}</p>
          </motion.div>
        </main>
        <Footer />
      </>
    )
  }

  if (!project) {
    return (
      <>
        <StardustCanvas mode="page" />
        <Navigation />
        <main className={styles.container}>
          <motion.div
            className={styles.notFound}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <svg viewBox="0 0 24 24" width="80" height="80">
              <path fill="currentColor" d="M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
            </svg>
            <p className={styles.notFoundText}>{t('notFound')}</p>
            <button className={styles.backButton} onClick={handleBack}>
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
              </svg>
              {t('backToProjects')}
            </button>
          </motion.div>
        </main>
        <Footer />
      </>
    )
  }

  const { title, description } = getLocalizedContent()

  const galleryItems = project.gallery_items && project.gallery_items.length > 0
    ? project.gallery_items
    : project.gallery_urls?.map((url, index) => ({
        id: `legacy-${index}`,
        type: 'image' as const,
        url,
        thumbnail_url: url,
        order: index
      })) || []

  // Variantes de animação
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  }

  return (
    <>
      <StardustCanvas mode="page" />
      <Navigation />

      {/* Progress bar */}
      <motion.div
        className={styles.progressBar}
        style={{ width: `${scrollProgress}%` }}
      />

      <main className={styles.container}>
        <motion.button
          className={styles.backButton}
          onClick={handleBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg viewBox="0 0 24 24" width="20" height="20">
            <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"/>
          </svg>
          {t('backToProjects')}
        </motion.button>

        <div ref={containerRef} className={styles.splitLayout}>
          {/* Lado esquerdo - conteúdo com animações */}
          <motion.div
            className={styles.leftColumn}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className={styles.leftContent}>
              <motion.h1
                className={styles.title}
                variants={itemVariants}
              >
                {title}
              </motion.h1>

              {description && (
                <motion.p
                  className={styles.description}
                  variants={itemVariants}
                >
                  {description}
                </motion.p>
              )}

              {project.video_url && project.video_type && (
                <motion.button
                  className={styles.watchVideoButton}
                  onClick={() => setIsVideoModalOpen(true)}
                  variants={itemVariants}
                  whileHover={{ scale: 1.08, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={styles.videoDot}></span>
                  {t('watchVideo')}
                </motion.button>
              )}

              {project.tags && project.tags.length > 0 && (
                <motion.div
                  className={styles.infoSection}
                  variants={itemVariants}
                >
                  <h4 className={styles.infoTitle}>SERVICES</h4>
                  <div className={styles.infoContent}>
                    {project.tags.map((tag, index) => (
                      <motion.div
                        key={index}
                        className={styles.infoItem}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                      >
                        {tag}
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {project.project_url && (
                <motion.div
                  className={styles.infoSection}
                  variants={itemVariants}
                >
                  <h4 className={styles.infoTitle}>PROJECT LINK</h4>
                  <div className={styles.infoContent}>
                    <motion.a
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      whileHover={{ x: 5 }}
                    >
                      {t('visitProject')}
                    </motion.a>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Lado direito - galeria horizontal com parallax */}
          <div className={styles.rightColumn}>
            {project.thumbnail_url && (
              <GalleryImage
                src={project.thumbnail_url}
                alt={title}
                index={0}
              />
            )}

            {galleryItems.map((item, index) => (
              <GalleryImage
                key={item.id}
                src={item.url}
                alt={`${title} - ${index + 1}`}
                index={index + 1}
                type={item.type}
                thumbnailUrl={item.thumbnail_url}
              />
            ))}
          </div>
        </div>
      </main>

      {project.video_url && project.video_type && (
        <VideoModal
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          videoUrl={project.video_url}
          videoType={project.video_type}
          title={title}
        />
      )}

      <Footer />
    </>
  )
}

// Componente de imagem com efeitos parallax e blur
function GalleryImage({
  src,
  alt,
  index,
  type = 'image',
  thumbnailUrl
}: {
  src: string
  alt: string
  index: number
  type?: 'image' | 'video'
  thumbnailUrl?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        rootMargin: '100px'
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      className={styles.galleryImage}
      initial={{ opacity: 0, scale: 0.9, y: 50 }}
      animate={isInView ? {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: 'blur(0px)'
      } : {
        opacity: 0.3,
        scale: 0.95,
        filter: 'blur(4px)'
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
    >
      {type === 'image' ? (
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
      ) : (
        <video
          src={src}
          controls
          preload="metadata"
          poster={thumbnailUrl}
        />
      )}
    </motion.div>
  )
}
