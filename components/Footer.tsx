import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/20 border-t border-white/10 pt-16 pb-8 backdrop-blur-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ASHAOLU.DEV
            </span>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Building intelligent digital experiences with modern web technologies and artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About', 'Skills', 'Projects', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="text-white font-bold mb-6">Let's Connect</h3>
             <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 text-gray-400 hover:text-[#0077b5] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 text-gray-400 hover:text-[#1DA1F2] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:hello@ashaolu.dev" className="p-3 bg-white/5 rounded-xl hover:bg-white/10 text-gray-400 hover:text-red-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {currentYear} Ashaolu Adekunle. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <p className="text-gray-500 text-sm flex items-center">
              Made with <Heart size={14} className="text-red-500 mx-1 fill-red-500" /> using React & Tailwind
            </p>
            <button 
              onClick={scrollToTop}
              className="p-2 bg-white/5 rounded-lg hover:bg-primary hover:text-white text-gray-400 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;