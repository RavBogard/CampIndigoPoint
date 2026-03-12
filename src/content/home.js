import { actionLinks, actionGroups } from './actions'
import { siteSettings } from './site'

export const homePage = {
  slug: 'home',
  title: 'Camp Indigo Point',
  audience: 'all',
  primaryActionId: actionLinks.register.id,
  hero: {
    eyebrow: `A Summer Safe Haven — ${siteSettings.season.year}`,
    heading: 'Experience the Unconditional Joy of Being Wholeheartedly Yourself',
    summary:
      'Camp Indigo Point is a place of beautifully liberated freedom, where queer and trans youth trade the noise of the world for the magic of the lake, the campfire, and the most home they have ever felt.',
    details: [
      'For four summers, camp has provided a "joyful reprieve" where LGBTQ+ youth from 30 states come to find their peers and leave behind the hectic pace of the real world.',
      'Camp life is a sanctuary—an environment built on the foundations of affirmation, where friendship, adventure, and the outdoors all belong together.',
    ],
    ctas: actionGroups.primary,
  },
  quickFacts: [
    'Residential overnight camp in the beautiful Midwest',
    `${siteSettings.season.dates}`,
    'Queer and trans youth entering grades 2nd-11th',
    'Scholarships available for every family who asks',
  ],
  sections: [
    {
      id: 'why-camp',
      heading: 'A space to not feel like an outsider',
      body: 'In a world that can feel overwhelming, Indigo Point is a place where kids aren\'t the "other"—they are the heart of the community.',
      bullets: [
        'Campers build lasting friendships, take healthy risks, and get to be unabashedly queer in the great outdoors.',
        'A daily rhythm of "trading screens for sunsets," creative play, and professional LGBTQ+ care.',
        'A reprieve from the rhetoric of the outside world, where the soundtrack of the summer is laughter.',
      ],
    },
    {
      id: 'values',
      heading: 'What camp stands for',
      body: 'Our community is built on the belief that every queer and trans kid deserves a summer of unconditional support and belonging.',
      bullets: [
        'Equity: ensuring every camper has the specific support they need to feel valued and secure.',
        'Community: LGBTQ+ and adjacent adults creating a world where queer youth can thrive.',
        'Affirmation: a place where names, pronouns, and identities are celebrated as a default.',
      ],
    },
  ],
  audiencePaths: [
    {
      id: 'families',
      label: 'For families',
      description: 'Find out what it means to be wholeheartedly yourself. Explore camp life and our "No One Turned Away" promise.',
      route: '/registration',
      routeLabel: 'Explore the adventure',
      action: actionLinks.register,
    },
    {
      id: 'donors',
      label: 'For donors',
      description: 'Help more kids find their sanctuary. Invest in the scholarship fund and support queer joy.',
      route: '/donate',
      routeLabel: 'Invest in joy',
      action: actionLinks.donate,
    },
    {
      id: 'staff',
      label: 'For staff',
      description: 'Join a staff of queer and trans leaders dedicated to building the most home our kids have ever felt.',
      route: '/staff',
      routeLabel: 'Lead with pride',
      action: actionLinks.apply,
    },
  ],
}
