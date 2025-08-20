import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveLink: string;
  repoLink: string;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product management, user authentication, and payment processing.",
      image: "https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ["Full Stack", "MERN"],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redux", "Stripe API"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "https://images.pexels.com/photos/3785927/pexels-photo-3785927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ["Full Stack", "MERN"],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      id: 3,
      title: "Finance Dashboard",
      description: "An interactive dashboard for tracking personal finances with data visualization and budget planning.",
      image: "https://images.pexels.com/photos/3943716/pexels-photo-3943716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ["Frontend", "Data Visualization"],
      technologies: ["React", "D3.js", "Material UI", "Firebase"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      id: 4,
      title: "Social Media Platform",
      description: "A social networking platform with real-time chat, user profiles, and content sharing capabilities.",
      image: "https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ["Full Stack", "MERN"],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "AWS S3"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      id: 5,
      title: "Blog CMS",
      description: "A content management system for blogs with rich text editing, user management, and analytics.",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ["Backend", "CMS"],
      technologies: ["Node.js", "Express", "MongoDB", "JWT Authentication"],
      liveLink: "#",
      repoLink: "#",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "A weather forecasting application with location search, daily and hourly forecasts, and interactive maps.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: ["Frontend", "API Integration"],
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      liveLink: "#",
      repoLink: "#",
    },
  ];

  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', 'MERN', 'Frontend', 'Backend', 'Full Stack', 'API Integration', 'CMS', 'Data Visualization'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-dark-300 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            My <span className="text-primary-500">Projects</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 max-w-2xl mx-auto"
          >
            Browse through my recent projects showcasing my skills and expertise in full-stack development.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-dark-100 text-gray-300 hover:bg-dark-200'
              } transition-colors duration-300`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                  <h3 className="text-white text-lg font-semibold">{project.title}</h3>
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