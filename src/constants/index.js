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
  TCE,  
  splitstudio,
  resumind
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
      "Developing full‑stack web applications including database design, backend APIs, and frontend enhancements.",
    "Built and optimized scalable REST APIs, improving workflow performance by ~20–30%.",
    "Refactored legacy modules to boost system speed, maintainability, and code quality.",
    "Improved UI functionality and accessibility, reducing UI-related issues and support overhead.",
    "Collaborating in Agile sprints for requirement analysis, task estimation, and mentoring new team members.",
    "Tech stack: React.js, JavaScript, SQL Server, Entity Framework, REST APIs, Git, Azure DevOps, OpenXML."
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
    title: "Microsoft Learn Student Ambassador",
    company_name: "BETA MLSA",
    icon: MLSA,
    iconBg: "#383E56",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Organized and hosted technical events on various topics.",
      "Taught technical topics such as Git and GitHub to 100+ students.",
    ],
  },
];


const projects = [
  {
      name: "Split Studio",
      description:
        "Video management web app for organizing and splitting video.",
      tags: [
        { name: "nextjs", color: "blue-text-gradient" },
        { name: "python", color: "green-text-gradient" },
        { name: "fastapi", color: "pink-text-gradient" },        
        { name: "postgresql", color: "blue-text-gradient" },
        { name: "pytest", color: "green-text-gradient" },
        { name: "docker", color: "pink-text-gradient" },
        { name: "ffmpeg", color: "green-text-gradient" },
        { name: "vercel", color: "pink-text-gradient" },

      ],
      image: splitstudio,            
      source_code_link: "https://github.com/artimanputra/videoManagementApp",
      deploy_Link: "https://splitstudio.artimanputra.site/"
    },
    {
      name: "Resumind",
      description:
        "AI-powered resume analyzer that checks ATS score and provides improvement insights.",
      tags: [
        { name: "javascript", color: "blue-text-gradient" },
        { name: "react", color: "blue-text-gradient" },
        { name: "tailwindcss", color: "green-text-gradient" },
        { name: "react-router", color: "pink-text-gradient" },
        { name: "docker", color: "green-text-gradient" }
      ],
      image: resumind,               
      source_code_link: "https://github.com/artimanputra/airesumeanalyzer",
      deploy_Link: "https://resumind.artimanputra.site/"
    },
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
