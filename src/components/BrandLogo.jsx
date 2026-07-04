import { useState } from 'react'
import { getLogoUrl } from '../data/logos'
import './BrandLogo.css'

export default function BrandLogo({
  slug,
  name,
  size = 40,
  className = '',
  pill = false,
}) {
  const [failed, setFailed] = useState(false)
  const label = name || slug.replace(/-/g, ' ')
  const src = getLogoUrl(slug)

  if (!src || failed) {
    return (
      <span
        className={`brand-logo-fallback ${pill ? 'brand-logo-pill' : ''} ${className}`}
        style={{ width: size, height: size, fontSize: Math.max(10, size * 0.28) }}
        aria-label={label}
      >
        {label.slice(0, 2).toUpperCase()}
      </span>
    )
  }

  const pillStyle = pill
    ? { width: 'auto', height: 'auto', '--logo-height': `${size}px` }
    : { width: size, height: size }

  return (
    <span
      className={`brand-logo ${pill ? 'brand-logo-pill' : ''} ${className}`}
      style={pillStyle}
    >
      <img
        src={src}
        alt={label}
        width={size}
        height={size}
        loading="lazy"
        draggable={false}
        onError={() => setFailed(true)}
      />
    </span>
  )
}
