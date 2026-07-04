export const spring = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 0.8,
}

export const springSnappy = {
  type: 'spring',
  stiffness: 260,
  damping: 26,
}

export const springSoft = {
  type: 'spring',
  stiffness: 80,
  damping: 18,
  mass: 1,
}

export const ease = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export const fadeDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { opacity: 1, y: 0 },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0 },
}

export const fadeRight = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0 },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1 },
}

export const directionMap = {
  up: fadeUp,
  down: fadeDown,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const staggerItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
}

export const pageVariants = {
  initial: { opacity: 0, y: 16, filter: 'blur(6px)' },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.5, ease },
  },
  exit: {
    opacity: 0,
    y: -12,
    filter: 'blur(4px)',
    transition: { duration: 0.35, ease },
  },
}

export const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

export const heroItem = {
  hidden: { opacity: 0, y: 36, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease },
  },
}

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.01,
    transition: springSnappy,
  },
}

export const viewportOnce = { once: true, amount: 0.2, margin: '0px 0px -60px 0px' }
