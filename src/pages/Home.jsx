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
  { value: '500+', label: 'Enterprise Deployments', icon: 'building' },
  { value: '10M+', label: 'Automated Transactions / Month', icon: 'automation' },
  { value: '99.9%', label: 'Platform Uptime SLA', icon: 'shield' },
  { value: '40+', label: 'Countries Served', icon: 'globe' },
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
    title: 'Measurable Business Outcomes',
    desc: 'Every engagement is tied to KPIs — reduced operational costs, increased conversion, and improved customer satisfaction.',
  },
  {
    icon: 'shield',
    title: 'Enterprise Security & Compliance',
    desc: 'SOC 2-aligned practices, encrypted data pipelines, and audit-ready documentation for regulated industries.',
  },
  {
    icon: 'globe',
    title: 'Global Scale Architecture',
    desc: 'Cloud-native solutions designed for multi-region deployment, high availability, and elastic scaling.',
  },
  {
    icon: 'handshake',
    title: 'Dedicated Partnership Model',
    desc: 'From strategy through deployment and ongoing optimization — a single team accountable for your success.',
  },
  {
    icon: 'building',
    title: 'Industry Expertise',
    desc: 'Proven experience across healthcare, finance, e-commerce, SaaS, and professional services verticals.',
  },
]

const testimonials = [
  {
    quote: 'Zentro transformed our customer communication infrastructure. Their Twilio and automation platform reduced support volume by 60% while improving response times across all channels.',
    name: 'Sarah Mitchell',
    title: 'VP of Operations',
    company: 'Global Commerce Solutions',
    initials: 'SM',
    industry: 'E-Commerce',
    rating: 5,
  },
  {
    quote: 'The AI agent deployment exceeded our expectations. We achieved 3x lead qualification rates with enterprise-grade reliability and full integration into our existing CRM stack.',
    name: 'David Chen',
    title: 'Chief Technology Officer',
    company: 'TechFlow Enterprises',
    initials: 'DC',
    industry: 'SaaS',
    rating: 5,
  },
  {
    quote: 'Zentro delivered a complete digital experience platform in record time. The automation architecture alone saves our team 20+ hours per week with measurable ROI from day one.',
    name: 'Maria Torres',
    title: 'Director of Digital Strategy',
    company: 'GrowthPath International',
    initials: 'MT',
    industry: 'Professional Services',
    rating: 5,
  },
  {
    quote: 'Their Azure and cloud integration expertise helped us migrate 12 legacy systems without downtime. We cut infrastructure costs by 35% in the first quarter alone.',
    name: 'James Okonkwo',
    title: 'Head of Infrastructure',
    company: 'FinServe Global',
    initials: 'JO',
    industry: 'Finance',
    rating: 5,
  },
  {
    quote: 'From discovery to go-live in six weeks — Zentro built our omnichannel patient communication system with HIPAA-compliant workflows that our clinical teams actually love using.',
    name: 'Dr. Emily Hartwell',
    title: 'Chief Digital Officer',
    company: 'MedBridge Health',
    initials: 'EH',
    industry: 'Healthcare',
    rating: 5,
  },
  {
    quote: 'The Stripe and funnel integration Zentro built generated $2.2M in new revenue within 90 days. Their team thinks like product owners, not just developers.',
    name: 'Alex Rivera',
    title: 'CEO',
    company: 'ScaleUp Ventures',
    initials: 'AR',
    industry: 'Growth & VC',
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
  { slug: 'twilio', stat: '60%', label: 'Support Volume Reduced', desc: 'Average reduction in customer support tickets after AI & automation deployment.' },
  { slug: 'openai', stat: '3×', label: 'Lead Qualification', desc: 'Increase in qualified leads through intelligent conversational AI systems.' },
  { slug: 'zapier', stat: '20h+', label: 'Weekly Time Saved', desc: 'Operational hours reclaimed per team through workflow automation.' },
  { slug: 'google-cloud', stat: '40+', label: 'Global Markets', desc: 'Countries served with multi-region cloud infrastructure and compliance.' },
  { slug: 'stripe', stat: '$2.2M', label: 'Revenue Generated', desc: 'Documented revenue impact from digital experience platform launches.' },
  { slug: 'microsoft-azure', stat: '99.9%', label: 'Platform Uptime', desc: 'Enterprise SLA maintained across mission-critical communication systems.' },
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
              Trusted by Global Organizations
            </motion.span>
            <h1>
              <TextReveal
                text="Enterprise Automation & Digital Solutions for the Modern Organization"
                as="span"
                className="hero-title-reveal"
                immediate
              />
            </h1>
            <motion.p className="hero-desc" variants={heroItem}>
              Zentro delivers scalable cloud integrations, intelligent automation,
              and AI-powered systems that drive operational excellence and measurable
              business growth for enterprises worldwide.
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
                    <strong>10M+</strong>
                    <span>Messages Processed</span>
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
              <h2>Built for Enterprise Standards</h2>
              <p>
                We combine deep technical expertise with a business-first approach
                to deliver solutions that meet the demands of global organizations.
              </p>
            </div>
          </Reveal>
          <motion.div
            className="capabilities-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {capabilities.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="capability-item"
                variants={staggerItem}
                whileHover={{ x: 8, backgroundColor: 'var(--surface)' }}
              >
                <motion.div
                  className="capability-index"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  {String(i + 1).padStart(2, '0')}
                </motion.div>
                <div className="icon-wrap icon-wrap-lg">
                  <Icon name={icon} size={26} />
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
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
              <h2>Trusted by Industry Leaders</h2>
              <p>
                Real outcomes from organizations that partnered with Zentro to
                modernize operations, automate workflows, and scale globally.
              </p>
            </div>
          </Reveal>
          <motion.div
            className="testimonials-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {testimonials.map(({ quote, name, title, company, initials, industry, rating }) => (
              <motion.div key={name} variants={staggerItem}>
                <motion.blockquote
                  className="testimonial-card card"
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                >
                  <div className="testimonial-card-top">
                    <span className="testimonial-industry">{industry}</span>
                    <div className="testimonial-stars" aria-label={`${rating} out of 5 stars`}>
                      {Array.from({ length: rating }).map((_, i) => (
                        <Icon key={i} name="star" size={16} />
                      ))}
                    </div>
                  </div>
                  <div className="testimonial-quote-icon" aria-hidden="true">
                    <Icon name="quote" size={32} />
                  </div>
                  <p>&ldquo;{quote}&rdquo;</p>
                  <footer>
                    <motion.div
                      className="testimonial-avatar"
                      aria-hidden="true"
                    >
                      {initials}
                    </motion.div>
                    <div>
                      <strong>{name}</strong>
                      <span>{title}, {company}</span>
                    </div>
                  </footer>
                </motion.blockquote>
              </motion.div>
            ))}
          </motion.div>
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
              <span><strong>500+</strong> deployments</span>
              <span className="cta-trust-divider" aria-hidden="true" />
              <span><strong>99.9%</strong> uptime SLA</span>
              <span className="cta-trust-divider" aria-hidden="true" />
              <span><strong>40+</strong> countries</span>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
