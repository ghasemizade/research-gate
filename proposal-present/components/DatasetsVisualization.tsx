'use client'

import { motion } from 'framer-motion'
import { Database } from 'lucide-react'

export function DatasetsVisualization({ isActive }: { isActive: boolean }) {
  const datasets = [
    {
      name: 'CL2-IDS',
      rows: '12,924',
      features: '17',
      attacks: 'ARP Spoofing, MAC Flooding, DHCP Starvation',
      color: 'from-primary/40 to-primary/10',
      borderColor: 'border-primary/50',
      textColor: 'text-primary',
    },
    {
      name: 'BCAST-IDS',
      rows: '5,834',
      features: '12',
      attacks: 'Broadcast Storms, DHCP Attacks',
      color: 'from-accent/40 to-accent/10',
      borderColor: 'border-accent/50',
      textColor: 'text-accent',
    },
    {
      name: 'CICIDS-2017',
      rows: '2.8M',
      features: '83',
      attacks: 'Multi-layer attacks, Network Intrusions',
      color: 'from-secondary/40 to-secondary/10',
      borderColor: 'border-secondary/50',
      textColor: 'text-secondary',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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
      className="w-full space-y-8"
      initial={false}
      animate={isActive ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* Grid of Datasets */}
      <div className="grid grid-cols-3 gap-6">
        {datasets.map((dataset, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative group"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${dataset.color} rounded-xl blur-xl group-hover:blur-2xl transition-all`} />
            <div className={`relative bg-gradient-to-br ${dataset.color} ${dataset.borderColor} border rounded-xl p-6 backdrop-blur-sm hover:scale-105 transition-transform`}>
              {/* Icon */}
              <div className="flex items-center justify-between mb-4">
                <Database className={`w-8 h-8 ${dataset.textColor}`} />
                <span className="text-xs font-semibold text-foreground/60 bg-primary/20 px-2 py-1 rounded">LAYER 2</span>
              </div>

              {/* Dataset Name */}
              <h3 className={`text-2xl font-bold ${dataset.textColor} mb-4`}>{dataset.name}</h3>

              {/* Stats */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/70">Samples</span>
                  <span className={`font-semibold ${dataset.textColor}`}>{dataset.rows}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground/70">Features</span>
                  <span className={`font-semibold ${dataset.textColor}`}>{dataset.features}</span>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0" />
              </div>

              {/* Attack Types */}
              <div className="space-y-2">
                <p className="text-xs font-semibold text-foreground/60">Attack Types:</p>
                <p className="text-xs text-foreground/70 leading-relaxed">{dataset.attacks}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Coverage Summary */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 border border-primary/30 rounded-xl p-6 backdrop-blur-sm"
      >
        <h3 className="text-lg font-semibold text-primary mb-4">Dataset Coverage</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">2.9M+</p>
            <p className="text-sm text-foreground/70">Total Samples</p>
          </div>
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">83</p>
            <p className="text-sm text-foreground/70">Max Features</p>
          </div>
          <div>
            <p className="text-3xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">10+</p>
            <p className="text-sm text-foreground/70">Attack Types</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
