import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

function ThemeDropdown() {
  const { themeId, setThemeId, themes } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = themes.find(t => t.id === themeId)

  // Close on outside click
  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Theme accent color dots
  const accentColors = {
    enterprise: '#0078d4',
    midnight: '#3b9ddd',
    emerald: '#059669',
    violet: '#7c3aed',
    'slate-dark': '#f59e0b',
  }

  return (
    <div className="theme-dropdown" ref={ref}>
      <button
        className="theme-trigger"
        aria-label="Select theme"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span
          className="theme-swatch"
          style={{ background: accentColors[themeId] }}
          aria-hidden="true"
        />
        <span className="theme-trigger-label">{current?.name}</span>
        <svg
          className={`theme-chevron${open ? ' open' : ''}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          aria-hidden="true"
        >
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            className="theme-menu"
            role="listbox"
            aria-label="Theme options"
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          >
            {themes.map(t => (
              <li
                key={t.id}
                role="option"
                aria-selected={t.id === themeId}
                className={`theme-option${t.id === themeId ? ' active' : ''}`}
                onClick={() => { setThemeId(t.id); setOpen(false) }}
              >
                <span
                  className="theme-swatch"
                  style={{ background: accentColors[t.id] }}
                  aria-hidden="true"
                />
                {t.name}
                {t.id === themeId && (
                  <svg className="theme-check" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  )
}

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
            <div className="nav-theme-wrap">
              <ThemeDropdown />
            </div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="btn btn-primary nav-cta" onClick={() => setMenuOpen(false)}>
                Request a Demo
              </Link>
            </motion.div>
          </nav>

          <div className="navbar-right-controls">
            <ThemeDropdown />
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
