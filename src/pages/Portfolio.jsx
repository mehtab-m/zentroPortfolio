import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Icon } from '../components/Icons'
import Reveal from '../components/Reveal'
import { staggerContainer, staggerItem } from '../lib/motion'
import { projectVideos } from '../assets/videos/videoLinks'
import './Portfolio.css'

const projects = [
  {
    id: 'sms-automation',
    category: 'Communication',
    status: 'live',
    number: '01',
    title: 'SMS Automation for Membership Platform',
    client: 'Membership SaaS',
    duration: 'Ongoing',
    tagline: 'Zero manual follow-ups. Fully automated.',
    desc: 'Automated SMS onboarding, payment reminders, and win-back campaigns for a membership platform  all triggered by real events, running without anyone touching a dashboard.',
    stack: ['Systeme.io', 'Zapier', 'Twilio', '.NET Core'],
    deliverables: [
      'Welcome & onboarding SMS sequence',
      'Payment failure & renewal reminders',
      'Win-back campaign for churned members',
    ],
    results: [
      'Zero manual follow-ups required',
      'Onboarding completion improved',
      'Running live in production',
    ],
    relatedSolutions: [
      { label: 'Communication Automation', to: '/services#communication' },
      { label: 'Workflow Automation', to: '/services#workflow' },
    ],
  },
  {
    id: 'n8n-automation',
    category: 'Automation',
    status: 'delivered',
    number: '02',
    title: 'n8n Workflow Automation Hub',
    client: 'Operations Team',
    duration: '3 weeks',
    tagline: '15 hours a week back. Zero data entry.',
    desc: 'A network of n8n workflows replacing manual data movement between CRM, email, spreadsheets, and dashboards. Event-triggered, error-handled, and fully monitored.',
    stack: ['n8n', 'REST APIs', 'Webhooks', 'JSON', '.NET Core'],
    deliverables: [
      'Multi-step workflows across 5 platforms',
      'Real-time webhook-triggered data sync',
      'Error handling with automatic retry',
    ],
    results: [
      '~15 hours/week of manual work eliminated',
      'Zero data sync errors post-launch',
      'Full pipeline visibility dashboard',
    ],
    relatedSolutions: [
      { label: 'Workflow Automation', to: '/services#workflow' },
    ],
  },
  {
    id: 'twilio-platform',
    category: 'Communication',
    status: 'delivered',
    number: '03',
    title: 'Twilio Communication Platform',
    client: 'Customer-Facing Product',
    duration: '6 weeks',
    tagline: 'Voice + SMS from one place. Full visibility.',
    desc: 'A complete Twilio communication layer on top of an existing .NET Core backend. Outbound SMS, inbound voice routing, webhook status pipeline, and a React dashboard for the support team.',
    stack: ['Twilio API', '.NET Core', 'React.js', 'WebSockets'],
    deliverables: [
      'Outbound SMS with delivery tracking',
      'Inbound voice call routing & IVR',
      'React monitoring dashboard',
    ],
    results: [
      'Full communication layer live in 6 weeks',
      'Real-time support team visibility',
      'Voice + SMS from a single platform',
    ],
    relatedSolutions: [
      { label: 'Communication Automation', to: '/services#communication' },
    ],
  },
  {
    id: 'institute-management',
    category: 'Software',
    status: 'delivered',
    number: '04',
    title: 'Institute Management System',
    client: 'Education Institute',
    duration: '10 weeks',
    tagline: 'Four spreadsheets replaced by one system.',
    desc: 'A full-stack institute management system with Clean Architecture. Handles student enrollment, attendance, fee collection, and timetable scheduling  replacing spreadsheets and paper completely.',
    stack: ['ASP.NET Core', 'React.js', 'SQL Server', 'Entity Framework Core'],
    deliverables: [
      'Student enrollment & profile management',
      'Attendance tracking with reporting',
      'Fee collection & timetable module',
    ],
    results: [
      'Replaced 4 separate spreadsheet systems',
      'Admin workload cut significantly',
      'Full audit trail for all records',
    ],
    relatedSolutions: [
      { label: 'Custom Software Development', to: '/services#software' },
    ],
  },
  {
    id: 'face-recognition',
    category: 'AI',
    status: 'delivered',
    number: '05',
    title: 'AI Face Recognition Security System',
    client: 'Physical Premises',
    duration: '5 weeks',
    tagline: 'No keys. No cards. Full audit trail.',
    desc: 'IoT-connected face recognition for physical access control. Camera captures faces at entry, Python backend identifies people in real time, .NET Core API manages rules, logs every entry, and alerts on unauthorized access.',
    stack: ['Python', 'OpenCV', 'IoT Hardware', '.NET Core', 'SQL Server'],
    deliverables: [
      'Real-time face detection & ID',
      'IoT door lock integration',
      'Full access audit log',
    ],
    results: [
      'Keys and access cards replaced',
      'Every entry logged with confidence score',
      'Unauthorized access alerts live',
    ],
    relatedSolutions: [
      { label: 'AI & Security Systems', to: '/services#ai' },
    ],
  },
]

