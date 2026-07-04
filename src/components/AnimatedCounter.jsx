import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

function parseValue(raw) {
  const str = String(raw)
  const match = str.match(/^([\d.]+)(.*)$/)
  if (!match) return { target: 0, suffix: str, decimals: 0 }
  const num = parseFloat(match[1])
  const suffix = match[2] || ''
  const decimals = match[1].includes('.') ? match[1].split('.')[1].length : 0
  return { target: num, suffix, decimals }
}

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3
}

export default function AnimatedCounter({ value, duration = 1800, className = '' }) {
  const [ref, inView] = useInView()
  const [display, setDisplay] = useState(() => {
    const { suffix } = parseValue(value)
    return `0${suffix}`
  })

  useEffect(() => {
    if (!inView) return

    const { target, suffix, decimals } = parseValue(value)
    const start = performance.now()

    let frame
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const current = target * easeOutCubic(progress)
      setDisplay(`${decimals ? current.toFixed(decimals) : Math.round(current)}${suffix}`)
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, duration])

  return (
    <strong ref={ref} className={className}>
      {display}
    </strong>
  )
}
