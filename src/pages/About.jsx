import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Icon } from '../components/Icons'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'
import { staggerContainer, staggerItem } from '../lib/motion'
import './About.css'

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

export default function About() {
  return (
    <main className="about-page">
      <section className="page-hero">
        <div className="container">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            About Zentro
          </motion.span>
          <h1>
            <TextReveal text="The Startup's Technical Co-Pilot" as="span" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Zentro is a specialist technology studio that helps startups and
            scale-ups build the automations, integrations, and AI systems that
            let them move faster with leaner teams.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container about-intro">
          <Reveal direction="left" className="about-text">
            <h2>Our Story</h2>
            <p>
              Zentro started from a simple observation: most growing companies are
              drowning in manual work that software should already be handling. Missed
              follow-ups, disconnected tools, repeat data entry, and hours lost to tasks
              that should run automatically.
            </p>
            <p>
              We're a lean team of builders — developers, automation architects, and
              AI specialists — who partner directly with startups and scale-ups to
              replace that friction with systems that actually work. No large agency
              overhead. No juniors. Just senior people who care about outcomes.
            </p>
            <p>
              From HIPAA-compliant patient communication to AI lead qualification engines
              and Stripe-powered funnels generating millions — our work shows up in the
              metrics, not just the deliverables.
            </p>
            <MagneticButton>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '8px', display: 'inline-flex' }}>
                Work With Us
              </Link>
            </MagneticButton>
          </Reveal>

          <Reveal direction="right" delay={120} className="about-skills card">
            <h2>Core Competencies</h2>
            <div className="skills-list">
              {skills.map(({ name, level }, i) => (
                <motion.div
                  key={name}
                  className="skill-item"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="skill-label">
                    <span>{name}</span>
                    <span className="skill-pct">{level}%</span>
                  </div>
                  <div className="skill-bar" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={name}>
                    <motion.div
                      className="skill-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <Reveal>
            <div className="section-header center">
              <span className="section-eyebrow">Our Values</span>
              <h2>Why Organizations Choose Zentro</h2>
            </div>
          </Reveal>
          <motion.div
            className="values-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {values.map(({ icon, title, desc }) => (
              <motion.div key={title} variants={staggerItem}>
                <motion.article
                  className="value-card card card-lift"
                  whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
                >
                  <div className="icon-wrap">
                    <Icon name={icon} size={22} />
                  </div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </motion.article>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <Reveal direction="scale">
            <h2>Ready to Build Something Exceptional?</h2>
            <p>Schedule a consultation with our solutions team to discuss your requirements.</p>
            <div className="cta-actions">
              <MagneticButton>
                <Link to="/contact" className="btn btn-primary btn-lg">Schedule a Consultation</Link>
              </MagneticButton>
              <MagneticButton strength={0.25}>
                <Link to="/portfolio" className="btn btn-outline btn-lg">View Case Studies</Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
