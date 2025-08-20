import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  const socialLinks = [
    { Icon: GitHub, href: import.meta.env.VITE_GITHUB_URL || '#', label: 'GitHub' },
    { Icon: Linkedin, href: import.meta.env.VITE_LINKEDIN_URL || '#', label: 'LinkedIn' },
    { Icon: Mail, href: `mailto:${import.meta.env.VITE_EMAIL_ADDRESS}`, label: 'Email' },
  ];

  return (
    <div className="relative">
      <ParticleBackground />
      
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-dark-200/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex-shrink-0">
              <ScrollLink
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="font-mono text-xl font-semibold cursor-pointer"
              >
                <span className="text-primary-500">&lt;</span>
                <span className="text-accent-400">Navanitha</span>
                <span className="text-primary-500">/&gt;</span>
              </ScrollLink>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:space-x-8">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-300 hover:text-primary-400 transition-colors px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                  activeClass="text-primary-400"
                >
                  {link.name}
                </ScrollLink>
              ))}
            </nav>
            
            {/* Social Icons */}
            <div className="hidden md:flex items-center space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
            
            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <button
                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          } overflow-hidden bg-dark-200/95 backdrop-blur-md`}
        >
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="text-gray-300 hover:text-primary-400 block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                activeClass="text-primary-400"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </ScrollLink>
            ))}
            <div className="pt-4 flex space-x-6 border-t border-gray-700/50 mt-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;