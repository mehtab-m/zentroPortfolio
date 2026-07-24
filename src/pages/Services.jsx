import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '../components/Icons'
import Reveal from '../components/Reveal'
import MagneticButton from '../components/MagneticButton'
import { staggerContainer, staggerItem } from '../lib/motion'
import './Services.css'

const services = [
  {
    id: 'communication',
    icon: 'phone',
    number: '01',
    title: 'Communication Automation',
    tagline: 'Stop sending messages manually.',
    desc: 'We connect Twilio to your existing systems so reminders, alerts, onboarding sequences, and follow-ups run on their own — across SMS, voice, and WhatsApp.',
    bullets: [
      'SMS & WhatsApp automated sequences',
      'Voice call routing & IVR systems',
      'Webhook-powered real-time delivery',
    ],
    stack: ['Twilio', '.NET Core', 'React.js', 'WebSockets'],
    caseLinks: [
      { label: 'SMS Automation for Membership Platform', to: '/portfolio#sms-automation' },
      { label: 'Twilio Communication Platform', to: '/portfolio#twilio-platform' },
    ],
  },
  {
    id: 'workflow',
    icon: 'automation',
    number: '02',
    title: 'Workflow Automation',
    tagline: 'Kill the copy-paste work.',
    desc: 'We build n8n and Zapier pipelines that move data between your tools automatically. CRM updates, spreadsheet syncs, email triggers — set once, runs forever.',
    bullets: [
      'n8n & Zapier multi-step pipelines',
      'Cross-app data sync in real time',
      'Error handling & retry logic built in',
    ],
    stack: ['n8n', 'Zapier', 'Webhooks', 'REST APIs', '.NET Core'],
    caseLinks: [
      { label: 'n8n Workflow Automation', to: '/portfolio#n8n-automation' },
      { label: 'SMS Automation for Membership Platform', to: '/portfolio#sms-automation' },
    ],
  },
  {
    id: 'software',
    icon: 'code',
    number: '03',
    title: 'Custom Software Development',
    tagline: 'Built for your workflow, not someone else\'s.',
    desc: 'Full-stack web applications designed around how your business actually works. You own the code. No vendor lock-in. Built with clean architecture that your team can maintain.',
    bullets: [
      'ASP.NET Core + React.js full-stack',
      'Clean Architecture & SQL Server',
      'Custom dashboards, portals & tools',
    ],
    stack: ['ASP.NET Core', 'React.js', 'SQL Server', 'Entity Framework Core'],
    caseLinks: [
      { label: 'Institute Management System', to: '/portfolio#institute-management' },
    ],
  },
  {
    id: 'ai',
    icon: 'ai',
    number: '04',
    title: 'AI & Security Systems',
    tagline: 'Smart access. Full audit trail.',
    desc: 'AI-powered systems for physical access control and automated decision-making. Face recognition replaces keys, logs every entry, and alerts on unauthorized access — all in real time.',
    bullets: [
      'Real-time face detection & recognition',
      'IoT door lock & hardware integration',
      'Full access log with timestamps',
    ],
    stack: ['Python', 'OpenCV', 'IoT Hardware', '.NET Core'],
    caseLinks: [
      { label: 'AI Face Recognition Security', to: '/portfolio#face-recognition' },
    ],
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    desc: 'We learn your workflow and bottlenecks. Free, no commitment.',
    icon: 'phone',
  },
  {
    step: '02',
    title: 'Scope & Fixed Quote',
    desc: 'Clear written scope, timeline, and fixed price. No surprises.',
    icon: 'shield',
  },
  {
    step: '03',
    title: 'Build & Review',
    desc: 'We build in sprints with regular check-ins. You stay in control.',
    icon: 'automation',
  },
  {
    step: '04',
    title: 'Launch & Support',
    desc: 'We go live together and stay available for fixes and iterations.',
    icon: 'chart',
  },
]

export default function Services() {
  return (
    <main className="services-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <motion.span className="section-eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            What We Build
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            Four Things We're Very Good At
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Communication automation, workflow automation, custom software, and AI systems.
            Pick one — or let us figure out which combination solves your problem.
          </motion.p>
          <motion.div
            className="hero-service-pills"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {services.map(s => (
              <a key={s.id} href={`#${s.id}`} className="hero-pill">
                <Icon name={s.icon} size={14} />
                {s.title}
              </a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section services-section">
        <div className="container">
          <motion.div
            className="services-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {services.map(({ id, icon, number, title, tagline, desc, bullets, stack, caseLinks }) => (
              <motion.article
                key={id}
                id={id}
                className="service-card"
                variants={staggerItem}
              >
                <div className="service-card-top">
                  <div className="service-icon-wrap">
                    <Icon name={icon} size={26} />
                  </div>
                  <span className="service-number">{number}</span>
                </div>

                <div className="service-card-content">
                  <h2>{title}</h2>
                  <p className="service-tagline">{tagline}</p>
                  <p className="service-desc">{desc}</p>

                  <ul className="service-bullets">
                    {bullets.map(b => (
                      <li key={b}>
                        <Icon name="check" size={14} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="service-stack">
                    {stack.map(s => <span key={s} className="stack-chip">{s}</span>)}
                  </div>
                </div>

                <div className="service-card-footer">
                  <div className="service-case-links">
                    <span className="service-case-label">Live examples →</span>
                    {caseLinks.map(cl => (
                      <Link key={cl.to} to={cl.to} className="service-case-link">
                        {cl.label}
                      </Link>
                    ))}
                  </div>
                  <Link to="/contact" className="btn btn-primary service-cta-btn">
                    Get a Quote
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">How It Works</span>
              <h2>From first call to live system</h2>
              <p>Four steps. Fixed price. No surprises.</p>
            </div>
          </Reveal>
          <motion.div
            className="process-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {process.map(({ step, title, desc, icon }, i) => (
              <motion.div key={step} className="process-card" variants={staggerItem}>
                <div className="process-step-num">{step}</div>
                <div className="process-icon">
                  <Icon name={icon} size={20} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                {i < process.length - 1 && (
                  <div className="process-connector" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band">
        <div className="container">
          <Reveal direction="scale">
            <h2>Not sure which solution fits?</h2>
            <p>Tell us what you're trying to automate or build. We'll tell you exactly how we'd approach it.</p>
            <div className="cta-actions">
              <MagneticButton>
                <Link to="/contact" className="btn btn-primary btn-lg">Book a Free Call</Link>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <Link to="/portfolio" className="btn btn-outline btn-lg">See Case Studies</Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
