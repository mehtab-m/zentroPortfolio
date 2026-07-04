import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '../components/Icons'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'
import { staggerContainer, staggerItem } from '../lib/motion'
import './Services.css'

const services = [
  {
    icon: 'code',
    title: 'Custom Web Applications',
    desc: 'Enterprise-grade web platforms built with modern architectures to solve complex business challenges at scale.',
    features: [
      'Full-stack React & Node.js development',
      'REST & GraphQL API architecture',
      'Database design & optimization',
      'Accessible, responsive UI/UX',
      'Performance-tuned & security-hardened',
    ],
  },
  {
    icon: 'phone',
    title: 'Communication Infrastructure',
    desc: 'Global voice, SMS, WhatsApp, and IVR systems powered by Twilio with enterprise reliability and compliance.',
    features: [
      'SMS & MMS campaign automation',
      'Voice calls & IVR systems',
      'WhatsApp Business messaging',
      'Appointment reminders & alerts',
      'Real-time webhook processing',
    ],
  },
  {
    icon: 'automation',
    title: 'Workflow Automation',
    desc: 'Intelligent integration pipelines connecting your entire technology ecosystem with zero manual overhead.',
    features: [
      'Multi-step Zapier workflows',
      'CRM & e-commerce integrations',
      'Cross-platform data synchronization',
      'Automated reporting pipelines',
      'Error handling & monitoring',
    ],
  },
  {
    icon: 'ai',
    title: 'AI & Intelligent Systems',
    desc: 'Production-ready AI agents for customer support, lead qualification, and automated decision-making.',
    features: [
      'Conversational AI chatbots',
      'Lead qualification agents',
      'Automated data extraction',
      'Natural language processing',
      'Workflow-integrated intelligence',
    ],
  },
  {
    icon: 'funnel',
    title: 'Digital Experience Platform',
    desc: 'Complete sales funnels, email marketing automation, membership sites, and CRM implementations.',
    features: [
      'High-converting sales funnels',
      'Email drip campaigns',
      'Membership site builds',
      'Upsell & downsell sequences',
      'Analytics & conversion tracking',
    ],
  },
]

const process = [
  { step: '01', title: 'Discovery & Assessment', desc: 'We analyze your current infrastructure, identify opportunities, and define measurable success criteria.' },
  { step: '02', title: 'Solution Architecture', desc: 'Our team delivers a comprehensive scope, timeline, and investment proposal with full transparency.' },
  { step: '03', title: 'Agile Implementation', desc: 'Iterative development with regular stakeholder reviews, ensuring alignment at every milestone.' },
  { step: '04', title: 'Launch & Optimization', desc: 'Deployment, performance validation, and ongoing managed services to maximize long-term value.' },
]

export default function Services() {
  return (
    <main className="services-page">
      <section className="page-hero">
        <div className="container">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Our Solutions
          </motion.span>
          <h1>
            <TextReveal text="Enterprise Technology Services" as="span" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Comprehensive automation, integration, and AI solutions engineered
            for organizations that demand reliability, security, and measurable ROI.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="services-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {services.map(({ icon, title, desc, features }) => (
              <motion.div key={title} variants={staggerItem}>
                <motion.article
                  className="service-card card card-lift"
                  whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
                >
                  <div className="icon-wrap">
                    <Icon name={icon} size={22} />
                  </div>
                  <h2>{title}</h2>
                  <p className="service-desc">{desc}</p>
                  <ul className="service-features">
                    {features.map(f => (
                      <li key={f}>
                        <Icon name="check" size={16} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn btn-outline service-cta">
                    Request Information
                  </Link>
                </motion.article>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section-alt process-section">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">Our Process</span>
              <h2>How We Deliver</h2>
              <p>A structured, transparent methodology from initial assessment through ongoing optimization.</p>
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
                whileHover={{ y: -6 }}
              >
                <motion.span
                  className="step-number"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring', stiffness: 200, damping: 15 }}
                >
                  {step}
                </motion.span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <Reveal direction="scale">
            <h2>Ready to Get Started?</h2>
            <p>Connect with our solutions team for a complimentary consultation and custom proposal.</p>
            <div className="cta-actions">
              <MagneticButton>
                <Link to="/contact" className="btn btn-primary btn-lg">Schedule a Consultation</Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
