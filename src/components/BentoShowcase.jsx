import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Icon } from './Icons'
import { getLogoUrl } from '../data/logos'
import './BentoShowcase.css'

const bentoItems = [
  {
    size: 'large',
    eyebrow: 'Automation',
    title: 'Workflows that run themselves',
    desc: 'Multi-step pipelines connecting CRM, e-commerce, and communication — zero manual handoffs.',
    icon: 'automation',
    slug: 'zapier',
    to: '/services',
  },
  {
    size: 'medium',
    eyebrow: 'Voice & SMS',
    title: 'Global reach',
    desc: 'Twilio-powered messaging across 180+ countries.',
    icon: 'phone',
    slug: 'twilio',
    to: '/services',
  },
  {
    size: 'medium',
    eyebrow: 'AI Agents',
    title: 'Always-on intelligence',
    desc: 'LLM agents that qualify, support, and decide at scale.',
    icon: 'ai',
    slug: 'openai',
    to: '/services',
  },
  {
    size: 'wide',
    eyebrow: 'Cloud Native',
    title: 'Built for enterprise scale',
    desc: 'Multi-region deployment on Azure & Google Cloud with 99.9% uptime SLA and elastic scaling.',
    icon: 'globe',
    slug: 'microsoft-azure',
    to: '/about',
  },
]

export default function BentoShowcase() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])

  return (
    <section className="bento-section section" ref={ref}>
      <motion.div className="bento-bg" style={{ y: bgY }} aria-hidden="true" />

      <div className="container">
        <motion.div
          className="section-header center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-eyebrow">Platform Highlights</span>
          <h2>Everything you need, one partner</h2>
          <p>A modular architecture spanning automation, communication, AI, and cloud — unified under one roof.</p>
        </motion.div>

        <div className="bento-grid">
          {bentoItems.map((item, i) => (
            <motion.div
              key={item.title}
              className={`bento-card bento-${item.size}`}
              initial={{ opacity: 0, y: 48 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              <Link to={item.to} className="bento-card-link">
                <div className="bento-card-glow" aria-hidden="true" />
                <div className="bento-card-top">
                  <span className="bento-eyebrow">{item.eyebrow}</span>
                  <div className="bento-icon-wrap">
                    <Icon name={item.icon} size={26} />
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="bento-logo">
                  <img src={getLogoUrl(item.slug)} alt="" loading="lazy" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
