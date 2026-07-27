import { useState } from 'react'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
import { Icon } from '../components/Icons'
import Reveal from '../components/Reveal'
import AnimatedCounter from '../components/AnimatedCounter'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'
import TiltCard from '../components/TiltCard'
import ParallaxOrbs from '../components/ParallaxOrbs'
import FloatingLogos from '../components/FloatingLogos'
import PartnerMarquee from '../components/PartnerMarquee'
import HeroScrollLayer from '../components/HeroScrollLayer'
import HorizontalScroll from '../components/HorizontalScroll'
import TechOrbit from '../components/TechOrbit'
import BentoShowcase from '../components/BentoShowcase'
import BrandLogo from '../components/BrandLogo'
import { heroStagger, heroItem, staggerContainer, staggerItem, cardHover } from '../lib/motion'
import { projectVideos } from '../assets/videos/videoLinks'
import './LandingPage.css'
import './Home.css'
import './Services.css'
import './Portfolio.css'
import './About.css'
import './Contact.css'

// ── Data ─────────────────────────────────────────────
const stats = [
  { value: '5', label: 'Projects Delivered', icon: 'building' },
  { value: '4M+', label: 'Automated Tasks / Month', icon: 'automation' },
  { value: '99.9%', label: 'Platform Uptime SLA', icon: 'shield' },
  { value: '3', label: 'Countries Served', icon: 'globe' },
]

const impactCards = [
  { slug: 'twilio', stat: '52%', label: 'Missed Appointments Reduced', desc: 'Healthcare client cut no-shows through automated Twilio SMS & WhatsApp reminders.' },
  { slug: 'openai', stat: '3.4×', label: 'Lead Qualification Rate', desc: 'Sales SaaS client multiplied qualified pipeline using a GPT-4o conversational agent.' },
  { slug: 'zapier', stat: '18h+', label: 'Weekly Hours Saved', desc: 'E-commerce brand reclaimed 18 hours per week by automating cross-platform data sync.' },
  { slug: 'google-cloud', stat: '18+', label: 'Countries Active', desc: 'Multi-region deployments serving clients in North America, Europe, Middle East & APAC.' },
  { slug: 'stripe', stat: '$1.8M', label: 'Revenue in 90 Days', desc: 'Online coaching brand launched a Stripe-powered funnel generating $1.8M in first quarter.' },
  { slug: 'microsoft-azure', stat: '99.9%', label: 'Platform Uptime', desc: 'Azure-hosted client portals and communication systems maintained across all engagements.' },
]

const panelTags = [
  { slug: 'twilio', name: 'Twilio' },
  { slug: 'zapier', name: 'Zapier' },
  { slug: 'openai', name: 'OpenAI' },
  { slug: 'microsoft-azure', name: 'Azure' },
]

const solutions = [
  { icon: 'phone', title: 'Communication Infrastructure', desc: 'Enterprise-grade Twilio integrations for voice, SMS, WhatsApp, and IVR systems with global reach and compliance.', slug: 'twilio' },
  { icon: 'automation', title: 'Workflow Automation', desc: 'Intelligent Zapier and custom integration pipelines that connect your entire technology stack seamlessly.', slug: 'zapier' },
  { icon: 'ai', title: 'AI & Intelligent Systems', desc: 'Production-ready AI agents for customer support, lead qualification, and automated decision-making at scale.', slug: 'openai' },
  { icon: 'funnel', title: 'Digital Experience Platform', desc: 'End-to-end funnel automation, CRM integration, and membership platforms built for conversion and retention.', slug: 'stripe' },
]

