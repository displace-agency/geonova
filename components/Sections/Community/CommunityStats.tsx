
import React from 'react';
import ScrambleText from '../../ui/ScrambleText';

const stats = [
  { label: "Active Contributors", value: "247", subtext: "Developers, researchers, farmers" },
  { label: "Open Issues", value: "42", subtext: "Ready for contribution" },
  { label: "Community Projects", value: "18", subtext: "Ecosystem extensions" },
  { label: "Monthly Downloads", value: "12,400", subtext: "Open-source packages" },
];

const CommunityStats = () => {
  return (
    <section className="py-24 px-6 md:px-12 border-b border-primary/5 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group">
              <div className="flex flex-col gap-4">
                 <div className="text-5xl md:text-6xl font-medium tracking-tight text-primary mb-2 group-hover:text-accent transition-colors">
                    <ScrambleText text={stat.value} scrambleSpeed={50} delay={0.2 * index} />
                    <span className="text-accent text-3xl align-top ml-1">+</span>
                 </div>
                 
                 <div className="h-[1px] w-full bg-primary/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-accent w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
                 </div>

                 <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">{stat.label}</h4>
                    <p className="text-xs font-mono text-secondary">{stat.subtext}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:text-right">
           <span className="text-[10px] font-mono text-secondary/50 uppercase tracking-widest animate-pulse">
              ● Live stats updated from GitHub API
           </span>
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;