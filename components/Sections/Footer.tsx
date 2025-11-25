
import React from 'react';
import { Logo, ArrowRight } from '../ui/Icons';

interface FooterProps {
  onNavigate?: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="pt-24 px-6 md:px-12 bg-background border-t border-primary/5">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between gap-16 pb-24 border-b border-primary/10">
          <div className="max-w-sm">
            <span className="text-xs font-mono text-secondary mb-6 block uppercase tracking-widest">Latest News</span>
            <h2 className="text-3xl font-medium mb-8 uppercase tracking-tight text-primary">Restoring the Balance</h2>
            <button onClick={() => handleNav('news')} className="inline-flex items-center gap-4 text-sm font-medium border-b border-primary/30 pb-1 hover:border-primary transition-colors uppercase tracking-widest text-primary">
              See More <ArrowRight />
            </button>
            
            <div className="mt-12 space-y-8">
               <button onClick={() => handleNav('news')} className="block group text-left">
                  <span className="font-mono text-xs text-secondary block mb-2 uppercase tracking-wide">09/12/2025 _ AgTech Weekly</span>
                  <h4 className="text-lg text-primary group-hover:text-secondary transition-colors uppercase tracking-tight">Geonova Partners with Global Reforestation Initiative</h4>
               </button>
               <button onClick={() => handleNav('news')} className="block group text-left">
                  <span className="font-mono text-xs text-secondary block mb-2 uppercase tracking-wide">08/29/2025 _ Newswire</span>
                  <h4 className="text-lg text-primary group-hover:text-secondary transition-colors uppercase tracking-tight">Series B Funding Secured to Scale Nova Core</h4>
               </button>
            </div>
          </div>

          <div className="max-w-md w-full flex flex-col justify-end">
             <p className="text-sm text-secondary mb-6 font-mono uppercase tracking-widest">Join the community</p>
             <form className="relative border-b border-primary/20 pb-2 flex items-center">
                <input 
                  type="email" 
                  placeholder="EMAIL ADDRESS" 
                  className="bg-transparent w-full outline-none text-primary placeholder-secondary/50 text-sm font-mono uppercase tracking-widest" 
                />
                <button type="submit" className="text-primary hover:text-black transition-colors">
                   →
                </button>
             </form>
          </div>
        </div>

        <div className="py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
           <div className="flex flex-col gap-4">
              <Logo />
              <span className="font-mono text-xs text-secondary flex items-center gap-2 uppercase tracking-widest">
                 <span className="w-6 h-4 bg-black/5 inline-block relative overflow-hidden border border-black/10">
                    <span className="absolute top-0 left-0 w-full h-[2px] bg-black/20"></span>
                    <span className="absolute top-1 left-0 w-full h-[2px] bg-black/20"></span>
                    <span className="absolute top-0 left-0 w-[40%] h-[50%] bg-accent"></span>
                 </span>
                 Designed in California
              </span>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-4 font-mono text-xs uppercase tracking-widest text-secondary">
              <a href="#" className="hover:text-primary transition-colors">X</a>
              <button onClick={() => handleNav('company')} className="text-left hover:text-primary transition-colors">Careers</button>
              <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
              <button onClick={() => handleNav('news')} className="text-left hover:text-primary transition-colors">News</button>
              <a href="#" className="hover:text-primary transition-colors">GitHub</a>
              <button onClick={() => handleNav('community')} className="text-left hover:text-primary transition-colors">Community</button>
              <a href="#" className="hover:text-primary transition-colors">Instagram</a>
              <button onClick={() => handleNav('contact')} className="text-left hover:text-primary transition-colors">Contact</button>
           </div>
        </div>

        <div className="py-6 border-t border-primary/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-mono text-secondary uppercase tracking-widest">
           <div className="flex gap-8">
              <button onClick={() => handleNav('privacy')} className="hover:text-primary transition-colors">Privacy Policy</button>
              <button onClick={() => handleNav('terms')} className="hover:text-primary transition-colors">Terms of Service</button>
              <button onClick={() => handleNav('cookies')} className="hover:text-primary transition-colors">Cookie Policy</button>
           </div>
           <div>
             <span>© 2025 GEONOVA SYSTEMS</span>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;