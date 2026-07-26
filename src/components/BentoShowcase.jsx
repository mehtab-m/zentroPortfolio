import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from './Icons'
import { staggerContainer, staggerItem } from '../lib/motion'
import './BentoShowcase.css'

const features = [
  {
    icon: 'automation',
    label: 'Workflow Automation',
    desc: 'n8n & Zapier pipelines that connect your tools and eliminate manual work.',
    to: '/services#workflow',
  },
  {
    icon: 'phone',
    label: 'Communication',
    desc: 'Twilio SMS, voice & WhatsApp — automated and running without you.',
    to: '/services#communication',
  },
  {
    icon: 'ai',
    label: 'AI Systems',
    desc: 'Face recognition, intelligent agents, and automated decision-making.',
    to: '/services#ai',
  },
  {
    icon: 'code',
    label: 'Custom Software',
    desc: 'Full-stack apps built for your exact workflow. You own the code.',
    to: '/services#software',
  },
]

export default function BentoShowcase() {
  return (
    <section className="bento-section">
      <div className="container">
        <div className="bento-header">
          <div>
            <span className="section-eyebrow">What We Do</span>
            <h2 className="bento-title">Four things, done well</h2>
          </div>
          <Link to="/services" className="bento-see-all">
            See all solutions <Icon name="arrow" size={14} />
          </Link>
        </div>

        <motion.div
          className="bento-strip"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map(({ icon, label, desc, to }) => (
            <motion.div key={label} variants={staggerItem}>
              <Link to={to} className="bento-feature" aria-label={label}>
                <div className="bento-feature-icon">
                  <Icon name={icon} size={22} />
                </div>
                <div className="bento-feature-text">
                  <strong>{label}</strong>
                  <span>{desc}</span>
                </div>
                <Icon name="arrow" size={14} className="bento-feature-arrow" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
