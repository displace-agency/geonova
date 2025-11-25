
import React from 'react';
import { ArrowRight } from '../ui/Icons';
import { motion } from 'framer-motion';
import ScrambleText from '../ui/ScrambleText';

const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col pt-[72px]">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <img 
          src="https://cdn.prod.website-files.com/68d7e767f6f7f8719914fd01/69234697cb9772262c06223e_geonova1.jpg"
          alt="Geonova Landscape"
          className="w-full h-full object-cover"
        />
        
        {/* Tech Grid Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/20 to-transparent z-20"></div>
      </div>

      <div className="relative z-30 flex-1 flex flex-col justify-end pb-24 px-6 md:px-12 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-[0.95] font-medium tracking-tight mb-6 uppercase text-white drop-shadow-md">
              <ScrambleText text="The Land Intelligence" scrambleSpeed={25} />
              <br />
              <ScrambleText text="Platform for Earth's Future" scrambleSpeed={25} delay={0.5} />
            </h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-lg md:text-xl text-white/90 max-w-2xl font-mono leading-relaxed drop-shadow-sm"
            >
              Transforming degraded landscapes into high-yield agricultural ecosystems through AI, drones, and real-time environmental data.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <a href="#" className="group flex items-center justify-between pl-6 pr-4 py-4 bg-white text-primary hover:bg-surface transition-colors min-w-[200px] rounded-sm">
              <span className="text-sm font-bold uppercase tracking-widest">Explore Platform</span>
              <div className="transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight />
              </div>
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Crosses */}
      <div className="absolute left-6 md:left-12 bottom-12 w-[1px] h-24 bg-white/20 z-30"></div>
      <div className="absolute right-6 md:right-12 bottom-12 w-[1px] h-24 bg-white/20 z-30"></div>
    </section>
  );
};

export default Hero;
