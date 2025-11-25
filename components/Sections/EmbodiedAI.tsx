import React from 'react';
import RevealText from '../ui/RevealText';

const EmbodiedAI = () => {
  return (
    <section className="py-32 px-6 md:px-12 border-b border-primary/5">
      <div className="max-w-[1400px] mx-auto">
        <span className="text-xs font-mono text-secondary mb-8 block uppercase tracking-widest">Our Mission</span>
        <div className="max-w-5xl">
          <RevealText 
            text="Decoding the language of the landscape. We combine drone swarms, spectral sensors, and AI to identify biomarkers, track soil health, and predict environmental stress before it becomes a crisis."
            className="text-2xl md:text-4xl lg:text-5xl leading-[1.4] font-medium text-primary/90 uppercase tracking-tight"
          />
        </div>
      </div>
    </section>
  );
};

export default EmbodiedAI;