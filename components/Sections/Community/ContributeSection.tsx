
import React from 'react';
import { ArrowUpRight } from '../../ui/Icons';

const ContributionCard = ({ icon, title, description, cta, link, tags }: any) => (
  <a href={link} className="group relative bg-surface border border-primary/10 p-8 flex flex-col justify-between h-full hover:border-accent/50 transition-colors duration-300 rounded-sm">
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div>
      <div className="mb-6 text-accent group-hover:text-primary transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-primary mb-4 group-hover:translate-x-1 transition-transform duration-300 uppercase tracking-tight">{title}</h3>
      <p className="text-secondary text-sm leading-relaxed mb-8 font-mono">
        {description}
      </p>
    </div>

    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {tags.map((tag: string, i: number) => (
          <span key={i} className="text-[10px] uppercase tracking-widest px-2 py-1 border border-primary/10 text-secondary/80 bg-white rounded-sm">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
        {cta}
        <ArrowUpRight />
      </div>
    </div>
  </a>
);

const ContributeSection = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 max-w-2xl">
           <span className="text-xs font-mono text-secondary mb-6 block uppercase tracking-widest">Ways to Contribute</span>
           <h2 className="text-3xl md:text-5xl font-medium leading-tight uppercase tracking-tight text-primary">
             Join the ecosystem.
           </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ContributionCard 
            icon={
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 18L22 12L16 6" />
                <path d="M8 6L2 12L8 18" />
              </svg>
            }
            title="Code Development"
            description="Contribute to core platform, SDK, or drone drivers. Check our GitHub issues and join pull request reviews."
            cta="View Repositories"
            link="#"
            tags={['Python', 'JavaScript', 'C++', 'ROS']}
          />

          <ContributionCard 
             icon={
               <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                 <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
               </svg>
             }
             title="Documentation & Research"
             description="Help improve guides, write case studies, or contribute environmental research papers to the knowledge base."
             cta="Submit Documentation"
             link="#"
             tags={['Wiki', 'Case Studies', 'Research']}
           />

           <ContributionCard 
              icon={
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              }
              title="Community Support"
              description="Answer questions in forums, moderate discussions, help new users get started with Geonova tools."
              cta="Join Discussions"
              link="#"
              tags={['Discord', 'Forum', 'Discussions']}
            />
        </div>
      </div>
    </section>
  );
};

export default ContributeSection;