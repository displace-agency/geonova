
import React from 'react';
import { ArrowRight, LinkedIn, XIcon } from '../../ui/Icons';

const leaders = [
  {
    name: "Colby Adcock",
    title: "CEO & Co-founder",
    image: "https://cdn.sanity.io/images/7bntl9uw/production/ebced49ba80fa19a88904cb1cfae463c1edbc40c-5363x4023.jpg?w=1200&auto=format",
    linkedin: "https://www.linkedin.com/in/colby-adcock-277ab42a/",
    x: "https://x.com/adcock_colby"
  },
  {
    name: "Collin Otis",
    title: "CTO & Co-founder",
    image: "https://cdn.sanity.io/images/7bntl9uw/production/5fe5f26a5837fb2f8c3d3db1f1766f45ff2d6cab-11316x8487.jpg?w=1200&auto=format",
    linkedin: "https://www.linkedin.com/in/collinotis/",
    x: "https://x.com/collinotis"
  }
];

const LeadershipSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <span className="text-xs font-mono text-secondary mb-12 block uppercase tracking-widest">Leadership</span>
        
        <div className="grid md:grid-cols-2 gap-8">
          {leaders.map((leader, index) => (
            <div key={index} className="group">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-sm mb-6 relative">
                 <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" 
                 />
                 {/* Hover Overlay with Socials */}
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a href={leader.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black hover:bg-primary transition-colors rounded-full">
                       <LinkedIn />
                    </a>
                    <a href={leader.x} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black hover:bg-primary transition-colors rounded-full">
                       <XIcon />
                    </a>
                 </div>
              </div>
              
              <div className="flex justify-between items-end border-t border-white/10 pt-4 group-hover:border-white/30 transition-colors">
                 <div>
                    <h3 className="text-xl font-medium text-primary uppercase tracking-tight">{leader.name}</h3>
                    <p className="font-mono text-xs text-secondary uppercase mt-1">{leader.title}</p>
                 </div>
                 <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">LinkedIn</span>
                    <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">X</span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;