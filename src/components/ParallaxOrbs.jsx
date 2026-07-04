import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxOrbs() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 800], [0, 200])
  const y2 = useTransform(scrollY, [0, 800], [0, -150])
  const scale = useTransform(scrollY, [0, 600], [1, 1.15])

  return (
    <div className="hero-bg" aria-hidden="true">
      <motion.div className="hero-orb hero-orb-1" style={{ y: y1, scale }} />
      <motion.div className="hero-orb hero-orb-2" style={{ y: y2 }} />
      <div className="hero-grid-pattern" />
      <div className="hero-noise" />
    </div>
  )
}
