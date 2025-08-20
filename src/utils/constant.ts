import { SkillCategory, Project } from '../types/intex';

export const SKILLS: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: 'boxes' },
      { name: 'JavaScript', icon: 'code' },
      { name: 'TypeScript', icon: 'code-2' },
      { name: 'HTML5', icon: 'file-code' },
      { name: 'CSS3', icon: 'palette' },
      { name: 'Redux', icon: 'database' },
      { name: 'Tailwind CSS', icon: 'wind' },
      { name: 'Material Ui', icon: 'layout' },

    ],
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', icon: 'server' },
      { name: 'Express', icon: 'server-cog' },
      { name: 'MongoDB', icon: 'database' },
      { name: 'REST API', icon: 'webhook' },
      { name: 'GraphQL', icon: 'git-branch' },
    ],
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', icon: 'git-branch' },
      { name: 'GitHub', icon: 'github' },
      { name: 'VS Code', icon: 'code' },
      { name: 'Webpack', icon: 'package' },
      { name: 'Docker', icon: 'container' },
      { name: 'AWS', icon: 'cloud' },
    ],
  },
  {name:'Other Skills',
    skills: [
      {name:'wordpress', icon: 'layers'},
      {name:'Python', icon: 'file-code-2'},
      {name:'php', icon: 'code'},
      {name:'jquery', icon: 'dollar-sign'},
      {name:'json', icon: 'file-json-2' },
    ],
},
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, product listings, cart functionality, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    imageUrl: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, task assignments, and progress tracking features.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    imageUrl: 'https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'A dashboard that aggregates and visualizes data from various social media platforms using REST APIs.',
    technologies: ['React', 'Node.js', 'Express', 'Chart.js', 'REST API'],
    imageUrl: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    githubUrl: '#',
    liveUrl: '#',
  },
];