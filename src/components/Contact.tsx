import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MapPin, Mail, Phone, Github, Linkedin, MessageSquare, Twitter } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  const contactItems = [
    {
      icon: <MapPin size={22} />,
      title: 'Location',
      value: 'Theni, Tamil Nadu, India',
      gradient: 'from-primary-600 to-primary-400'
    },
    {
      icon: <Mail size={22} />,
      title: 'Email',
      value: import.meta.env.VITE_EMAIL_ADDRESS || 'navanithaweb@gmail.com',
      gradient: 'from-primary-600 to-primary-400'
    },
    {
      icon: <Phone size={22} />,
      title: 'Phone',
      value: import.meta.env.VITE_MOBILE_NUMBER || '8778543730',
      gradient: 'from-primary-600 to-primary-400'
    },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, href: import.meta.env.VITE_GITHUB_URL || '#', label: 'GitHub', color: 'hover:text-white' },
    { icon: <Linkedin size={20} />, href: import.meta.env.VITE_LINKEDIN_URL || '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter', color: 'hover:text-sky-400' },
    { icon: <MessageSquare size={20} />, href: import.meta.env.VITE_WHATSAPP_URL || '#', label: 'WhatsApp', color: 'hover:text-green-400' },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 bg-dark-200 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[100px] pointer-events-none translate-x-1/4 translate-y-1/4" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-400 text-sm font-mono tracking-widest uppercase mb-3 block">
              // let's talk
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mb-6 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16" ref={ref}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-5 group"
                    whileHover={{ x: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">{item.title}</h4>
                      <p className="text-lg font-medium text-white group-hover:text-primary-300 transition-colors">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <h3 className="text-xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-xl bg-dark-100 border border-gray-800 flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/10`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="p-6 bg-primary-500/5 border border-primary-500/10 rounded-2xl">
              <p className="text-gray-300 italic font-light">
                "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!"
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="bg-dark-100/40 backdrop-blur-md rounded-[2rem] p-8 md:p-10 border border-gray-800/60 shadow-2xl relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-8">Send Me a Message</h3>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-emerald-400 mb-8 flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Thank you for your message! I'll get back to you shortly.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-400 ml-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-dark-200/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 text-white placeholder:text-gray-600"
                      placeholder="Navanitha"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-dark-200/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 text-white placeholder:text-gray-600"
                      placeholder="navanithaweb@gmail.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-400 ml-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-dark-200/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 text-white placeholder:text-gray-600"
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-dark-200/50 border border-gray-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all duration-300 text-white placeholder:text-gray-600 resize-none"
                    placeholder="Describe your project or inquiry..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-8 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold rounded-xl shadow-lg shadow-primary-600/20 hover:shadow-primary-600/40 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </motion.button>

                <div className="flex items-center justify-center gap-4 pt-4 text-xs text-gray-500 uppercase tracking-widest leading-none">
                  <div className="h-px bg-gray-800 flex-1" />
                  <span>Or reach out via WhatsApp</span>
                  <div className="h-px bg-gray-800 flex-1" />
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  onClick={() => window.open(import.meta.env.VITE_WHATSAPP_URL || '#', '_blank')}
                  type="button"
                  className="w-full py-3 px-8 bg-white/[0.03] text-gray-300 font-semibold rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare size={18} className="text-green-500" />
                  Quick Chat on WhatsApp
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;