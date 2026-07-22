import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Icon } from '../components/Icons'
import Reveal from '../components/Reveal'
import { staggerContainer, staggerItem } from '../lib/motion'
import './Portfolio.css'

const projects = [
  {
    id: 'sms-automation',
    category: 'Communication',
    status: 'live',
    title: 'SMS Automation for Membership Platform',
    client: 'Membership SaaS',
    duration: 'Ongoing',
    desc: 'Automated SMS onboarding, reminder, and re-engagement flows for a membership platform. New members receive a welcome sequence, payment reminders trigger automatically, and churned members get win-back campaigns — all without touching a dashboard.',
    stack: ['Systeme.io', 'Zapier', 'Twilio', '.NET Core'],
    deliverables: [
      'Automated welcome & onboarding SMS sequence',
      'Payment failure & renewal reminder flows',
      'Win-back campaign for churned members',
      'Zapier webhooks connecting all platforms',
    ],
    results: [
      'Zero manual follow-ups for membership team',
      'Onboarding completion rate improved significantly',
      'Live and supported in production',
    ],
    relatedSolutions: [
      { label: 'Communication Automation', anchor: 'communication' },
      { label: 'Workflow Automation', anchor: 'workflow' },
    ],
  },
  {
    id: 'n8n-automation',
    category: 'Automation',
    status: 'delivered',
    title: 'n8n Workflow Automation',
    client: 'Operations Team',
    duration: '3 weeks',
    desc: 'Built a network of n8n workflows replacing manual data movement between 5 different tools. Data flows automatically between CRM, email, spreadsheets, and internal dashboards — triggered by real events, no cron jobs needed.',
    stack: ['n8n', 'REST APIs', 'Webhooks', 'JSON', '.NET Core'],
    deliverables: [
      'Multi-step n8n workflows across 5 platforms',
      'Real-time webhook-triggered data sync',
      'Error handling with automatic retry logic',
      'Admin dashboard for workflow monitoring',
    ],
    results: [
      'Eliminated ~15 hours/week of manual data entry',
      'Zero data sync errors after deployment',
      'Full visibility into pipeline health',
    ],
    relatedSolutions: [
      { label: 'Workflow Automation', anchor: 'workflow' },
    ],
  },
  {
    id: 'twilio-platform',
    category: 'Communication',
    status: 'delivered',
    title: 'Twilio Communication Platform',
    client: 'Customer-Facing Product',
    duration: '6 weeks',
    desc: 'A full Twilio-powered communication layer built on top of an existing .NET Core backend. Handles outbound SMS, inbound voice routing, real-time status webhooks, and a React dashboard for the support team to monitor all communication activity.',
    stack: ['Twilio API', '.NET Core', 'React.js', 'WebSockets'],
    deliverables: [
      'Outbound SMS with delivery tracking',
      'Inbound voice call routing & IVR',
      'Real-time webhook status pipeline',
      'React dashboard for communication monitoring',
    ],
    results: [
      'Full communication layer live in 6 weeks',
      'Support team has real-time visibility',
      'Handles voice + SMS from a single platform',
    ],
    relatedSolutions: [
      { label: 'Communication Automation', anchor: 'communication' },
    ],
  },
  {
    id: 'institute-management',
    category: 'Software',
    status: 'delivered',
    title: 'Institute Management System',
    client: 'Education Institute',
    duration: '10 weeks',
    desc: 'A full-stack institute management system built with Clean Architecture. Manages student enrollment, attendance tracking, fee collection, timetable scheduling, and staff management — replacing a combination of spreadsheets and paper-based processes.',
    stack: ['ASP.NET Core', 'React.js', 'SQL Server', 'Entity Framework Core', 'Clean Architecture'],
    deliverables: [
      'Student enrollment & profile management',
      'Attendance tracking with reporting',
      'Fee collection & payment history',
      'Timetable & class scheduling module',
    ],
    results: [
      'Replaced 4 separate spreadsheet systems',
      'Admin workload reduced significantly',
      'Full audit trail for all student records',
    ],
    relatedSolutions: [
      { label: 'Custom Software Development', anchor: 'software' },
    ],
  },
  {
    id: 'face-recognition',
    category: 'AI',
    status: 'delivered',
    title: 'AI Face Recognition Security System',
    client: 'Physical Premises',
    duration: '5 weeks',
    desc: 'An IoT-connected face recognition system that controls physical access to premises. A camera captures faces at entry points, a Python backend identifies registered individuals in real time, and a .NET Core API manages access rules, logs every entry, and alerts on unauthorized attempts.',
    stack: ['Python', 'OpenCV', 'face_recognition', 'IoT Hardware', '.NET Core', 'SQL Server'],
    deliverables: [
      'Real-time face detection & identification',
      'IoT door lock integration',
      'Full access audit log with timestamps',
      'Admin panel for managing registered users',
    ],
    results: [
      'Keys and access cards fully replaced',
      'Every entry logged with face match confidence',
      'Unauthorized access alerts working in real time',
    ],
    relatedSolutions: [
      { label: 'AI & Security Systems', anchor: 'ai' },
    ],
  },
]

