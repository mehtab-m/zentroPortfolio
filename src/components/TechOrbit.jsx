import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import BrandLogo from './BrandLogo'
import { orbitLogos } from '../data/partners'
import './TechOrbit.css'

/** Orbit radius as % of stage width (stage is square) */
const ORBIT_RADIUS_PCT = 42

function getOrbitPosition(angleDeg) {
  const rad = (angleDeg * Math.PI) / 180
  return {
    left: 50 + ORBIT_RADIUS_PCT * Math.sin(rad),
    top: 50 - ORBIT_RADIUS_PCT * Math.cos(rad),
  }
}

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
            {orbitLogos.map(({ slug, name, angle }, index) => {
              const { left, top } = getOrbitPosition(angle)

              return (
                <div
                  key={slug}
                  className="tech-orbit-node"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    '--float-delay': `${index * 0.4}s`,
                    zIndex: index + 1,
                  }}
                >
                  <motion.div
                    className="tech-orbit-node-counter"
                    style={{ rotate: counterRotate }}
                  >
                    <motion.div
                      className="tech-orbit-node-inner"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.1,
                        type: 'spring',
                        stiffness: 200,
                        damping: 18,
                      }}
                      whileHover={{ scale: 1.12 }}
                    >
                      <div className="tech-orbit-node-float">
                        <BrandLogo slug={slug} name={name} size={52} pill />
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
