import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";

export const HERO_CONTENT = `I am a dedicated junior software developer interested in building efficient and scalable web applications. With a solid foundation in programming, I have developed skills in front-end technologies like React and back-end technologies such as Node.js, Laravel, and MySQL. My goal is to continue growing my expertise and increase to App Developer.`;

export const ABOUT_TEXT = `I am a highly motivated individual with a strong work ethic and a commitment to excellence. I am determined to succeed and I am always looking for new challenges to help me grow both personally and professionally. I am passionate about learning new things and I enjoy discovering new ways to solve problems. With 3 years of student at university, I have worked with a variety of technologies, including React, Flutter, Next.js, Node.js, MySQL, and PostgreSQL. My journey in web development began with a deep curiosity for how things work. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Ai Traffic Simulation",
    image: project1,
    description:
      "Developed a simulation for AI-driven traffic light control to optimize traffic flow and reduce congestion.",
    technologies: ["Python", "PyTorch", "Reinforcement Learning"],
  },
  {
    title: "Doctor Appointment",
    image: project2,
    description:
      "An application for appointment task, dashbord for patient traking, add and ignore doctors.",
    technologies: ["React", "Laravel", "Vite", "MySql", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Vite", "Framer Motion", "Tailwind"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, deleting post, and Login.",
    technologies: ["React", "Tailwind"],
  },
  {
    title: "AI Image Generator",
    image: project5,
    description:
      "An AI technology that is used to generate new images by learning patterns from existing data is known as an AI image generator app.",
    technologies: ["React JS", "OpenAI api"],
  },
];

export const CONTACT = {
  address: "Sangkat Ruessei Kaev, Phnom Penh",
  phoneNo: "+855 81 703 066 ",
  email: "chuonpiseth05@gmail.com",
};
