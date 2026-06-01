'use client'

import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

export function MetricsVisualization({ isActive }: { isActive: boolean }) {
  const accuracyData = [
    { metric: 'Accuracy', Federated: 0.96, Centralized: 0.97 },
    { metric: 'Precision', Federated: 0.94, Centralized: 0.95 },
    { metric: 'Recall', Federated: 0.93, Centralized: 0.94 },
    { metric: 'F1-Score', Federated: 0.935, Centralized: 0.945 },
  ]

  const rocData = [
    { fpr: 0, tpr: 0 },
    { fpr: 0.02, tpr: 0.85 },
    { fpr: 0.05, tpr: 0.92 },
    { fpr: 0.1, tpr: 0.96 },
    { fpr: 0.15, tpr: 0.97 },
    { fpr: 0.2, tpr: 0.98 },
    { fpr: 0.5, tpr: 1.0 },
  ]

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
      {/* Accuracy Comparison Chart */}
      <motion.div
        variants={itemVariants}
        className="bg-linear-to-br from-primary/5 to-accent/5 border border-primary/20 rounded-lg p-6 backdrop-blur-sm"
      >
        <h3 className="text-lg font-semibold text-primary mb-6">Performance Metrics Comparison</h3>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={accuracyData} margin={{ top: 0, right: 30, left: 20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 150, 255, 0.1)" />
            <XAxis dataKey="metric" tick={{ fill: 'rgba(200, 200, 220, 0.7)', fontSize: 12 }} />
            <YAxis tick={{ fill: 'rgba(200, 200, 220, 0.7)', fontSize: 12 }} domain={[0, 1]} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(10, 20, 50, 0.9)',
                border: '1px solid rgba(100, 150, 255, 0.5)',
                borderRadius: '8px',
                color: 'rgba(200, 200, 220, 0.9)',
              }}
              formatter={(value) => [(value * 100).toFixed(1) + '%', '']}
            />
            <Legend />
            <Bar
              dataKey="Federated"
              fill="hsl(262, 80%, 50%)"
              isAnimationActive={isActive}
              animationDuration={1000}
            />
            <Bar
              dataKey="Centralized"
              fill="hsl(200, 90%, 50%)"
              isAnimationActive={isActive}
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      </motion.div>

      {/* ROC Curve */}
      <motion.div
        variants={itemVariants}
        className="bg-linear-to-br from-accent/5 to-secondary/5 border border-accent/20 rounded-lg p-6 backdrop-blur-sm"
      >
        <h3 className="text-lg font-semibold text-accent mb-6">ROC Curve Analysis</h3>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={rocData} margin={{ top: 10, right: 30, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 150, 255, 0.1)" />
            <XAxis
              dataKey="fpr"
              label={{ value: 'False Positive Rate', position: 'insideBottomRight', offset: -10 }}
              tick={{ fill: 'rgba(200, 200, 220, 0.7)', fontSize: 12 }}
            />
            <YAxis
              label={{ value: 'True Positive Rate', angle: -90, position: 'insideLeft' }}
              tick={{ fill: 'rgba(200, 200, 220, 0.7)', fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(10, 20, 50, 0.9)',
                border: '1px solid rgba(100, 150, 255, 0.5)',
                borderRadius: '8px',
                color: 'rgba(200, 200, 220, 0.9)',
              }}
              formatter={(value) => [(value * 100).toFixed(1) + '%', '']}
            />
            <Line
              type="monotone"
              dataKey="tpr"
              stroke="hsl(280, 85%, 55%)"
              strokeWidth={3}
              dot={false}
              isAnimationActive={isActive}
              animationDuration={1200}
              name="Model ROC"
            />
            <Line
              type="monotone"
              dataKey="fpr"
              stroke="rgba(100, 150, 255, 0.3)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              name="Random Classifier"
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Key Metrics Cards */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'AUC-ROC Score', value: '0.98', color: 'from-primary/20 to-primary/10', icon: '📈' },
          { label: 'Attack Detection Rate', value: '96%', color: 'from-accent/20 to-accent/10', icon: '🎯' },
          { label: 'False Positive Rate', value: '2.1%', color: 'from-secondary/20 to-secondary/10', icon: '⚠️' },
        ].map((metric, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`bg-linear-to-br ${metric.color} border border-primary/30 rounded-lg p-4`}
          >
            <p className="text-2xl mb-2">{metric.icon}</p>
            <p className="text-2xl font-bold text-primary mb-1">{metric.value}</p>
            <p className="text-xs text-foreground/60">{metric.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Hardware Performance */}
      {/* <motion.div
        variants={itemVariants}
        className="bg-linear-to-r from-secondary/10 to-primary/10 border border-secondary/30 rounded-lg p-6 backdrop-blur-sm"
      >
        <h3 className="text-lg font-semibold text-secondary mb-4">Edge Device Performance (Raspberry Pi 4)</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { label: 'Inference Time', value: '28ms', unit: 'per packet' },
            { label: 'Memory Usage', value: '180MB', unit: 'peak' },
            { label: 'CPU Usage', value: '35%', unit: 'average' },
            { label: 'Throughput', value: '8K packets/s', unit: 'max' },
          ].map((metric, idx) => (
            <div key={idx} className="text-center">
              <p className="text-xl font-bold text-secondary">{metric.value}</p>
              <p className="text-xs text-foreground/60">{metric.label}</p>
              <p className="text-xs text-foreground/50">{metric.unit}</p>
            </div>
          ))}
        </div>
      </motion.div> */}
    </motion.div>
  )
}
