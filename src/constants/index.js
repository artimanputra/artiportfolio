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
  TCE
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
    title: "Senior Software Engineer",
    company_name: "Tata Consulting Engineers (TCE)",
    icon: TCE,
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      "Contributed to end-to-end web application development, covering database design, backend APIs, and frontend UI enhancements.",
      "Implemented and optimized scalable RESTful APIs and business logic, reducing processing time for key workflows by ~20–30%.",
      "Modernized legacy modules by refactoring and restructuring code, improving system performance, maintainability, and reusability.",
      "Enhanced UI functionality and accessibility, leading to smoother user experience and fewer UI-related support tickets.",
      "Worked in Agile sprints with cross-functional teams, handling requirement gathering, task estimation, and mentoring new joiners on workflows and best coding practices.",
      "Tech stack: React.js, JavaScript, Microsoft SQL Server, Entity Framework, REST APIs, Git, Azure DevOps, OpenXML."
    ],
  },
  {
    title: "Microsoft Learn Student Ambassador",
    company_name: "BETA MLSA",
    icon: MLSA,
    iconBg: "#383E56",
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
