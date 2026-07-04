import { motion } from 'framer-motion'
import { directionMap, springSoft, viewportOnce } from '../lib/motion'

export default function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  as = 'div',
  once = true,
}) {
  const MotionTag = motion[as] || motion.div
  const variants = directionMap[direction] || directionMap.up

  return (
    <MotionTag
      className={className || undefined}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportOnce, once }}
      variants={{
        hidden: variants.hidden,
        visible: {
          ...variants.visible,
          transition: { ...springSoft, delay: delay / 1000 },
        },
      }}
    >
      {children}
    </MotionTag>
  )
}
