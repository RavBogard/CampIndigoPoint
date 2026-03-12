import { actionLinks } from './actions'

export const wordpressSourcePages = [
  {
    slug: 'home',
    title: 'Home',
    sourceUrl: 'https://www.campindigopoint.org/',
    targetModule: 'src/content/home.js',
    mustKeepFacts: [
      'Camp Indigo Point is a residential summer camp for queer and trans youth entering grades 2nd-11th.',
      'Summer 2026 dates are June 6 - 19, 2026.',
      'Camp centers friendship, outdoor play, joy, and meaningful relationships with LGBTQ+ adults.',
    ],
    trustLanguage: [
      'LGBTQ+ youth deserve a place made specifically for them in community and safety.',
      'Camp offers a place to leave behind the hectic pace, pressure, and technology of the real world and just be kids.',
    ],
    actionLinks: [actionLinks.register.id, actionLinks.donate.id],
    migrationNotes:
      'Use as the source for homepage hero copy, values, first-view messaging, and high-visibility audience CTAs.',
  },
  {
    slug: 'about',
    title: 'About Camp',
    sourceUrl: 'https://www.campindigopoint.org/about/',
    targetModule: 'src/content/about.js',
    mustKeepFacts: [
      'Camp is predominantly outdoors, with three meals, four activity periods, snacks, rest time, and an evening activity.',
      'Campers sleep in yurts or cabins, stay under direct counselor care, and are called by their preferred name and pronoun.',
      'Campers are offline during camp except for allowed music players, audiobooks, and digital cameras.',
    ],
    trustLanguage: [
      'Camp is not a therapeutic camp, but it is a special and unique experience away from home where kids can develop independence with support.',
      'Camp can be loud and energetic, and quieter nearby space should be available when needed.',
    ],
    actionLinks: [actionLinks.register.id],
    migrationNotes:
      'Split into overview, daily life, activities, accommodations, and technology expectations for later route composition.',
  },
  {
    slug: 'history',
    title: 'Camp’s History',
    sourceUrl: 'https://www.campindigopoint.org/history/',
    targetModule: 'src/content/about.js',
    mustKeepFacts: [
      'Camp Indigo Point was founded in 2021 by Camp Manitowa, Daniel Bogard, and Shira Berkowitz.',
      'The first camp launched in 2022 with 100 campers and 40 staff, and camp now serves up to 140 campers with more than 50 staff.',
      'Camp Indigo Point is fiscally sponsored by the Ashrei Foundation, a 501(c)(3) nonprofit organization.',
    ],
    trustLanguage: [
      'Camp was built as a premier summer camp experience for LGBTQ+ youth and staff.',
      'Leadership is hands-on every day and many staff are LGBTQ+ role models.',
    ],
    actionLinks: [actionLinks.donate.id],
    migrationNotes:
      'Use for trust-building organizational context, mission history, and donor-facing fiscal sponsorship explanation.',
  },
  {
    slug: 'community-care',
    title: 'Community Care',
    sourceUrl: 'https://www.campindigopoint.org/communitycare/',
    targetModule: 'src/content/about.js',
    mustKeepFacts: [
      'Camp prioritizes the mental, emotional, social, and physical health of everyone at camp.',
      'A Community Care Team led by a Community Care Director supports morale, engagement, and one-on-one care.',
      'The health center is staffed with providers competent in LGBTQ+ health.',
    ],
    trustLanguage: [
      'Camp aims to accommodate campers uniquely and invites families to discuss health care or mental health needs during registration.',
    ],
    actionLinks: [actionLinks.register.id],
    migrationNotes:
      'Keep the tone concrete and reassuring; this content should anchor later community care and accommodations sections.',
  },
  {
    slug: 'registration',
    title: 'Registration',
    sourceUrl: 'https://www.campindigopoint.org/registration/',
    targetModule: 'src/content/registration.js',
    mustKeepFacts: [
      'Campers stay in yurts or smaller cabins with approximately 14 other campers and 2-4 counselors.',
      'The cost for summer 2025 was $2700 per camper for the full two-week summer.',
      'No one will be turned away for lack of funds.',
    ],
    trustLanguage: [
      'Bunking aligns with experiences dear to LGBTQ+ youth and is based on grade and personal preference, not fixed gender assignment.',
      'Families concerned about affordability should register, pay the deposit, and expect camp to follow up to make attendance possible.',
    ],
    actionLinks: [actionLinks.register.id],
    migrationNotes:
      'Preserve affordability language exactly where possible and keep donor handoff references coordinated with the scholarship story.',
  },
  {
    slug: 'staff',
    title: 'Counselors/Staff',
    sourceUrl: 'https://www.campindigopoint.org/counselors/',
    targetModule: 'src/content/staff.js',
    mustKeepFacts: [
      'Staff roles include specialists, counselors, junior counselors, and unit heads.',
      'Counselors and specialists live with campers in yurts and are responsible for safety, comfort, and community.',
      'Applicants are interviewed after applying, and off-list roles can be discussed directly with Shira Berkowitz.',
    ],
    trustLanguage: [
      'The staff community is safe, welcoming, fun, and exuberant.',
      'Staff help create life-changing experiences for campers while building friendships and memories themselves.',
    ],
    actionLinks: [actionLinks.apply.id],
    migrationNotes:
      'Separate role definitions, culture copy, and application handoff guidance so future staff pages can scan cleanly.',
  },
  {
    slug: 'contact',
    title: 'Contact',
    sourceUrl: 'https://www.campindigopoint.org/contacts/',
    targetModule: 'src/content/site.js',
    mustKeepFacts: [
      'General contact email is info@campindigopoint.org.',
      'General phone number is 314-348-6412.',
      'Leadership contacts include Dan Grabel and Shira Berkowitz.',
    ],
    trustLanguage: [
      'Visitors should have a clear human follow-up path for questions about camp, registration, or staffing.',
    ],
    actionLinks: [actionLinks.register.id, actionLinks.apply.id, actionLinks.donate.id],
    migrationNotes:
      'Keep contact facts in shared site config so footer, contact page, and handoff pages reference one source.',
  },
]

export const inventoryCoverage = {
  totalPages: wordpressSourcePages.length,
  preservedDomains: [
    'home',
    'about',
    'history',
    'community care',
    'registration',
    'staff',
    'contact',
  ],
  externalHandoffs: ['registration', 'donation', 'staff application'],
}

export const inventoryNotes = {
  strategy: 'Keep the migration organized by real camp pages and shared domains, not by legacy portfolio components.',
  nextStep:
    'Use each page record as the editorial checklist when Phase 1 plan 02 migrates copy into page-level modules.',
}
