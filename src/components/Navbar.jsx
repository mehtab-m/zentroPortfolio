import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import './Navbar.css'

function ThemeDropdown() {
  const { themeId, setThemeId, themes } = useTheme()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const current = themes.find(t => t.id === themeId)

  useEffect(() => {
    function handler(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const accentColors = {
    enterprise: '#0078d4',
    midnight: '#3b9ddd',
    emerald: '#059669',
    violet: '#7c3aed',
    'slate-dark': '#f59e0b',
  }

  return (
    <div className="theme-dropdown" ref={ref}>
      <button className="theme-trigger" aria-label="Select theme" aria-haspopup="listbox"
        aria-expanded={open} onClick={() => setOpen(v => !v)}>
        <span className="theme-swatch" style={{ background: accentColors[themeId] }} aria-hidden="true" />
        <span className="theme-trigger-label">{current?.name}</span>
        <svg className={`theme-chevron${open ? ' open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul className="theme-menu" role="listbox" aria-label="Theme options"
            initial={{ opacity: 0, y: -8, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }} transition={{ duration: 0.15, ease: 'easeOut' }}>
            {themes.map(t => (
              <li key={t.id} role="option" aria-selected={t.id === themeId}
                className={`theme-option${t.id === themeId ? ' active' : ''}`}
                onClick={() => { setThemeId(t.id); setOpen(false) }}>
                <span className="theme-swatch" style={{ background: accentColors[t.id] }} aria-hidden="true" />
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
    { href: '#home',      label: 'Home' },
    { href: '#solutions', label: 'Solutions' },
    { href: '#services',  label: 'Services' },
    { href: '#portfolio', label: 'Case Studies' },
    { href: '#about',     label: 'Company' },
    { href: '#contact',   label: 'Contact' },
  ]

  const handleNav = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header className="navbar"
      initial={{ y: -100 }} animate={{ y: hidden ? -120 : 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}>

      <div className="navbar-top">
        <div className="container navbar-top-inner">
          <span className="navbar-tagline">Enterprise Automation &amp; Digital Solutions</span>
          <div className="navbar-top-links">
            <a href="#contact" onClick={e => handleNav(e, '#contact')}>Support</a>
            <a href="#contact" onClick={e => handleNav(e, '#contact')}>Contact Sales</a>
          </div>
        </div>
      </div>

      <div className={`navbar-main${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container navbar-inner">
          <a href="#home" className="navbar-logo" onClick={e => handleNav(e, '#home')}>
            <motion.span className="logo-mark" aria-hidden="true"
              whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }}>Z</motion.span>
            <span className="logo-text">Zentro</span>
          </a>

          <nav className={`navbar-links ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
            {links.map(({ href, label }) => (
              <a key={href} href={href} className="nav-link"
                onClick={e => handleNav(e, href)}>
                {label}
              </a>
            ))}
            {/* Desktop CTA */}
            <a href="#contact" className="btn btn-primary nav-cta nav-cta-desktop" onClick={e => handleNav(e, '#contact')}>
              Request a Demo
            </a>
            {/* Mobile: theme + CTA at bottom */}
            <div className="nav-theme-wrap">
              <ThemeDropdown />
              <a href="#contact" className="btn btn-primary nav-cta" onClick={e => handleNav(e, '#contact')}>
                Request a Demo
              </a>
            </div>
          </nav>

          <div className="navbar-right-controls">
            <ThemeDropdown />
            <button className={`hamburger ${menuOpen ? 'open' : ''}`}
              aria-label="Toggle navigation menu" aria-expanded={menuOpen}
              onClick={() => setMenuOpen(v => !v)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu-backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)} />
        )}
      </AnimatePresence>
    </motion.header>
  )
}
