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
    client: 'HealthFirst Networks',
    industry: 'Healthcare',
    title: 'HIPAA-Compliant Patient Communication Platform',
    desc: 'Built a Twilio-powered omnichannel messaging system for a regional hospital network serving 180k patients. Automated appointment reminders, discharge follow-ups, and after-hours IVR routing across 14 facilities — all within HIPAA-aligned data workflows.',
    tags: ['Twilio', 'Node.js', 'IVR', 'Webhooks'],
    duration: '8 weeks',
    features: [
      'Multi-facility IVR with intelligent call routing',
      'Automated SMS & WhatsApp appointment reminders',
      'HIPAA-aligned data pipeline with audit logging',
      'Real-time call analytics dashboard',
    ],
    results: [
      '52% drop in missed appointments',
      '1,400+ daily calls handled automatically',
      '31% reduction in front-desk call volume',
      '$480k/year in operational savings',
    ],
  },
  {
    category: 'AI',
    client: 'NovaSales Pro',
    industry: 'SaaS / Sales Tech',
    title: 'AI-Powered Lead Qualification Engine',
    desc: 'Deployed a conversational AI agent that engages inbound leads via chat and SMS 24/7, qualifies them against custom ICP criteria, scores intent, and auto-routes hot prospects to sales reps through HubSpot — eliminating manual SDR overhead on low-intent contacts.',
    tags: ['OpenAI GPT-4o', 'Zapier', 'HubSpot', 'Node.js'],
    duration: '6 weeks',
    features: [
      'GPT-4o conversational qualification agent',
      'Custom ICP scoring & intent classification',
      'Auto-routing to CRM with enriched lead profiles',
      'Slack alerts for high-intent prospects',
    ],
    results: [
      '3.4× increase in sales-qualified leads',
      '68% reduction in SDR time on unqualified leads',
      '24/7 coverage with zero additional headcount',
      'Average 4-minute response time vs. 6-hour prior',
    ],
  },
  {
    category: 'Digital Experience',
    client: 'Apex Coaching Group',
    industry: 'Online Education',
    title: 'High-Ticket Funnel & Membership Platform',
    desc: 'Designed and launched a full digital experience for a business coaching brand: a multi-step webinar funnel with upsell sequences, Stripe-integrated checkout, and a gated membership portal delivering course content to 3,200+ active members.',
    tags: ['Funnel Builder', 'Stripe', 'Email Automation', 'Membership'],
    duration: '5 weeks',
    features: [
      'Webinar registration + replay funnel with upsells',
      '14-email automated nurture sequence',
      'Stripe subscription billing & dunning flows',
      'Gated membership portal with content drip',
    ],
    results: [
      '41% webinar-to-purchase conversion rate',
      '$1.8M in revenue within first 90 days',
      '3,200+ active paying members onboarded',
      '22 hours/week saved on manual admin',
    ],
  },
  {
    category: 'Web Application',
    client: 'Meridian Legal Partners',
    industry: 'Professional Services',
    title: 'Client Portal with Automated Onboarding',
    desc: 'Built a full-stack secure client portal for a mid-size law firm managing 2,500+ active matters. The platform automates onboarding, collects e-signatures, tracks case milestones, and handles invoicing — replacing a patchwork of spreadsheets and email threads.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    duration: '10 weeks',
    features: [
      'Automated client onboarding with e-signature',
      'Real-time case tracking & milestone alerts',
      'Document management with version control',
      'Stripe billing & automated invoice delivery',
    ],
    results: [
      'Onboarding time cut from 4 days to 90 minutes',
      '100% billing automation (zero manual invoices)',
      '44% improvement in client satisfaction score',
      '2,500+ active matters managed in one platform',
    ],
  },
  {
    category: 'Automation',
    client: 'BrightCart Commerce',
    industry: 'E-Commerce',
    title: 'Multi-Platform Operations Automation Hub',
    desc: 'Engineered 40+ interconnected Zapier workflows syncing Shopify, Klaviyo, QuickBooks, Google Sheets, and Slack in real time. Eliminated manual data entry across 6 platforms and gave the executive team live visibility into inventory, revenue, and support queues.',
    tags: ['Zapier', 'Shopify', 'Klaviyo', 'QuickBooks'],
    duration: '4 weeks',
    features: [
      '40+ automated workflows across 6 platforms',
      'Real-time inventory & order sync with QBO',
      'Automated daily P&L and inventory reports',
      'Low-stock and refund Slack alert system',
    ],
    results: [
      '18 hours/week of manual work eliminated',
      'Zero data discrepancies across platforms',
      'Finance close time reduced from 5 days to 1',
      'Real-time exec dashboard operational',
    ],
  },
  {
    category: 'Communication',
    client: 'SwiftLogix Fleet',
    industry: 'Logistics & Transportation',
    title: 'Driver & Customer Notification System',
    desc: 'Deployed a Twilio-based real-time notification system for a last-mile delivery company operating 320 drivers across 3 cities. Customers receive live SMS delivery windows, ETAs, and confirmation links; dispatchers get driver status alerts without manual check-ins.',
    tags: ['Twilio', 'Zapier', 'React', 'Webhooks'],
    duration: '7 weeks',
    features: [
      'Real-time SMS ETAs and delivery confirmations',
      'Two-way driver dispatch messaging',
      'Automated exception alerts (delays, failures)',
      'Customer self-serve reschedule flow via SMS',
    ],
    results: [
      '28% improvement in first-attempt delivery rate',
      '60% reduction in inbound "where is my order" calls',
      '320 drivers coordinated with zero additional ops staff',
      '4.7/5 average post-delivery customer rating',
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
            <TextReveal text="Real Projects. Measurable Results." as="span" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            A look at how Zentro has helped startups and scale-ups across industries
            build smarter systems, automate operations, and grow faster.
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
              {filtered.map(({ title, client, industry, desc, tags, features, results, duration }, i) => (
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
                    whileHover={{ y: -6, boxShadow: 'var(--shadow-lg)' }}
                  >
                    <div className="project-meta">
                      <div className="project-tags">
                        {tags.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                      <span className="project-duration">{duration}</span>
                    </div>

                    <div className="project-client-row">
                      <span className="project-client">{client}</span>
                      <span className="project-industry">{industry}</span>
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
