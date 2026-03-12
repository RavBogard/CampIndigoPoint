import { actionLinks } from './actions'

export const faqPage = {
  slug: 'faq',
  title: 'Frequently Asked Questions',
  audience: 'all',
  primaryActionId: actionLinks.register.id,
  intro:
    'This FAQ holds practical follow-up questions so families, donors, and staff can get clarity without losing the warm tone of the main pages.',
  groups: {
    families: [
      {
        question: 'Who is camp for?',
        answer:
          'Camp Indigo Point is for queer and trans youth entering grades 2nd-11th, with a staff-in-training program for rising 12th graders.',
      },
      {
        question: 'What is camp life actually like?',
        answer:
          'Camp is a residential overnight experience with meals together, structured activities, evening programming, outdoor adventure, and low-tech community life.',
      },
      {
        question: 'How does bunking work?',
        answer:
          'Campers are bunked by grade and personal preference rather than by a single gender assignment, with options designed to support affirmation and comfort.',
      },
      {
        question: 'Can families ask for scholarship help?',
        answer:
          'Yes. Families should register, pay the deposit, and let camp know what support they need. No one will be turned away for lack of funds.',
      },
    ],
    donors: [
      {
        question: 'What does giving support?',
        answer:
          'Donations primarily support camper scholarships and access so more youth can attend camp.',
      },
      {
        question: 'Why does the donation link mention Ashrei?',
        answer:
          'Camp Indigo Point is fiscally sponsored by the Ashrei Foundation, so the official donation flow is hosted through that organization’s giving platform.',
      },
    ],
    staff: [
      {
        question: 'What kinds of staff roles are available?',
        answer:
          'Camp hires counselors, junior counselors, specialists, and unit heads, with additional conversations available for nursing, wellness, and fundraising roles.',
      },
      {
        question: 'How do I apply?',
        answer: `Use the official ${actionLinks.apply.platform} application linked from the staff page, then watch for follow-up from camp to schedule an interview.`,
      },
    ],
  },
}
