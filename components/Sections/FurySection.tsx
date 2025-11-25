
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrambleText from '../ui/ScrambleText';

const tabs = [
  { id: 'CORE', title: 'Environmental Analytics Engine', subtitle: 'Processing 10TB+ Daily' },
  { id: 'AERIAL', title: 'Spectral Imaging Swarm', subtitle: 'Sub-centimeter Resolution' },
  { id: 'TERRA', title: 'Soil Restoration Logic', subtitle: 'Predictive Yield Modeling' },
];

const FurySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="py-32 px-6 md:px-12 border-b border-primary/5 bg-background">
      <div className="max-w-[1400px] mx-auto text-center mb-16">
        <span className="text-xs font-mono text-secondary mb-4 block uppercase tracking-widest">The Platform</span>
        <div className="text-6xl md:text-[120px] font-bold tracking-tighter leading-none mb-6 uppercase text-primary">
            <ScrambleText text="NOVA" scrambleSpeed={40} />
        </div>
        <p className="text-secondary max-w-md mx-auto text-lg font-mono">
          A unified operating system for agricultural intelligence and ecosystem restoration.
        </p>
      </div>

      <div className="max-w-[1400px] mx-auto">
        {/* Tab Navigation */}
        <div className="flex justify-center items-center gap-8 md:gap-16 mb-12 font-mono text-sm tracking-widest">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              className={`relative py-4 px-2 transition-colors duration-300 ${
                activeTab === index ? 'text-primary' : 'text-secondary/50 hover:text-secondary'
              }`}
            >
              {tab.id}
              {activeTab === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative aspect-video w-full bg-surface border border-primary/10 rounded-sm overflow-hidden group">
          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
               <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-multiply"
               >
                  {/* Using abstract topographic/data visuals */}
                  <source src="https://cdn.sanity.io/files/7bntl9uw/production/f5628549d447f20857502685956037a1a472911b.mp4" type="video/mp4" />
               </video>
               <div className="relative z-10 text-center p-8 bg-white/80 backdrop-blur-sm border border-primary/10 rounded-sm max-w-lg shadow-sm">
                  <h3 className="text-2xl font-medium mb-2 uppercase tracking-tight text-primary">{tabs[activeTab].title}</h3>
                  <p className="text-secondary font-mono text-xs uppercase tracking-widest">{tabs[activeTab].subtitle}</p>
               </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Tech UI Corners */}
          <div className="absolute top-6 left-6 w-4 h-4 border-t border-l border-primary"></div>
          <div className="absolute top-6 right-6 w-4 h-4 border-t border-r border-primary"></div>
          <div className="absolute bottom-6 left-6 w-4 h-4 border-b border-l border-primary"></div>
          <div className="absolute bottom-6 right-6 w-4 h-4 border-b border-r border-primary"></div>
          
          {/* Center Crosshair */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 opacity-20 pointer-events-none">
             <div className="absolute top-0 left-1/2 h-full w-[1px] bg-black"></div>
             <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black"></div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
           <p className="font-mono text-xs text-secondary/60 uppercase tracking-widest">Powered by Geonova Core // v2.4.0</p>
        </div>
      </div>
    </section>
  );
};

export default FurySection;
