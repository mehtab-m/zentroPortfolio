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
    eyebrow: 'Solution 01',
    title: 'Communication Automation',
    desc: 'Twilio voice/SMS integrations, omnichannel messaging, and automated customer outreach that scales without scaling your team.',
    benefits: [
      'Reduce customer response times dramatically',
      'Automate reminders, alerts & follow-ups',
      'Scale communication without adding headcount',
    ],
    stack: ['Twilio API', '.NET Core', 'React.js', 'REST APIs', 'WebSockets'],
    caseStudies: [
      { label: 'SMS Automation — Membership Platform', anchor: 'sms-automation' },
      { label: 'Twilio Communication Platform', anchor: 'twilio-platform' },
    ],
  },
  {
    id: 'workflow',
    icon: 'automation',
    eyebrow: 'Solution 02',
    title: 'Workflow Automation',
    desc: 'n8n and Zapier pipelines that connect your apps and eliminate repetitive manual tasks — set it up once, run forever.',
    benefits: [
      'Save hours every week on repetitive tasks',
      'Reduce human error across data entry',
      'Keep data consistent across all your tools',
    ],
    stack: ['n8n', 'Zapier', 'Webhooks', 'REST APIs', 'JSON', '.NET Core'],
    caseStudies: [
      { label: 'n8n Workflow Automation', anchor: 'n8n-automation' },
      { label: 'SMS Automation — Membership Platform', anchor: 'sms-automation' },
    ],
  },
  {
    id: 'software',
    icon: 'code',
    eyebrow: 'Solution 03',
    title: 'Custom Software Development',
    desc: 'Full-stack web applications built from scratch for your exact business needs — no templates, no compromises.',
    benefits: [
      'Own your software, no vendor lock-in',
      'Customize every feature to your workflow',
      'Scalable architecture built for growth',
    ],
    stack: ['ASP.NET Core', 'React.js', 'SQL Server', 'Entity Framework Core', 'Clean Architecture'],
    caseStudies: [
      { label: 'Institute Management System', anchor: 'institute-management' },
    ],
  },
  {
    id: 'ai',
    icon: 'ai',
    eyebrow: 'Solution 04',
    title: 'AI & Security Systems',
    desc: 'Intelligent systems for access control, facial recognition, and automated decision-making that replace outdated manual processes.',
    benefits: [
      'Replace insecure keys and access cards',
      'Full audit trail of every access event',
      'Hands-free, contactless access control',
    ],
    stack: ['Python', 'OpenCV', 'face_recognition', 'IoT Hardware', '.NET Core Backend'],
    caseStudies: [
      { label: 'AI Face Recognition Security', anchor: 'face-recognition' },
    ],
  },
]

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We learn your workflow, identify the bottlenecks, and define exactly what needs to be built.' },
  { step: '02', title: 'Scope & Proposal', desc: 'You get a clear written scope, timeline, and fixed price — no surprises.' },
  { step: '03', title: 'Build & Review', desc: 'We build in iterations with regular check-ins so you see progress and stay in control.' },
  { step: '04', title: 'Launch & Support', desc: 'We deploy, test everything live, and stay available for support and iterations.' },
]

export default function Services() {
  return (
    <main className="services-page">

      {/* ── Hero ── */}
      <section className="page-hero">
        <div className="container">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            What We Build
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Solutions That Replace Manual Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            Four focused service areas — communication automation, workflow automation,
            custom software, and AI systems. Each one built to deliver a measurable result.
          </motion.p>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section">
        <div className="container">
          <div className="services-list">
            {services.map(({ id, icon, eyebrow, title, desc, benefits, stack, caseStudies }, i) => (
              <Reveal key={id} delay={i * 60}>
                <article className="service-row" id={id}>
                  <div className="service-row-main">
                    <div className="service-row-head">
                      <div className="icon-wrap icon-wrap-lg">
                        <Icon name={icon} size={24} />
                      </div>
                      <div>
                        <span className="section-eyebrow">{eyebrow}</span>
                        <h2>{title}</h2>
                      </div>
                    </div>
                    <p className="service-desc">{desc}</p>

                    <div className="service-benefits">
                      {benefits.map(b => (
                        <div key={b} className="service-benefit">
                          <Icon name="check" size={15} />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="service-stack">
                      <span className="service-stack-label">Tech Stack</span>
                      <div className="service-stack-tags">
                        {stack.map(s => (
                          <span key={s} className="stack-tag">{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* See This in Action */}
                  <div className="service-row-sidebar">
                    <div className="service-cta-box">
                      <p className="service-cta-label">See This in Action</p>
                      <div className="service-cta-links">
                        {caseStudies.map(cs => (
                          <Link
                            key={cs.anchor}
                            to={`/portfolio#${cs.anchor}`}
                            className="service-case-link"
                          >
                            <Icon name="arrow" size={14} />
                            {cs.label}
                          </Link>
                        ))}
                      </div>
                      <Link to="/contact" className="btn btn-primary service-cta-btn">
                        Get a Quote
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section section-alt process-section">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">How It Works</span>
              <h2>From first call to live system</h2>
              <p>A simple four-step process. No jargon, no surprises.</p>
            </div>
          </Reveal>
          <motion.div
            className="process-steps"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {process.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                className="process-step"
                variants={staggerItem}
              >
                <span className="step-number">{step}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
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
                <Link to="/contact" className="btn btn-primary btn-lg">Book a Free Discovery Call</Link>
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
