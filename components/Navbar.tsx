import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll effect for navbar background and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection logic
      const sections = ['home', 'about', 'skills', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Match scroll-padding-top
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled || isOpen 
          ? 'bg-dark/90 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer group relative z-50" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-2xl font-bold tracking-tighter">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                ASHAOLU.DEV
              </span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                    activeSection === link.id 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 ${
                    activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              ))}
            </div>
          </div>

          {/* Social Icons Desktop */}
          <div className="hidden md:flex items-center space-x-4 border-l border-white/10 pl-6 ml-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-transform hover:-translate-y-1 duration-200"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#0077b5] transition-transform hover:-translate-y-1 duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:hello@ashaolu.dev" 
              className="text-gray-400 hover:text-primary transition-transform hover:-translate-y-1 duration-200"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-full focus:outline-none hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 bg-dark/95 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full justify-center px-8 space-y-8">
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`flex items-center justify-between text-2xl font-bold p-4 rounded-xl transition-all ${
                  activeSection === link.id 
                    ? 'text-white bg-white/10 pl-8 border-l-4 border-primary' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5 hover:pl-6'
                }`}
              >
                <span>{link.name}</span>
                {activeSection === link.id && <ChevronRight className="text-primary" />}
              </a>
            ))}
          </div>
          
          {/* Mobile Socials */}
          <div className="pt-8 border-t border-white/10">
             <p className="text-gray-500 text-sm mb-6 uppercase tracking-wider font-semibold">Connect With Me</p>
             <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-[#0077b5] hover:bg-white/10 transition-all">
                <Linkedin size={24} />
              </a>
              <a href="mailto:hello@ashaolu.dev" className="p-4 bg-white/5 rounded-full text-gray-400 hover:text-primary hover:bg-white/10 transition-all">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;