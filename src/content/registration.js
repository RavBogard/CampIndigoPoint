import { actionLinks } from './actions'
import { siteSettings } from './site'

export const registrationPage = {
  slug: 'registration',
  title: 'Registration',
  audience: 'families',
  primaryActionId: actionLinks.register.id,
  intro: `Registration is open for ${siteSettings.season.dates}. Families can start the official registration flow and know what to expect before leaving the site.`,
  cta: actionLinks.register,
  accommodations: {
    heading: 'Bunks and accommodations',
    body: 'Campers stay in yurts or smaller cabins with approximately 14 other campers and 2-4 counselors. Camp Indigo Point bunks campers based on grade and personal preference rather than assigning bunks by any one gender.',
    details: [
      'Yurts are rustic but equipped with bunk beds, wooden shelving, and central hangout space.',
      'Restrooms and showers are nearby, provide private stalls, and accommodate all genders.',
      'Campers spend the day with all of their friends and soon-to-be friends across activities and shared camp moments.',
    ],
  },
  affordability: {
    heading: 'Affordability and scholarships',
    summary:
      'The camp wants every camper who wants to attend to be here. The cost for summer 2025 is $2700/camper for the full 2-week summer, which reflects the actual operational cost.',
    promise: 'No one will be turned away for lack of funds.',
    details: [
      'Camp offers scholarships to every family who makes a request.',
      'Families concerned about affordability should register, pay the deposit, and expect the camp team to follow up to make attendance possible.',
      'Questions about affordability can go directly to Dan at dan@campindigopoint.org.',
    ],
  },
  handoff: {
    heading: 'What happens next',
    bullets: [
      'The Register Now action opens the official external Active Camps registration flow.',
      'Camp follows up after registration if a family requests scholarship support or has accommodation questions.',
      'Families can still contact the camp directly before or after starting the form if they want a conversation first.',
    ],
  },
}
