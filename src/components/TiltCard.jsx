import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const springConfig = { stiffness: 300, damping: 30 }

export default function TiltCard({ children, className = '', intensity = 12 }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springConfig)
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springConfig)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`tilt-card ${className}`}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
    >
      <div className="tilt-card-shine" aria-hidden="true" />
      {children}
    </motion.div>
  )
}
