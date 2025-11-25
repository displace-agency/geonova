
import React from 'react';
import { ArrowUpRight } from '../../ui/Icons';

const projects = [
  {
    title: "Wildfire Prediction Model",
    creator: "@forest_lab",
    stars: "1,240",
    updated: "2 weeks ago",
    tags: ["AI", "Climate", "Early Warning"],
    description: "ML model predicting wildfire risk using Geonova drone data and weather patterns.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Soil Health Dashboard",
    creator: "@agri_collective",
    stars: "892",
    updated: "3 days ago",
    tags: ["Agriculture", "Analytics", "IoT"],
    description: "Real-time soil analysis dashboard integrating Geonova sensors with farmer tools.",
    image: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Drone Calibration Toolkit",
    creator: "@tech_devs",
    stars: "756",
    updated: "1 week ago",
    tags: ["Hardware", "Tools", "Developer"],
    description: "Open-source tools for calibrating Geonova drone sensors in field conditions.",
    image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Forest Biodiversity Mapper",
    creator: "@conservation_org",
    stars: "634",
    updated: "5 days ago",
    tags: ["Conservation", "Visualization"],
    description: "Interactive web app mapping species diversity using Geonova aerial imagery.",
    image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2641&auto=format&fit=crop"
  },
  {
    title: "Climate Impact Calculator",
    creator: "@sustainability_lab",
    stars: "521",
    updated: "1 month ago",
    tags: ["Climate", "Research", "Analytics"],
    description: "Quantifying environmental impact of restoration projects with Geonova data.",
    image: "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Drone Fleet Management API",
    creator: "@ops_team",
    stars: "487",
    updated: "2 days ago",
    tags: ["API", "Infrastructure", "Automation"],
    description: "Manage multi-drone operations, scheduling, and data syncing at scale.",
    image: "https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2670&auto=format&fit=crop"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background border-b border-primary/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16">
          <span className="text-xs font-mono text-secondary mb-6 block uppercase tracking-widest">Featured Projects</span>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-4 uppercase tracking-tight text-primary">
            Community-Built Extensions
          </h2>
          <p className="text-secondary font-mono">Projects powered by Geonova's open platform.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group border border-primary/10 bg-surface hover:border-accent/50 transition-colors duration-300 flex flex-col h-full rounded-sm overflow-hidden">
              <div className="aspect-[2/1] relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-50"></div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-medium text-primary mb-3 group-hover:text-accent transition-colors uppercase tracking-tight">{project.title}</h3>
                <p className="text-secondary text-sm leading-relaxed mb-6 font-mono flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white border border-primary/5 text-secondary/80 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-primary/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-primary">{project.creator}</span>
                    <span className="text-[10px] text-secondary font-mono mt-1">Updated {project.updated}</span>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-xs text-secondary">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      {project.stars}
                    </div>
                    <button className="text-primary hover:text-accent transition-colors">
                      <ArrowUpRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-secondary hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1">
            View All 240+ Projects
            <ArrowUpRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
