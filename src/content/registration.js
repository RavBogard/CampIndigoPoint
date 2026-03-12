import { actionLinks } from './actions'
import { siteSettings } from './site'

export const registrationPage = {
  slug: 'registration',
  title: 'Joining the Indigo Family',
  audience: 'families',
  primaryActionId: actionLinks.register.id,
  intro: `We can't wait to see you at camp! Camp Indigo Point is a summer safe haven where every child can feel like the heart of the community. Here is everything you need to know to start your journey.`,
  heroMedia: {
    src: '/images/families/hero-collage.jpg',
    alt: 'Moments of connection and joy at Camp Indigo Point.',
  },
  cta: actionLinks.register,
  affordability: {
    heading: 'Our Promise: No One is Turned Away',
    summary:
      'We believe every child deserves a "joyful reprieve" from the world, regardless of their family\'s ability to pay.',
    promise: 'Scholarships are available to ensure camp is a sanctuary for every family.',
    details: [
      'The actual cost for the 2-week session is $2,700, which reflects our operational expenses.',
      'We offer partial and full scholarships to ensure cost is never a barrier to belonging.',
      'To request support: Register, pay the deposit (if possible), and our team will follow up to make camp a reality.',
      'If the deposit is a barrier, please email Dan directly at dan@campindigopoint.org.',
    ],
  },
  accommodations: {
    heading: 'A Space to Not Feel Like an Outsider',
    body: 'We create living spaces that are beautifully liberated and affirming. Bunking is handled with care, focusing on grade level and the "unconditional joy" of being yourself.',
    details: [
      'Campers stay in rustic yurts or cabins with 12-14 peers and 2-4 dedicated counselors who understand them.',
      'Bunk assignments are grade-based and affirming of gender identity—we do not bunk by binary gender.',
      'Private shower stalls and all-gender restrooms are available throughout camp.',
      'Our "Community Care" team is on-site 24/7 to support social and emotional wellness.',
    ],
  },
  handoff: {
    heading: 'What to Expect Next',
    bullets: [
      'The "Register Now" button will take you to our official Active Camps registration form.',
      'Once you complete the form, you\'ll receive a confirmation email welcoming you to our safe haven.',
      'A member of our team will follow up with you to discuss scholarships, health forms, or any specific needs your camper has.',
      'We are here to help every step of the way—reach out anytime with questions!',
    ],
  },
}
