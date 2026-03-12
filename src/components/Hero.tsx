import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Download } from 'lucide-react';
import developerAvatar from '/developer_avatar.png?url';

const Hero = () => {
  const roles = useMemo(
    () => ['Full Stack Developer', 'MERN Specialist', 'AI Integrator', 'Cloud Engineer'],
    []
  );
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 80);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, currentRoleIndex, roles]);

  return (
    <section
      id="home"
      className="min-h-[100dvh] flex flex-col justify-center relative bg-[#020617] overflow-hidden pt-24 pb-12"
    >
      {/* Soft Ambient Background Glows */}
      <div className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary-600/10 rounded-full blur-[100px] pointer-events-none transform -translate-y-1/2" />
      <div className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary-600/5 rounded-full blur-[100px] pointer-events-none transform translate-y-1/2" />

      {/* Ultra Subtle Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to bottom, white 0%, transparent 90%)',
          WebkitMaskImage: 'linear-gradient(to bottom, white 0%, transparent 90%)'
        }}
      />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex-grow flex items-center">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-12">

          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left mt-10 lg:mt-0 xl:pr-16">
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)] animate-pulse" />
              <span className="text-gray-200 text-xs font-semibold tracking-wider uppercase">Available for new opportunities</span>
            </motion.div> */}

            <motion.h1
              className="font-bold tracking-tight text-white mb-6 leading-[1.2]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            >
              <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-300 font-medium mb-2 tracking-wide font-light">
                Hi, I'm Navanitha.
              </span>
              <span className="inline-block whitespace-nowrap">
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-200 drop-shadow-[0_2px_10px_rgba(14,165,233,0.3)]">
                  {displayText}
                </span>
                <span className="text-3xl sm:text-4xl lg:text-5xl xl:text-[3.5rem] inline-block w-[3px] h-[0.9em] bg-white align-baseline ml-2 animate-pulse" style={{ animationDuration: '1s' }} />
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 mb-12 leading-loose font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              I design and engineer production-grade web applications. Blending robust <span className="text-gray-200 font-medium">MERN infrastructure</span> with elegant UI and cutting-edge <span className="text-gray-200 font-medium">AI integrations</span>.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
              >
                View Selected Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={import.meta.env.VITE_RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.03] text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 active:scale-95 transition-all duration-300 backdrop-blur-sm"
                download
              >
                <Download size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                Download Resume
              </a>
            </motion.div>

            {/* Premium Text-Only Stats */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-8 sm:gap-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <div className="flex flex-col items-center lg:items-start text-left">
                <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">3<span className="text-primary-400">+</span></span>
                <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.2em] mt-2 font-semibold">Years<br />Experience</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="flex flex-col items-center lg:items-start text-left">
                <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">5<span className="text-primary-400">+</span></span>
                <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.2em] mt-2 font-semibold">Major<br />Projects</span>
              </div>
              <div className="w-[1px] h-12 bg-white/10" />
              <div className="flex flex-col items-center lg:items-start text-left">
                <span className="text-4xl lg:text-5xl font-bold text-white tracking-tighter">10<span className="text-primary-400">+</span></span>
                <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.2em] mt-2 font-semibold">Tech<br />Stack</span>
              </div>
            </motion.div>
          </div>

          {/* Right Visual Subdued Premium */}
          <div className="flex-1 relative flex justify-center items-center w-full max-w-md lg:max-w-lg mx-auto lg:mr-0 mt-8 lg:mt-0">
            {/* The majestic subtle glow behind the floating pane */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-primary-500/5 blur-[80px] rounded-full pointer-events-none" />

            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[26rem] md:h-[26rem] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Beautiful Glass Pane holding the icon */}
              <div className="absolute inset-4 rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-2xl overflow-hidden shadow-2xl flex items-center justify-center p-8 group transition-all duration-700 hover:border-white/20 hover:bg-white/[0.04]">
                {/* Subtle inner animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500-[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <img
                  src={developerAvatar}
                  alt="Developer Avatar"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(14,165,233,0.2)] saturate-150 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Floating Glass Badges - Ultra Sleek */}
            <motion.div
              className="absolute top-[12%] -left-6 sm:-left-12 px-4 py-2 bg-dark-300/80 border border-primary-500/20 backdrop-blur-xl rounded-2xl shadow-2xl flex items-center gap-2.5"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
              <span className="text-gray-100 text-sm font-semibold tracking-wide">React</span>
            </motion.div>

            <motion.div
              className="absolute bottom-[18%] -right-6 sm:-right-8 px-4 py-2 bg-dark-300/80 border border-primary-500/20 backdrop-blur-xl rounded-2xl shadow-2xl flex items-center gap-2.5"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
              <span className="text-gray-100 text-sm font-semibold tracking-wide">Node.js</span>
            </motion.div>

            <motion.div
              className="absolute top-[65%] -left-2 sm:-left-8 px-4 py-2 bg-dark-300/80 border border-primary-500/20 backdrop-blur-xl rounded-2xl shadow-2xl flex items-center gap-2.5"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-primary-400 shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
              <span className="text-gray-100 text-sm font-semibold tracking-wide">AI/ML</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern minimal scroll indicator - detached to absolute bottom */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
        animate={{ y: [0, 8, 0], opacity: [0.3, 1, 0.3] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
      >
        <span className="text-[9px] mb-2 tracking-[0.4em] uppercase text-gray-400 font-semibold">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gray-400/80 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;