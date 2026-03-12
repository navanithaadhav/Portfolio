import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Code2,
  Server,
  Globe,
  Database,
  Brain,
  Cloud,
  Calendar,
  MapPin,
  GraduationCap,
  Terminal,
} from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [servicesRef, servicesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [timelineRef, timelineInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      icon: <Code2 size={24} />,
      title: 'Frontend Development',
      description:
        'React, TypeScript, Tailwind CSS — building responsive, pixel-perfect interfaces with smooth animations.',
      gradient: 'from-primary-600 to-primary-400',
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description:
        'Node.js, Express, FastAPI — designing RESTful APIs, authentication systems, and server architectures.',
      gradient: 'from-primary-600 to-primary-400',
    },
    {
      icon: <Database size={24} />,
      title: 'Database Architecture',
      description:
        'MongoDB, Mongoose — designing efficient schemas, aggregation pipelines, and optimized queries.',
      gradient: 'from-primary-600 to-primary-400',
    },
    {
      icon: <Globe size={24} />,
      title: 'Full Stack Solutions',
      description:
        'End-to-end development from concept to deployment — LMS, e-commerce, and authentication systems.',
      gradient: 'from-primary-600 to-primary-400',
    },
    {
      icon: <Brain size={24} />,
      title: 'AI Integration',
      description:
        'LangChain, OpenAI, MediaPipe, OpenCV — building intelligent features like face recognition and resume analysis.',
      gradient: 'from-primary-600 to-primary-400',
    },
    {
      icon: <Cloud size={24} />,
      title: 'Cloud & DevOps',
      description:
        'AWS EC2, Docker, Vercel, Railway — containerized deployments and cloud infrastructure.',
      gradient: 'from-primary-600 to-primary-400',
    },
  ];

  const journeyItems = [
    {
      year: '2023',
      title: 'Started Web Development Journey',
      description:
        'Dived into HTML, CSS, JavaScript and quickly transitioned to the MERN stack.',
      icon: <GraduationCap size={18} />,
    },
    {
      year: '2024',
      title: 'Built Production Applications',
      description:
        'Developed and deployed Educrust LMS & Herbal Hot e-commerce — real production apps serving real users.',
      icon: <Terminal size={18} />,
    },
    {
      year: '2025',
      title: 'AI & Cloud Integration',
      description:
        'Expanded into AI/ML with face recognition attendance systems and AI resume analyzers. Mastered Docker & AWS.',
      icon: <Brain size={18} />,
    },
  ];

  const projectSkills = [
    { category: 'AI / Machine Learning', skills: ['MediaPipe', 'OpenCV', 'LangChain', 'OpenAI API', 'ChromaDB', 'RAG', 'PyPDF'] },
    { category: 'Cloud & DevOps', skills: ['Docker', 'AWS EC2', 'Git', 'Vercel', 'Render', 'Railway'] },
    { category: 'Database & Auth', skills: ['MongoDB', 'PostgreSQL', 'JWT Authentication', 'Mongoose'] },
    { category: 'Backend', skills: ['Node.js', 'Express', 'Python', 'FastAPI', 'Uvicorn'] },
    { category: 'Frontend', skills: ['React', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Axios', 'React Markdown'] }
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-dark-200 relative overflow-hidden">
      {/* Subtle background effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary-900/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-400 text-sm font-mono tracking-widest uppercase mb-3 block">
              // who am i
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            About{' '}
            <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
              Me
            </span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 mx-auto mb-6 origin-center rounded-full"
          />
        </div>

        {/* Main content - Bio + Tech Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start mb-24 lg:mb-32" ref={ref}>
          {/* Bio column */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm">
                <Calendar size={14} />
                3+ Years Experience
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-400 text-sm">
                <MapPin size={14} />
                India
              </span>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              I build{' '}
              <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                production-ready
              </span>{' '}
              web applications that solve real problems
            </h3>

            <p className="text-gray-300 text-lg leading-loose font-light">
              I'm a Full Stack Developer specializing in the{' '}
              <span className="text-primary-400 font-medium">MERN stack</span> with a growing expertise in{' '}
              <span className="text-secondary-400 font-medium">AI/ML integrations</span>. Over 3 years, I've
              built and deployed everything from Learning Management Systems and E-Commerce platforms to
              AI-powered attendance and resume analysis tools.
            </p>

            <p className="text-gray-400 text-lg leading-loose font-light">
              What sets me apart is that I don't just build demos — I ship{' '}
              <span className="text-white font-medium">real, deployed products</span>. My apps run on
              AWS EC2, are containerized with Docker, and serve actual users. I'm passionate about clean
              architecture, performance optimization, and creating seamless user experiences.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a
                href={import.meta.env.VITE_RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-3.5 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 inline-flex items-center justify-center gap-2"
                download
              >
                <span className="relative z-10">Download Resume</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </motion.div>

          {/* Journey Timeline Column */}
          <motion.div
            className="lg:col-span-2 pt-2"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            ref={timelineRef}
          >
            <div>
              <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <GraduationCap size={20} className="text-primary-400" />
                My Journey
              </h4>
              <div className="relative">
                {/* Vertical Line */}
                <motion.div
                  className="absolute left-[23px] top-2 bottom-6 w-px bg-gradient-to-b from-primary-500 via-secondary-500 to-transparent"
                  initial={{ scaleY: 0 }}
                  animate={timelineInView ? { scaleY: 1 } : {}}
                  transition={{ duration: 1.2 }}
                  style={{ transformOrigin: 'top' }}
                />

                {journeyItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start gap-6 mb-10 last:mb-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  >
                    {/* Icon Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        className="w-12 h-12 rounded-full bg-[#020617] border border-primary-500/30 flex items-center justify-center text-primary-400 shadow-[0_0_15px_rgba(14,165,233,0.15)]"
                        whileHover={{ scale: 1.1, borderColor: '#38bdf8', boxShadow: '0 0 25px rgba(14,165,233,0.3)' }}
                      >
                        {item.icon}
                      </motion.div>
                    </div>

                    {/* Text Content */}
                    <div className="pt-1.5">
                      <span className="text-primary-400 font-mono text-xs font-semibold tracking-wider uppercase">{item.year}</span>
                      <h4 className="text-lg font-bold text-white mt-1 mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>



        {/* Services grid */}
        <div ref={servicesRef}>
          <motion.h3
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0 }}
            animate={servicesInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            What I{' '}
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
              Do
            </span>
          </motion.h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={servicesInView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-dark-100/40 rounded-2xl p-8 border border-gray-800/60 backdrop-blur-md hover:border-gray-700/80 transition-all duration-500 overflow-hidden shadow-lg"
                whileHover={{ y: -6 }}
              >
                {/* Gradient glow on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-[0.04] transition-opacity duration-500 rounded-xl`}
                />

                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} mb-6 text-white shadow-lg shadow-black/20`}
                >
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;