export const partners = [
  { name: 'Twilio', slug: 'twilio' },
  { name: 'Microsoft Azure', slug: 'microsoft-azure' },
  { name: 'Google Cloud', slug: 'google-cloud' },
  { name: 'Zapier', slug: 'zapier' },
  { name: 'OpenAI', slug: 'openai' },
  { name: 'Stripe', slug: 'stripe' },
]

export const heroFloatingLogos = [
  { slug: 'twilio', top: '14%', left: '6%', size: 52, delay: 0, duration: 7, rotate: -8 },
  { slug: 'zapier', top: '8%', right: '8%', size: 46, delay: 0.4, duration: 8, rotate: 12 },
  { slug: 'openai', top: '42%', left: '2%', size: 44, delay: 0.8, duration: 6.5, rotate: -15 },
  { slug: 'stripe', top: '38%', right: '4%', size: 50, delay: 1.2, duration: 7.5, rotate: 10 },
  { slug: 'google-cloud', bottom: '22%', left: '10%', size: 48, delay: 0.6, duration: 9, rotate: -6 },
  { slug: 'microsoft-azure', bottom: '18%', right: '12%', size: 54, delay: 1, duration: 8.5, rotate: 8 },
]

export const orbitLogos = partners.map((p, i) => ({ ...p, angle: (360 / partners.length) * i }))
