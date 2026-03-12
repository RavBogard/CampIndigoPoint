import { actionLinks } from './actions'
import { siteSettings } from './site'

export const metaDefaults = {
  siteName: siteSettings.siteName,
  titleSuffix: 'Camp Indigo Point',
  ogImage: '/og-image-camp-indigo-point.png',
  themeColor: '#1f5f7a',
}

export const pageMeta = {
  home: {
    title: 'Camp Indigo Point | A summer camp for LGBTQ+ youth',
    description:
      'Learn what camp feels like, how to register, how to support scholarships, or how to apply to join the staff community.',
    canonicalPath: '/',
  },
  about: {
    title: 'About Camp | Camp Indigo Point',
    description:
      'Explore camp life, activities, history, accommodations, and community care at Camp Indigo Point.',
    canonicalPath: '/about',
  },
  registration: {
    title: 'Registration | Camp Indigo Point',
    description:
      'See what registration looks like, how bunking and accommodations work, and how scholarship support keeps camp accessible.',
    canonicalPath: '/registration',
    primaryAction: actionLinks.register.href,
  },
  donate: {
    title: 'Donate | Camp Indigo Point',
    description:
      'Support camper scholarships and learn why Camp Indigo Point donations are processed through the Ashrei Foundation handoff.',
    canonicalPath: '/donate',
    primaryAction: actionLinks.donate.href,
  },
  staff: {
    title: 'Staff | Camp Indigo Point',
    description:
      'Meet the staff roles, culture, and application process for Camp Indigo Point’s summer team.',
    canonicalPath: '/staff',
    primaryAction: actionLinks.apply.href,
  },
  faq: {
    title: 'FAQ | Camp Indigo Point',
    description:
      'Get practical answers for families, donors, and staff applicants before taking the next step.',
    canonicalPath: '/faq',
  },
  contact: {
    title: 'Contact | Camp Indigo Point',
    description:
      'Reach Camp Indigo Point for questions about registration, staffing, or general camp information.',
    canonicalPath: '/contact',
  },
}
