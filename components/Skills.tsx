import React from 'react';
import { Layout, Server, Brain, Terminal, Users, Zap, Globe, Database, Code, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="w-6 h-6 text-blue-400" />,
      skills: [
        { name: "React / Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 95 },
        { name: "Three.js / WebGL", level: 75 },
      ]
    },
    {
      title: "Backend Architecture",
      icon: <Server className="w-6 h-6 text-green-400" />,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Python", level: 85 },
        { name: "PostgreSQL / SQL", level: 85 },
        { name: "GraphQL", level: 80 },
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      skills: [
        { name: "Gemini API", level: 95 },
        { name: "TensorFlow", level: 70 },
        { name: "RAG Pipelines", level: 85 },
        { name: "Prompt Engineering", level: 90 },
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Terminal className="w-6 h-6 text-orange-400" />,
      skills: [
        { name: "Docker", level: 80 },
        { name: "AWS Services", level: 75 },
        { name: "CI/CD (GitHub Actions)", level: 85 },
        { name: "Linux Admin", level: 80 },
      ]
    }
  ];

  const softSkills = [
    { icon: <Users className="w-5 h-5" />, name: "Team Leadership" },
    { icon: <Brain className="w-5 h-5" />, name: "Problem Solving" },
    { icon: <Globe className="w-5 h-5" />, name: "Remote Collaboration" },
    { icon: <Zap className="w-5 h-5" />, name: "Agile Methodology" },
  ];

  return (
    <section id="skills" className="py-20 bg-dark relative overflow-hidden">
       {/* Background decorative elements */}
       <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px] -z-10"></div>
       <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-[128px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive look at the technical proficiency and tools I use to build scalable digital solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-card/50 border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl group-hover:bg-white/10 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-5">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark rounded-full overflow-hidden border border-white/5">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full origin-left transform transition-transform duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-16 pt-10 border-t border-white/5">
          <h3 className="text-xl font-bold text-white text-center mb-8 text-gray-300">Soft Skills & Workflow</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {softSkills.map((skill, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 px-6 py-3 rounded-full flex items-center gap-3 hover:bg-white/10 hover:border-primary/30 transition-all hover:scale-105 cursor-default">
                <span className="text-secondary">{skill.icon}</span>
                <span className="text-gray-200 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;