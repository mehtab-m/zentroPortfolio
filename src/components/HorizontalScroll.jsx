import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import BrandLogo from './BrandLogo'
import './HorizontalScroll.css'

// ── Desktop: scroll-driven horizontal track ──────────────
function DesktopTrack({ items }) {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
    // attach to the parent section, not this div
    layoutEffect: false,
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return { x, progressWidth, ref: targetRef }
}

function DesktopSection({ eyebrow, title, items }) {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-75%'])
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <section className="horizontal-scroll-section" ref={sectionRef}>
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
            {items.map(({ label, desc, stat, slug }) => (
              <article key={label} className="horizontal-scroll-card">
                <div className="horizontal-scroll-logo">
                  <BrandLogo slug={slug} size={44} pill />
                </div>
                <strong>{stat}</strong>
                <h3>{label}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function MobileSection({ eyebrow, title, items }) {
  return (
    <section className="horizontal-scroll-section horizontal-scroll-mobile">
      <div className="horizontal-scroll-sticky">
        <div className="horizontal-scroll-bg" aria-hidden="true" />

        <div className="container">
          <div className="horizontal-scroll-header">
            <span className="section-eyebrow">{eyebrow}</span>
            <h2>{title}</h2>
          </div>
        </div>

        <div className="horizontal-scroll-track-wrap">
          <div className="horizontal-scroll-track">
            {items.map(({ label, desc, stat, slug }) => (
              <article key={label} className="horizontal-scroll-card">
                <div className="horizontal-scroll-logo">
                  <BrandLogo slug={slug} size={44} pill />
                </div>
                <strong>{stat}</strong>
                <h3>{label}</h3>
                <p>{desc}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="horizontal-scroll-swipe-hint" aria-hidden="true">
          <span>Swipe to explore</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default function HorizontalScroll({ eyebrow, title, items }) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)')
    setIsMobile(mq.matches)
    const handler = (e) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (isMobile) {
    return <MobileSection eyebrow={eyebrow} title={title} items={items} />
  }

  return <DesktopSection eyebrow={eyebrow} title={title} items={items} />
}
