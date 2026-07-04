import { motion } from 'framer-motion'
import { ease } from '../lib/motion'

const motionTags = {
  div: motion.div,
  span: motion.span,
  section: motion.section,
  article: motion.article,
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
}

export default function TextReveal({
  text,
  as = 'span',
  className = '',
  delay = 0,
  splitBy = 'word',
  immediate = false,
}) {
  const parts = splitBy === 'char'
    ? text.split('')
    : text.split(' ')

  const MotionTag = motionTags[as] || motion.span

  return (
    <MotionTag
      className={`text-reveal ${className}`}
      initial="hidden"
      {...(immediate
        ? { animate: 'visible' }
        : { whileInView: 'visible', viewport: { once: true, amount: 0.6 } })}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: splitBy === 'char' ? 0.02 : 0.06, delayChildren: delay },
        },
      }}
    >
      {parts.map((part, i) => (
        <span key={`${part}-${i}`} className="text-reveal-mask">
          <motion.span
            className="text-reveal-inner"
            variants={{
              hidden: { y: '110%', opacity: 0, rotateX: -40 },
              visible: {
                y: '0%',
                opacity: 1,
                rotateX: 0,
                transition: { duration: 0.65, ease },
              },
            }}
          >
            {part}{splitBy === 'word' && i < parts.length - 1 ? '\u00A0' : ''}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}
