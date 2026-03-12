import { actionLinks, announcementActionIds } from './actions'
import {
  brandValues,
  brandVoice,
  contactDirectory,
  organizationFacts,
  socialLinks,
} from './brand'

export const siteSettings = {
  siteName: organizationFacts.siteName,
  siteTagline: organizationFacts.tagline,
  primaryEmail: contactDirectory.general.email,
  primaryPhone: contactDirectory.general.phone,
  shellLead:
    'Families, donors, and future staff should be able to spot their path and take the next right action right away.',
  season: {
    year: 2026,
    dates: 'June 6 - 19, 2026',
    registrationStatus: 'open',
  },
  announcement: {
    enabled: true,
    theme: 'registration',
    eyebrow: 'Summer 2026',
    title: 'Registration is open for June 6 - 19, 2026',
    body: 'Save your spot, pay the deposit, and reach out if affordability support would help your family.',
    action: actionLinks.register,
    allowedActionIds: announcementActionIds,
  },
  defaultCtas: {
    primary: actionLinks.register,
    secondary: actionLinks.donate,
    tertiary: actionLinks.apply,
  },
  navigation: {
    primary: [
      {
        id: 'families',
        label: 'Families',
        to: '/registration',
        summary: 'Camp life, support, and how registration works.',
      },
      {
        id: 'donors',
        label: 'Donors',
        to: '/donate',
        summary: 'Scholarship impact and the Ashrei Foundation handoff.',
      },
      {
        id: 'staff',
        label: 'Staff',
        to: '/staff',
        summary: 'Roles, culture, and the application path.',
      },
    ],
    secondary: [
      {
        id: 'about',
        label: 'About',
        to: '/about',
      },
      {
        id: 'community-care',
        label: 'Community Care',
        to: '/about#community-care',
      },
      {
        id: 'faq',
        label: 'FAQ',
        to: '/faq',
      },
      {
        id: 'contact',
        label: 'Contact',
        to: '/contact',
      },
    ],
  },
  socialLinks,
}

export const siteNarrative = {
  mission:
    'Camp Indigo Point creates a joyful, affirming summer camp experience where queer and trans youth can make friends, build confidence, and simply be kids.',
  promise:
    'Protect trust-critical camp facts, support clear next actions, and keep the camp voice warm, practical, and deeply affirming.',
  audienceSummary:
    'Visitors should quickly understand camp life, community care, scholarship access, and the official paths to register, donate, or apply.',
  values: brandValues,
  voice: brandVoice,
}

export const contentDomains = {
  global: ['site settings', 'announcement', 'contact', 'brand'],
  families: ['home', 'about', 'registration', 'faq'],
  supporters: ['donate'],
  staff: ['staff'],
}
