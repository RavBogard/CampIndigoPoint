import { actionLinks } from './actions'

export const staffPage = {
  slug: 'staff',
  title: 'Staff',
  audience: 'staff',
  primaryActionId: actionLinks.apply.id,
  intro:
    'Camp Indigo Point staff create the safe, welcoming, fun, and exuberant environment that makes camp matter for young people and for the adults who serve there.',
  cta: actionLinks.apply,
  roles: [
    {
      id: 'specialists',
      label: 'Specialists',
      description:
        'Specialists lead activity areas, build curriculum, and manage safe skill-based learning in spaces like waterfront, ropes, drama, arts, and crafts.',
    },
    {
      id: 'counselors',
      label: 'Counselors / Jr. Counselors',
      description:
        'Counselors live the camp day with their bunk, provide individualized support, and create the small moments that make camp memorable.',
    },
    {
      id: 'unit-heads',
      label: 'Unit Heads',
      description:
        'Unit Heads mentor staff, supervise camper units, problem-solve, and make sure young people are growing healthy social skills.',
    },
  ],
  culture: {
    heading: 'Why people join the staff community',
    body: 'At the heart of Camp Indigo Point is an incredible staff community that builds friendships, opens minds, and creates lasting memories that extend beyond just the campers.',
    bullets: [
      'Staff members are helping create a camp experience that many queer youth have never had anywhere else.',
      'Living in yurts with 12-14 campers is part of the role for counselors, junior counselors, and activity specialists.',
      'The camp is looking for people who care deeply about youth, community, and inclusive residential camp life.',
    ],
  },
  applicationProcess: {
    heading: 'Application and follow-up',
    steps: [
      'Apply through the official Google Form for Summer 2026.',
      'Camp follows up using the email address or phone number listed on the application to schedule an interview.',
      'If offered a role, applicants receive the next set of documents and submission instructions directly from camp.',
      'Applicants for camp nurse, wellness, volunteer fundraising, or other off-list roles should contact Shira directly.',
    ],
    contact: 'shira@campindigopoint.org',
  },
}
