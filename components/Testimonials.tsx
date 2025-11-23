import React from 'react';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Jenkins",
      role: "CTO at FinTech Solutions",
      image: "https://picsum.photos/100/100?random=10",
      content: "Ashaolu delivered our financial dashboard ahead of schedule. The performance optimizations he implemented reduced our load times by 40%. Truly an expert in his field.",
      rating: 5
    },
    {
      name: "Michael Adebayo",
      role: "Founder, AgriTech NG",
      image: "https://picsum.photos/100/100?random=11",
      content: "The AI integration for our crop disease detection app has changed how our farmers work. Ashaolu's ability to explain complex AI concepts in simple terms is invaluable.",
      rating: 5
    },
    {
      name: "David Chen",
      role: "Product Manager, CloudSystems",
      image: "https://picsum.photos/100/100?random=12",
      content: "Exceptional understanding of both backend architecture and frontend UX. It's rare to find a developer who cares as much about the design details as the code quality.",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what industry leaders and clients have to say about working with me.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index} 
              className="relative bg-card/30 border border-white/5 p-8 rounded-2xl backdrop-blur-sm hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 group"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-6 right-6 text-white/5 group-hover:text-primary/20 transition-colors">
                <Quote size={64} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 relative z-10">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed">
                "{item.content}"
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-primary text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;