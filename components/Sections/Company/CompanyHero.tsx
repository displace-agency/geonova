
import React from 'react';
import ScrambleText from '../../ui/ScrambleText';
import { motion } from 'framer-motion';

const CompanyHero = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col pt-[72px]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://cdn.prod.website-files.com/68d7e767f6f7f8719914fd01/692346975270c5f2c54f075e_geonova2.jpg"
          alt="Company Vision"
          className="w-full h-full object-cover"
        />
        
        {/* Tech Grid Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
      </div>

      <div className="relative z-30 flex-1 flex flex-col justify-end pb-24 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
         <div className="max-w-5xl">
            <span className="text-xs font-mono text-white/80 mb-6 block uppercase tracking-widest">Our Mission</span>
            <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-[0.95] font-medium tracking-tight uppercase text-white drop-shadow-lg">
                <ScrambleText text="The open operating system for land managers." scrambleSpeed={10} revealSpeed={20} />
            </h1>
         </div>
      </div>
    </section>
  );
};

export default CompanyHero;
