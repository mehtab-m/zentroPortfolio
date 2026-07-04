import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './HeroScrollLayer.css'

export default function HeroScrollLayer({ children }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const opacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.55], [1, 0.92])
  const y = useTransform(scrollYProgress, [0, 0.55], [0, -80])
  const blur = useTransform(scrollYProgress, [0, 0.55], ['blur(0px)', 'blur(4px)'])

  return (
    <section className="hero hero-scroll-layer" ref={ref}>
      <motion.div className="hero-scroll-content" style={{ opacity, scale, y, filter: blur }}>
        {children}
      </motion.div>
    </section>
  )
}
