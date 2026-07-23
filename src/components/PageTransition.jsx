import { useLocation } from 'react-router-dom'

// Simple CSS-based page transition.
// Using a key on the wrapper re-mounts the div on every route change,
// which re-triggers the CSS pageFadeIn animation.
// No framer-motion AnimatePresence needed — avoids the production bug
// where AnimatePresence mode="wait" held children at opacity:0 during
// the exit phase, permanently preventing animated cards from showing.
export default function PageTransition({ children }) {
  const { pathname } = useLocation()
  return (
    <div key={pathname} className="page-transition">
      {children}
    </div>
  )
}
