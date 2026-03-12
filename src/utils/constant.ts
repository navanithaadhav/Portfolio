import { SkillCategory, Project } from '../types/intex';

export const SKILLS: SkillCategory[] = [
  {
    name: 'AI / Machine Learning',
    skills: [
      { name: 'MediaPipe', icon: 'scan-face' },
      { name: 'OpenCV', icon: 'aperture' },
      { name: 'LangChain', icon: 'network' },
      { name: 'OpenAI API', icon: 'brain-circuit' },
      { name: 'ChromaDB', icon: 'database-backup' },
      { name: 'RAG', icon: 'library' },
      { name: 'PyPDF', icon: 'file-search' },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      { name: 'Docker', icon: 'container' },
      { name: 'AWS EC2', icon: 'cloud' },
      { name: 'Git / GitHub', icon: 'github' },
      { name: 'Vercel', icon: 'triangle' },
      { name: 'Render', icon: 'layers' },
      { name: 'Railway', icon: 'train-track' },
    ],
  },
  {
    name: 'Database & Auth',
    skills: [
      { name: 'MongoDB', icon: 'database' },
      { name: 'Mongoose', icon: 'database-zap' },
      { name: 'PostgreSQL', icon: 'server-crash' },
      { name: 'JWT Auth', icon: 'key' },
    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'server' },
      { name: 'Express', icon: 'server-cog' },
      { name: 'Python', icon: 'file-code' },
      { name: 'FastAPI', icon: 'zap' },
      { name: 'Uvicorn', icon: 'flame' },
      { name: 'REST API', icon: 'webhook' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: 'atom' },
      { name: 'TypeScript', icon: 'braces' },
      { name: 'HTML / CSS', icon: 'file-code-2' },
      { name: 'Tailwind CSS', icon: 'wind' },
      { name: 'Axios', icon: 'plug' },
      { name: 'React Markdown', icon: 'file-text' },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Educrust Learning Management System",
    description: "A full-featured Learning Management System with separate dashboards for students, teachers, and admins. Includes course management, authentication, and certificate generation.",
    image: "https://images.pexels.com/photos/4145193/pexels-photo-4145193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["Full Stack", "MERN"],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT Authentication", "AWS EC2"],
    liveLink: "https://educrusts.online/",
    repoLink: "https://github.com/navanithaadhav/Educrust-LMS.git",
    icon: "graduation-cap"
  },
  {
    id: 2,
    title: "Herbal Hot E-Commerce Platform",
    description: "A full-stack herbal product e-commerce platform with product listings, cart management, secure checkout, and admin product management.",
    image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["Full Stack", "MERN"],
    technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Docker", "AWS EC2"],
    liveLink: "https://herbalhot.shop/",
    repoLink: "https://github.com/navanithaadhav/Herbal_Hot.git",
    icon: "shopping-bag"
  },
  {
    id: 3,
    title: "MERN Authentication System",
    description: "A secure authentication system built using the MERN stack featuring JWT authentication, user registration, login, and protected routes.",
    image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    category: ["Backend", "Authentication"],
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "React"],
    liveLink: "https://mern-auth-gamma-weld.vercel.app/",
    repoLink: "https://github.com/navanithaadhav/MERN-Auth.git",
    icon: "lock"
  },
  {
    id: 4,
    title: "AI Attendance System",
    description: "An AI-powered attendance management system that uses real-time face recognition for seamless check-in and check-out using MediaPipe and OpenCV.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    category: ["AI", "Full Stack"],
    technologies: ["React", "FastAPI", "MediaPipe", "OpenCV", "MongoDB", "Docker"],
    liveLink: "https://ai-attendance-navan.vercel.app",
    repoLink: "https://github.com/navanithaadhav/AI_Attendance_system",
    icon: "scan-face"
  },
  {
    id: 5,
    title: "AI Resume Analyzer",
    description: "An AI-powered resume analysis tool that compares resumes with job descriptions and provides skill gap analysis using LangChain and OpenAI.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
    category: ["AI", "Full Stack"],
    technologies: ["React", "Node.js", "LangChain", "OpenAI API", "MongoDB"],
    liveLink: "https://airesumetracker.vercel.app/",
    repoLink: "https://github.com/navanithaadhav/AI_Resume_Tracker.git",
    icon: "file-search"
  },
  {
    id: 6,
    title: "DocuChat AI",
    description: "An intelligent RAG-powered document interaction platform that enables users to upload multiple PDF files and have interactive conversations with their content.",
    image: "https://images.pexels.com/photos/6771899/pexels-photo-6771899.jpeg",
    category: ["AI", "Full Stack"],
    technologies: ["React", "FastAPI", "LangChain", "Google Gemini API", "Pinecone", "MongoDB"],
    liveLink: "https://docuchat-ai.vercel.app/",
    repoLink: "https://github.com/navanithaadhav/DocuChatAI.git",
    icon: "message-square"
  }
];