const capabilities = [
  { icon: 'chart', title: 'Outcomes Tied to Real Metrics', desc: "We scope every project around specific KPIs — hours saved, leads qualified, revenue generated. If it can't be measured, we question whether it should be built." },
  { icon: 'shield', title: 'Security Built In, Not Bolted On', desc: 'HIPAA-aligned flows, encrypted pipelines, and role-based access are part of every engagement — not an upsell. Regulated industries welcome.' },
  { icon: 'globe', title: 'Architecture That Scales', desc: 'Cloud-native, API-first builds designed to handle 10x your current volume without a rebuild. We think about growth before you have to.' },
  { icon: 'handshake', title: 'Direct Access to Senior Builders', desc: 'You work with the people writing the code and designing the systems — not account managers. Decisions get made fast.' },
  { icon: 'building', title: 'Cross-Industry Experience', desc: "Healthcare, legal, SaaS, e-commerce, logistics, coaching — we've shipped production systems across verticals and know the domain-specific tradeoffs." },
]

const testimonials = [
  { quote: "Zentro built our patient communication system in 8 weeks. Missed appointments dropped 52% in the first month.", name: 'Dr. Priya Nair', title: 'Chief Digital Officer', company: 'HealthFirst Networks', initials: 'PN', industry: 'Healthcare', rating: 5 },
  { quote: "The AI lead qualification agent they shipped pays for itself every week. Our SDRs now only talk to warm, scored prospects.", name: 'Marcus Webb', title: 'Head of Revenue', company: 'NovaSales Pro', initials: 'MW', industry: 'SaaS', rating: 5 },
  { quote: "We went from a chaotic mix of spreadsheets and email to a fully automated client portal in 10 weeks.", name: 'Rachel Oduya', title: 'Managing Partner', company: 'Meridian Legal Partners', initials: 'RO', industry: 'Legal', rating: 5 },
  { quote: "Zentro connected Shopify, QuickBooks, and Klaviyo with 40+ Zapier workflows in four weeks. We recovered 18 hours a week.", name: 'Danny Cho', title: 'Operations Lead', company: 'BrightCart Commerce', initials: 'DC', industry: 'E-Commerce', rating: 5 },
  { quote: "$1.8M in 90 days from the funnel they built. More than the outcome, it was how they approached it.", name: 'Simone Carter', title: 'Founder & CEO', company: 'Apex Coaching Group', initials: 'SC', industry: 'Online Education', rating: 5 },
  { quote: "Inbound 'where is my order' calls dropped 60%. The SMS flow Zentro built is now a core part of our operations.", name: 'Tariq Al-Rashid', title: 'Head of Operations', company: 'SwiftLogix Fleet', initials: 'TR', industry: 'Logistics', rating: 5 },
]

const services = [
  {
    id: 'communication', icon: 'phone', number: '01', title: 'Communication Automation',
    tagline: 'Stop sending messages manually.',
    desc: 'We connect Twilio to your existing systems so reminders, alerts, onboarding sequences, and follow-ups run on their own across SMS, voice, and WhatsApp.',
    bullets: ['SMS & WhatsApp automated sequences', 'Voice call routing & IVR systems', 'Webhook-powered real-time delivery'],
    stack: ['Twilio', '.NET Core', 'React.js', 'WebSockets'],
  },
  {
    id: 'workflow', icon: 'automation', number: '02', title: 'Workflow Automation',
    tagline: 'Kill the copy-paste work.',
    desc: 'We build n8n and Zapier pipelines that move data between your tools automatically. CRM updates, spreadsheet syncs, email triggers — set once, runs forever.',
    bullets: ['n8n & Zapier multi-step pipelines', 'Cross-app data sync in real time', 'Error handling & retry logic built in'],
    stack: ['n8n', 'Zapier', 'Webhooks', 'REST APIs', '.NET Core'],
  },
  {
    id: 'software', icon: 'code', number: '03', title: 'Custom Software Development',
    tagline: "Built for your workflow, not someone else's.",
    desc: 'Full-stack web applications designed around how your business actually works. You own the code. No vendor lock-in.',
    bullets: ['ASP.NET Core + React.js full-stack', 'Clean Architecture & SQL Server', 'Custom dashboards, portals & tools'],
    stack: ['ASP.NET Core', 'React.js', 'SQL Server', 'Entity Framework Core'],
  },
  {
    id: 'ai', icon: 'ai', number: '04', title: 'AI & Security Systems',
    tagline: 'Smart access. Full audit trail.',
    desc: 'AI-powered systems for physical access control and automated decision-making. Face recognition replaces keys, logs every entry, and alerts on unauthorized access.',
    bullets: ['Real-time face detection & recognition', 'IoT door lock & hardware integration', 'Full access log with timestamps'],
    stack: ['Python', 'OpenCV', 'IoT Hardware', '.NET Core'],
  },
]

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We learn your workflow and bottlenecks. Free, no commitment.', icon: 'phone' },
  { step: '02', title: 'Scope & Fixed Quote', desc: 'Clear written scope, timeline, and fixed price. No surprises.', icon: 'shield' },
  { step: '03', title: 'Build & Review', desc: 'We build in sprints with regular check-ins. You stay in control.', icon: 'automation' },
  { step: '04', title: 'Launch & Support', desc: 'We go live together and stay available for fixes and iterations.', icon: 'chart' },
]

