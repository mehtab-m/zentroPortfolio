import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import BrandLogo from './BrandLogo'
import './HorizontalScroll.css'

export default function HorizontalScroll({ eyebrow, title, items }) {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="horizontal-scroll-section" ref={targetRef}>
      <div className="horizontal-scroll-sticky">
        <div className="horizontal-scroll-bg" aria-hidden="true" />

        <div className="container">
          <motion.div
            className="horizontal-scroll-header"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="section-eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
            <div className="horizontal-scroll-progress">
              <motion.div className="horizontal-scroll-progress-fill" style={{ width: progressWidth }} />
            </div>
          </motion.div>
        </div>

        <div className="horizontal-scroll-track-wrap">
          <motion.div className="horizontal-scroll-track" style={{ x }}>
            {items.map(({ label, desc, stat, slug }, i) => (
              <motion.article
                key={label}
                className="horizontal-scroll-card"
                initial={{ opacity: 0, scale: 0.88, rotateY: 8 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: i * 0.05, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="horizontal-scroll-logo">
                  <BrandLogo slug={slug} size={44} pill />
                </div>
                <strong>{stat}</strong>
                <h3>{label}</h3>
                <p>{desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
