import { actionLinks } from './actions'
import { siteSettings } from './site'

export const metaDefaults = {
  siteName: siteSettings.siteName,
  titleSuffix: 'Camp Indigo Point',
  ogImage: '/images/gallery/camp-photo-17.jpg',
  themeColor: '#302d70',
}

export const pageMeta = {
  campLife: { title: 'Camp Life | Camp Indigo Point', description: 'Swimming, arts and crafts, campfires, queer prom, and friends who get you. See what a day at Indigo Point feels like.', canonicalPath: '/camp-life' },
  colorado: { title: 'Colorado Teen Program | Camp Indigo Point', description: 'Explore the Indigo Point Colorado teen program and get in touch about the next mountain adventure.', canonicalPath: '/colorado' },
  families: { title: 'For Families | Camp Indigo Point', description: 'Learn about bunks, community care, scholarships, and preparing your camper for Indigo Point.', canonicalPath: '/families' },
  notFound: { title: 'Page Not Found | Camp Indigo Point', description: 'Find your way back to Camp Indigo Point.', canonicalPath: '/' },
  home: {
    title: 'Camp Indigo Point | A summer camp for LGBTQ+ youth',
    description:
      'Swimming, friendship bracelets, queer prom, and counselors who get you. Summer camp for LGBTQ+ kids, with your people.',
    canonicalPath: '/',
  },
  about: {
    title: 'About Camp | Camp Indigo Point',
    description:
      'How Jewish summer camp alumni built a camp for LGBTQ+ kids, with queer heroes and role models. Read our story and press coverage.',
    canonicalPath: '/about',
  },
  registration: {
    title: 'Registration | Camp Indigo Point',
    description:
      'Plan your summer at Indigo Point. Find overnight session dates, grades, tuition, scholarships, and the official registration link.',
    canonicalPath: '/registration',
    primaryAction: actionLinks.register.href,
  },
  donate: {
    title: 'Donate | Camp Indigo Point',
    description:
      'Give LGBTQ+ kids camp, community, and queer role models. Support Camp Indigo Point scholarships and operations through the Ashrei Foundation.',
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
