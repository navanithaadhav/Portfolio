
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {





  return (

    
    <>
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-secondary-400 font-medium text-lg md:text-xl mb-2">
                Hello, I'm a
              </h2>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              MERN Stack Developer
            </motion.h1>

            <motion.div
              className="text-gray-300 text-xl md:text-2xl max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p>Crafting modern web experiences with MongoDB, Express, React, and Node.js</p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="px-8 py-3 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700 transition-colors duration-300 cursor-pointer min-w-40 text-center"
              >
                View Projects
              </Link>

              <a
                href={import.meta.env.VITE_RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-dark-100 text-white border border-gray-700 font-medium rounded-md hover:bg-dark-200 transition-colors duration-300 flex items-center justify-center gap-2 min-w-40"
                download
              >
                <Download size={18} />
                Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-1 left-1/2 transform -translate-x-1/2"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }}
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="flex flex-col items-center cursor-pointer text-gray-400 hover:text-primary-400 transition-colors"
            >
              <span className="text-sm mb-2">Scroll Down</span>
              <ChevronDown size={24} />
            </Link>
          </motion.div>
        </div>

        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary-900/20 via-transparent to-transparent" />
      </section>
    </>
  );
};

export default Hero;