const projects = [
  {
    id: 'sms-automation', category: 'Communication', status: 'live', number: '01',
    title: 'SMS Automation for Membership Platform', client: 'Membership SaaS', duration: 'Ongoing',
    tagline: 'Zero manual follow-ups. Fully automated.',
    desc: 'Automated SMS onboarding, payment reminders, and win-back campaigns for a membership platform — all triggered by real events.',
    stack: ['Systeme.io', 'Zapier', 'Twilio', '.NET Core'],
    deliverables: ['Welcome & onboarding SMS sequence', 'Payment failure & renewal reminders', 'Win-back campaign for churned members'],
    results: ['Zero manual follow-ups required', 'Onboarding completion improved', 'Running live in production'],
  },
  {
    id: 'n8n-automation', category: 'Automation', status: 'delivered', number: '02',
    title: 'n8n Workflow Automation Hub', client: 'Operations Team', duration: '3 weeks',
    tagline: '15 hours a week back. Zero data entry.',
    desc: 'A network of n8n workflows replacing manual data movement between CRM, email, spreadsheets, and dashboards.',
    stack: ['n8n', 'REST APIs', 'Webhooks', 'JSON', '.NET Core'],
    deliverables: ['Multi-step workflows across 5 platforms', 'Real-time webhook-triggered data sync', 'Error handling with automatic retry'],
    results: ['~15 hours/week of manual work eliminated', 'Zero data sync errors post-launch', 'Full pipeline visibility dashboard'],
  },
  {
    id: 'twilio-platform', category: 'Communication', status: 'delivered', number: '03',
    title: 'Twilio Communication Platform', client: 'Customer-Facing Product', duration: '6 weeks',
    tagline: 'Voice + SMS from one place. Full visibility.',
    desc: 'A complete Twilio communication layer on top of an existing .NET Core backend.',
    stack: ['Twilio API', '.NET Core', 'React.js', 'WebSockets'],
    deliverables: ['Outbound SMS with delivery tracking', 'Inbound voice call routing & IVR', 'React monitoring dashboard'],
    results: ['Full communication layer live in 6 weeks', 'Real-time support team visibility', 'Voice + SMS from a single platform'],
  },
  {
    id: 'institute-management', category: 'Software', status: 'delivered', number: '04',
    title: 'Institute Management System', client: 'Education Institute', duration: '10 weeks',
    tagline: 'Four spreadsheets replaced by one system.',
    desc: 'A full-stack institute management system with Clean Architecture. Handles enrollment, attendance, fee collection, and timetables.',
    stack: ['ASP.NET Core', 'React.js', 'SQL Server', 'Entity Framework Core'],
    deliverables: ['Student enrollment & profile management', 'Attendance tracking with reporting', 'Fee collection & timetable module'],
    results: ['Replaced 4 separate spreadsheet systems', 'Admin workload cut significantly', 'Full audit trail for all records'],
  },
  {
    id: 'face-recognition', category: 'AI', status: 'delivered', number: '05',
    title: 'AI Face Recognition Security System', client: 'Physical Premises', duration: '5 weeks',
    tagline: 'No keys. No cards. Full audit trail.',
    desc: 'IoT-connected face recognition for physical access control. Camera captures faces at entry, Python backend identifies people in real time.',
    stack: ['Python', 'OpenCV', 'IoT Hardware', '.NET Core', 'SQL Server'],
    deliverables: ['Real-time face detection & ID', 'IoT door lock integration', 'Full access audit log'],
    results: ['Keys and access cards replaced', 'Every entry logged with confidence score', 'Unauthorized access alerts live'],
  },
]

