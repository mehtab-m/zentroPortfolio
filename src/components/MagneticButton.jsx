import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ children, className = '', strength = 0.35 }) {
  const ref = useRef(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    setPosition({ x, y })
  }

  const handleLeave = () => setPosition({ x: 0, y: 0 })

  return (
    <motion.div
      ref={ref}
      className={`magnetic-wrap ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 0.4 }}
      // Keep pointer-events on the actual child, not the translated wrapper
      style={{ display: 'inline-flex' }}
    >
      {/* Inner element stays at original position for hit-testing */}
      <motion.div
        animate={{ x: position.x * 0.3, y: position.y * 0.3 }}
        transition={{ type: 'spring', stiffness: 200, damping: 18, mass: 0.4 }}
        style={{ display: 'inline-flex' }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
