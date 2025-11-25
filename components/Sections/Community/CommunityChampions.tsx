
import React from 'react';
import { ArrowUpRight } from '../../ui/Icons';

const champions = [
  {
    name: "Elena Ross",
    handle: "@elena_code",
    role: "Maintainer",
    contributions: 145,
    projects: 12,
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "David Chen",
    handle: "@dchen_ag",
    role: "Contributor",
    contributions: 89,
    projects: 5,
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    name: "Sarah Miller",
    handle: "@smiller_soil",
    role: "Researcher",
    contributions: 67,
    projects: 8,
    avatar: "https://i.pravatar.cc/150?img=24"
  },
  {
    name: "Marcus J.",
    handle: "@marcus_dev",
    role: "Contributor",
    contributions: 45,
    projects: 3,
    avatar: "https://i.pravatar.cc/150?img=33"
  }
];

const CommunityChampions = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background border-b border-primary/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-xs font-mono text-secondary mb-6 block uppercase tracking-widest">Recognition</span>
          <h2 className="text-3xl md:text-5xl font-medium leading-tight mb-4 uppercase tracking-tight text-primary">
            Community Champions
          </h2>
          <p className="text-secondary font-mono">Celebrating the people powering the platform.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {champions.map((champ, index) => (
            <div key={index} className="group text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/10 mb-6 group-hover:border-primary transition-colors relative shadow-lg">
                <img src={champ.avatar} alt={champ.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              
              <h3 className="text-lg font-medium text-primary mb-1 uppercase tracking-tight">{champ.name}</h3>
              <p className="text-xs font-mono text-secondary mb-4">{champ.handle}</p>
              
              <div className="inline-block px-3 py-1 bg-surface text-[10px] uppercase tracking-widest text-primary rounded-sm mb-6 border border-primary/5">
                {champ.role}
              </div>

              <div className="flex justify-center gap-6 border-t border-primary/5 pt-6">
                <div>
                  <span className="block text-xl font-medium text-primary">{champ.contributions}</span>
                  <span className="text-[10px] text-secondary font-mono uppercase tracking-widest">Commits</span>
                </div>
                <div>
                  <span className="block text-xl font-medium text-primary">{champ.projects}</span>
                  <span className="text-[10px] text-secondary font-mono uppercase tracking-widest">Projects</span>
                </div>
              </div>
              
              <button className="mt-6 text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                View Profile <span className="ml-1">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityChampions;