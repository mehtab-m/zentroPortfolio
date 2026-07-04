import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from '../components/Icons'
import Reveal from '../components/Reveal'
import TextReveal from '../components/TextReveal'
import MagneticButton from '../components/MagneticButton'
import { staggerContainer, staggerItem } from '../lib/motion'
import './Contact.css'

const contactInfo = [
  { icon: 'email', label: 'Email', value: 'hello@zentro.io', href: 'mailto:hello@zentro.io' },
  { icon: 'calendar', label: 'Schedule a Meeting', value: 'Book a consultation', href: '#' },
  { icon: 'clock', label: 'Response Time', value: 'Within 24 business hours', href: null },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', project: '' })
  const [status, setStatus] = useState(null)

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
    <main className="contact-page">
      <section className="page-hero">
        <div className="container">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Contact Us
          </motion.span>
          <h1>
            <TextReveal text="Let's Discuss Your Requirements" as="span" />
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Connect with our solutions team to explore how Zentro can accelerate
            your digital transformation initiatives.
          </motion.p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-section">
          <Reveal direction="left" className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Schedule a complimentary consultation with our solutions architects.
              We&apos;ll assess your requirements, outline a recommended approach,
              and provide a transparent investment proposal.
            </p>

            <motion.div
              className="contact-methods"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map(({ icon, label, value, href }) => (
                <motion.div key={label} className="contact-method card" variants={staggerItem} whileHover={{ x: 6 }}>
                  <div className="icon-wrap">
                    <Icon name={icon} size={20} />
                  </div>
                  <div>
                    <span className="contact-method-label">{label}</span>
                    {href ? (
                      <a href={href} className="contact-method-value">{value}</a>
                    ) : (
                      <span className="contact-method-value">{value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <MagneticButton>
              <a href="#" className="btn btn-primary btn-lg calendly-btn">
                Schedule a Consultation
              </a>
            </MagneticButton>
          </Reveal>

          <Reveal direction="right" delay={120} className="contact-form-wrap card">
            <h2>Request Information</h2>
            <p className="form-subtitle">Complete the form below and a member of our team will respond promptly.</p>

            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  className="form-success"
                  role="alert"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                >
                  <div className="icon-wrap success-icon">
                    <Icon name="check" size={20} />
                  </div>
                  <div>
                    <strong>Message received</strong>
                    <p>Thank you for your inquiry. A member of our solutions team will contact you within 24 business hours.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  className="contact-form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name <span aria-hidden="true">*</span></label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        placeholder="John Smith"
                        disabled={status === 'sending'}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Business Email <span aria-hidden="true">*</span></label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        autoComplete="email"
                        placeholder="john@company.com"
                        disabled={status === 'sending'}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Organization</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={form.company}
                      onChange={handleChange}
                      autoComplete="organization"
                      placeholder="Your company name"
                      disabled={status === 'sending'}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="project">Project Requirements <span aria-hidden="true">*</span></label>
                    <textarea
                      id="project"
                      name="project"
                      rows={5}
                      value={form.project}
                      onChange={handleChange}
                      required
                      placeholder="Describe your project requirements, goals, and timeline..."
                      disabled={status === 'sending'}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="form-error" role="alert">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <MagneticButton>
                    <motion.button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={status === 'sending'}
                      whileTap={{ scale: 0.97 }}
                    >
                      {status === 'sending' ? 'Submitting…' : 'Submit Inquiry'}
                    </motion.button>
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
