'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SlideLayoutProps {
  children: ReactNode
  slideNumber: number
  isActive: boolean
}

export function SlideLayout({ children, slideNumber, isActive }: SlideLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isActive ? 1 : 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: isActive ? 'auto' : 'none' }}
    >
      {/* Cybersecurity Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-background via-background to-primary/10" />

        {/* Animated Grid */}
        <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* Glowing Nodes (Decorative) */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-linear-to-r from-primary/10 to-accent/10 blur-3xl"
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-linear-to-l from-accent/5 to-secondary/10 blur-3xl"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: 1,
          }}
        />

        {/* Network Lines (subtle animated lines) */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <motion.line
            x1="10%"
            y1="10%"
            x2="90%"
            y2="20%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          />
          <motion.line
            x1="90%"
            y1="80%"
            x2="10%"
            y2="90%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            animate={{
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: 1,
            }}
          />
          <defs>
            <linearGradient id="lineGradient">
              <stop offset="0%" stopColor="hsl(262, 80%, 50%)" />
              <stop offset="100%" stopColor="hsl(200, 90%, 50%)" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-12 z-10">
        {/* Glowing border effect for active slide */}
        {isActive && (
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'radial-gradient(ellipse at center, rgba(100, 150, 255, 0.1) 0%, transparent 70%)',
            }}
          />
        )}
        {children}
      </div>
    </motion.div>
  )
}
