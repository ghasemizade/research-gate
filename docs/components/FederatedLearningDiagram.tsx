'use client'

import { motion } from 'framer-motion'
import { Network, ArrowRightLeft, Server } from 'lucide-react'

export function FederatedLearningDiagram({ isActive }: { isActive: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  }

  const edgeDevices = [
    { id: 1, label: 'Edge\nDevice 1', delay: 0 },
    { id: 2, label: 'Edge\nDevice 2', delay: 0.15 },
    { id: 3, label: 'Edge\nDevice 3', delay: 0.3 },
  ]

  return (
    <motion.div
      className="w-full space-y-12"
      initial={false}
      animate={isActive ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* Edge Devices Circle */}
      <motion.div variants={itemVariants} className="relative h-64 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Central Server */}
          <motion.div
            variants={itemVariants}
            className="relative z-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20 rounded-full blur-2xl w-24 h-24" />
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-primary/60 rounded-full w-24 h-24 flex items-center justify-center shadow-2xl shadow-primary/50">
              <Server className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          {/* Edge Devices Orbiting */}
          {edgeDevices.map((device, idx) => {
            const angle = (idx / edgeDevices.length) * 360
            const x = Math.cos((angle * Math.PI) / 180) * 120
            const y = Math.sin((angle * Math.PI) / 180) * 120

            return (
              <motion.div
                key={device.id}
                initial={{ x, y, opacity: 0 }}
                animate={isActive ? { x, y, opacity: 1 } : { x, y, opacity: 0 }}
                transition={{
                  duration: 0.8,
                  delay: device.delay,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="absolute"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-secondary/20 rounded-lg blur-lg w-20 h-20" />
                  <div className="relative bg-gradient-to-br from-accent/15 to-secondary/5 border border-accent/50 rounded-lg w-20 h-20 flex items-center justify-center text-center text-xs font-semibold text-accent backdrop-blur-sm">
                    <Network className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Communication Flow */}
      <div className="space-y-6">
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-6 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-4">
            <ArrowRightLeft className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-primary">Training Flow</h3>
          </div>
          <div className="space-y-3 text-sm text-foreground/80">
            <div className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/30 text-xs font-bold text-primary">1</div>
              </div>
              <div>
                <p className="font-semibold text-accent">Local Training</p>
                <p className="text-foreground/60 text-xs">Each edge device trains on local data using the global model</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-secondary/30 text-xs font-bold text-secondary">2</div>
              </div>
              <div>
                <p className="font-semibold text-accent">Parameter Extraction</p>
                <p className="text-foreground/60 text-xs">Only model weights and gradients are transmitted (privacy preserved)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-1 flex-shrink-0">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-accent/30 text-xs font-bold text-accent">3</div>
              </div>
              <div>
                <p className="font-semibold text-accent">Global Aggregation</p>
                <p className="text-foreground/60 text-xs">FedProx algorithm aggregates updates into improved global model</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4"
        >
          {[
            { icon: '🔒', label: 'Data Privacy', desc: 'Raw data never leaves edge' },
            { icon: '📊', label: 'Bandwidth Efficient', desc: 'Only parameters transmitted' },
            { icon: '⚡', label: 'Scalable', desc: 'Works with any number of devices' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gradient-to-br from-primary/10 to-accent/5 border border-primary/20 rounded-lg p-4 text-center"
            >
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="font-semibold text-primary text-sm mb-1">{item.label}</p>
              <p className="text-xs text-foreground/60">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
