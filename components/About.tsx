import React from 'react';
import { Rocket, Calendar, Briefcase, GraduationCap, Code, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
              <Rocket className="text-secondary" />
              Driving Innovation with Code
            </h3>
            
            <p className="text-gray-300 leading-relaxed text-lg">
              I'm <strong>Ashaolu Adekunle</strong>, a Full-Stack Developer and AI enthusiast dedicated to building scalable web applications and intelligent digital experiences. With a strong foundation in modern web technologies and a deep passion for Artificial Intelligence, I create solutions that are not just functional but also intuitive and powerful.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg">
              My journey started with a curiosity for how things work on the web, which quickly evolved into a career building complex systems. Today, I specialize in bridging the gap between traditional software engineering and cutting-edge AI capabilities.
            </p>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl mt-8 backdrop-blur-sm">
              <p className="text-primary italic font-medium text-lg text-center">
                "My mission is to democratize AI access by integrating powerful machine learning models into accessible, everyday web interfaces."
              </p>
            </div>

            <div className="flex gap-8 pt-6 justify-center lg:justify-start">
              <div className="text-center">
                <h4 className="text-3xl font-bold text-white">5+</h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Years Exp.</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-white">50+</h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Projects</p>
              </div>
              <div className="text-center">
                <h4 className="text-3xl font-bold text-white">20+</h4>
                <p className="text-sm text-gray-400 uppercase tracking-wider">Clients</p>
              </div>
            </div>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 lg:pl-10">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2 mb-8">
              <Calendar className="text-primary" /> Experience & Education
            </h3>

            <div className="relative border-l border-white/10 ml-3 space-y-10 pl-8 py-2">
              {/* Item 1 */}
              <div className="relative group">
                <span className="absolute -left-[43px] bg-card p-2 rounded-full border border-white/10 text-secondary group-hover:border-secondary group-hover:text-white transition-colors">
                  <Briefcase size={18} />
                </span>
                <span className="text-xs text-primary font-mono mb-1 block uppercase tracking-wide">2010-present</span>
                <h4 className="text-lg font-bold text-white">Electrical/Electronic Enginering </h4>
                <p className="text-gray-400 text-sm">Rufus Giwa Polytechnic </p>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  design, and application of electrical systems, devices, and circuits. Engineers in this field work with electricity, electronics, and electromagnetism to develop technologies that power and control systems in almost every part of modern life. Here’s a clear breakdown of their work:
                </p>
              </div>

              {/* Item 2 (New Education/Cert) */}
              <div className="relative group">
                <span className="absolute -left-[43px] bg-card p-2 rounded-full border border-white/10 text-yellow-400 group-hover:border-yellow-400 group-hover:text-white transition-colors">
                  <Award size={18} />
                </span>
                <span className="text-xs text-primary font-mono mb-1 block uppercase tracking-wide">2024</span>
                <h4 className="text-lg font-bold text-white">AI PRODUCT MANAGEMENT </h4>
                <p className="text-gray-400 text-sm">Duke University(Coursera)</p>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                   I combines product management skills with knowledge of artificial intelligence (AI) and machine learning (ML). The main goal is to guide AI-powered products from concept to launch while ensuring they deliver real value to users and the business
                </p>
              </div>

              {/* Item 3 */}
              <div className="relative group">
                <span className="absolute -left-[43px] bg-card p-2 rounded-full border border-white/10 text-blue-400 group-hover:border-blue-400 group-hover:text-white transition-colors">
                  <Code size={18} />
                </span>
                <span className="text-xs text-primary font-mono mb-1 block uppercase tracking-wide">2025 - 2023</span>
                <h4 className="text-lg font-bold text-white">PRODUCT MANAGER</h4>
                <p className="text-gray-400 text-sm">IBM</p>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  Developed scalable MERN stack applications for fintech clients, improving transaction processing speed by 40%.
                </p>
              </div>

              {/* Item 4 (New Education/Cert) */}
              <div className="relative group">
                <span className="absolute -left-[43px] bg-card p-2 rounded-full border border-white/10 text-orange-400 group-hover:border-orange-400 group-hover:text-white transition-colors">
                  <Award size={18} />
                </span>
                <span className="text-xs text-primary font-mono mb-1 block uppercase tracking-wide">2025- Present</span>
                <h4 className="text-lg font-bold text-white">MARKET RESARCH</h4>
                <p className="text-gray-400 text-sm">University of California, UCdavis (Coursera)</p>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  I studies markets, consumers, and competitors to help businesses make informed decisions. Their main job is to collect, analyze, and interpret data about products, services, and target audiences.
                </p>
              </div>

              {/* Item 5 */}
              <div className="relative group">
                <span className="absolute -left-[43px] bg-card p-2 rounded-full border border-white/10 text-green-400 group-hover:border-green-400 group-hover:text-white transition-colors">
                  <GraduationCap size={18} />
                </span>
                <span className="text-xs text-primary font-mono mb-1 block uppercase tracking-wide">2025- Present</span>
                <h4 className="text-lg font-bold text-white">Full Stack Developer</h4>
                <p className="text-gray-400 text-sm">UDEMY & Skill Development Council Canada</p>
                <p className="text-gray-400 mt-2 text-sm leading-relaxed">
                  I works on both the front-end what users see and back-end the server, database, and application logic of web or mobile applications and i can build an entire product from start to finish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;