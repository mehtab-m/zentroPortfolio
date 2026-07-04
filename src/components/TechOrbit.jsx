import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import BrandLogo from './BrandLogo'
import { orbitLogos } from '../data/partners'
import './TechOrbit.css'

export default function TechOrbit() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 180])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 0.9])
  const counterRotate = useTransform(rotate, (r) => -r)

  return (
    <section className="tech-orbit-section section" ref={ref}>
      <div className="tech-orbit-bg" aria-hidden="true">
        <div className="tech-orbit-mesh" />
        <div className="tech-orbit-ring tech-orbit-ring-1" />
        <div className="tech-orbit-ring tech-orbit-ring-2" />
      </div>

      <div className="container tech-orbit-layout">
        <motion.div
          className="tech-orbit-copy"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-eyebrow">Integration Ecosystem</span>
          <h2>Your entire stack, connected &amp; orchestrated</h2>
          <p>
            We architect seamless integrations across the platforms your business
            already runs on — from communication APIs to AI models and payment rails.
          </p>
          <ul className="tech-orbit-list">
            <li>Bi-directional sync across 30+ platforms</li>
            <li>Real-time webhooks &amp; event pipelines</li>
            <li>Enterprise-grade security at every layer</li>
          </ul>
        </motion.div>

        <motion.div className="tech-orbit-stage" style={{ scale }}>
          <motion.div className="tech-orbit-spinner" style={{ rotate }}>
            {orbitLogos.map(({ slug, name, angle }) => (
              <motion.div
                key={slug}
                className="tech-orbit-node"
                style={{ '--angle': `${angle}deg` }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: angle / 360 * 0.4, type: 'spring', stiffness: 200, damping: 18 }}
              >
                <motion.div
                  className="tech-orbit-node-inner"
                  style={{ rotate: counterRotate }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4 + (angle % 3),
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: angle / 360 * 2,
                  }}
                  whileHover={{ scale: 1.15 }}
                >
                  <BrandLogo slug={slug} name={name} size={52} pill />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="tech-orbit-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 20 }}
          >
            <span className="logo-mark">Z</span>
            <span>Hub</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
