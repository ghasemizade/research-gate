'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

type Layer = {
  name: string
  nodes: number
  color: string
  stroke: string
  labelColor: string
  isOutput?: boolean
}

const layers: Layer[] = [
  { name: 'Input', nodes: 8, color: '#EEEDFE', stroke: '#7F77DD', labelColor: '#534AB7' },
  { name: 'Conv1D', nodes: 6, color: '#EEEDFE', stroke: '#7F77DD', labelColor: '#534AB7' },
  { name: 'MaxPool', nodes: 4, color: '#AFA9EC', stroke: '#534AB7', labelColor: '#534AB7' },
  { name: 'Bi-LSTM', nodes: 5, color: '#9FE1CB', stroke: '#0F6E56', labelColor: '#0F6E56' },
  { name: 'Dense', nodes: 3, color: '#5DCAA5', stroke: '#0F6E56', labelColor: '#0F6E56' },
  { name: 'Output', nodes: 2, color: '#085041', stroke: '#0F6E56', labelColor: '#9FE1CB', isOutput: true },
]

const WIDTH = 680
const HEIGHT = 500
const NODE_AREA_TOP = 50
const NODE_AREA_BOTTOM = 440
const NODE_R = 10
const LABEL_Y = 464

// Evenly space nodes vertically within the node area
function getNodeY(count: number, index: number): number {
  if (count === 1) return (NODE_AREA_TOP + NODE_AREA_BOTTOM) / 2
  const step = (NODE_AREA_BOTTOM - NODE_AREA_TOP) / (count - 1)
  return NODE_AREA_TOP + index * step
}

// Evenly space layers horizontally
const LAYER_PADDING = 60
const layerX = layers.map((_, i) => {
  const available = WIDTH - LAYER_PADDING * 2
  return LAYER_PADDING + (available / (layers.length - 1)) * i
})

// CNN phase covers layers 0–2, LSTM covers 3–5
const CNN_LEFT = layerX[0] - 30
const CNN_RIGHT = layerX[2] + 30
const LSTM_LEFT = layerX[3] - 30
const LSTM_RIGHT = layerX[5] + 30

function ConnectionLines({
  fromIdx,
  toIdx,
  color,
  opacity = 0.18,
}: {
  fromIdx: number
  toIdx: number
  color: string
  opacity?: number
}) {
  const from = layers[fromIdx]
  const to = layers[toIdx]
  const x1 = layerX[fromIdx]
  const x2 = layerX[toIdx]
  const lines: { y1: number; y2: number }[] = []

  for (let a = 0; a < from.nodes; a++) {
    for (let b = 0; b < to.nodes; b++) {
      lines.push({ y1: getNodeY(from.nodes, a), y2: getNodeY(to.nodes, b) })
    }
  }

  return (
    <g stroke={color} strokeWidth="0.6" fill="none" opacity={opacity}>
      {lines.map(({ y1, y2 }, i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
      ))}
    </g>
  )
}

