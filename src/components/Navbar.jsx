import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const prev = scrollY.getPrevious() ?? 0
    setScrolled(latest > 8)
    if (latest > 400) {
      setHidden(latest > prev && latest > 500)
    } else {
      setHidden(false)
    }
  })

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Solutions' },
    { to: '/portfolio', label: 'Case Studies' },
    { to: '/about', label: 'Company' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <motion.header
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: hidden ? -120 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="navbar-top">
        <div className="container navbar-top-inner">
          <span className="navbar-tagline">Enterprise Automation &amp; Digital Solutions</span>
          <div className="navbar-top-links">
            <Link to="/contact">Support</Link>
            <Link to="/contact">Contact Sales</Link>
          </div>
        </div>
      </div>

      <div className={`navbar-main${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
            <motion.span
              className="logo-mark"
              aria-hidden="true"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            >
              Z
            </motion.span>
            <span className="logo-text">Zentro</span>
          </Link>

          <nav className={`navbar-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {links.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
                Request a Demo
              </Link>
            </motion.div>
          </nav>

          <button
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(v => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </motion.header>
  )
}
