import { images } from './constants';

export const navbarLink = [
  {
    id: 1,
    link: 'Home',
    url: '/',
  },
  {
    id: 2,
    link: 'About',
    url: '/about',
  },
  {
    id: 3,
    link: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 4,
    link: 'Pricing',
    url: '/pricing',
  },
  {
    id: 5,
    link: 'Testimonials',
    url: '/testimonials',
  },
  {
    id: 6,
    link: 'Contact Us',
    url: '/contactUs',
  },
  {
    id: 7,
    link: 'Blog',
    url: '/blog',
  },
];

export const ps = [
  {
    id: 1,
    img: images.spid,
    img2: images.spid2,
    title: 'HAZYVIEW PETS IN DISTRESS',
    category: 'landingPages',
    desc: 'A Landing Page For A Fund Raising Organisation. I used React Js, Tailwind Css, Javascript, CSS and React Icons.',
    url: 'https://hazyviewpetsindistress.netlify.app/',
  },
  {
    id: 2,
    img: images.soac,
    img2: images.soac2,
    title: 'OLIESTA AFTERSCHOOL CARE',
    category: 'landingPages',
    desc: 'A Landing Page For An Afterschool Care Business. I used React Js, Tailwind Css, Javascript, CSS and React Icons.',
    url: 'https://oliestaafterschoolcare.netlify.app/',
  },
  {
    id: 3,
    category: 'landingPages',
    img: images.sos,
    img2: images.sos2,
    title: 'OLIESTA SOFTWORKS',
    category: 'anyOtherWebApps',
    desc: 'A Landing Page For A Software Development Business. I used React Js, Tailwind Css, Javascript, CSS and React Icons.',
    url: 'https://oliestasoftworks.netlify.app/',
  },
  {
    id: 4,
    img: images.sof,
    img2: images.sof2,
    title: 'OLIESTA FASHIONS',
    category: 'ecommerceSites',
    desc: 'My old personal portfolio web app. I used React Js, Framer Motion, Javascript and SCSS for the frontend. I used Sanity IO for the backend.',
    url: 'https://oliestafashions.netlify.app/',
  },
  {
    id: 5,
    img: images.sof,
    img2: images.sof2,
    title: 'OLIESTA MART',
    category: 'mobileApps',
    desc: 'My old personal portfolio web app. I used React Js, Framer Motion, Javascript and SCSS for the frontend. I used Sanity IO for the backend.',
    url: 'https://oliestafashions.netlify.app/',
  },
];

export const lps = [
  {
    id: 1,
    img: images.spid,
    title: 'PETS IN DISTRESS',
    desc: 'A Landing Page For A Fund Raising Organisation',
    url: 'https://hazyviewpetsindistress.netlify.app/',
  },
  {
    id: 2,
    img: images.soac,
    title: 'OLIESTA AFTERSCHOOL CARE',
    desc: 'A Landing Page For An Afterschool Care Business.',
    url: 'https://oliestaafterschoolcare.netlify.app/',
  },
  {
    id: 3,
    img: images.sos,
    title: 'OLIESTA SOFTWORKS',
    desc: 'A Landing Page For A Software Development Business',
    url: 'https://oliestasoftworks.netlify.app/',
  },
];

export const testimonials = [
  {
    id: 1,
    img: images.lhpid,
    name: 'Vivien',
    profession: 'Teacher',
    testimony: 'We love the Landing Page Oliesta Softworks made. It is lovely.',
    rating: '5',
  },
  {
    id: 2,
    img: images.l_oac,
    name: 'Priscilla',
    profession: 'Architect',
    testimony: 'Oliesta Softworks made a beautiful landing page for us.',
    rating: '5',
  },
  {
    id: 3,
    img: images.l_of,
    name: 'Stellah',
    profession: 'CEO',
    testimony:
      'I am pleased with the work Oliesta Softworks is doing for us.',
    rating: '5',
  },
  {
    id: 4,
    img: images.om2,
    name: 'Oliver',
    profession: 'CEO',
    testimony:
      'We are beyond pleased with the work Oliesta Softworks is doing for us.',
    rating: '5',
  },
];