export function NeuralNetworkDiagram({ isActive }: { isActive: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
  }

  const nodeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.35 } },
  }

  const lineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  const biLstmLayer = layers[3]
  const biLstmX = layerX[3]

  return (
    <motion.svg
      width="100%"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      initial={false}
      animate={isActive ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* ── Phase bracket outlines ── */}
      <motion.rect
        variants={lineVariants}
        x={CNN_LEFT} y={32} width={CNN_RIGHT - CNN_LEFT} height={NODE_AREA_BOTTOM - 32 + 20}
        rx={10} fill="none" stroke="#7F77DD" strokeWidth={0.5} strokeDasharray="5 4" opacity={0.5}
      />
      <motion.rect
        variants={lineVariants}
        x={LSTM_LEFT} y={32} width={LSTM_RIGHT - LSTM_LEFT} height={NODE_AREA_BOTTOM - 32 + 20}
        rx={10} fill="none" stroke="#1D9E75" strokeWidth={0.5} strokeDasharray="5 4" opacity={0.5}
      />

      {/* ── Phase labels ── */}
      <motion.text
        variants={lineVariants}
        x={(CNN_LEFT + CNN_RIGHT) / 2} y={22}
        textAnchor="middle" fontSize={12} fill="#7F77DD" fontWeight={500}
      >
        Feature Extraction (CNN)
      </motion.text>
      <motion.text
        variants={lineVariants}
        x={(LSTM_LEFT + LSTM_RIGHT) / 2} y={22}
        textAnchor="middle" fontSize={12} fill="#1D9E75" fontWeight={500}
      >
        Temporal Learning (Bi-LSTM)
      </motion.text>

      {/* ── Connection lines (render before nodes) ── */}
      <motion.g variants={lineVariants}>
        <ConnectionLines fromIdx={0} toIdx={1} color="#7F77DD" opacity={0.15} />
        <ConnectionLines fromIdx={1} toIdx={2} color="#7F77DD" opacity={0.18} />
        <ConnectionLines fromIdx={2} toIdx={3} color="#6B8FCC" opacity={0.22} />
        <ConnectionLines fromIdx={3} toIdx={4} color="#1D9E75" opacity={0.20} />
        <ConnectionLines fromIdx={4} toIdx={5} color="#1D9E75" opacity={0.30} />
      </motion.g>

      {/* ── Nodes per layer ── */}
      {layers.map((layer, li) => {
        const cx = layerX[li]
        return (
          <g key={layer.name}>
            {Array.from({ length: layer.nodes }).map((_, ni) => {
              const cy = getNodeY(layer.nodes, ni)
              return (
                <motion.g key={ni} variants={nodeVariants}>
                  {layer.isOutput ? (
                    <>
                      <rect
                        x={cx - 14} y={cy - 14}
                        width={28} height={28} rx={5}
                        fill={layer.color} stroke={layer.stroke} strokeWidth={1}
                      />
                      <text
                        x={cx} y={cy + 1}
                        textAnchor="middle" dominantBaseline="central"
                        fontSize={11} fill={layer.labelColor}
                      >
                        {ni === 0 ? 'N' : 'A'}
                      </text>
                    </>
                  ) : (
                    <circle cx={cx} cy={cy} r={NODE_R} fill={layer.color} stroke={layer.stroke} strokeWidth={1} />
                  )}
                </motion.g>
              )
            })}

            {/* Bi-directional arrows inside LSTM layer */}
            {li === 3 && Array.from({ length: layer.nodes - 1 }).map((_, i) => {
              const y1 = getNodeY(layer.nodes, i)
              const y2 = getNodeY(layer.nodes, i + 1)
              const mid = (y1 + y2) / 2
              return (
                <motion.g key={i} variants={lineVariants} stroke={layer.stroke} strokeWidth={0.8} fill="none" opacity={0.5}>
                  <line x1={cx - 6} y1={y1 + NODE_R + 2} x2={cx - 6} y2={y2 - NODE_R - 2}
                    markerEnd="url(#arrowGreen)" />
                  <line x1={cx + 6} y1={y2 - NODE_R - 2} x2={cx + 6} y2={y1 + NODE_R + 2}
                    markerEnd="url(#arrowGreen)" />
                </motion.g>
              )
            })}

            {/* Layer name label */}
            <motion.text
              variants={nodeVariants}
              x={cx} y={LABEL_Y}
              textAnchor="middle" fontSize={12}
              fill={layer.labelColor} fontWeight={500}
            >
              {layer.name}
            </motion.text>
          </g>
        )
      })}

      {/* Arrow marker defs */}
      <defs>
        <marker id="arrowGreen" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#0F6E56" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      {/* ── Legend ── */}
      {/* <motion.g variants={lineVariants} fontSize={11} fill="var(--foreground)">
        <circle cx={62} cy={490} r={6} fill="#EEEDFE" stroke="#7F77DD" strokeWidth={1} />
        <text x={74} y={494} fill="currentColor" opacity={0.6}>CNN layer</text>

        <circle cx={160} cy={490} r={6} fill="#9FE1CB" stroke="#0F6E56" strokeWidth={1} />
        <text x={172} y={494} fill="currentColor" opacity={0.6}>LSTM layer</text>

        <rect x={268} y={483} width={14} height={14} rx={3} fill="#085041" stroke="#0F6E56" strokeWidth={1} />
        <text x={288} y={494} fill="currentColor" opacity={0.6}>Output node</text>

        <line x1={390} y1={484} x2={390} y2={496} stroke="#0F6E56" strokeWidth={0.8} markerEnd="url(#arrowGreen)" />
        <line x1={400} y1={496} x2={400} y2={484} stroke="#0F6E56" strokeWidth={0.8} markerEnd="url(#arrowGreen)" />
        <text x={408} y={494} fill="currentColor" opacity={0.6}>Bi-directional</text>
      </motion.g> */}
    </motion.svg>
  )
}