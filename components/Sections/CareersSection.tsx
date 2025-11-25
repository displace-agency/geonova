import React from 'react';
import { ArrowRight } from '../ui/Icons';

const jobs = [
  { title: "Senior Agronomist", loc: "Portland, OR" },
  { title: "GIS Data Scientist", loc: "Remote / Boulder, CO" },
  { title: "Full Stack Engineer - Nova Core", loc: "Sunnyvale, CA" },
  { title: "Drone Fleet Operator", loc: "Various Locations" },
  { title: "Computer Vision Engineer", loc: "Sunnyvale, CA" },
  { title: "Soil Microbiologist", loc: "Portland, OR" },
  { title: "Community Manager (Open Source)", loc: "Remote" },
  { title: "Hardware Engineer (Sensors)", loc: "Sunnyvale, CA" },
  { title: "Restoration Ecologist", loc: "Costa Rica" },
];

const CareersSection = () => {
  return (
    <section className="py-32 px-6 md:px-12 border-b border-primary/5">
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16">
        
        <div>
          <span className="text-xs font-mono text-secondary mb-6 block uppercase tracking-widest">Careers</span>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight max-w-xl uppercase tracking-tight text-primary">
            Join the team engineering the recovery of our planet's ecosystems.
          </h2>
        </div>

        <div className="flex flex-col">
          {jobs.map((job, i) => (
            <a 
              key={i} 
              href="#" 
              className="group flex items-center justify-between py-6 border-t border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div>
                <p className="font-mono text-xs text-secondary uppercase mb-1">{job.loc}</p>
                <h4 className="text-lg font-medium text-primary group-hover:text-accent transition-colors uppercase tracking-tight">{job.title}</h4>
              </div>
              <div className="transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300 text-primary group-hover:text-accent">
                <ArrowRight />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CareersSection;