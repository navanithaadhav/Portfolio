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
      className="py-24 lg:py-32 bg-[#020617] relative"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="text-center mb-16">
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
                My{' '}
                <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((category: SkillCategory, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-dark-100/40 border border-gray-800/60 backdrop-blur-md rounded-2xl p-8 hover:border-primary-500/30 transition-all duration-300 hover:transform hover:-translate-y-2 shadow-lg"
              >
                <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2 border-b border-gray-800/60 pb-4">
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
                      <div className="w-14 h-14 bg-[#0a0f25] border border-gray-800/50 rounded-xl flex items-center justify-center mb-3 text-primary-400 group-hover:bg-primary-500/10 group-hover:border-primary-500/30 group-hover:text-primary-300 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.2)] group-hover:shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                        {renderIcon(skill.icon)}
                      </div>
                      <span className="text-gray-400 text-xs font-medium group-hover:text-gray-200 transition-colors duration-200 leading-tight">
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