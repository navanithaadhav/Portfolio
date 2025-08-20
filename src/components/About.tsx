import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Server, Globe, Database, Palette, Layers } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  const services = [
    {
      icon: <Code2 size={24} className="text-primary-400" />,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive, and modern user interfaces using React, Tailwind CSS, and more.',
    },
    {
      icon: <Server size={24} className="text-primary-400" />,
      title: 'Backend Development',
      description: 'Building robust server-side applications with Node.js, Express, and MongoDB.',
    },
    {
      icon: <Database size={24} className="text-primary-400" />,
      title: 'Database Design',
      description: 'Designing and implementing efficient database structures with MongoDB and SQL databases.',
    },
    {
      icon: <Globe size={24} className="text-primary-400" />,
      title: 'Full Stack Solutions',
      description: 'Developing end-to-end solutions from concept to deployment with the MERN stack.',
    },
    {
      icon: <Palette size={24} className="text-primary-400" />,
      title: 'UI/UX Implementation',
      description: 'Implementing beautiful user interfaces with Bootstrap, Material UI, and Tailwind CSS.',
    },
    {
      icon: <Layers size={24} className="text-primary-400" />,
      title: 'API Integration',
      description: 'Connecting your application with third-party services and APIs for enhanced functionality.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-dark-200 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            About <span className="text-primary-500">Me</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center" ref={ref}>
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white">
              Full Stack Developer with a passion for creating innovative web solutions
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a dedicated MERN stack developer with extensive experience in building modern 
              web applications. My journey in web development has equipped me with a diverse set of skills 
              spanning both frontend and backend technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Beyond the MERN stack, I'm proficient in a range of technologies including Bootstrap, 
              Material UI, Tailwind CSS, Python, PHP, and jQuery. I'm constantly learning and 
              adapting to new technologies to create the best possible solutions for my clients.
            </p>
            <div className="pt-4">
              <a
                href={import.meta.env.VITE_RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-300 inline-block"
                download
              >
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-100 rounded-lg p-6 border border-gray-800 shadow-xl hover:border-primary-500/30 transition-colors duration-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;