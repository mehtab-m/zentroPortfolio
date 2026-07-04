import BrandLogo from './BrandLogo'
import { partners } from '../data/partners'
import './PartnerMarquee.css'

export default function PartnerMarquee() {
  const track = [...partners, ...partners, ...partners]

  return (
    <div className="partner-marquee" aria-label="Technology partners">
      <div className="partner-marquee-track">
        {track.map(({ name, slug }, i) => (
          <div key={`${slug}-${i}`} className="partner-marquee-item">
            <BrandLogo slug={slug} name={name} size={48} pill />
          </div>
        ))}
      </div>
    </div>
  )
}
