import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../lib/motion'
import './Footer.css'

const socialLinks = [
  { label: 'X', href: '#' },
  { label: 'in', href: '#' },
  { label: 'gh', href: '#' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-main">
        <motion.div
          className="container footer-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* Brand */}
          <motion.div className="footer-brand" variants={staggerItem}>
            <Link to="/" className="footer-logo">
              <span className="logo-mark" aria-hidden="true">Z</span>
              <span className="logo-text">Zentro</span>
            </Link>
            <p>
              We help startups and scale-ups replace manual work with intelligent
              automations, connected systems, and AI-powered workflows.
            </p>
            <div className="footer-social" aria-label="Social media links">
              {socialLinks.map(({ label, href }) => (
                <a key={label} href={href} className="footer-social-link" aria-label={label}>
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div className="footer-col" variants={staggerItem}>
            <h3>Solutions</h3>
            <nav aria-label="Solutions">
              <Link to="/services">Workflow Automation</Link>
              <Link to="/services">Communication Systems</Link>
              <Link to="/services">AI &amp; Agents</Link>
              <Link to="/services">Web Applications</Link>
            </nav>
          </motion.div>

          {/* Company */}
          <motion.div className="footer-col" variants={staggerItem}>
            <h3>Company</h3>
            <nav aria-label="Company">
              <Link to="/about">About Us</Link>
              <Link to="/portfolio">Case Studies</Link>
              <Link to="/contact">Careers</Link>
              <Link to="/contact">Partners</Link>
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div className="footer-col" variants={staggerItem}>
            <h3>Get in Touch</h3>
            <nav aria-label="Contact">
              <Link to="/contact">Request a Demo</Link>
              <Link to="/contact">Sales Inquiry</Link>
              <Link to="/contact">Support</Link>
              <a href="mailto:hello@zentro.io">hello@zentro.io</a>
            </nav>
          </motion.div>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>&copy; {year} Zentro Technologies. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/contact">Privacy</Link>
            <Link to="/contact">Terms</Link>
            <Link to="/contact">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
