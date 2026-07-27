import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../lib/motion'
import './Footer.css'

const socialLinks = [
  { label: 'X', href: '#' },
  { label: 'in', href: '#' },
  { label: 'gh', href: '#' },
]

function scrollTo(href) {
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-main">
        <motion.div className="container footer-grid"
          variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>

          <motion.div className="footer-brand" variants={staggerItem}>
            <a href="#home" className="footer-logo" onClick={e => { e.preventDefault(); scrollTo('#home') }}>
              <span className="logo-mark" aria-hidden="true">Z</span>
              <span className="logo-text">Zentro</span>
            </a>
            <p>We help startups and scale-ups replace manual work with intelligent automations, connected systems, and AI-powered workflows.</p>
            <div className="footer-social" aria-label="Social media links">
              {socialLinks.map(({ label, href }) => (
                <a key={label} href={href} className="footer-social-link" aria-label={label}>{label}</a>
              ))}
            </div>
          </motion.div>

          <motion.div className="footer-col" variants={staggerItem}>
            <h3>Solutions</h3>
            <nav aria-label="Solutions">
              <a href="#services" onClick={e => { e.preventDefault(); scrollTo('#services') }}>Workflow Automation</a>
              <a href="#services" onClick={e => { e.preventDefault(); scrollTo('#services') }}>Communication Systems</a>
              <a href="#services" onClick={e => { e.preventDefault(); scrollTo('#services') }}>AI &amp; Agents</a>
              <a href="#services" onClick={e => { e.preventDefault(); scrollTo('#services') }}>Web Applications</a>
            </nav>
          </motion.div>

          <motion.div className="footer-col" variants={staggerItem}>
            <h3>Company</h3>
            <nav aria-label="Company">
              <a href="#about" onClick={e => { e.preventDefault(); scrollTo('#about') }}>About Us</a>
              <a href="#portfolio" onClick={e => { e.preventDefault(); scrollTo('#portfolio') }}>Case Studies</a>
              <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>Careers</a>
              <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>Partners</a>
            </nav>
          </motion.div>

          <motion.div className="footer-col" variants={staggerItem}>
            <h3>Get in Touch</h3>
            <nav aria-label="Contact">
              <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>Request a Demo</a>
              <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>Sales Inquiry</a>
              <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>Support</a>
              <a href="mailto:hello@zentro.io">hello@zentro.io</a>
            </nav>
          </motion.div>

        </motion.div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {year} Zentro Technologies. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>Privacy</a>
            <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>Terms</a>
            <a href="#contact" onClick={e => { e.preventDefault(); scrollTo('#contact') }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
