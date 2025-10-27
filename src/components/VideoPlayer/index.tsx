'use client'

import { useState } from 'react'
import styles from './VideoPlayer.module.css'

interface VideoPlayerProps {
  videoUrl: string
  videoType: 'file' | 'url'
  title?: string
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, videoType, title }) => {
  const [isPlaying, setIsPlaying] = useState(false)

  // Extrai o ID do vídeo de URLs externas (YouTube, Vimeo)
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
      // Player HTML5 para vídeos do bucket
      return (
        <video
          className={styles.video}
          controls
          preload="metadata"
          poster={videoUrl.replace(/\.(mp4|webm|ogg)$/i, '-thumbnail.jpg')}
        >
          <source src={videoUrl} type="video/mp4" />
          <source src={videoUrl.replace('.mp4', '.webm')} type="video/webm" />
          Seu navegador não suporta a reprodução de vídeos.
        </video>
      )
    }

    // Para URLs externas, usa iframe com player customizado
    if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
      const videoId = getVideoId(videoUrl)
      if (!videoId) return null

      return (
        <iframe
          className={styles.iframe}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title || 'Vídeo do projeto'}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )
    }

    if (videoUrl.includes('vimeo.com')) {
      const videoId = getVideoId(videoUrl)
      if (!videoId) return null

      return (
        <iframe
          className={styles.iframe}
          src={`https://player.vimeo.com/video/${videoId}?byline=0&portrait=0`}
          title={title || 'Vídeo do projeto'}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        />
      )
    }

    // Fallback: tenta usar como vídeo direto
    return (
      <video
        className={styles.video}
        controls
        preload="metadata"
        src={videoUrl}
      >
        Seu navegador não suporta a reprodução de vídeos.
      </video>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.playerWrapper}>
        {renderPlayer()}
      </div>
    </div>
  )
}