const projectCategories = ['All', 'Communication', 'Automation', 'Software', 'AI']
const statusConfig = {
  live:      { label: 'Live & Supported', color: '#059669' },
  delivered: { label: 'Delivered',        color: '#0078d4' },
}

const skills = [
  { name: 'Twilio (SMS / Voice / WhatsApp)', level: 95 },
  { name: 'Zapier & Integration Platforms', level: 92 },
  { name: 'Digital Experience Platforms', level: 90 },
  { name: 'AI Agents & LLM Integration', level: 88 },
  { name: 'React & Node.js', level: 90 },
  { name: 'REST APIs & Webhooks', level: 93 },
]

const values = [
  { icon: 'chart', title: 'Proven Results, Not Promises', desc: '120+ projects shipped across healthcare, legal, SaaS, e-commerce, and logistics — each with documented outcomes tied to real business metrics.' },
  { icon: 'users', title: 'Small Team, Senior Execution', desc: 'No juniors, no outsourcing. You work directly with the specialists building your system — not account managers passing notes.' },
  { icon: 'globe', title: 'Built to Scale With You', desc: 'Architecture decisions made on day one account for where you are going, not just where you are. Systems built to grow without rebuilding.' },
  { icon: 'shield', title: 'Security & Compliance First', desc: 'HIPAA-aligned workflows, encrypted data pipelines, and audit-ready documentation — shipped as a standard, not an add-on.' },
]

const contactInfo = [
  { icon: 'email', label: 'Email', value: 'hello@zentro.io', href: 'mailto:hello@zentro.io' },
  { icon: 'calendar', label: 'Schedule a Meeting', value: 'Book a consultation', href: '#contact' },
  { icon: 'clock', label: 'Response Time', value: 'Within 24 business hours', href: null },
]

// ── Video player sub-component ────────────────────────
function VideoPlayer({ projectId }) {
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
      autoPlay
      muted
      playsInline
      loop
      aria-label="Project demo video"
    />
  )
}

