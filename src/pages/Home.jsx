import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
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
import './Home.css'

const stats = [
  { value: '5', label: 'Projects Delivered', icon: 'building' },
  { value: '4M+', label: 'Automated Tasks / Month', icon: 'automation' },
  { value: '99.9%', label: 'Platform Uptime SLA', icon: 'shield' },
  { value: '3', label: 'Countries Served', icon: 'globe' },
]

const solutions = [
  {
    icon: 'phone',
    title: 'Communication Infrastructure',
    desc: 'Enterprise-grade Twilio integrations for voice, SMS, WhatsApp, and IVR systems with global reach and compliance.',
    slug: 'twilio',
  },
  {
    icon: 'automation',
    title: 'Workflow Automation',
    desc: 'Intelligent Zapier and custom integration pipelines that connect your entire technology stack seamlessly.',
    slug: 'zapier',
  },
  {
    icon: 'ai',
    title: 'AI & Intelligent Systems',
    desc: 'Production-ready AI agents for customer support, lead qualification, and automated decision-making at scale.',
    slug: 'openai',
  },
  {
    icon: 'funnel',
    title: 'Digital Experience Platform',
    desc: 'End-to-end funnel automation, CRM integration, and membership platforms built for conversion and retention.',
    slug: 'stripe',
  },
]

const capabilities = [
  {
    icon: 'chart',
    title: 'Outcomes Tied to Real Metrics',
    desc: 'We scope every project around specific KPIs — hours saved, leads qualified, revenue generated. If it can\'t be measured, we question whether it should be built.',
  },
  {
    icon: 'shield',
    title: 'Security Built In, Not Bolted On',
    desc: 'HIPAA-aligned flows, encrypted pipelines, and role-based access are part of every engagement — not an upsell. Regulated industries welcome.',
  },
  {
    icon: 'globe',
    title: 'Architecture That Scales',
    desc: 'Cloud-native, API-first builds designed to handle 10x your current volume without a rebuild. We think about growth before you have to.',
  },
  {
    icon: 'handshake',
    title: 'Direct Access to Senior Builders',
    desc: 'You work with the people writing the code and designing the systems — not account managers. Decisions get made fast.',
  },
  {
    icon: 'building',
    title: 'Cross-Industry Experience',
    desc: 'Healthcare, legal, SaaS, e-commerce, logistics, coaching — we\'ve shipped production systems across verticals and know the domain-specific tradeoffs.',
  },
]

const testimonials = [
  {
    quote: "Zentro built our patient communication system in 8 weeks. Missed appointments dropped 52% in the first month. The HIPAA-compliant workflow gave our compliance team full confidence from day one.",
    name: 'Dr. Priya Nair',
    title: 'Chief Digital Officer',
    company: 'HealthFirst Networks',
    initials: 'PN',
    industry: 'Healthcare',
    rating: 5,
  },
  {
    quote: "The AI lead qualification agent they shipped pays for itself every week. Our SDRs now only talk to warm, scored prospects. Pipeline quality jumped immediately and the team actually loves using it.",
    name: 'Marcus Webb',
    title: 'Head of Revenue',
    company: 'NovaSales Pro',
    initials: 'MW',
    industry: 'SaaS',
    rating: 5,
  },
  {
    quote: "We went from a chaotic mix of spreadsheets and email to a fully automated client portal in 10 weeks. Onboarding time went from 4 days to 90 minutes. Our clients noticed immediately.",
    name: 'Rachel Oduya',
    title: 'Managing Partner',
    company: 'Meridian Legal Partners',
    initials: 'RO',
    industry: 'Legal / Professional Services',
    rating: 5,
  },
  {
    quote: "Zentro connected Shopify, QuickBooks, and Klaviyo with 40+ Zapier workflows in four weeks. We recovered 18 hours a week and closed our monthly books in a single day instead of five.",
    name: 'Danny Cho',
    title: 'Operations Lead',
    company: 'BrightCart Commerce',
    initials: 'DC',
    industry: 'E-Commerce',
    rating: 5,
  },
  {
    quote: "$1.8M in 90 days from the funnel they built. More than the outcome, it was how they approached it — like product owners who actually wanted the launch to work, not just developers shipping tickets.",
    name: 'Simone Carter',
    title: 'Founder & CEO',
    company: 'Apex Coaching Group',
    initials: 'SC',
    industry: 'Online Education',
    rating: 5,
  },
  {
    quote: "Our drivers and customers both noticed the difference within the first week. Inbound 'where is my order' calls dropped 60%. The SMS flow Zentro built is now a core part of our operations.",
    name: 'Tariq Al-Rashid',
    title: 'Head of Operations',
    company: 'SwiftLogix Fleet',
    initials: 'TR',
    industry: 'Logistics',
    rating: 5,
  },
]

