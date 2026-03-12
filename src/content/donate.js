import { actionLinks } from './actions'

export const donatePage = {
  slug: 'donate',
  title: 'Give a Child a World in Color',
  audience: 'donors',
  primaryActionId: actionLinks.donate.id,
  intro:
    'We are literally saving lives with marshmallows, campfires, and intergenerational queer community. Your gift provides the lifeline our youth need to thrive.',
  cta: actionLinks.donate,
  impactMetrics: [
    { label: "Campers Served", value: "140+", icon: "Users" },
    { label: "States Represented", value: "30", icon: "Map" },
    { label: "Queer Staff", value: "50+", icon: "Heart" },
    { label: "Turned Away for Funds", value: "0", icon: "Sun" }
  ],
  lifeline: {
    heading: 'From Black and White to Color',
    body: 'Parents tell us every year: they send us kids who live in black and white, whose only friends are strangers on the internet. In just two weeks, we send them back kids who live in color, who are confident, and who have built lifelong relationships with other campers.',
    bullets: [
      'In a world where all too often their assistant principal is their biggest bully, Camp Indigo Point is a sanctuary.',
      'We give kids hope and a vision of what the future could and should be.',
      'Research shows that just one affirming adult can reduce the risk of suicide for trans youth by 40%.',
    ],
  },
  ancestors: {
    heading: 'Building a Lineage of Joy',
    body: 'At Indigo Point, it isn\'t just that every camper is like them. Their heroes are like them. The counselors are like them. The administrators, the nurses, the medical staff—they are all like them.',
    details: [
      'We are giving them an image of what the future could be.',
      'We are giving them ancestors.',
      'Donating to scholarships is one of the easiest ways you can save a life and sustain this vital community.',
    ],
  },
  impactTiers: {
    heading: 'What Your Gift Makes Possible',
    summary: 'Every dollar goes toward ensuring that no child is turned away for lack of funds. Here is what your support can do:',
    tiers: [
      { amount: '$100', description: 'Covers a bunk\'s campfires and snacks.' },
      { amount: '$500', description: 'Supports a special unit outing or activity.' },
      { amount: '$2,700', description: 'Provides a full, two-week scholarship for one camper.' },
    ],
  },
  partnersInJoy: {
    heading: 'Partners in Joy',
    body: 'We are profoundly grateful for the organizations, family foundations, and faith communities that sustain our mission.',
    bullets: [
      'Faith Sponsorships: Faith communities can become official sponsors of Camp Indigo Point (typically a $1,800 donation).',
      'Major Gifts: We are actively seeking partners who can support our long-term vision with annual 5-figure donations.',
      'To discuss foundation support or faith sponsorships, please email Dan directly at dan@campindigopoint.org.',
    ],
  },
  fiscalSponsorship: {
    heading: 'The Ashrei Foundation',
    body: 'Camp Indigo Point is fiscally sponsored by the Ashrei Foundation, a 501(c)(3) nonprofit organization. Ashrei provides the administrative backbone that allows our team to focus entirely on the joy and safety of our campers.',
    details: [
      'When you click the donate button, you will be taken to a secure DonorPerfect form hosted by the Ashrei Foundation.',
      'Your gift is tax-deductible to the fullest extent of the law and directly supports Camp Indigo Point scholarships and operations.',
    ],
  },
}