export const lpp = [
  {
    id: 1,
    point: 'Up To Ten Pages',
  },
  {
    id: 2,
    point: 'Domain Registration',
  },
  {
    id: 3,
    point: 'Plus Hosting At R50.00 Per Month',
  },
];

export const ecp = [
  {
    id: 1,
    point: 'Unlimited Content',
  },
  {
    id: 2,
    point: 'Domain Registration',
  },
  {
    id: 3,
    point: 'Fully Dynamic',
  },
  {
    id: 4,
    point: 'Plus Hosting At R150.00 Per Month',
  },
];

export const mcsp = [
  {
    id: 1,
    point: 'Up To Ten Pages',
  },
  {
    id: 2,
    point: 'Domain Registration',
  },
  {
    id: 3,
    point: 'Fully Dynamic',
  },
  {
    id: 4,
    point: 'Plus Hosting At R100.00 Per Month',
  },
];

export const buttons = [
  {
    name: 'All',
    value: 'all',
    marginBottom: 'bg-[#2c5282] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded ml-[0.5%] mr-[0.5%] mb-1 lg:mb-10'
  },
  {
    name: 'Landing Pages',
    value: 'landingPages',
    marginBottom: 'bg-[#2c5282] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded ml-[0.5%] mr-[0.5%] mb-1 lg:mb-10'
  },
  {
    name: 'Ecommerce Sites',
    value: 'ecommerceSites',
    marginBottom: 'bg-[#2c5282] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded ml-[0.5%] mr-[0.5%] mb-1 lg:mb-10'
  },
  {
    name: 'Any Other Web Apps',
    value: 'anyOtherWebApps',
    marginBottom: 'bg-[#2c5282] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded ml-[0.5%] mr-[0.5%] mb-10 lg:mb-10'
  },
  {
    name: 'Mobile Apps',
    value: 'mobileApps',
    marginBottom: 'bg-[#2c5282] hover:bg-blue-700 text-white font-bold px-4 py-2 rounded ml-[0.5%] mr-[0.5%] mb-10 lg:mb-10'
  },
];

export const logoClouds = [
  {
    id: 1,
    logo: 'Hazyview Pets In Distress Logo',
    url: images.l_hpid,
  },
  {
    id: 2,
    logo: 'Oliesta Afterschool Care Logo',
    url: images.logo_oac,
  },
  {
    id: 3,
    logo: 'Oliesta Fashions Logo',
    url: images.logo_of,
  },
];

export const contactField = [
  {
    id: 1,
    id1: 'text3',
    for1: 'name',
    label1: 'Full Name',
    type2: 'text',
    name2: 'name',
    id2: 'name',
    placeholder2: 'Full Name',
  },
  {
    id: 2,
    id1: 'text3',
    for1: 'email',
    label1: 'Email Address',
    type2: 'email',
    name2: 'email',
    id2: 'email',
    placeholder2: 'example@domain.com',
  },
  {
    id: 3,
    id1: 'text3',
    for1: 'subject',
    label1: 'Subject',
    type2: 'text',
    name2: 'subject',
    id2: 'subject',
    placeholder2: 'Enter your subject',
  },
];

export const footerProduct = [
  {
    id: 1,
    product: 'Landing Pages',
    url: '#landingPages',
  },
  {
    id: 2,
    product: 'Ecommerce Sites',
    url: '#ecommerceSites',
  },
  {
    id: 3,
    product: 'More Custom Sites',
    url: '#moreCustom Sites',
  },
  {
    id: 4,
    product: 'Mobile Apps',
    url: '#mobileApps',
  },
];

export const footerUsefulLinks = [
  {
    id: 1,
    usefulLink: 'Home',
    url: '/',
  },
  {
    id: 2,
    usefulLink: 'About',
    url: '/about',
  },
  {
    id: 3,
    usefulLink: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 4,
    usefulLink: 'Pricing',
    url: '/pricing',
  },
  {
    id: 5,
    usefulLink: 'Testimonials',
    url: '/testimonials',
  },
  {
    id: 6,
    usefulLink: 'Contact Us',
    url: '/contactUs',
  },
  {
    id: 7,
    usefulLink: 'Blog',
    url: '/blog',
  },
];
