'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'

export function SHAPVisualization({ isActive }: { isActive: boolean }) {
  const featureImportance = [
    { feature: 'ARP Requests', importance: 0.28, color: 'hsl(262, 80%, 50%)' },
    { feature: 'MAC Address Changes', importance: 0.24, color: 'hsl(280, 85%, 55%)' },
    { feature: 'Frame Length Variance', importance: 0.19, color: 'hsl(200, 90%, 50%)' },
    { feature: 'Packet Rate', importance: 0.15, color: 'hsl(190, 85%, 55%)' },
    { feature: 'Protocol Anomaly', importance: 0.09, color: 'hsl(310, 80%, 55%)' },
    { feature: 'TTL Sequence', importance: 0.05, color: 'hsl(300, 75%, 60%)' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <motion.div
      className="w-full space-y-4"
      initial={false}
      animate={isActive ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* Explanation Card */}
      <motion.div
        variants={itemVariants}
        className="bg-linear-to-r from-accent/10 to-primary/10 border border-accent/40 rounded-lg p-6 backdrop-blur-sm"
      >
        <p className="text-foreground/90 leading-relaxed">
          <span className="font-semibold text-accent">SHAP (SHapley Additive exPlanations)</span> identifies which network traffic features contribute most to malicious classification decisions. This transparency enables security analysts to understand <span className="text-primary">why</span> the system flagged specific traffic as an attack.
        </p>
        <p className="text-sm text-foreground/80">
          <span className="font-semibold text-secondary">Key Insight:</span> ARP-related anomalies and MAC address changes are the strongest indicators of Layer 2 attacks, accounting for over 52% of detection confidence.
        </p>
      </motion.div>

      {/* Feature Importance Chart */}
      <motion.div
        variants={itemVariants}
        className="bg-linear-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-6 backdrop-blur-sm"
      >
        <h3 className="text-lg font-semibold text-primary mb-6">Top Attack Detection Features</h3>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={featureImportance} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 150, 255, 0.1)" />
            <XAxis
              dataKey="feature"
              angle={-45}
              textAnchor="end"
              height={100}
              tick={{ fill: 'rgba(200, 200, 220, 0.7)', fontSize: 12 }}
            />
            <YAxis tick={{ fill: 'rgba(200, 200, 220, 0.7)', fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(10, 20, 50, 0.9)',
                border: '1px solid rgba(100, 150, 255, 0.5)',
                borderRadius: '8px',
                color: 'rgba(200, 200, 220, 0.9)',
              }}
              formatter={(value) => [(value * 100).toFixed(1) + '%', 'Importance']}
            />
            <Bar dataKey="importance" fill="hsl(262, 80%, 50%)" isAnimationActive={isActive} animationDuration={1000}>
              {featureImportance.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Feature Explanations */}
      <div className="grid grid-cols-2 gap-4">
        {featureImportance.map((item, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-linear-to-br from-primary/8 to-accent/5 border border-primary/30 rounded-lg p-4 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-4 h-4 rounded-full shadow-lg"
                style={{ backgroundColor: item.color }}
              />
              <h4 className="font-semibold text-primary text-sm">{item.feature}</h4>
            </div>
            <div className="w-full bg-primary/10 rounded-full h-2">
              <motion.div
                className="bg-linear-to-r from-primary to-accent rounded-full h-2"
                initial={{ width: 0 }}
                animate={isActive ? { width: `${item.importance * 100}%` } : { width: 0 }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.8 }}
              />
            </div>
            <p className="text-xs text-foreground/60 mt-2">
              {(item.importance * 100).toFixed(1)}% influence on detection decision
            </p>
          </motion.div>
        ))}
      </div>

      {/* Key Insight */}
      {/* <motion.div
        variants={itemVariants}
        className="bg-linear-to-r from-secondary/10 via-accent/10 to-primary/10 border border-accent/30 rounded-lg p-6 backdrop-blur-sm"
      >

      </motion.div> */}
    </motion.div>
  )
}
