import {
  mobile,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  meta,
  threejs,
  supportGenie,
  product,
  persistent,
  reverr,
  nikestore,
  admin,
  nextjs,
  firebase,
  python,
  cpp,
  prisma,
  aws,
  openinapp,
  casecobra,
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
];

const services = [
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Product",
    icon: web,
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
    name: "Git",
    icon: git,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Machine Learning",
    icon: prisma,
  },
    {
    name: "Prodcut",
    icon: prisma,
  },
];

const experiences = [
  {
    title: "Technical Support Engineer",
    company_name: "Cidroy Technologies LLP",
    date: "June 2024 - August 2024",
    points: [
      "Technical Troubleshooting & SaaS Expertise: Provided expert-level support for SaaS products by diagnosing and resolving
complex issues, ensuring high customer satisfaction and reducing downtime.",
      "Customer Relationship Management: Managed interactions via email, phone, and live chat with professionalism and efficiency,
prioritizing and resolving queries to build strong customer relationships.",
      "Proactive Support & User Training: Delivered proactive support and conducted user training to prevent issues and enhance
product usage, driving higher adoption and retention rates.",
      "Knowledge Base Contribution: Authored documentation for troubleshooting processes, enhancing team efficiency and response time.",
    ],
  },
  {
    title: "Web developer & SEO Intern",
    company_name: "Support Genie",
    date: "January 2024 - April 202",
    points: [
      "Product Lifecycle Management: Managed e-commerce products, enhancing user experience and driving adoption.",
      " Customer Feedback-Driven Development: Used customer feedback to improve usability and engagement with data-driven insights.",
      " SEO & Content Optimization: Executed SEO and created product content to boost visibility and engagement.",
       "Cross-Functional Collaboration: Worked with engineering, sales, and marketing teams to align product development with business goals.",
      ],
  },
  {
    title: "Research Intern",
    company_name: ", ABV-IIITM",
    date: "May 2023 - July 2023",
    points: [
      "▪ Deep Learning & NLP Research: Worked on Level Relation Extraction using Deep Learning and NLP, developing models to extract entity relations from large datasets.",
      "Data Analysis & Model Improvement: Used advanced NLP techniques to enhance model accuracy, collaborating with the team to refine approaches for optimal results.",
    ],
  },

];

const projects = [
  {
    name: "House Price Prediction",
    description:
      "House Price Prediction: Developed a regression model to predict house prices in India using Python, incorporating data pre-processing and model iteration.",
    tags: [
      {
        name: "ML Algorithms",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "orange-text-gradient",
      },
    ],
    image: houseprice,
    source_code_link: "https://github.com/tanya-bharagava1/house-price-prediction",
    deployed_link: "https://adix002-house-price-prediction-appstream-gw9man.streamlit.app/",
  },
  {
    name: "Captcha Login Module",
    description:
      "Designed a secure captcha login module with HTML and JavaScript for dynamic alphanumeric and special character generation. Enhanced website security by improving user authentication through effective captcha implementation.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
    ],
    image: nikestore,
    source_code_link: "https://github.com/tanya-bharagava1/captchae",
    deployed_link: "file:///C:/Users/asus/OneDrive/Desktop/Captcha.html",
  },
  {
    name: "Online Stock Market Predictor",
    description:
      "a stock market prediction tool using Python and web scraping to gather data from official brand websites.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Data Analysis",
        color: "green-text-gradient",
      },
      {
        name: "Web Scraping",
        color: "orange-text-gradient",
      },
    ],
  },
  {
    name: "Netflix Clone",
    description:
      "This is a sleek React admin panel for seamless team management, contact organization, and data visualization with Material-UI and @nivo charts.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/tanya-bharagava1/Netflix-clone",
    deployed_link: "",
  },
];

export { services, technologies, experiences, testimonials, projects };
