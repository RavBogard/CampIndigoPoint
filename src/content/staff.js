import { actionLinks } from './actions'

export const staffPage = {
  slug: 'staff',
  title: 'Lead With Pride',
  audience: 'staff',
  primaryActionId: actionLinks.apply.id,
  intro:
    'Join a chosen family. Build a sanctuary. At Camp Indigo Point, you aren\'t just a counselor—you are an ancestor, showing our campers a vision of what the future could and should be.',
  heroMedia: {
    src: '/images/gallery/camp-photo-4.jpg', // Using the authentic, high-energy photo
    alt: 'Staff and campers sharing an unforgettable, high-energy moment.',
  },
  cta: actionLinks.apply,
  theMagic: {
    heading: 'The Magic: Becoming an Ancestor',
    body: 'We are giving kids an image of the future. In a world where they are often told they don\'t belong, we show them a world where their heroes are like them. The counselors, the nurses, the directors—we are a living, breathing, intergenerational queer community.',
    bullets: [
      'Be the affirming adult that changes the trajectory of a child\'s life.',
      'Help kids who live in black and white realize they can live in color.',
      'Create an incredible, life-giving experience that you wish you had when you were their age.',
    ],
  },
  theMud: {
    heading: 'The Mud: The Reality of the Work',
    body: 'Do not be mistaken: this is the hardest job you will ever love. We do not sugarcoat the reality of building a world from scratch every summer.',
    bullets: [
      'You will sweat, you will get dirty, you will play in the mud, and you will live in a rustic yurt with 12 kids.',
      'You must learn to turn on a dime, handle unpredictable weather, and turn a rainy day into an unforgettable bonding experience.',
      'It requires deep resilience, boundless empathy, and a willingness to put the community before yourself.',
    ],
  },
  theCommunity: {
    heading: 'A Chosen Family',
    body: 'We become a family. You will work alongside 50+ queer and trans leaders who share your passion. You will laugh, you will cry, and you will create the world all over again with people who truly understand you.',
    rolesOverview: 'Whether you are a Counselor living the daily bunk life, a Specialist teaching skills at the waterfront or arts studio, or a Unit Head mentoring the team—we are all pulling the same rope.',
  },
  applicationProcess: {
    heading: 'Application and Follow-Up',
    steps: [
      'Apply through our official Google Form for Summer 2026.',
      'Our team will follow up using the contact info provided to schedule an interview.',
      'If offered a role, you will receive onboarding and training documents directly from the directors.',
      'For Nursing, Wellness, or other specific professional roles, please email Shira directly.',
    ],
    contact: 'shira@campindigopoint.org',
  },
}