const categories = ['All', 'Communication', 'Automation', 'Software', 'AI']

const statusConfig = {
  live:      { label: 'Live & Supported', color: '#059669' },
  delivered: { label: 'Delivered',        color: '#0078d4' },
}

function VideoPlayer({ projectId, autoplay = false, muted = false, playsInline = true }) {
  const url = projectVideos[projectId]
  if (!url) return (
    <div className="project-video-placeholder">
      <Icon name="automation" size={28} />
      <span>Video coming soon</span>
    </div>
  )
  return (
    <video
      className="project-video"
      src={url}
      controls
      preload="metadata"
      autoPlay={autoplay}
      muted={muted}
      playsInline={playsInline}
      loop={autoplay}
      aria-label="Project demo video"
    />
  )
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
          <motion.span className="section-eyebrow"
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>
           Proven across multiple deployments.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }}>
            Communication systems, automation pipelines, custom software, and AI 
            each one built, delivered, and documented.
          </motion.p>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="section">
        <div className="container">

          {/* Filter */}
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
                    <motion.span className="filter-tab-bg" layoutId="filterActive"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                  )}
                  <span className="filter-tab-label">{cat}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>

          {/* Project list */}
          <motion.div
            className="projects-list"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={active}
          >
            <AnimatePresence mode="popLayout">
              {filtered.map(({ id, number, title, client, duration, tagline, desc, stack, deliverables, results, status, relatedSolutions }) => (
                <motion.article
                  key={id}
                  id={id}
                  layout
                  variants={staggerItem}
                  exit={{ opacity: 0, y: 8, transition: { duration: 0.18 } }}
                  className="project-item"
                >
                  {/* Left: video */}
                  <div className="project-item-media">
                   <VideoPlayer projectId={id} autoplay={true} muted={true} playsInline={true} />

                    <div className="project-item-badges">
                      <span
                        className="project-status-badge"
                        style={{ '--sc': statusConfig[status].color }}
                      >
                        <span className="status-dot" />
                        {statusConfig[status].label}
                      </span>
                      <span className="project-number-badge">{number}</span>
                    </div>
                  </div>

                  {/* Right: content */}
                  <div className="project-item-content">
                    {/* header */}
                    <div className="project-item-header">
                      <div className="project-item-meta">
                        <span className="project-client-badge">{client}</span>
                        <span className="project-dur">{duration}</span>
                      </div>
                      <h2>{title}</h2>
                      <p className="project-tagline">{tagline}</p>
                    </div>

                    {/* stack */}
                    <div className="project-stack-row">
                      {stack.map(s => <span key={s} className="stack-chip">{s}</span>)}
                    </div>

                    {/* desc */}
                    <p className="project-desc">{desc}</p>

                    {/* two columns */}
                    <div className="project-two-col">
                      <div className="project-col">
                        <h3>What Was Built</h3>
                        <ul>
                          {deliverables.map(d => (
                            <li key={d}><Icon name="check" size={13} />{d}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="project-col project-col-results">
                        <h3>Outcome</h3>
                        <ul>
                          {results.map(r => (
                            <li key={r}><Icon name="chart" size={13} />{r}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* footer */}
                    <div className="project-item-footer">
                      <div className="project-related-row">
                        <span className="project-related-label">Related:</span>
                        {relatedSolutions.map(rs => (
                          <Link key={rs.to} to={rs.to} className="project-related-link">
                            {rs.label}
                          </Link>
                        ))}
                      </div>
                      <Link to="/contact" className="btn btn-primary project-cta-btn">
                        Build Something Similar
                      </Link>
                    </div>
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
