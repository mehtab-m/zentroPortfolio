import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Icon } from '../components/Icons'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'
import { staggerContainer, staggerItem } from '../lib/motion'
import './Portfolio.css'

const projects = [
  {
    category: 'Communication',
    title: 'Global SMS & Voice Platform for E-Commerce Enterprise',
    desc: 'Deployed a mission-critical communication infrastructure using Twilio, enabling order confirmations, shipping updates, and automated customer support across 12 regions.',
    tags: ['Twilio', 'Zapier', 'Node.js', 'React'],
    features: [
      'Multi-region Twilio SMS & Voice integration',
      'Real-time Zapier workflow orchestration',
      'Executive analytics dashboard',
    ],
    results: [
      '45% increase in customer response rate',
      '60% reduction in support ticket volume',
      '10M+ automated messages monthly',
    ],
  },
  {
    category: 'AI',
    title: 'Enterprise AI Lead Qualification Platform',
    desc: 'Built an intelligent conversational system that qualifies inbound leads 24/7, scores prospects against custom criteria, and routes qualified opportunities to sales teams via CRM integration.',
    tags: ['AI Agents', 'OpenAI', 'Zapier', 'CRM'],
    features: [
      'Natural language lead conversations',
      'Custom scoring & qualification engine',
      'Automated CRM & Slack routing',
    ],
    results: [
      '3x increase in qualified leads',
      '70% reduction in sales response time',
      '24/7 coverage with zero incremental cost',
    ],
  },
  {
    category: 'Digital Experience',
    title: 'Digital Experience Platform & Membership Portal',
    desc: 'Delivered a complete digital experience platform with sales funnels, automated email campaigns, and a gated membership portal for a global education provider.',
    tags: ['Systeme.io', 'Email Automation', 'Funnels'],
    features: [
      'Multi-step funnel with upsell sequences',
      'Automated 12-email nurture campaign',
      'Secure membership portal',
    ],
    results: [
      '38% funnel conversion rate',
      '$2.2M revenue in first 90 days',
      '20+ hours/week operational savings',
    ],
  },
  {
    category: 'Web Application',
    title: 'Enterprise Client Portal with Workflow Automation',
    desc: 'Architected and deployed a full-stack client portal automating onboarding, document management, status tracking, and billing for a professional services firm serving 2,000+ clients.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    features: [
      'Automated onboarding workflow',
      'Document upload & management system',
      'Stripe billing & invoice automation',
    ],
    results: [
      'Onboarding reduced from 3 days to 2 hours',
      '100% billing automation achieved',
      '40% improvement in client satisfaction',
    ],
  },
  {
    category: 'Automation',
    title: 'Multi-Platform Integration Hub',
    desc: 'Engineered a network of 30+ automated workflows connecting Shopify, HubSpot, Google Workspace, Slack, and email — eliminating manual data entry and enabling real-time executive reporting.',
    tags: ['Zapier', 'Shopify', 'HubSpot', 'Slack'],
    features: [
      '30+ automated workflows across 6 platforms',
      'Real-time inventory & sales synchronization',
      'Automated daily executive reports',
    ],
    results: [
      '15 hours/week of manual work eliminated',
      'Zero data entry errors',
      'Real-time cross-platform visibility',
    ],
  },
  {
    category: 'Communication',
    title: 'Healthcare IVR & Appointment System',
    desc: 'Developed a HIPAA-aligned Twilio IVR system for a healthcare network, routing 1,200+ daily calls and enabling voice-based appointment scheduling across 8 facilities.',
    tags: ['Twilio', 'IVR', 'Node.js', 'Webhooks'],
    features: [
      'Multi-level IVR call routing',
      'Voice-based appointment booking',
      'After-hours automated response system',
    ],
    results: [
      '55% improvement in call resolution rate',
      '30% reduction in average handle time',
      '1,200+ calls handled daily',
    ],
  },
]

const categories = ['All', 'Communication', 'AI', 'Digital Experience', 'Web Application', 'Automation']

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <main className="portfolio-page">
      <section className="page-hero">
        <div className="container">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Case Studies
          </motion.span>
          <h1>
            <TextReveal text="Proven Results for Global Organizations" as="span" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Explore how Zentro has delivered measurable business outcomes
            for enterprises across industries worldwide.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal delay={80}>
            <LayoutGroup>
              <div className="filter-tabs" role="tablist" aria-label="Filter case studies by category">
                {categories.map(cat => (
                  <button
                    key={cat}
                    role="tab"
                    aria-selected={active === cat}
                    className={`filter-tab ${active === cat ? 'active' : ''}`}
                    onClick={() => setActive(cat)}
                  >
                    {active === cat && (
                      <motion.span
                        className="filter-tab-bg"
                        layoutId="filterActive"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="filter-tab-label">{cat}</span>
                  </button>
                ))}
              </div>
            </LayoutGroup>
          </Reveal>

          <motion.div
            className="projects-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={active}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map(({ title, desc, tags, features, results }, i) => (
                <motion.div
                  key={title}
                  layout
                  variants={staggerItem}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <motion.article
                    className="project-card card card-lift"
                    whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
                  >
                    <div className="project-tags">
                      {tags.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                    <h2>{title}</h2>
                    <p className="project-desc">{desc}</p>

                    <div className="project-cols">
                      <div>
                        <h3>Key Deliverables</h3>
                        <ul>
                          {features.map(f => (
                            <li key={f}>
                              <Icon name="check" size={14} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3>Business Impact</h3>
                        <ul className="results-list">
                          {results.map(r => (
                            <li key={r}>
                              <Icon name="chart" size={14} />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link to="/contact" className="btn btn-outline project-cta">
                      Discuss a Similar Project
                    </Link>
                  </motion.article>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <Reveal direction="scale">
            <h2>Have a Project in Mind?</h2>
            <p>Connect with our solutions team to explore how Zentro can deliver similar results for your organization.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Start a Conversation</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
