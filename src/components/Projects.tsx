import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

import Aiattendance from '../assets/images/Aiattendance.png';
import Airesume from '../assets/images/Airesume.png';
import Docuchat from '../assets/images/Docuchat.png';
import educruts from '../assets/images/educruts.png';
import herbalhot from '../assets/images/herbalhot.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveLink: string;
  repoLink: string;
  icon: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "AI Attendance System",
      description:
        "An AI-powered attendance management system that uses real-time face recognition for seamless check-in and check-out. Features include user registration with face encoding, attendance tracking with detailed reports, and a dashboard with analytics — all powered by MediaPipe and OpenCV.",
      image: Aiattendance,
      category: ["AI", "Full Stack"],
      technologies: ["React", "FastAPI", "MediaPipe", "OpenCV", "MongoDB", "Docker"],
      liveLink: "https://ai-attendance-navan.vercel.app",
      repoLink: "https://github.com/navanithaadhav/AI_Attendance_system",
      icon: "ScanFace"
    },
    {
      id: 2,
      title: "DocuChat AI",
      description: "An intelligent RAG-powered document interaction platform that enables users to upload multiple PDF files and have interactive conversations with their content. It uses advanced Retrieval-Augmented Generation to provide context-aware answers and deep insights using Google Gemini and LangChain.",
      image: Docuchat,
      category: ["AI", "Full Stack"],
      technologies: ["React", "FastAPI", "LangChain", "Google Gemini API", "Pinecone", "MongoDB"],
      liveLink: "https://docu-chat-ai-iota.vercel.app/",
      repoLink: "https://github.com/navanithaadhav/DocuChatAI.git",
      icon: "MessageSquare"
    },
    {
      id: 3,
      title: "AI Resume Analyzer",
      description:
        "An AI-powered resume analysis tool that compares resumes with job descriptions and provides skill gap analysis, ATS optimization suggestions, and improvement recommendations using LangChain and OpenAI.",
      image: Airesume,
      category: ["AI", "Full Stack"],
      technologies: ["React", "Node.js", "LangChain", "OpenAI API", "MongoDB"],
      liveLink: "https://airesumetracker.vercel.app/",
      repoLink: "https://github.com/navanithaadhav/AI_Resume_Tracker.git",
      icon: "FileSearch"
    },

    {
      id: 4,
      title: "Educrust LMS",
      description:
        "A full-featured Learning Management System with separate dashboards for students, teachers, and admins. Includes course management, authentication, and certificate generation.",
      image: educruts,
      category: ["Full Stack", "MERN"],
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT Auth", "AWS EC2"],
      liveLink: "https://educrusts.online/",
      repoLink: "https://github.com/navanithaadhav/Educrust-LMS.git",
      icon: "GraduationCap"
    },
    {
      id: 5,
      title: "Herbal Hot E-Commerce",
      description:
        "A full-stack herbal product e-commerce platform with product listings, cart management, secure checkout, and admin product management.",
      image: herbalhot,
      category: ["Full Stack", "MERN"],
      technologies: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Docker", "AWS EC2"],
      liveLink: "https://herbalhot.shop/",
      repoLink: "https://github.com/navanithaadhav/Herbal_Hot.git",
      icon: "ShoppingBag"
    },
    {
      id: 6,
      title: "MERN Auth System",
      description:
        "A secure authentication system built using the MERN stack featuring JWT authentication, user registration, login, and protected routes.",
      image: "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg",
      category: ["Backend", "Authentication"],
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "React"],
      liveLink: "https://mern-auth-gamma-weld.vercel.app/",
      repoLink: "https://github.com/navanithaadhav/MERN-Auth.git",
      icon: "Lock"
    },
  ];

  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'AI', 'Full Stack', 'MERN', 'Backend'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category.includes(filter));

  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon ? <Icon size={20} className="text-primary-400" /> : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="projects" className="py-24 bg-dark-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-900/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-400 text-sm font-mono tracking-widest uppercase mb-3 block">
              // my portfolio
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Featured <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${filter === category
                ? 'bg-primary-600 border-primary-500 text-white shadow-lg shadow-primary-600/20'
                : 'bg-dark-100 border-gray-800 text-gray-400 hover:border-primary-500/30'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-dark-100 rounded-lg overflow-hidden border border-gray-800 hover:border-primary-500/30 transition-all duration-300 shadow-xl group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-end items-center">
                  <div className="flex space-x-2">
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-400 transition-colors p-1 bg-dark-200/80 rounded-full"
                      aria-label="GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-primary-400 transition-colors p-1 bg-dark-200/80 rounded-full"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  {renderIcon(project.icon)}
                  <h3 className="text-white text-xl font-bold">{project.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="text-xs bg-dark-200 text-gray-400 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-dark-200 text-gray-400 px-2 py-1 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                <div className="flex justify-end">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 flex items-center text-sm transition-colors"
                  >
                    View Details <ChevronRight size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;