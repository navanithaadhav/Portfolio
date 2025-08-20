import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SKILLS } from '../utils/constant';
import * as LucideIcons from 'lucide-react';
import type { SkillCategory, Skill } from '../types/intex';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const renderIcon = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName.charAt(0).toUpperCase() + iconName.slice(1).replace(/-./g, x => x[1].toUpperCase())];
    return Icon ? <Icon size={40} /> : null;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                My Skills
              </h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <div className="w-16 h-1 bg-purple-500 mx-auto mb-6"></div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Specialized in MERN stack development with a strong foundation in modern web technologies.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((category: SkillCategory, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-white mb-6 pb-2 border-b border-gray-700">
                  {category.name}
                </h3>
                
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill: Skill, skillIndex: number) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex flex-col items-center text-center group"
                    >
                      <div className="w-16 h-16 bg-gray-700/50 rounded-lg flex items-center justify-center mb-2 text-purple-400 group-hover:bg-gray-600/50 group-hover:text-purple-300 transition-all duration-200">
                        {renderIcon(skill.icon)}
                      </div>
                      <span className="text-gray-300 text-xs group-hover:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;