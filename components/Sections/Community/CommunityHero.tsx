
import React from 'react';
import { ArrowRight, ArrowUpRight } from '../../ui/Icons';
import ScrambleText from '../../ui/ScrambleText';
import { motion } from 'framer-motion';

const CommunityHero = () => {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex flex-col pt-[72px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <img 
          src="https://cdn.prod.website-files.com/68d7e767f6f7f8719914fd01/69234697cb9772262c06223e_geonova1.jpg"
          alt="Community Ecosystem"
          className="w-full h-full object-cover"
        />
        
        {/* Tech Grid Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/50 to-transparent z-20"></div>
      </div>

      <div className="relative z-30 flex-1 flex flex-col justify-end pb-24 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs font-mono text-white/80 mb-6 block uppercase tracking-widest"
          >
             Community Driven
          </motion.span>
          
          <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-[0.95] font-medium tracking-tight mb-8 uppercase text-white drop-shadow-lg">
            <ScrambleText text="Built by a Growing Community" scrambleSpeed={20} />
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-white/90 max-w-2xl font-mono leading-relaxed mb-12 drop-shadow-md"
          >
            Open-source intelligence for a sustainable future. Join developers, agronomists, and researchers building the operating system for Earth.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 px-8 py-4 bg-white text-primary hover:bg-surface transition-colors rounded-sm min-w-[200px]">
              <span className="text-sm font-bold uppercase tracking-widest">Contribute</span>
              <div className="transform group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight />
              </div>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center gap-3 px-8 py-4 border border-white/30 hover:border-white text-white transition-colors rounded-sm min-w-[200px] backdrop-blur-sm">
              <span className="text-sm font-bold uppercase tracking-widest">View GitHub</span>
              <div className="transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowUpRight />
              </div>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Contributor Avatars - Bottom Right */}
      <div className="absolute bottom-12 right-6 md:right-12 z-30 hidden md:block">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="w-12 h-12 rounded-full border-2 border-background/20 overflow-hidden bg-surface relative z-10 hover:z-20 hover:scale-110 transition-transform shadow-sm"
              >
                <img 
                  src={`https://i.pravatar.cc/100?img=${i + 10}`} 
                  alt="Contributor" 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            ))}
            <div className="w-12 h-12 rounded-full border-2 border-background/20 bg-white flex items-center justify-center text-xs font-mono text-primary relative z-10 shadow-sm">
              +240
            </div>
          </div>
          <div className="text-right">
             <p className="text-xs font-mono text-white/80 uppercase tracking-widest">Top Contributors</p>
             <p className="text-sm text-white">This Month</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunityHero;