const categories = ['All', 'Communication', 'Automation', 'Software', 'AI']

const statusConfig = {
  live: { label: 'Live & Supported', color: '#059669' },
  delivered: { label: 'Delivered', color: '#0078d4' },
}

export default function Portfolio() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <main className="portfolio-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Case Studies
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
          >
            What We've Actually Built
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Five real projects — communication systems, automation pipelines,
            custom software, and AI. Each one delivered, live, and documented.
          </motion.p>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="section">
        <div className="container">

          {/* Filter tabs */}
          <LayoutGroup>
            <div className="filter-tabs" role="tablist" aria-label="Filter by category">
              {categories.map(cat => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={active === cat}
                  className={`filter-tab${active === cat ? ' active' : ''}`}
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

          {/* Grid */}
          <motion.div
            className="projects-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={active}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map(({ id, title, client, duration, desc, stack, deliverables, results, status, relatedSolutions }) => (
                <motion.article
                  key={id}
                  id={id}
                  layout
                  variants={staggerItem}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.18 } }}
                  className="project-card"
                  whileHover={{ y: -3 }}
                >
                  {/* Top accent */}
                  <div className="project-card-accent" />

                  <div className="project-card-body">
                    {/* Meta row */}
                    <div className="project-meta">
                      <div className="project-stack-tags">
                        {stack.map(s => <span key={s} className="stack-tag">{s}</span>)}
                      </div>
                      <span
                        className="project-status"
                        style={{ '--status-color': statusConfig[status].color }}
                      >
                        <span className="status-dot" />
                        {statusConfig[status].label}
                      </span>
                    </div>

                    {/* Client + duration */}
                    <div className="project-client-row">
                      <span className="project-client">{client}</span>
                      <span className="project-duration">{duration}</span>
                    </div>

                    {/* Title + desc */}
                    <h2>{title}</h2>
                    <p className="project-desc">{desc}</p>

                    {/* Deliverables + Results */}
                    <div className="project-cols">
                      <div className="project-col-block">
                        <h3>What We Built</h3>
                        <ul>
                          {deliverables.map(d => (
                            <li key={d}>
                              <Icon name="check" size={12} />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="project-col-block results-block">
                        <h3>Outcome</h3>
                        <ul className="results-list">
                          {results.map(r => (
                            <li key={r}>
                              <Icon name="chart" size={12} />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Footer — related solutions + CTA */}
                  <div className="project-card-footer">
                    <div className="project-related">
                      <span className="project-related-label">Related Solutions</span>
                      {relatedSolutions.map(rs => (
                        <Link
                          key={rs.anchor}
                          to={`/services#${rs.anchor}`}
                          className="project-related-link"
                        >
                          <Icon name="arrow" size={12} />
                          {rs.label}
                        </Link>
                      ))}
                    </div>
                    <Link to="/contact" className="btn btn-outline project-cta">
                      Build Something Similar
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band">
        <div className="container">
          <Reveal direction="scale">
            <h2>Have something to automate or build?</h2>
            <p>Tell us what problem you're solving. We'll tell you how we'd build it.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">Start a Conversation</Link>
              <Link to="/services" className="btn btn-outline btn-lg">View Our Solutions</Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
