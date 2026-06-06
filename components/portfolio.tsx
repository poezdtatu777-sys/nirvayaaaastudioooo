"use client"

import { useRef, useCallback } from "react"
import { motion, useInView } from "framer-motion"

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "mux-player": any
    }
  }
}

const mainProjects = [
  {
    title: "Музыкальные клипы",
    description: "Музыкальные клипы, сторителлинг, визуальные истории",
    number: "01",
  },
  {
    title: "Рекламные ролики",
    description: "Рекламные кампании, промо, презентации продуктов",
    number: "02",
  },
]

const styles = [
  {
    title: "Аниме",
    description: "Дух японской анимации в новом прочтении",
  },
  {
    title: "Пластилин",
    description: "Тактильный мир, оживший на экране",
  },
  {
    title: "Pixar",
    description: "Мировой стандарт анимации — без студии в Калифорнии",
  },
  {
    title: "Палех",
    description: "Вековые традиции в цифровом формате",
  },
]

function HoverVideo({ playbackId }: { playbackId: string }) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseEnter = useCallback(() => {
    if (!containerRef.current) return
    const player = containerRef.current.querySelector("mux-player") as any
    if (player && player.play) {
      player.play().catch(() => {})
    }
  }, [])

  const handleMouseLeave = useCallback(() => {
    if (!containerRef.current) return
    const player = containerRef.current.querySelector("mux-player") as any
    if (player && player.pause) {
      player.pause()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="absolute inset-0"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <mux-player
        playback-id={playbackId}
        muted
        loop
        playsinline
        preload="metadata"
        style={{ "--media-object-fit": "cover", "--media-object-position": "center", "--controls": "none", "--media-background-color": "transparent", width: "100%", height: "100%", position: "absolute", inset: "0" } as any}
      />
    </div>
  )
}

export function Portfolio() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const stylesRef = useRef(null)
  const stylesInView = useInView(stylesRef, { once: true, amount: 0.3 })

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-[#0A0E1A] relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: "linear-gradient(180deg, var(--teal) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Заголовок */}
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(20px)" }}
            animate={isInView ? {
