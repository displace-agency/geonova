
import React from 'react';
import { ArrowUpRight } from '../../ui/Icons';

const newsData = [
  {
    date: "09/12/2025",
    source: "AgTech Weekly",
    title: "Geonova Partners with Global Reforestation Initiative",
    image: "https://cdn.prod.website-files.com/68d7e767f6f7f8719914fd01/69234697cb9772262c06223e_geonova1.jpg",
    link: "#",
    layout: "featured"
  },
  {
    date: "08/29/2025",
    source: "Newswire",
    title: "Geonova Systems Raises Series B to Scale Soil Intelligence Platform",
    image: "https://cdn.prod.website-files.com/68d7e767f6f7f8719914fd01/6923469752c17043a009c49c_geonova4.jpg",
    link: "#",
    layout: "highlight"
  },
  {
    date: "09/05/2025",
    source: "Nature Journal",
    title: "The role of AI in predicting fungal crop diseases",
    link: "#",
    layout: "standard"
  },
  {
    date: "08/15/2025",
    source: "TechCrunch",
    title: "How Geonova is using drone swarms to map Amazon biodiversity",
    link: "#",
    layout: "standard"
  },
  {
    date: "07/22/2025",
    source: "USDA Press",
    title: "Grant awarded for open-source drought monitoring tools",
    link: "#",
    layout: "standard"
  },
  {
    date: "06/10/2025",
    source: "Wired",
    title: "The Farmers Coding Their Own Future on Geonova OS",
    link: "#",
    layout: "standard"
  }
];

const NewsList = () => {
  const featured = newsData.filter(item => item.layout === 'featured' || item.layout === 'highlight');
  const standard = newsData.filter(item => item.layout === 'standard');

  return (
    <section className="px-6 md:px-12 bg-background">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Featured Rows */}
        <div className="flex flex-col">
          {featured.map((item, index) => (
            <div key={index} className="py-16 md:py-24 border-b border-primary/10 group">
              <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                 {/* Image Side */}
                 <div className="relative aspect-video w-full bg-surface border border-primary/10 rounded-sm overflow-hidden order-1">
                    <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${item.layout === 'highlight' ? 'bg-cover' : 'bg-cover'}`} style={{ backgroundImage: `url(${item.image})` }}></div>
                    <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
                 </div>

                 {/* Text Side */}
                 <div className="flex flex-col justify-center order-2">
                    <p className="font-mono text-xs text-secondary mb-4 uppercase tracking-widest">
                       {item.date} _ {item.source}
                    </p>
                    <h2 className="text-2xl md:text-4xl font-medium leading-tight mb-8 text-primary group-hover:text-secondary transition-colors uppercase tracking-tight">
                       {item.title}
                    </h2>
                    <a 
                       href={item.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-primary hover:text-accent transition-colors group/btn"
                    >
                       Read More
                       <div className="w-6 h-6 border border-primary/20 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-300">
                          <ArrowUpRight />
                       </div>
                    </a>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Standard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-l border-primary/10">
           {standard.map((item, index) => (
              <div key={index} className="group p-8 border-r border-b border-primary/10 flex flex-col justify-between min-h-[320px] hover:bg-black/[0.02] transition-colors">
                 <div>
                    <p className="font-mono text-[10px] text-secondary mb-6 uppercase tracking-widest">
                       {item.date} _ {item.source}
                    </p>
                    <h3 className="text-xl font-medium leading-snug text-primary group-hover:text-secondary transition-colors uppercase tracking-tight">
                       {item.title}
                    </h3>
                 </div>
                 
                 <div className="mt-12">
                    <a 
                       href={item.link} 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="inline-flex items-center gap-3 text-[10px] font-mono uppercase tracking-widest text-secondary group-hover:text-primary transition-colors group/btn"
                    >
                       Read More
                       <div className="w-5 h-5 border border-primary/20 flex items-center justify-center group-hover/btn:bg-primary group-hover/btn:text-white transition-all duration-300">
                          <ArrowUpRight />
                       </div>
                    </a>
                 </div>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
};

export default NewsList;
