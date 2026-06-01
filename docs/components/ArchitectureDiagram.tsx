'use client'

import { motion } from 'framer-motion'
import { Server, Network, Zap, Shield } from 'lucide-react'

export function ArchitectureDiagram({ isActive }: { isActive: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      className="w-full space-y-12"
      initial={false}
      animate={isActive ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* Federated Nodes */}
      <div className="grid grid-cols-3 gap-6">
        {[1, 2, 3].map((node) => (
          <motion.div
            key={node}
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10 rounded-xl blur-xl" />
            <div className="relative bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/40 rounded-xl p-6 backdrop-blur-sm hover:border-primary/60 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Network className="w-6 h-6 text-accent" />
                <h3 className="text-lg font-semibold text-primary">Node {node}</h3>
              </div>
              <p className="text-sm text-foreground/70 mb-3">Local Training</p>
              <div className="space-y-2 text-xs text-foreground/60">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  CNN Feature Extraction
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  Bi-LSTM Pattern Learning
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Arrows Down */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-0.5 h-12 bg-gradient-to-b from-accent via-primary to-transparent" />
          <div className="w-2 h-2 bg-accent rounded-full" />
        </div>
      </motion.div>

      {/* Central Server */}
      <motion.div variants={itemVariants} className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/20 to-primary/30 rounded-xl blur-2xl" />
        <div className="relative bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/50 rounded-xl p-8 backdrop-blur-md">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Server className="w-8 h-8 text-primary" />
            <h3 className="text-2xl font-bold text-primary">FedProx Aggregation Server</h3>
            <Zap className="w-8 h-8 text-accent" />
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-sm text-foreground/70 mb-2">Model Aggregation</p>
              <p className="text-xs text-accent font-semibold">FedProx Algorithm</p>
            </div>
            <div>
              <p className="text-sm text-foreground/70 mb-2">Parameter Sharing</p>
              <p className="text-xs text-accent font-semibold">Secure Updates</p>
            </div>
            <div>
              <p className="text-sm text-foreground/70 mb-2">Model Distribution</p>
              <p className="text-xs text-accent font-semibold">Global Model</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Arrows Down */}
      <motion.div variants={itemVariants} className="flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full" />
          <div className="w-0.5 h-12 bg-gradient-to-b from-primary via-accent to-transparent" />
        </div>
      </motion.div>

      {/* Explainability Module */}
      <motion.div variants={itemVariants} className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-secondary/20 rounded-xl blur-xl" />
        <div className="relative bg-gradient-to-br from-accent/10 to-secondary/5 border border-accent/40 rounded-xl p-6 backdrop-blur-sm">
          <div className="flex items-center gap-3 justify-center mb-4">
            <Shield className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-bold text-accent">SHAP Explainability Module</h3>
          </div>
          <p className="text-sm text-center text-foreground/70">
            Provides feature importance analysis and decision transparency
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}
