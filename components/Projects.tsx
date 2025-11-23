import React from 'react';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "AI Portfolio Assistant",
      description: "A smart portfolio with an embedded Gemini-powered AI chatbot that answers questions about my skills and experience.",
      image: "https://picsum.photos/800/600?random=1",
      tags: ["React", "TypeScript", "Gemini API", "Tailwind"],
      github: "#",
      demo: "#"
    },
    {
      title: "FinTech Dashboard",
      description: "Real-time financial data visualization dashboard processing over 10k transactions per second with sub-second latency.",
      image: "https://picsum.photos/800/600?random=2",
      tags: ["Next.js", "Node.js", "WebSockets", "D3.js"],
      github: "#",
      demo: "#"
    },
    {
      title: "Smart Crop Disease Detection",
      description: "Computer vision mobile app helping farmers detect crop diseases early using TensorFlow Lite on edge devices.",
      image: "https://picsum.photos/800/600?random=3",
      tags: ["React Native", "TensorFlow", "Python", "Firebase"],
      github: "#",
      demo: "#"
    },
    {
      title: "Enterprise CRM System",
      description: "Cloud-native CRM solution for enterprise clients featuring automated workflows, lead scoring, and detailed analytics dashboards.",
      image: "https://picsum.photos/800/600?random=4",
      tags: ["Angular", "NestJS", "MongoDB", "Docker"],
      github: "#",
      demo: "#"
    },
    {
      title: "AI Content Generator",
      description: "Generative AI application allowing users to create SEO-optimized blog posts and social media content using LLMs.",
      image: "https://picsum.photos/800/600?random=5",
      tags: ["React", "Python", "LangChain", "FastAPI"],
      github: "#",
      demo: "#"
    },
    {
      title: "HealthTrack Mobile",
      description: "Cross-platform mobile application for tracking patient vitals and medication schedules with secure doctor-patient messaging.",
      image: "https://picsum.photos/800/600?random=6",
      tags: ["React Native", "Redux", "Node.js", "PostgreSQL"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-dark/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-card border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20 bg-black/50 backdrop-blur-md p-2 rounded-full border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Sparkles size={16} className="text-yellow-400" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/5 text-gray-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a href={project.github} className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                    <Github size={16} className="mr-2" /> Code
                  </a>
                  <a href={project.demo} className="flex items-center text-sm text-primary hover:text-secondary transition-colors ml-auto">
                    <ExternalLink size={16} className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-white/10 bg-white/5 rounded-full text-white font-medium hover:bg-white/10 transition-colors">
            <Github className="mr-2 w-5 h-5" /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;