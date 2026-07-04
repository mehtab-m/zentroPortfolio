import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { staggerContainer, staggerItem } from '../lib/motion'
import './Footer.css'

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
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="footer-brand" variants={staggerItem}>
            <Link to="/" className="footer-logo">
              <span className="logo-mark" aria-hidden="true">Z</span>
              <span className="logo-text">Zentro</span>
            </Link>
            <p>
              Enterprise-grade automation, cloud integrations, and intelligent
              digital solutions for organizations worldwide.
            </p>
          </motion.div>

          <motion.div className="footer-col" variants={staggerItem}>
            <h3>Solutions</h3>
            <nav aria-label="Solutions">
              <Link to="/services">Cloud Integration</Link>
              <Link to="/services">Automation Platform</Link>
              <Link to="/services">AI &amp; Intelligence</Link>
              <Link to="/services">Communication Systems</Link>
            </nav>
          </motion.div>

          <motion.div className="footer-col" variants={staggerItem}>
            <h3>Company</h3>
            <nav aria-label="Company">
              <Link to="/about">About Us</Link>
              <Link to="/portfolio">Case Studies</Link>
              <Link to="/contact">Careers</Link>
              <Link to="/contact">Partners</Link>
            </nav>
          </motion.div>

          <motion.div className="footer-col" variants={staggerItem}>
            <h3>Contact</h3>
            <nav aria-label="Contact">
              <Link to="/contact">Request a Demo</Link>
              <Link to="/contact">Sales Inquiry</Link>
              <Link to="/contact">Technical Support</Link>
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
            <Link to="/contact">Terms of Service</Link>
            <Link to="/contact">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
