import React from 'react';
import ScrambleText from '../ui/ScrambleText';
import { motion } from 'framer-motion';

const ServiceItem = ({ label, x, y }: { label: string, x: string, y: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="absolute flex flex-col items-center gap-2 group cursor-crosshair"
    style={{ left: x, top: y }}
  >
    <div className="w-3 h-3 border border-primary bg-accent/30 relative group-hover:bg-primary transition-colors">
      <div className="absolute inset-0 bg-primary/20 animate-pulse"></div>
      <div className="absolute -inset-4 border border-primary/0 group-hover:border-primary/20 rounded-full transition-all"></div>
    </div>
    <span className="text-[10px] font-mono uppercase tracking-widest text-primary bg-background/80 px-2 py-0.5 backdrop-blur-sm border border-primary/10">{label}</span>
  </motion.div>
);

const DomainSection = () => {
  return (
    <section className="relative py-24 px-6 md:px-12 border-b border-primary/5 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-xs font-mono text-secondary mb-6 block uppercase tracking-widest">Geonova Services</span>
            <div className="text-3xl md:text-5xl leading-tight font-medium uppercase tracking-tight text-primary">
               <ScrambleText text="Full-stack environmental intelligence for restoration and yield optimization" />
            </div>
          </div>
          <div className="max-w-xs md:text-right md:pt-12">
            <p className="text-secondary text-sm leading-relaxed font-mono">
              Open-source protocols for community-driven agricultural resilience.
            </p>
          </div>
        </div>

        {/* Visualization Placeholder */}
        <div className="relative h-[400px] md:h-[600px] w-full border border-primary/10 bg-surface rounded-sm overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"></div>
          
          {/* Abstract Topography Lines (SVG) */}
          <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" preserveAspectRatio="none">
             <path d="M0,300 Q400,250 800,350 T1600,300" fill="none" stroke="black" strokeWidth="1" vectorEffect="non-scaling-stroke" />
             <path d="M0,350 Q400,300 800,400 T1600,350" fill="none" stroke="black" strokeWidth="1" vectorEffect="non-scaling-stroke" />
             <path d="M0,400 Q400,350 800,450 T1600,400" fill="none" stroke="black" strokeWidth="1" vectorEffect="non-scaling-stroke" />
             <path d="M0,450 Q400,400 800,500 T1600,450" fill="none" stroke="black" strokeWidth="1" vectorEffect="non-scaling-stroke" />
             <path d="M0,500 Q400,450 800,550 T1600,500" fill="none" stroke="black" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          </svg>

          {/* Nodes */}
          <div className="absolute inset-0">
             <ServiceItem label="Satellite Data" x="20%" y="15%" />
             <ServiceItem label="Aerial Mapping" x="65%" y="25%" />
             <ServiceItem label="Spectral Analysis" x="40%" y="45%" />
             <ServiceItem label="Soil Sensors" x="25%" y="65%" />
             <ServiceItem label="Restoration" x="75%" y="70%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainSection;