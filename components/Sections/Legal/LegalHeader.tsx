
import React from 'react';
import { motion } from 'framer-motion';
import ScrambleText from '../../ui/ScrambleText';

interface LegalHeaderProps {
  title: string;
  lastUpdated: string;
}

const LegalHeader: React.FC<LegalHeaderProps> = ({ title, lastUpdated }) => {
  return (
    <section className="relative w-full h-[50vh] min-h-[400px] flex flex-col pt-[72px] justify-end pb-12 px-6 md:px-12 border-b border-primary/5 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"></div>
        <img 
          src="https://cdn.prod.website-files.com/68d7e767f6f7f8719914fd01/69234697cb9772262c06223e_geonova1.jpg"
          alt="Legal Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 max-w-[1400px] mx-auto w-full">
        <span className="text-xs font-mono text-white/80 mb-6 block uppercase tracking-widest">Legal</span>
        <h1 className="text-4xl md:text-6xl lg:text-[80px] leading-[0.95] font-medium tracking-tight text-white mb-6 uppercase drop-shadow-lg">
          <ScrambleText text={title} />
        </h1>
        <p className="font-mono text-xs text-white/70 uppercase tracking-widest">
          Last Updated: {lastUpdated}
        </p>
      </div>
      
      {/* Vertical line for grid alignment */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-white/10 z-20"></div>
      <div className="absolute right-6 md:right-12 top-0 bottom-0 w-[1px] bg-white/10 z-20"></div>
    </section>
  );
};

export default LegalHeader;