const panelTags = [
  { slug: 'twilio', name: 'Twilio' },
  { slug: 'zapier', name: 'Zapier' },
  { slug: 'openai', name: 'OpenAI' },
  { slug: 'microsoft-azure', name: 'Azure' },
]

const impactCards = [
  { slug: 'twilio', stat: '52%', label: 'Missed Appointments Reduced', desc: 'Healthcare client cut no-shows through automated Twilio SMS & WhatsApp reminders.' },
  { slug: 'openai', stat: '3.4×', label: 'Lead Qualification Rate', desc: 'Sales SaaS client multiplied qualified pipeline using a GPT-4o conversational agent.' },
  { slug: 'zapier', stat: '18h+', label: 'Weekly Hours Saved', desc: 'E-commerce brand reclaimed 18 hours per week by automating cross-platform data sync.' },
  { slug: 'google-cloud', stat: '18+', label: 'Countries Active', desc: 'Multi-region deployments serving clients in North America, Europe, Middle East & APAC.' },
  { slug: 'stripe', stat: '$1.8M', label: 'Revenue in 90 Days', desc: 'Online coaching brand launched a Stripe-powered funnel generating $1.8M in first quarter.' },
  { slug: 'microsoft-azure', stat: '99.9%', label: 'Platform Uptime', desc: 'Azure-hosted client portals and communication systems maintained across all engagements.' },
]

