'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import {
  TitleSlide,
  ContentSlide,
  EndSlide,
  ArchitectureSlide,
  NeuralNetworkSlide,
  FederatedLearningSlide,
  ExplainabilitySlide,
  DatasetsSlide,
  MetricsSlide,
} from './Slides'
import { NavigationControls } from './NavigationControls'
import { ProgressIndicator } from './ProgressIndicator'
import { slides } from '@/lib/slides'

export function PresentationContainer() {
  const [currentSlide, setCurrentSlide] = useState(1)
  const totalSlides = slides.length

  const handlePrevious = () => {
    setCurrentSlide((prev) => Math.max(1, prev - 1))
  }

  const handleNext = () => {
    setCurrentSlide((prev) => Math.min(totalSlides, prev + 1))
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          handlePrevious()
          break
        case 'ArrowRight':
        case ' ':
          e.preventDefault()
          handleNext()
          break
        case 'Home':
          e.preventDefault()
          setCurrentSlide(1)
          break
        case 'End':
          e.preventDefault()
          setCurrentSlide(totalSlides)
          break
        default:
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [totalSlides])

  return (
    <div className="w-full h-screen bg-linear-to-br from-background via-background to-background/80 overflow-hidden relative">
      <ProgressIndicator currentSlide={currentSlide} totalSlides={totalSlides} />

      {/* Slides Container */}
      <div className="absolute inset-0 pt-20">
        <AnimatePresence mode="wait">
          {currentSlide === 1 && <TitleSlide key="slide-1" isActive={true} />}
          {currentSlide === 10 && <ArchitectureSlide key="slide-10" isActive={true} />}
          {currentSlide === 11 && <NeuralNetworkSlide key="slide-11" isActive={true} />}
          {currentSlide === 12 && <FederatedLearningSlide key="slide-12" isActive={true} />}
          {currentSlide === 13 && <ExplainabilitySlide key="slide-13" isActive={true} />}
          {currentSlide === 14 && <DatasetsSlide key="slide-14" isActive={true} />}
          {currentSlide === 15 && <MetricsSlide key="slide-15" isActive={true} />}
          {currentSlide > 1 &&
            currentSlide < totalSlides &&
            ![10, 11, 12, 13, 14, 15].includes(currentSlide) && (
              <ContentSlide key={`slide-${currentSlide}`} slideIndex={currentSlide - 1} isActive={true} />
            )}
          {currentSlide === totalSlides && <EndSlide key="slide-end" isActive={true} />}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <NavigationControls
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />

      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>
    </div>
  )
}
