
import React, { useState } from 'react';
import ScrambleText from '../ui/ScrambleText';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    title: "Aerial Intelligence & Mapping",
    points: [
      "Drone-based spatial data collection for millimeter-accurate topography.",
      "Real-time landscape monitoring to detect erosion, water flow, and vegetation density.",
      "Automated flight paths for consistent seasonal tracking."
    ]
  },
  {
    title: "Environmental Analytics",
    points: [
      "Deep soil health tracking identifying nutrient deficiencies and organic matter levels.",
      "Biodiversity identification using acoustic and visual biomarkers.",
      "Early warning systems for drought, fire risk, and crop disease."
    ]
  },
  {
    title: "Agricultural Intelligence",
    points: [
      "Yield prediction models based on historical climate data and current soil conditions.",
      "Crop planning optimization to maximize output while restoring land health.",
      "Farm management insights delivered directly to mobile interfaces."
    ]
  },
  {
    title: "Open-Source Platform",
    points: [
      "Community-driven development allowing farmers to customize tools.",
      "Shared database of sustainable practices and success metrics.",
      "Adaptable hardware support for third-party sensors and drones."
    ]
  }
];

const TechSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-12 border-b border-primary/5 bg-background relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          
          {/* Left Column - Image */}
          <div className="lg:w-1/2 h-fit lg:sticky lg:top-32 self-start order-1 relative z-10">
            <span className="text-xs font-mono text-secondary mb-6 block uppercase tracking-widest">Our Technology</span>
            
            <div className="text-3xl md:text-5xl font-medium leading-tight mb-8 md:mb-12 min-h-[3rem] uppercase tracking-tight text-primary">
               <ScrambleText text="Intelligence for the Next Season" />
            </div>

            <div className="relative w-full aspect-[4/3] bg-surface border border-primary/10 rounded-sm overflow-hidden group/image shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop" 
                alt="Ag Tech visualization" 
                className="w-full h-full object-cover opacity-90 group-hover/image:scale-105 transition-transform duration-700"
               />
               
               {/* Data Interface Overlay - Tech Style */}
               <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-transparent mix-blend-overlay"></div>
               <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-white/80 backdrop-blur-md border border-primary/10 p-4 font-mono text-xs z-10">
                  <div className="mb-2 flex justify-between">
                    <span className="text-secondary uppercase tracking-wider">Soil Nitrogen</span>
                    <span className="text-primary font-bold">OPTIMAL [92%]</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-secondary uppercase tracking-wider">Moisture Content</span>
                    <span className="text-accent font-bold">LOW WARNING [12%]</span>
                  </div>
                  {/* Decorative Scan Line */}
                  <div className="mt-3 w-full h-[2px] bg-black/10 relative overflow-hidden">
                     <div className="absolute inset-0 bg-accent w-1/3 animate-[shimmer_2s_infinite]"></div>
                  </div>
               </div>
               
               {/* Corner Accents */}
               <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-black/30"></div>
               <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-black/30"></div>
               <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-black/30"></div>
               <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-black/30"></div>
            </div>
          </div>

          {/* Right Column - Accordion List */}
          <div className="lg:w-1/2 flex flex-col justify-center pt-0 lg:pt-32 order-2">
            <div className="space-y-0">
              {features.map((feature, index) => {
                const isOpen = openIndex === index;
                return (
                  <div 
                    key={index} 
                    className={`border-t transition-all duration-300 ${isOpen ? 'border-primary/40 bg-black/[0.02]' : 'border-primary/10 hover:border-primary/20'}`}
                  >
                    <button 
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between py-6 md:py-8 px-4 cursor-pointer group text-left outline-none relative"
                    >
                      {/* Active Indicator Bar */}
                      {isOpen && <motion.div layoutId="activeBar" className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary" />}

                      <h4 className={`text-xl md:text-2xl font-medium tracking-tight transition-colors duration-300 uppercase ${isOpen ? 'text-primary' : 'text-secondary group-hover:text-primary'}`}>
                        {feature.title}
                      </h4>
                      
                      <div className={`relative flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300 shrink-0 ml-4 ${isOpen ? 'bg-primary border-primary text-white rotate-90 scale-110' : 'border-primary/10 text-secondary group-hover:border-primary/30'}`}>
                         {isOpen ? (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <rect x="5.25" y="1" width="1.5" height="10" fill="currentColor"/>
                                <rect x="1" y="5.25" width="10" height="1.5" fill="currentColor"/>
                            </svg>
                         ) : (
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <rect x="5.25" y="1" width="1.5" height="10" fill="currentColor"/>
                                <rect x="1" y="5.25" width="10" height="1.5" fill="currentColor"/>
                            </svg>
                         )}
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pb-8 pl-6 pr-4 md:pl-8">
                            <ul className="space-y-4 font-mono text-sm leading-relaxed text-secondary/90">
                              {feature.points.map((point, i) => (
                                <motion.li 
                                  key={i}
                                  initial={{ x: -10, opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  transition={{ delay: i * 0.1, duration: 0.3 }}
                                  className="flex items-start gap-4"
                                >
                                  <span className="mt-1.5 w-1.5 h-1.5 bg-accent rotate-45 shrink-0"></span>
                                  <span>{point}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TechSection;
