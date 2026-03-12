import React from 'react';
import { Link } from 'react-scroll';
import { ArrowUp, Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={18} />, href: import.meta.env.VITE_GITHUB_URL || '#', label: 'GitHub' },
    { icon: <Linkedin size={18} />, href: import.meta.env.VITE_LINKEDIN_URL || '#', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const contactInfo = [
    { icon: <MapPin size={16} />, text: 'Theni, Tamil Nadu, India' },
    { icon: <Mail size={16} />, text: import.meta.env.VITE_EMAIL_ADDRESS || 'navanithaweb@gmail.com', href: `mailto:${import.meta.env.VITE_EMAIL_ADDRESS}` },
    { icon: <Phone size={16} />, text: import.meta.env.VITE_MOBILE_NUMBER || '8778543730' },
  ];

  return (
    <footer className="bg-[#020617] border-t border-gray-800/60 pt-20 pb-10 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="font-mono text-xl font-bold mb-6 flex items-center gap-1">
              <span className="text-primary-500">&lt;</span>
              <span className="text-secondary-400">Navanitha</span>
              <span className="text-primary-500">/&gt;</span>
            </div>
            <p className="text-gray-400 mb-8 leading-relaxed font-light">
              Crafting production-ready full-stack applications with the MERN ecosystem and AI-powered intelligence. Dedicated to building digital products that solve real-world problems.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-lg bg-dark-100 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-widest text-sm">Navigation</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="group flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary-500 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-widest text-sm">Services</h3>
            <ul className="space-y-4">
              {['Web Development', 'MERN Stack', 'AI Integration', 'Cloud Deployment', 'UI/UX Design'].map((service) => (
                <li key={service} className="text-gray-400 font-light flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-800" />
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 uppercase tracking-widest text-sm">Contact Info</h3>
            <ul className="space-y-5">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-500 mt-1">{info.icon}</span>
                  {info.href ? (
                    <a href={info.href} className="text-gray-400 hover:text-primary-400 transition-colors font-light">
                      {info.text}
                    </a>
                  ) : (
                    <span className="text-gray-400 font-light">{info.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/60 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-gray-500 text-sm font-light">
                © {currentYear} Navanitha. Designed & Built with <span className="text-rose-500">❤️</span> using React & Tailwind.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={800}
                className="flex items-center gap-2 px-5 py-2.5 bg-dark-100 border border-gray-800 text-gray-400 rounded-full hover:text-white hover:border-primary-500/50 hover:bg-primary-500/5 transition-all duration-300 cursor-pointer shadow-xl shadow-black/20"
              >
                <span className="text-xs font-bold uppercase tracking-widest">Back to top</span>
                <ArrowUp size={16} className="animate-bounce" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;