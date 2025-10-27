'use client'

import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './VideoModal.module.css'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  videoType: 'file' | 'url'
  title?: string
}

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

export const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  videoType,
  title
}) => {
  const playerRef = useRef<any>(null)
  const iframeRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const [showControls, setShowControls] = useState(true)
  const [isYouTube, setIsYouTube] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    const isYouTubeVideo = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')
    setIsYouTube(isYouTubeVideo)

    if (isOpen && isYouTubeVideo && !window.YT) {
      const tag = document.createElement('script')
      tag.src = 'https://www.youtube.com/iframe_api'
      const firstScriptTag = document.getElementsByTagName('script')[0]
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag)
    }
  }, [isOpen, videoUrl])

  useEffect(() => {
    if (!isOpen || !isYouTube) return

    const initPlayer = () => {
      const videoId = getVideoId(videoUrl)
      if (!videoId || !window.YT || !iframeRef.current) return

      if (playerRef.current) {
        playerRef.current.destroy()
      }

      playerRef.current = new window.YT.Player(iframeRef.current, {
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          fs: 1,
          iv_load_policy: 3,
          disablekb: 1
        },
        events: {
          onReady: (event: any) => {
            setDuration(event.target.getDuration())
          },
          onStateChange: (event: any) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true)
              startProgressTracking()
            } else {
              setIsPlaying(false)
            }
          }
        }
      })
    }

    if (window.YT && window.YT.Player) {
      initPlayer()
    } else {
      window.onYouTubeIframeAPIReady = initPlayer
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy()
        playerRef.current = null
      }
    }
  }, [isOpen, isYouTube, videoUrl])

  const startProgressTracking = () => {
    const interval = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        const current = playerRef.current.getCurrentTime()
        const total = playerRef.current.getDuration()
        setProgress((current / total) * 100)
      }
    }, 100)

    return () => clearInterval(interval)
  }

  const togglePlayPause = () => {
    if (!playerRef.current) return

    if (isPlaying) {
      playerRef.current.pauseVideo()
    } else {
      playerRef.current.playVideo()
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!playerRef.current) return

    const rect = e.currentTarget.getBoundingClientRect()
    const pos = (e.clientX - rect.left) / rect.width
    const time = pos * duration
    playerRef.current.seekTo(time, true)
  }

  const getVideoId = (url: string) => {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const match = url.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/)
      return match ? match[1] : null
    }
    if (url.includes('vimeo.com')) {
      const match = url.match(/vimeo\.com\/(\d+)/)
      return match ? match[1] : null
    }
    return null
  }

  const renderPlayer = () => {
    if (videoType === 'file') {
      return (
        <video
          controls
          autoPlay
          preload="metadata"
          style={{ width: '100%', height: '100%' }}
        >
          <source src={videoUrl} type="video/mp4" />
          <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      )
    }

    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <div ref={iframeRef} style={{ width: '100%', height: '100%' }} />

          {showControls && (
            <div
              className={styles.customControls}
              onMouseEnter={() => setShowControls(true)}
            >
              <div
                className={styles.progressBar}
                onClick={handleProgressClick}
              >
                <div
                  className={styles.progressFill}
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className={styles.controlsBottom}>
                <button
                  className={styles.playButton}
                  onClick={togglePlayPause}
                  aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
                >
                  {isPlaying ? (
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width="24" height="24">
                      <path fill="currentColor" d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      )
    }

    if (videoUrl.includes('vimeo.com')) {
      const videoId = getVideoId(videoUrl)
      if (!videoId) return null

      return (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1&byline=0&portrait=0`}
          title={title || 'Vídeo do projeto'}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '100%' }}
        />
      )
    }

    return (
      <video
        controls
        autoPlay
        preload="metadata"
        src={videoUrl}
        style={{ width: '100%', height: '100%' }}
      >
        Seu navegador não suporta a reprodução de vídeos.
      </video>
    )
  }

  if (!isOpen || typeof window === 'undefined') return null

  const modalContent = (
    <div className={styles.modalOverlay} onClick={onClose}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Fechar vídeo">
        ×
      </button>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.videoContainer}>
          {renderPlayer()}
        </div>
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}
