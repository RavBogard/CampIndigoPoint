import { actionLinks } from './actions'

export const donatePage = {
  slug: 'donate',
  title: 'Support Camp Indigo Point',
  audience: 'donors',
  primaryActionId: actionLinks.donate.id,
  intro:
    'Donor support helps more campers get to camp, especially through scholarship funding that keeps the no-one-turned-away commitment real.',
  cta: actionLinks.donate,
  impact: {
    heading: 'Why giving matters',
    body: 'Camp Indigo Point wants every camper who wants to attend to have a path there. Scholarship giving directly supports access for families who need financial support.',
    bullets: [
      'Scholarship support makes the camp\'s affordability promise credible before families ever open the registration form.',
      'Giving helps sustain the joyful, affirming environment that campers and staff describe as life-changing.',
      'Donor messaging should stay explicit about access, not tucked away in generic nonprofit language.',
    ],
  },
  fiscalSponsorship: {
    heading: 'Ashrei Foundation relationship',
    body: 'Camp Indigo Point is fiscally sponsored by the Ashrei Foundation, a 501(c)(3) nonprofit organization. The donation handoff is intentionally routed through Ashrei so donors arrive on an official giving platform tied to the camp.',
    details: [
      'The Ashrei Foundation relationship should be explained plainly before the donor leaves the site.',
      'The canonical donation action opens a DonorPerfect form hosted for Ashrei Foundation donations to Camp Indigo Point.',
    ],
  },
  donorReassurance: [
    'Your gift supports camper scholarships and camp access.',
    'The donation handoff is official and expected, not a detour.',
    'Families, campers, and donors are all part of the same trust story the site needs to carry clearly.',
  ],
}