// ── Contact form sub-component ────────────────────────
function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', project: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      await new Promise(res => setTimeout(res, 1200))
      setStatus('success')
      setForm({ name: '', email: '', company: '', project: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === 'success' ? (
        <motion.div className="form-success" role="alert"
          initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }} transition={{ type: 'spring', stiffness: 300, damping: 24 }}>
          <div className="icon-wrap success-icon"><Icon name="check" size={20} /></div>
          <div>
            <strong>Message received</strong>
            <p>A member of our solutions team will contact you within 24 business hours.</p>
          </div>
        </motion.div>
      ) : (
        <motion.form className="contact-form" onSubmit={handleSubmit} noValidate
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
              <input id="name" name="name" type="text" value={form.name} onChange={handleChange}
                required autoComplete="name" placeholder="John Smith" disabled={status === 'sending'} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Business Email <span aria-hidden="true">*</span></label>
              <input id="email" name="email" type="email" value={form.email} onChange={handleChange}
                required autoComplete="email" placeholder="john@company.com" disabled={status === 'sending'} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="company">Organization</label>
            <input id="company" name="company" type="text" value={form.company} onChange={handleChange}
              autoComplete="organization" placeholder="Your company name" disabled={status === 'sending'} />
          </div>
          <div className="form-group">
            <label htmlFor="project">Project Requirements <span aria-hidden="true">*</span></label>
            <textarea id="project" name="project" rows={5} value={form.project} onChange={handleChange}
              required placeholder="Describe your project requirements, goals, and timeline..."
              disabled={status === 'sending'} />
          </div>
          {status === 'error' && (
            <p className="form-error" role="alert">Something went wrong. Please try again or email us directly.</p>
          )}
          <MagneticButton>
            <motion.button type="submit" className="btn btn-primary btn-lg"
              disabled={status === 'sending'} whileTap={{ scale: 0.97 }}>
              {status === 'sending' ? 'Submitting…' : 'Submit Inquiry'}
            </motion.button>
          </MagneticButton>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

// ── Main single-page component ────────────────────────
export default function LandingPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  return (
    <main className="landing-page">

      {/* ══ HERO ══════════════════════════════════════ */}
      <section id="home">
        <HeroScrollLayer>
          <ParallaxOrbs />
          <FloatingLogos />
          <div className="container hero-grid">
            <motion.div className="hero-content" variants={heroStagger} initial="hidden" animate="visible">
              <motion.span className="hero-eyebrow" variants={heroItem}>Built for Startups & Scale-ups</motion.span>
              <h1>
                <TextReveal text="Automation, AI & Integrations That Ship Fast and Scale Smart" as="span" className="hero-title-reveal" immediate />
              </h1>
              <motion.p className="hero-desc" variants={heroItem}>
                Zentro helps growing companies replace manual work with intelligent automations,
                connected systems, and AI-powered workflows — so you move faster without adding headcount.
              </motion.p>
              <motion.div className="hero-actions" variants={heroItem}>
                <MagneticButton>
                  <a href="#contact" className="btn btn-primary btn-lg">Request a Demo</a>
                </MagneticButton>
                <MagneticButton strength={0.25}>
                  <a href="#portfolio" className="btn btn-outline btn-lg">View Case Studies</a>
                </MagneticButton>
              </motion.div>
            </motion.div>

            <motion.div className="hero-panel-wrap"
              initial={{ opacity: 0, y: 60, rotateX: 12 }} animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
              <TiltCard className="hero-panel" intensity={8}>
                <div className="hero-panel-header">
                  <span className="panel-dot active" /><span className="panel-dot" /><span className="panel-dot" />
                  <span className="panel-label">Platform Dashboard</span>
                </div>
                <div className="hero-panel-body">
                  <div className="panel-stat-row">
                    <motion.div className="panel-stat" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
                      <strong>4M+</strong><span>Tasks Automated</span>
                    </motion.div>
                    <motion.div className="panel-stat" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05 }}>
                      <strong>99.9%</strong><span>Uptime SLA</span>
                    </motion.div>
                  </div>
                  <div className="panel-chart">
                    {[45, 65, 55, 80, 70, 95].map((h, i) => (
                      <motion.div key={i} className={`chart-bar${i === 5 ? ' active' : ''}`} style={{ height: `${h}%` }}
                        initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} />
                    ))}
                  </div>
                  <div className="panel-tags">
                    {panelTags.map(({ slug, name }, i) => (
                      <motion.div key={slug} className="panel-tag-logo"
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3 + i * 0.08 }}>
                        <BrandLogo slug={slug} name={name} size={32} pill />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </div>

          <motion.div className="hero-scroll-hint" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
            <motion.span animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>Scroll to explore</motion.span>
            <motion.div className="hero-scroll-line" animate={{ scaleY: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }} />
          </motion.div>
        </HeroScrollLayer>
      </section>

      {/* ══ TRUST BAR ════════════════════════════════ */}
      <section className="trust-bar" aria-label="Technology partners">
        <div className="container trust-bar-inner">
          <Reveal direction="left" delay={0}>
            <span className="trust-bar-label">Powered by industry-leading platforms</span>
          </Reveal>
          <PartnerMarquee />
        </div>
      </section>

      {/* ══ STATS ════════════════════════════════════ */}
      <section className="stats-section section" aria-label="Company metrics">
        <div className="stats-section-bg" aria-hidden="true" />
        <div className="container">
          <motion.div className="stats-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
            {stats.map(({ value, label, icon }) => (
              <motion.div key={label} className="stat-item stat-glass" variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}>
                <div className="stat-icon-wrap"><Icon name={icon} size={28} /></div>
                <AnimatedCounter value={value} />
                <span>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ IMPACT SCROLL ════════════════════════════ */}
      <HorizontalScroll eyebrow="Impact at Scale" title="Numbers that speak louder than promises" items={impactCards} />

      {/* ══ TECH ORBIT ═══════════════════════════════ */}
      <TechOrbit />

      {/* ══ BENTO ════════════════════════════════════ */}
      <BentoShowcase />

      {/* ══ SOLUTIONS ════════════════════════════════ */}
      <section id="solutions" className="section section-alt solutions-section">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">Our Solutions</span>
              <h2><TextReveal text="End-to-End Enterprise Capabilities" as="span" /></h2>
              <p>Comprehensive technology solutions designed to modernize operations, accelerate growth, and deliver exceptional customer experiences.</p>
            </div>
          </Reveal>
          <motion.div className="solutions-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {solutions.map(({ icon, title, desc, slug }) => (
              <motion.div key={title} variants={staggerItem}>
                <motion.article className="solution-card card card-lift" variants={cardHover} initial="rest" whileHover="hover">
                  <div className="solution-card-head">
                    <div className="icon-wrap icon-wrap-lg"><Icon name={icon} size={28} /></div>
                    <BrandLogo slug={slug} size={40} pill />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <a href="#services" className="card-link">Learn more <Icon name="arrow" size={16} /></a>
                </motion.article>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ SERVICES ═════════════════════════════════ */}
      <section id="services" className="section services-section">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">What We Build</span>
              <h2>What We Automate and Build</h2>
              <p>Communication automation, workflow automation, custom software, and AI systems.</p>
            </div>
          </Reveal>
          <motion.div className="services-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
            {services.map(({ id, icon, number, title, tagline, desc, bullets, stack }) => (
              <motion.article key={id} id={id} className="service-card" variants={staggerItem}>
                <div className="service-card-top">
                  <div className="service-icon-wrap"><Icon name={icon} size={26} /></div>
                  <span className="service-number">{number}</span>
                </div>
                <div className="service-card-content">
                  <h2>{title}</h2>
                  <p className="service-tagline">{tagline}</p>
                  <p className="service-desc">{desc}</p>
                  <ul className="service-bullets">
                    {bullets.map(b => (
                      <li key={b}><Icon name="check" size={14} />{b}</li>
                    ))}
                  </ul>
                  <div className="service-stack">
                    {stack.map(s => <span key={s} className="stack-chip">{s}</span>)}
                  </div>
                </div>
                <div className="service-card-footer">
                  <a href="#contact" className="btn btn-primary service-cta-btn">Get a Quote</a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ PROCESS ══════════════════════════════════ */}
      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">How It Works</span>
              <h2>From first call to live system</h2>
              <p>Four steps. Fixed price. No surprises.</p>
            </div>
          </Reveal>
          <motion.div className="process-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            {process.map(({ step, title, desc, icon }) => (
              <motion.div key={step} className="process-card" variants={staggerItem}>
                <div className="process-step-num">{step}</div>
                <div className="process-icon"><Icon name={icon} size={20} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ PORTFOLIO ════════════════════════════════ */}
      <section id="portfolio" className="section">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">Case Studies</span>
              <h2>Proven across multiple deployments</h2>
              <p>Communication systems, automation pipelines, custom software, and AI — each one built, delivered, and documented.</p>
            </div>
          </Reveal>

          <LayoutGroup>
            <div className="filter-tabs" role="tablist" aria-label="Filter by category">
              {projectCategories.map(cat => (
                <button key={cat} role="tab" aria-selected={activeFilter === cat}
                  className={`filter-tab${activeFilter === cat ? ' active' : ''}`}
                  onClick={() => setActiveFilter(cat)}>
                  {activeFilter === cat && (
                    <motion.span className="filter-tab-bg" layoutId="filterActive"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }} />
                  )}
                  <span className="filter-tab-label">{cat}</span>
                </button>
              ))}
            </div>
          </LayoutGroup>

          <motion.div className="projects-list" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.05 }} key={activeFilter}>
            <AnimatePresence mode="popLayout">
              {filtered.map(({ id, number, title, client, duration, tagline, desc, stack, deliverables, results, status }) => (
                <motion.article key={id} id={id} layout variants={staggerItem}
                  exit={{ opacity: 0, y: 8, transition: { duration: 0.18 } }} className="project-item">
                  <div className="project-item-media">
                    <VideoPlayer projectId={id} />
                    <div className="project-item-badges">
                      <span className="project-status-badge" style={{ '--sc': statusConfig[status].color }}>
                        <span className="status-dot" />{statusConfig[status].label}
                      </span>
                      <span className="project-number-badge">{number}</span>
                    </div>
                  </div>
                  <div className="project-item-content">
                    <div className="project-item-header">
                      <div className="project-item-meta">
                        <span className="project-client-badge">{client}</span>
                        <span className="project-dur">{duration}</span>
                      </div>
                      <h2>{title}</h2>
                      <p className="project-tagline">{tagline}</p>
                    </div>
                    <div className="project-stack-row">
                      {stack.map(s => <span key={s} className="stack-chip">{s}</span>)}
                    </div>
                    <p className="project-desc">{desc}</p>
                    <div className="project-two-col">
                      <div className="project-col">
                        <h3>What Was Built</h3>
                        <ul>{deliverables.map(d => <li key={d}><Icon name="check" size={13} />{d}</li>)}</ul>
                      </div>
                      <div className="project-col project-col-results">
                        <h3>Outcome</h3>
                        <ul>{results.map(r => <li key={r}><Icon name="chart" size={13} />{r}</li>)}</ul>
                      </div>
                    </div>
                    <div className="project-item-footer">
                      <a href="#contact" className="btn btn-primary project-cta-btn">Build Something Similar</a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ══ WHY ZENTRO ═══════════════════════════════ */}
      <section className="section capabilities-section">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">Why Zentro</span>
              <h2>What makes us different</h2>
              <p>We're a lean team of senior builders who care about outcomes, not just deliverables.</p>
            </div>
          </Reveal>
          <motion.div className="capabilities-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {capabilities.map(({ icon, title, desc }, i) => (
              <motion.div key={title} className="capability-card" variants={staggerItem} whileHover={{ y: -4 }}>
                <span className="capability-card-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="icon-wrap icon-wrap-lg"><Icon name={icon} size={22} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ ABOUT ════════════════════════════════════ */}
      <section id="about" className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">About Zentro</span>
              <h2>The Startup's Technical Co-Pilot</h2>
              <p>A specialist technology studio that helps startups and scale-ups build automations, integrations, and AI systems.</p>
            </div>
          </Reveal>
          <div className="about-intro">
            <Reveal direction="left" className="about-text">
              <h2>Our Story</h2>
              <p>Zentro started from a simple observation: most growing companies are drowning in manual work that software should already be handling.</p>
              <p>We're a lean team of builders — developers, automation architects, and AI specialists — who partner directly with startups and scale-ups to replace that friction with systems that actually work.</p>
              <p>From HIPAA-compliant patient communication to AI lead qualification engines and Stripe-powered funnels generating millions — our work shows up in the metrics, not just the deliverables.</p>
              <MagneticButton>
                <a href="#contact" className="btn btn-primary" style={{ marginTop: '8px', display: 'inline-flex' }}>Work With Us</a>
              </MagneticButton>
            </Reveal>
            <Reveal direction="right" delay={120} className="about-skills card">
              <h2>Core Competencies</h2>
              <div className="skills-list">
                {skills.map(({ name, level }, i) => (
                  <motion.div key={name} className="skill-item" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                    <div className="skill-label"><span>{name}</span><span className="skill-pct">{level}%</span></div>
                    <div className="skill-bar" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={name}>
                      <motion.div className="skill-fill" initial={{ width: 0 }} whileInView={{ width: `${level}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ VALUES ═══════════════════════════════════ */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">Our Values</span>
              <h2>Why Organizations Choose Zentro</h2>
            </div>
          </Reveal>
          <motion.div className="values-grid" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
            {values.map(({ icon, title, desc }) => (
              <motion.div key={title} variants={staggerItem}>
                <motion.article className="value-card card card-lift" whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}>
                  <div className="icon-wrap"><Icon name={icon} size={22} /></div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </motion.article>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ TESTIMONIALS ═════════════════════════════ */}
      <section className="section section-alt testimonials-section">
        <div className="testimonials-bg" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">Client Success</span>
              <h2>What our clients say</h2>
              <p>Real words from the founders, operators, and teams we've worked with.</p>
            </div>
          </Reveal>
        </div>
        <div className="testimonials-marquee-wrap" aria-label="Client testimonials">
          <div className="testimonials-track">
            {[...testimonials, ...testimonials].map(({ quote, name, title, company, initials, industry, rating }, i) => (
              <blockquote key={i} className="testimonial-card">
                <div className="testimonial-card-top">
                  <span className="testimonial-industry">{industry}</span>
                  <div className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>
                    {Array.from({ length: rating }).map((_, j) => <Icon key={j} name="star" size={13} />)}
                  </div>
                </div>
                <div className="testimonial-quote-icon" aria-hidden="true"><Icon name="quote" size={24} /></div>
                <p>&ldquo;{quote}&rdquo;</p>
                <footer>
                  <div className="testimonial-avatar" aria-hidden="true">{initials}</div>
                  <div>
                    <strong>{name}</strong>
                    <span>{title}, {company}</span>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CONTACT ══════════════════════════════════ */}
      <section id="contact" className="section">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">Get In Touch</span>
              <h2>Let's Discuss Your Requirements</h2>
              <p>Connect with our solutions team to explore how Zentro can accelerate your digital transformation initiatives.</p>
            </div>
          </Reveal>
          <div className="contact-section">
            <Reveal direction="left" className="contact-info">
              <h2>Get in Touch</h2>
              <p>Schedule a complimentary consultation with our solutions architects. We'll assess your requirements and provide a transparent investment proposal.</p>
              <motion.div className="contact-methods" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {contactInfo.map(({ icon, label, value, href }) => (
                  <motion.div key={label} className="contact-method card" variants={staggerItem} whileHover={{ x: 6 }}>
                    <div className="icon-wrap"><Icon name={icon} size={20} /></div>
                    <div>
                      <span className="contact-method-label">{label}</span>
                      {href ? <a href={href} className="contact-method-value">{value}</a> : <span className="contact-method-value">{value}</span>}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              <MagneticButton>
                <a href="#contact" className="btn btn-primary btn-lg calendly-btn">Schedule a Consultation</a>
              </MagneticButton>
            </Reveal>
            <Reveal direction="right" delay={120} className="contact-form-wrap card">
              <h2>Request Information</h2>
              <p className="form-subtitle">Complete the form below and a member of our team will respond promptly.</p>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ════════════════════════════════ */}
      <section className="cta-band">
        <div className="cta-band-glow" aria-hidden="true" />
        <div className="container">
          <Reveal direction="scale">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              Ready to Transform Your Operations?
            </motion.h2>
            <p>Schedule a consultation with our solutions team to explore how Zentro can accelerate your digital transformation.</p>
            <div className="cta-actions">
              <MagneticButton>
                <a href="#contact" className="btn btn-primary btn-lg">Schedule a Consultation</a>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <a href="#services" className="btn btn-outline btn-lg">Explore Solutions</a>
              </MagneticButton>
            </div>
            <div className="cta-trust-row">
              <span><strong>5</strong> projects delivered</span>
              <span className="cta-trust-divider" aria-hidden="true" />
              <span><strong>99.9%</strong> uptime SLA</span>
              <span className="cta-trust-divider" aria-hidden="true" />
              <span><strong>3</strong> countries</span>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}
