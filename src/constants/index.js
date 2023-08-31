import {
  mobile,
  backend,
  creator,
  web,
  arti,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  github_tech,
  postman,
  sql,
  google,
  MLSA,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id:"links",
    title:"Social Link"
  }
];

const services = [
  {
    title: "",
    icon: arti,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  // {
  //   title: "Backend Developer",
  //   icon: backend,
  // },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github_tech,
  },
  {
    name: "postman",
    icon: postman,
  },
];

const experiences = [
  {
    title: "Microsoft Learn Student Ambassador",
    company_name: "BETA MLSA",
    icon: MLSA,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Organized and hosted technical events on various topics.",
      "Taught technical topics such as Git and GitHub to 100+ students.",
    ],
  },
  {
    title: "Google Developer Student Club GCOEA",
    company_name: "Founder",
    icon: google,
    iconBg: "#383E56",
    date: "July 2022- April 2023",
    points: [
      "Mentoring and supporting peers and junior team members.",
      "Learned leadership skills and communication skills",
      "Organized and hosted 15+ events on different technical and non-technical topic",
    ],
  },
  {
    title: "Postman Student Expert",
    company_name: "Postman",
    icon: postman,
    iconBg: "#383E56",
    date: "February 2022 - Present",
    points: [
      "Designed and implemented API integration system in JavaScript.",
      "Build and successfully send requests in Postman using a variety of methods including GET, POST, PUT and DELETE.",
    ],
  },
];


const projects = [
  {
    name: "Happy Tails",
    description:
      "Web-Based application for pet welfare including pet adoption,volunteering, product purchasing, and donations.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/SarthakChandurkar/HappyTails",
    deploy_Link:"https://happytails-es0e.onrender.com/",
  },
  {
    name: "Articles Summarizer ",
    description:
      "Simplify your reading with Summrizer, an open-source article summarizer that transforms lengthy articles into clear and concise summaries.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "openAI-api",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/artimanputra/ai_summarizer",
    deploy_Link:"https://ai-sumz-dtxb.onrender.com/",
  },
  {
    name: "Antswap",
    description:
      "Swap, earn and build with Antswap's programmable liquidity network and unleash the full potential of your assets.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascipt",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/artimanputra/antswap",
    deploy_Link:"https://test1-yuur.onrender.com/",
  },
];

export { services, technologies, experiences, projects };
