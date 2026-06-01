'use client'

import { slides } from '@/lib/slides'
import { SlideLayout } from './SlideLayout'
import { ArchitectureDiagram } from './ArchitectureDiagram'
import { NeuralNetworkDiagram } from './NeuralNetworkDiagram'
import { FederatedLearningDiagram } from './FederatedLearningDiagram'
import { SHAPVisualization } from './SHAPVisualization'
import { DatasetsVisualization } from './DatasetsVisualization'
import { MetricsVisualization } from './MetricsVisualization'

export function TitleSlide({ isActive }: { isActive: boolean }) {
  const slide = slides[0]
  return (
    <SlideLayout slideNumber={1} isActive={isActive}>
      <div className="text-center space-y-8 max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-7xl font-bold text-balance leading-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-accent to-secondary">
              {slide.title}
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-accent font-semibold">{slide.subtitle}</p>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          {slide.content}
        </p>
        <div className="pt-8">
          <div className="inline-block px-8 py-3 bg-primary/20 rounded-lg border border-primary/50 backdrop-blur-sm">
            <p className="text-primary text-sm font-semibold tracking-widest">FEDERATED LEARNING RESEARCH</p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}

export function ContentSlide({ slideIndex, isActive }: { slideIndex: number; isActive: boolean }) {
  const slide = slides[slideIndex]
  const content = Array.isArray(slide.content) ? slide.content : [slide.content]

  return (
    <SlideLayout slideNumber={slideIndex + 1} isActive={isActive}>
      <div className="max-w-5xl w-full space-y-8">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">{slide.title}</h2>
          <div className="h-1 w-24 bg-linear-to-r from-accent to-secondary rounded-full" />
        </div>

        <div className="space-y-4 md:space-y-5">
          {content.map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 items-center"
            >
              <div className="shrink-0 mt-1.5">
                {item.startsWith('  ') ? (
                  <div className="w-2 h-2 ml-4 rounded-full bg-secondary/70" />
                ) : (
                  <div className="w-3 h-3 rounded-full bg-accent" />
                )}
              </div>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
                {item.trim()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SlideLayout>
  )
}

export function ArchitectureSlide({ isActive }: { isActive: boolean }) {
  const slide = slides[9] // Slide 10: Proposed Architecture
  return (
    <SlideLayout slideNumber={10} isActive={isActive}>
      <div className="max-w-5xl w-full space-y-8">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">{slide.title}</h2>
          <div className="h-1 w-24 bg-linear-to-r from-accent to-secondary rounded-full" />
        </div>
        <ArchitectureDiagram isActive={isActive} />
      </div>
    </SlideLayout>
  )
}

export function NeuralNetworkSlide({ isActive }: { isActive: boolean }) {
  const slide = slides[10] // Slide 11: Deep Learning Model
  return (
    <SlideLayout slideNumber={11} isActive={isActive}>
      <div className="max-w-5xl w-full space-y-8">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">{slide.title}</h2>
          <div className="h-1 w-24 bg-linear-to-r from-accent to-secondary rounded-full" />
        </div>
        <NeuralNetworkDiagram isActive={isActive} />
      </div>
    </SlideLayout>
  )
}

export function FederatedLearningSlide({ isActive }: { isActive: boolean }) {
  const slide = slides[11] // Slide 12: Federated Learning Concept
  return (
    <SlideLayout slideNumber={12} isActive={isActive}>
      <div className="max-w-5xl w-full space-y-8">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">{slide.title}</h2>
          <div className="h-1 w-24 bg-linear-to-r from-accent to-secondary rounded-full" />
        </div>
        <FederatedLearningDiagram isActive={isActive} />
      </div>
    </SlideLayout>
  )
}

export function ExplainabilitySlide({ isActive }: { isActive: boolean }) {
  const slide = slides[12] // Slide 13: Explainable AI & SHAP
  return (
    <SlideLayout slideNumber={13} isActive={isActive}>
      <div className="max-w-5xl w-full space-y-8">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">{slide.title}</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-accent to-secondary rounded-full" />
        </div>
        <SHAPVisualization isActive={isActive} />
      </div>
    </SlideLayout>
  )
}

export function DatasetsSlide({ isActive }: { isActive: boolean }) {
  const slide = slides[13] // Slide 14: Datasets & Evaluation
  return (
    <SlideLayout slideNumber={14} isActive={isActive}>
      <div className="max-w-5xl w-full space-y-8">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">{slide.title}</h2>
          <div className="h-1 w-24 bg-linear-to-r from-accent to-secondary rounded-full" />
        </div>
        <DatasetsVisualization isActive={isActive} />
      </div>
    </SlideLayout>
  )
}

export function MetricsSlide({ isActive }: { isActive: boolean }) {
  const slide = slides[14] // Slide 15: Expected Results
  return (
    <SlideLayout slideNumber={15} isActive={isActive}>
      <div className="max-w-5xl w-full space-y-8">
        <div>
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">{slide.title}</h2>
          <div className="h-1 w-24 bg-linear-to-r from-accent to-secondary rounded-full" />
        </div>
        <MetricsVisualization isActive={isActive} />
      </div>
    </SlideLayout>
  )
}

export function EndSlide({ isActive }: { isActive: boolean }) {
  const slide = slides[slides.length - 1]
  return (
    <SlideLayout slideNumber={18} isActive={isActive}>
      <div className="text-center space-y-8 max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-7xl md:text-8xl font-bold text-primary">{slide.title}</h1>
          <p className="text-3xl md:text-4xl text-accent font-semibold">{slide.subtitle}</p>
        </div>
        <div className="h-1 w-32 bg-gradient-to-r from-accent via-primary to-secondary rounded-full mx-auto" />
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {slide.content}
        </p>
      </div>
    </SlideLayout>
  )
}
