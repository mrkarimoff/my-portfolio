import { v4 as uuidv4 } from 'uuid';

const projects = [
  // {
  //   id: uuidv4(),
  //   name: "My Collections",
  //   img: "/projects/myCollections.png",
  //   stack: [
  //     "React",
  //     "Node.js",
  //     "MongoDB",
  //     "Express.js",
  //     "Socket.io",`
  //     "Redux+Saga+Toolkit",
  //     "Ant Design UI",
  //     "Jsonwebtoken",
  //   ],
  //   url: "https://mycollections-mirfayz.netlify.app",
  //   code_base: "https://github.com/mrkarimoff/mycollection_frontend",
  //   description:
  //     "This application is for collectors! This is my first MERN stack application. I have learned and experimented many features and backend technologies in this application",
  // },
  {
    id: uuidv4(),
    name: 'Sports Shopping Store',
    img: '/projects/sport.jpg',
    stack: [
      'React',
      'Redux & Saga',
      'Ant Design',
      'Spring Boot',
      'PostgreSQL',
      'CSS',
    ],
    url: 'https://gowithshift.com/try/12stgym/menu',
    code_base: null,
    description:
      'This is an online store that I and my friends have been building for about 5 months. The client is from the Middle East. I was working on the frontend of the project, and the project is still in progress.',
  },
  {
    id: uuidv4(),
    name: 'Pupmost',
    img: '/projects/pupmost.png',
    stack: [
      'Next.js 13 and React',
      'Next Auth',
      'MongoDB Atlas',
      'Redux Toolkit',
      'React-hook-form',
      'Resend for emails',
      'Tailwind CSS',
      'Framer Motion',
      'Vercel',
    ],
    url: 'https://www.pupmost.com',
    code_base: null,
    description:
      'This is a web application that provides comprehensive information about various dog breeds!',
  },
  {
    id: uuidv4(),
    name: 'Online School platform',
    img: '/projects/school.jpg',
    stack: ['React', 'Redux+Saga+Toolkit', 'HTML/CSS', 'PHP', 'PostgreSQL'],
    url: 'https://int42h.uz/',
    code_base: null,
    description:
      'This is an online educational platform that I have been building with my friends for a local startup',
  },
  {
    id: uuidv4(),
    name: 'Furniture Store',
    img: '/projects/funiro.jpg',
    stack: ['HTML5', 'CSS3', 'SASS', 'JavaScript', 'Jquery', 'Github Pages'],
    url: 'https://funiro-landing.netlify.app',
    code_base: null,
    description:
      'This is a template online store website that I built when I was learning Frontend development. The website is fully functional and responsive in modern design.',
  },
  {
    id: uuidv4(),
    name: 'Network Canvas Documentation',
    img: '/projects/docs-site.png',
    stack: [
      'Next.js 14',
      'TypeScript',
      'Zod',
      'Remark/Rehype plugins',
      'Framer Motion',
      'Markdown MDX',
      'Tailwind CSS and Radix UI components',
      'Vercel for deployment',
      'Algolia Search',
      'Mendable AI',
    ],
    url: 'https://documentation.networkcanvas.com',
    code_base:
      'https://github.com/complexdatacollective/network-canvas-monorepo/tree/main/apps/documentation',
    description:
      'This documentation site covers various aspects of Network Canvas, including detailed information about its primary applications and related products.',
  },
  {
    id: uuidv4(),
    name: 'Recruiting Platform',
    img: '/projects/recruit.jpg',
    stack: [
      'React',
      'Redux & Saga',
      'TypeScript',
      'Material UI',
      'Spring Boot',
      'PostgreSQL',
    ],
    url: 'http://sustech.au/appfrm',
    code_base: null,
    description:
      'This is a recruiting platform that I and my friends have been building for about 2 months now. I have been building the Frontend of this project ever since. The project is still in progress.',
  },
  {
    id: uuidv4(),
    name: 'Invoice Builder App',
    img: '/projects/invoice-builder.png',
    stack: [
      'Next.js 14 and React 18 (with TypeScript)',
      'Prisma + PostgreSQL for DB',
      'React-Hook-Form + Zod for forms',
      'React-Markdown for rendering markdown',
      'React-To-Print for printing the page',
      'Tailwind CSS + Shadcn/UI',
      'Clerk for Authentication',
    ],
    url: 'https://invoice-builder-mrkarimoff.vercel.app',
    code_base: 'https://github.com/mrkarimoff/invoice-builder',
    description:
      'The Invoice Builder App is a web application developed using Next.js, React, and TypeScript. It allows users to easily create and print professional invoices.',
  },
  {
    id: uuidv4(),
    name: 'Portfolio Website',
    img: '/projects/william.png',
    stack: [
      'HTML5',
      'CSS3',
      'SASS',
      'JavaScript',
      'Redux Toolkit',
      'Github Pages',
    ],
    url: 'http://willmullins.net',
    code_base: null,
    description:
      'This is a portfolio website I made for my first client from USA. ',
  },
  // {
  //   id: uuidv4(),
  //   name: "The Weather App",
  //   img: "/projects/weather.png",
  //   stack: [
  //     "React",
  //     "Redux+Saga+Toolkit",
  //     "TypeScript",
  //     "HTML/CSS",
  //     "Material UI",
  //     "Victory chart",
  //     "GeoLocation API",
  //     "OpenWeather API",
  //   ],
  //   url: "https://mrkarimoff.github.io/weather-app-ts",
  //   code_base: "https://github.com/mrkarimoff/weather-app-ts",
  //   description:
  //     "This is a weather app that I have built using OpenWeather API which provides hourly weather forecast",
  // },
];

export type Project = (typeof projects)[0];

export default projects;
