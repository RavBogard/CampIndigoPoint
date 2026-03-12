export const actionLinks = {
  register: {
    id: 'register',
    label: 'Register for Camp',
    shortLabel: 'Register',
    href: 'https://campscui.active.com/orgs/CampManitowa?orglink=camps-registration',
    platform: 'Active Camps',
    audience: 'families',
    description:
      'Open the official external registration flow for Camp Indigo Point through Active Camps.',
  },
  donate: {
    id: 'donate',
    label: 'Support Camp',
    shortLabel: 'Donate',
    href: 'https://form-renderer-app.donorperfect.io/give/ashrei-foundation/camp-indigo-point-donations',
    platform: 'DonorPerfect via Ashrei Foundation',
    audience: 'donors',
    description:
      'Open the official scholarship-support donation form hosted by DonorPerfect for the Ashrei Foundation.',
  },
  apply: {
    id: 'apply',
    label: 'Apply for Summer 2026',
    shortLabel: 'Apply',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSeMd2mXgub9yq6d5kAAVGcFIX4omnPHdAbqPy0q3_2daeC8Sg/viewform?usp=dialog',
    platform: 'Google Forms',
    audience: 'staff',
    description:
      'Open the official Camp Indigo Point staff application form for counselors, specialists, and unit heads.',
  },
}

export const actionGroups = {
  primary: [actionLinks.register, actionLinks.donate, actionLinks.apply],
  family: [actionLinks.register],
  donor: [actionLinks.donate],
  staff: [actionLinks.apply],
}

export const actionLinkUpdateGuide = {
  register: 'Update this when the Active Camps registration destination changes.',
  donate: 'Keep this aligned with the Ashrei Foundation donation handoff copy.',
  apply: 'Update this when the seasonal staff application form changes.',
}

export const announcementActionIds = ['register', 'donate', 'apply']
