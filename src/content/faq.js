import { actionLinks } from './actions'

export const faqPage = {
  slug: 'faq',
  title: 'Questions & Answers',
  audience: 'all',
  primaryActionId: actionLinks.register.id,
  intro:
    'We know that choosing a summer sanctuary for your child is a big decision. Here are the most common questions families ask about our safe haven.',
  groups: {
    families: [
      {
        question: 'Is my child "queer enough" for camp?',
        answer:
          'Yes! Camp Indigo Point is a sanctuary for any youth who identifies as LGBTQ+, is questioning, or simply wants the "unconditional joy" of a community where they don\'t feel like an outsider. If they want to be here, they belong here.',
      },
      {
        question: 'What does "affirming" actually mean at camp?',
        answer:
          'It means a "beautifully liberated freedom of expression." Your child will be called by their correct name and pronouns by every staff member and camper. Bunking is handled with care, and identity is celebrated as a default.',
      },
      {
        question: 'What if we can\'t afford the full tuition?',
        answer:
          'We believe every child deserves a "joyful reprieve" from the outside world. We offer scholarships to every family who asks, and no one is turned away for lack of funds. Register, pay the deposit, and we will work with you.',
      },
      {
        question: 'What is the "low-tech" policy?',
        answer:
          'We "trade screens for sunsets" to help kids build face-to-face friendships. Campers thrive when they can leave behind the noise of the internet for two weeks of pure camp magic.',
      },
    ],
    donors: [
      {
        question: 'How is my donation used?',
        answer:
          'Donations primarily go to our scholarship fund, ensuring that every kid can find their "sanctuary" at camp regardless of their family\'s financial situation.',
      },
      {
        question: 'Who is the Ashrei Foundation?',
        answer:
          'The Ashrei Foundation is our 501(c)(3) fiscal sponsor. They provide the administrative backbone that allows us to focus on the joy and safety of our campers.',
      },
    ],
    staff: [
      {
        question: 'What is it like to work at Indigo Point?',
        answer:
          'It is hard work, deep joy, and a chance to build "the most home our kids have ever felt." You\'ll be a role model in a community where being wholeheartedly yourself is the only requirement.',
      },
    ],
  },
}
