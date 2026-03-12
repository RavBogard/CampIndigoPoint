import { actionLinks } from './actions'

export const aboutPage = {
  slug: 'about',
  title: 'About Camp',
  audience: 'families',
  primaryActionId: actionLinks.register.id,
  intro:
    'Camp Indigo Point operates like a real overnight camp while preserving the affirming details that matter deeply to queer and trans youth and their families.',
  campLife: {
    heading: 'Daily camp life',
    bullets: [
      'Camp is predominantly outdoors in a beautiful natural setting.',
      'Each day includes three meals together, four structured activity periods, snacks, a free period, rest time, and an evening activity.',
      'Bunks rotate through activities together twice daily and campers also choose additional activities based on their interests.',
      'Campers are under the direct care of counselors at all times and are called by their preferred name and pronoun.',
      'Camp is intentionally low-tech: no internet, cell phones, or video games, though music players, audiobooks, and digital cameras are allowed.',
    ],
  },
  activities: {
    heading: 'Activities and traditions',
    summary: 'Camp balances water, arts, sports, and all-camp traditions so each camper can find both adventure and belonging.',
    highlights: [
      'Canoeing, kayaking, swimming, a water trampoline, beach days, and boating',
      'Drama, dance, arts and crafts, creative writing, queer book club, music, and gayming',
      'Gaga, 9-square, soccer, basketball, volleyball, disc golf, rock climbing, zip lining, hiking, and campfire cooking',
      'Campfires, capture the flag, silent discos, scavenger hunts, bunk nights, and Queer Prom',
    ],
  },
  accommodations: {
    heading: 'Accommodations and residential life',
    body: 'Campers stay in yurts or cabins with approximately 12 other campers and 2-4 counselors. Bunking is based on grade and personal preference of gender identities so campers can find affirmation and comfort within their bunk community.',
    details: [
      'Yurts are permanent wooden structures enclosed in fabric with electricity, bunk beds, shelving, and central hangout space.',
      'Restrooms and showers have private stalls, are located throughout camp, and accommodate all genders.',
      'Camp is not a therapeutic program, but it is a supportive place where kids can practice independence, face-to-face relationships, and new experiences.',
    ],
  },
  history: {
    heading: 'History and organizational context',
    body: 'Camp Indigo Point was founded in 2021 by Camp Manitowa, Daniel Bogard, and Shira Berkowitz as a premier summer camp experience for LGBTQ+ youth and staff.',
    milestones: [
      'The first summer ran in 2022 with 100 campers and 40 staff.',
      'Camp now serves up to 140 campers during a two-week summer with more than 50 staff.',
      'Leadership includes directors, assistant directors, a community care director, and unit heads who stay hands-on at camp.',
      'Camp Indigo Point is fiscally sponsored by the Ashrei Foundation, a 501(c)(3) nonprofit organization.',
    ],
  },
  communityCare: {
    heading: 'Community Care',
    summary:
      'Camp Indigo Point prioritizes the mental, emotional, social, and physical health of everyone who lives and works at camp.',
    bullets: [
      'A Community Care Team develops systems and training for morale, engagement, and day-to-day support.',
      'The health center is staffed with licensed providers competent in LGBTQ+ health.',
      'Families are invited to discuss health care and mental health accommodations during registration so the camp can care for each camper uniquely.',
    ],
  },
  testimonialMoments: [
    'My kiddo came home from camp glowing.',
    'For once in my life I felt understood.',
    'Camp gave me the chance to enjoy the great outdoors and be unabashedly queer at the same time.',
  ],
  cta: actionLinks.register,
}
