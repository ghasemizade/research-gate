'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

interface NavigationControlsProps {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
}

export function NavigationControls({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
}: NavigationControlsProps) {
  return (
    <div className="fixed bottom-8 right-0 -translate-x-8 flex items-center gap-4 z-50">
      {/* Slide Counter */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="px-6 py-3 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-lg"
      >
        <p className="text-sm font-semibold text-primary">
          <span className="text-accent">{String(currentSlide).padStart(2, '0')}</span>
          <span className="text-muted-foreground"> / </span>
          <span>{String(totalSlides).padStart(2, '0')}</span>
        </p>
      </motion.div>

      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onPrevious}
        disabled={currentSlide === 1}
        className="p-3 rounded-lg bg-primary/20 hover:bg-primary/30 disabled:opacity-50 disabled:cursor-not-allowed border border-primary/50 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 text-primary" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onNext}
        disabled={currentSlide === totalSlides}
        className="p-3 rounded-lg bg-secondary/20 hover:bg-secondary/30 disabled:opacity-50 disabled:cursor-not-allowed border border-secondary/50 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 text-secondary" />
      </motion.button>
    </div>
  )
}
