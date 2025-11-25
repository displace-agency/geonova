
import React, { useState } from 'react';
import { Logo, MenuIcon, XIcon } from '../ui/Icons';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Company', id: 'company' },
    { label: 'Community', id: 'community' },
    { label: 'News', id: 'news' },
    { label: 'We\'re Hiring', id: 'hiring' },
  ];

  const handleNavigation = (pageId: string) => {
    if (pageId === 'hiring') {
      onNavigate('company');
    } else {
      onNavigate(pageId);
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-[72px] border-b border-primary/10 glass-nav flex items-center justify-between px-6 md:px-12 transition-all duration-300">
        <button onClick={() => handleNavigation('home')} className="hover:opacity-70 transition-opacity z-50 relative">
          <Logo />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`relative transition-colors duration-200 group uppercase tracking-widest text-xs ${activePage === item.id ? 'text-primary' : 'text-secondary hover:text-primary'}`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all duration-300 ${activePage === item.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
           <button 
            onClick={() => handleNavigation('contact')}
            className="hidden md:block px-5 py-2 text-xs font-mono font-bold uppercase tracking-widest text-white bg-primary hover:bg-primary/90 transition-colors rounded-sm"
           >
            Contact Us
           </button>

           {/* Mobile Menu Button */}
           <button 
             onClick={() => setIsMenuOpen(!isMenuOpen)}
             className="md:hidden p-2 text-primary hover:opacity-70 transition-opacity z-50 relative"
           >
             {isMenuOpen ? <XIcon /> : <MenuIcon />}
           </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-24 px-6 flex flex-col md:hidden"
          >
            <div className="flex flex-col gap-8 mt-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.1 }}
                  onClick={() => handleNavigation(item.id)}
                  className={`text-left text-4xl font-medium tracking-tight uppercase ${activePage === item.id ? 'text-primary' : 'text-secondary'}`}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 pt-8 border-t border-primary/10"
              >
                <button 
                  onClick={() => handleNavigation('contact')}
                  className="text-left text-xl font-mono font-bold uppercase tracking-widest text-primary"
                >
                  Contact Us
                </button>
              </motion.div>
            </div>
            
            {/* Mobile Menu Footer Decor */}
            <div className="absolute bottom-8 left-6 right-6 flex justify-between text-[10px] font-mono text-secondary uppercase tracking-widest opacity-50">
              <span>GEONOVA SYSTEMS</span>
              <span>© 2025</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;