export default function Home() {
  return (
    <main className="home">
      <HeroScrollLayer>
        <ParallaxOrbs />
        <FloatingLogos />

        <div className="container hero-grid">
          <motion.div
            className="hero-content"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            <motion.span className="hero-eyebrow" variants={heroItem}>
              Built for Startups & Scale-ups
            </motion.span>
            <h1>
              <TextReveal
                text="Automation, AI & Integrations That Ship Fast and Scale Smart"
                as="span"
                className="hero-title-reveal"
                immediate
              />
            </h1>
            <motion.p className="hero-desc" variants={heroItem}>
              Zentro helps growing companies replace manual work with intelligent
              automations, connected systems, and AI-powered workflows — so you
              move faster without adding headcount.
            </motion.p>
            <motion.div className="hero-actions" variants={heroItem}>
              <MagneticButton>
                <Link to="/contact" className="btn btn-primary btn-lg">Request a Demo</Link>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <Link to="/portfolio" className="btn btn-outline btn-lg">View Case Studies</Link>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-panel-wrap"
            initial={{ opacity: 0, y: 60, rotateX: 12 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="hero-panel" intensity={8}>
              <div className="hero-panel-header">
                <span className="panel-dot active" />
                <span className="panel-dot" />
                <span className="panel-dot" />
                <span className="panel-label">Platform Dashboard</span>
              </div>
              <div className="hero-panel-body">
                <div className="panel-stat-row">
                  <motion.div
                    className="panel-stat"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <strong>4M+</strong>
                    <span>Tasks Automated</span>
                  </motion.div>
                  <motion.div
                    className="panel-stat"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.05 }}
                  >
                    <strong>99.9%</strong>
                    <span>Uptime SLA</span>
                  </motion.div>
                </div>
                <div className="panel-chart">
                  {[45, 65, 55, 80, 70, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      className={`chart-bar${i === 5 ? ' active' : ''}`}
                      style={{ height: `${h}%` }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.8 + i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    />
                  ))}
                </div>
                <div className="panel-tags">
                  {panelTags.map(({ slug, name }, i) => (
                    <motion.div
                      key={slug}
                      className="panel-tag-logo"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.3 + i * 0.08 }}
                    >
                      <BrandLogo slug={slug} name={name} size={32} pill />
                    </motion.div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        <motion.div
          className="hero-scroll-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            Scroll to explore
          </motion.span>
          <motion.div
            className="hero-scroll-line"
            animate={{ scaleY: [0.3, 1, 0.3] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          />
        </motion.div>
      </HeroScrollLayer>

      <section className="trust-bar" aria-label="Technology partners">
        <div className="container trust-bar-inner">
          <Reveal direction="left" delay={0}>
            <span className="trust-bar-label">Powered by industry-leading platforms</span>
          </Reveal>
          <PartnerMarquee />
        </div>
      </section>

      <section className="stats-section section" aria-label="Company metrics">
        <div className="stats-section-bg" aria-hidden="true" />
        <div className="container">
          <motion.div
            className="stats-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {stats.map(({ value, label, icon }) => (
              <motion.div
                key={label}
                className="stat-item stat-glass"
                variants={staggerItem}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              >
                <div className="stat-icon-wrap">
                  <Icon name={icon} size={28} />
                </div>
                <AnimatedCounter value={value} />
                <span>{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <HorizontalScroll
        eyebrow="Impact at Scale"
        title="Numbers that speak louder than promises"
        items={impactCards}
      />

      <TechOrbit />

      <BentoShowcase />

      <section className="section section-alt solutions-section">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">Our Solutions</span>
              <h2>
                <TextReveal text="End-to-End Enterprise Capabilities" as="span" />
              </h2>
              <p>
                Comprehensive technology solutions designed to modernize operations,
                accelerate growth, and deliver exceptional customer experiences.
              </p>
            </div>
          </Reveal>
          <motion.div
            className="solutions-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {solutions.map(({ icon, title, desc, slug }) => (
              <motion.div key={title} variants={staggerItem}>
                <motion.article
                  className="solution-card card card-lift"
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <div className="solution-card-head">
                    <div className="icon-wrap icon-wrap-lg">
                      <Icon name={icon} size={28} />
                    </div>
                    <BrandLogo slug={slug} size={40} pill />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <Link to="/services" className="card-link">
                    Learn more <Icon name="arrow" size={16} />
                  </Link>
                </motion.article>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section capabilities-section">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">Why Zentro</span>
              <h2>What makes us different</h2>
              <p>
                We're a lean team of senior builders who care about outcomes,
                not just deliverables. Here's how we work.
              </p>
            </div>
          </Reveal>
          <motion.div
            className="capabilities-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {capabilities.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="capability-card"
                variants={staggerItem}
                whileHover={{ y: -4 }}
              >
                <span className="capability-card-num">{String(i + 1).padStart(2, '0')}</span>
                <div className="icon-wrap icon-wrap-lg">
                  <Icon name={icon} size={22} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section-alt testimonials-section">
        <div className="testimonials-bg" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">Client Success</span>
              <h2>What our clients say</h2>
              <p>
                Real words from the founders, operators, and teams we've worked with.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Marquee — duplicated for seamless loop */}
        <div className="testimonials-marquee-wrap" aria-label="Client testimonials">
          <div className="testimonials-track">
            {[...testimonials, ...testimonials].map(({ quote, name, title, company, initials, industry, rating }, i) => (
              <blockquote key={i} className="testimonial-card">
                <div className="testimonial-card-top">
                  <span className="testimonial-industry">{industry}</span>
                  <div className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>
                    {Array.from({ length: rating }).map((_, j) => (
                      <Icon key={j} name="star" size={13} />
                    ))}
                  </div>
                </div>
                <div className="testimonial-quote-icon" aria-hidden="true">
                  <Icon name="quote" size={24} />
                </div>
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

      <section className="cta-band">
        <div className="cta-band-glow" aria-hidden="true" />
        <div className="container">
          <Reveal direction="scale">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Ready to Transform Your Operations?
            </motion.h2>
            <p>
              Schedule a consultation with our solutions team to explore how Zentro
              can accelerate your digital transformation initiatives.
            </p>
            <div className="cta-actions">
              <MagneticButton>
                <Link to="/contact" className="btn btn-primary btn-lg">Schedule a Consultation</Link>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <Link to="/services" className="btn btn-outline btn-lg">Explore Solutions</Link>
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
