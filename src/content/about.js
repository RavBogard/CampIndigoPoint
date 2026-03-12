import { actionLinks } from './actions'

export const aboutPage = {
  slug: 'about',
  title: 'Where Kids Can Just Be Kids',
  audience: 'families',
  primaryActionId: actionLinks.register.id,
  intro:
    'Camp Indigo Point is a premier summer camp experience where queer and trans youth build friendships, explore nature, and celebrate their truest selves in a place that feels like "the most home they have ever felt."',
  heroMedia: {
    src: '/images/families/hero-collage.jpg',
    alt: 'Campers laughing and enjoying activities at Camp Indigo Point.',
  },
  campLife: {
    heading: 'The Magic of a Camp Day',
    summary: 'From morning polar bear plunges to evening campfires, we trade screens for sunsets and the noise of the world for the soundtrack of laughter.',
    bullets: [
      'Morning polar bear plunges and breakfast with a community that understands you.',
      'A "beautifully liberated freedom of expression" across all-camp activities and bunk rotations.',
      'Intentional low-tech time: trader screens for friendship bracelets and face-to-face fun.',
      'Daily "Rest Hour" for reading, writing, and recharging in a sanctuary of peers.',
      'Evening activities like Capture the Flag, Silent Discos, and our legendary Queer Prom.',
    ],
  },
  belonging: {
    heading: 'A Home for Every Identity',
    body: 'We don\'t just "accept" our campers—we celebrate them. Every detail is built on the foundations of affirmation, so every child can be "wholeheartedly themselves."',
    details: [
      'Campers are always called by their correct names and pronouns by every staff member.',
      'Bunking is grade-based and affirming, ensuring no child feels like an outsider in their own cabin.',
      'A community where you can be unabashedly queer in the great outdoors.',
      'A "Community Care Team" dedicated to the mental, emotional, and social health of every camper.',
    ],
  },
  activities: {
    heading: 'Adventure & Traditions',
    summary: 'Whether you\'re a lake lover, an artist, or a gaga champion, camp is a place to grow through play.',
    highlights: [
      'Water Joy: Canoeing, kayaking, swimming, and the water trampoline.',
      'Creative Arts: Drama, dance, pottery, and our popular queer book club.',
      'Camp Classics: Archery, rock climbing, hiking, and zip-lining.',
      'Indigo Traditions: Scavenger hunts, bunk nights, and the magic of the closing campfire.',
    ],
  },
  communityCare: {
    heading: 'Community Care',
    summary:
      'We provide a safe haven where physical and emotional health are cared for with expertise and compassion.',
    bullets: [
      'Licensed on-site medical providers specialized in LGBTQ+ care.',
      'Staff trained in trauma-informed care and identity affirmation.',
      'A supportive environment where kids can face new experiences with confidence.',
    ],
  },
  history: {
    heading: 'Our Story',
    body: 'Founded in 2021 by a team of parents and activists, Camp Indigo Point was created to be a sanctuary for youth across the Midwest and beyond.',
    milestones: [
      'Started in 2022 to provide a "joyful reprieve" for queer and trans youth.',
      'Grown to serve 140+ campers from 30 states with a staff of 50+ queer leaders.',
      'Rooted in the values of the Jewish summer camp movement and open to all.',
    ],
  },
  cta: actionLinks.register,
}
