import { motion } from 'framer-motion'
import { directionMap, springSoft } from '../lib/motion'

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
      // amount: 0 means trigger as soon as ANY pixel is visible
      // margin: positive so it fires slightly before entering viewport
      viewport={{ once, amount: 0, margin: '0px 0px 40px 0px' }}
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
