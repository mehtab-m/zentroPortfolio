import { motion, useScroll, useTransform } from 'framer-motion'
import BrandLogo from './BrandLogo'
import { heroFloatingLogos } from '../data/partners'
import './FloatingLogos.css'

export default function FloatingLogos() {
  const { scrollY } = useScroll()
  const layerY = useTransform(scrollY, [0, 600], [0, 120])
  const layerOpacity = useTransform(scrollY, [0, 400], [1, 0.3])

  return (
    <motion.div
      className="floating-logos"
      style={{ y: layerY, opacity: layerOpacity }}
      aria-hidden="true"
    >
      {heroFloatingLogos.map(({ slug, size, delay, duration, rotate, ...pos }) => (
        <motion.div
          key={slug}
          className="floating-logo-item"
          style={pos}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 + delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="floating-logo-inner"
            animate={{
              y: [0, -14, 0, 10, 0],
              x: [0, 8, 0, -6, 0],
              rotate: [rotate, rotate + 6, rotate, rotate - 4, rotate],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.12 }}
          >
            <BrandLogo slug={slug} size={size} pill />
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
