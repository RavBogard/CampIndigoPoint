export const actionLinks = {
  register: {
    id: 'register',
    label: 'Register for Camp',
    shortLabel: 'Register',
    href: 'https://campscui.active.com/orgs/CampManitowa?orglink=camps-registration#/selectSessions/3834431',
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
    label: 'Talk to us about staff',
    shortLabel: 'Staff inquiry',
    href: 'mailto:shira@campindigopoint.org?subject=Working%20at%20Indigo%20Point',
    platform: 'Email',
    audience: 'staff',
    description:
      'Ask the camp team about current roles and the staff application process.',
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
