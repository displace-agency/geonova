
import React from 'react';
import { ArrowUpRight } from '../../ui/Icons';

const events = [
  {
    date: "Dec 15, 2024",
    time: "2:00 PM UTC",
    title: "Geonova Developer Workshop",
    description: "Building custom sensors and API integration. Join Geonova engineers for a live coding session.",
    format: "Live Virtual",
    cta: "Register Now"
  },
  {
    date: "Jan 20-21, 2025",
    time: "All Day",
    title: "Forest Conservation Hackathon",
    description: "48-hour challenge to build climate adaptation solutions. $15,000 prize pool.",
    format: "Hybrid",
    cta: "Join Hackathon"
  },
  {
    date: "Last Friday",
    time: "6:00 PM UTC",
    title: "Monthly Community Call",
    description: "Open discussion, Q&A, and roadmap updates with the maintainers.",
    format: "Virtual",
    cta: "Add to Calendar"
  },
  {
    date: "Bi-weekly",
    time: "On Demand",
    title: "AgIntelligence Webinar Series",
    description: "Deep dives into crop monitoring, yield prediction algorithms, and soil analysis.",
    format: "Virtual",
    cta: "Subscribe"
  }
];

const CommunityEvents = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-background border-b border-primary/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="text-xs font-mono text-secondary mb-6 block uppercase tracking-widest">Community Calendar</span>
            <h2 className="text-3xl md:text-5xl font-medium leading-tight uppercase tracking-tight text-primary">
              Upcoming Events & Workshops
            </h2>
          </div>
          <a href="#" className="text-xs font-mono uppercase tracking-widest text-primary border-b border-primary/30 hover:border-primary pb-1 transition-colors">
            View Full Calendar
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <div key={index} className="group border border-primary/10 bg-surface p-8 hover:border-primary/30 transition-colors duration-300 flex flex-col h-full rounded-sm">
              <div className="flex justify-between items-start mb-6">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-primary">{event.date}</span>
                  <span className="text-xs font-mono text-secondary mt-1">{event.time}</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest border border-primary/10 px-2 py-1 rounded-sm text-secondary bg-white">
                  {event.format}
                </span>
              </div>
              
              <h3 className="text-xl font-medium text-primary mb-4 group-hover:text-accent transition-colors uppercase tracking-tight">
                {event.title}
              </h3>
              
              <p className="text-secondary text-sm leading-relaxed mb-8 flex-1 font-mono">
                {event.description}
              </p>

              <button className="flex items-center justify-between w-full pt-6 border-t border-primary/5 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent transition-colors">
                {event.cta}
                <ArrowUpRight />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityEvents;