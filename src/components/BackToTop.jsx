import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icon } from './Icons'
import './BackToTop.css'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="back-to-top"
          onClick={scrollTop}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08, y: -4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 22 }}
          aria-label="Back to top"
        >
          <Icon name="arrow" size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
