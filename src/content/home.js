import { actionLinks, actionGroups } from './actions'
import { siteSettings } from './site'

export const homePage = {
  slug: 'home',
  title: 'Camp Indigo Point',
  audience: 'all',
  primaryActionId: actionLinks.register.id,
  hero: {
    eyebrow: `Summer ${siteSettings.season.year}`,
    heading: 'A summer camp for LGBTQ+ youth',
    summary:
      'Camp Indigo Point is a residential summer camp for queer and trans youth entering grades 2nd-11th where friendship, adventure, and affirmation all belong together.',
    details: [
      'For four summers, camp has given LGBTQ+ youth a place to leave behind the hectic pace, pressure, and technology of the real world and just be kids.',
      'Camp life is full of meaningful relationships with LGBTQ+ adults, outdoor play, and the kind of joy that keeps working long after summer ends.',
    ],
    ctas: actionGroups.primary,
  },
  quickFacts: [
    'Residential overnight camp in the Midwest',
    `${siteSettings.season.dates}`,
    'Queer and trans youth entering grades 2nd-11th',
    'Scholarships available for every family who asks',
  ],
  sections: [
    {
      id: 'why-camp',
      heading: 'Why families choose Camp Indigo Point',
      body: 'Camp Indigo Point was built specifically so LGBTQ+ youth can be in community, safety, and belonging with peers and adults who understand them.',
      bullets: [
        'Campers build lasting friendships, take healthy risks, and get to be playful and present outdoors.',
        'The daily rhythm includes exciting activities, healthy meals, time with old and new friends, and moments to slow down.',
        'The camp voice stays warm and affirming while still giving families concrete details they can trust.',
      ],
    },
    {
      id: 'values',
      heading: 'What camp stands for',
      body: 'The strongest ideas from the current site stay visible here because they are part of why the camp feels trustworthy in the first place.',
      bullets: [
        'Equity: every camper should have the specific support they need to feel acknowledged, valued, and secure.',
        'Community: LGBTQ+ and adjacent adults create an environment where queer youth can thrive and connect.',
        'Affirmation: campers and staff should feel their identities and queer journeys are supported.',
      ],
    },
  ],
  audiencePaths: [
    {
      id: 'families',
      label: 'For families',
      description: 'Learn what camp feels like, how accommodations work, and what registration looks like.',
      route: '/registration',
      routeLabel: 'Explore family info',
      action: actionLinks.register,
    },
    {
      id: 'donors',
      label: 'For donors',
      description: 'Help more campers get to camp through scholarship support and the Ashrei Foundation handoff.',
      route: '/donate',
      routeLabel: 'See scholarship impact',
      action: actionLinks.donate,
    },
    {
      id: 'staff',
      label: 'For staff',
      description: 'Explore the staff culture, role types, and the official application process.',
      route: '/staff',
      routeLabel: 'Explore staff roles',
      action: actionLinks.apply,
    },
  ],
}
