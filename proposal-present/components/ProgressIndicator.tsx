'use client'

import { motion } from 'framer-motion'

interface ProgressIndicatorProps {
  currentSlide: number
  totalSlides: number
}

export function ProgressIndicator({ currentSlide, totalSlides }: ProgressIndicatorProps) {
  const progress = (currentSlide / totalSlides) * 100

  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      {/* Progress Bar */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="h-1 bg-linear-to-r from-primary via-accent to-secondary"
      />
    </div>
  )
}
