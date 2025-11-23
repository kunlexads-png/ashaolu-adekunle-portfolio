import React from 'react';
import { ArrowRight, Code2, Bot } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px] animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-primary font-medium mb-4">
                <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
                Available for new projects
              </div>
              <h2 className="text-xl md:text-2xl text-gray-400 font-light">Hello, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                ASHAOLU <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-pink-500 bg-clip-text text-transparent">
                  ADEKUNLE
                </span>
              </h1>
            </div>

            <div className="text-xl md:text-2xl font-medium text-gray-300 flex flex-wrap justify-center lg:justify-start gap-3">
              <span className="flex items-center"><Code2 className="w-6 h-6 mr-2 text-primary" /> Full-Stack Developer</span>
              <span className="hidden md:inline text-gray-600">•</span>
              <span className="flex items-center"><Bot className="w-6 h-6 mr-2 text-secondary" /> AI Developer</span>
            </div>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I build accessible, pixel-perfect, and performant web applications. 
              Specializing in merging modern web technologies with advanced AI capabilities 
              to create intelligent digital experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a href="#contact" className="group relative px-8 py-4 bg-white text-dark font-bold rounded-full overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 w-full sm:w-auto text-center inline-flex items-center justify-center">
                <span className="relative z-10 flex items-center justify-center">
                  Hire Me <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>

            <div className="pt-8 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm font-semibold uppercase tracking-wider">
              <span>Tech Stack</span>
              <div className="h-px w-12 bg-gray-700"></div>
              <div className="flex gap-4 text-gray-400">
                <span className="hover:text-white transition-colors">React</span>
                <span className="hover:text-white transition-colors">TypeScript</span>
                <span className="hover:text-white transition-colors">Node.js</span>
                <span className="hover:text-white transition-colors">Gemini API</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image/Avatar */}
          <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Abstract shapes behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-[2rem] rotate-6 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-white/10 rounded-[2rem] -rotate-6"></div>
              
              {/* Main Image Container */}
              <div className="absolute inset-2 rounded-[1.5rem] overflow-hidden shadow-2xl border border-white/10 bg-card">
                 {/* User Profile Image */}
                <img 
                  src="./profile.jp.jpg" 
                  alt="Ashaolu Adekunle" 
                  loading="eager"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gray-400 rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;