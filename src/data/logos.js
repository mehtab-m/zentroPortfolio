import twilio from '../svgs/twilio.svg'
import microsoftAzure from '../svgs/microsoft-azure.svg'
import googleCloud from '../svgs/google-cloud.svg'
import zapier from '../svgs/zapier.svg'
import openai from '../svgs/openai.svg'
import stripe from '../svgs/stripe.svg'

export const logoUrls = {
  twilio,
  'microsoft-azure': microsoftAzure,
  'google-cloud': googleCloud,
  zapier,
  openai,
  stripe,
}

export function getLogoUrl(slug) {
  return logoUrls[slug] ?? null
}
