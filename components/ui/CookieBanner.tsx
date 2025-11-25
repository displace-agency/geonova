
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XIcon } from './Icons';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    
    try {
      const consent = localStorage.getItem('geonova-cookie-consent');
      if (!consent) {
        // Small delay to not overwhelm user immediately on load
        timer = setTimeout(() => setIsVisible(true), 1000);
      }
    } catch (e) {
      // localStorage access restricted/denied, suppress error
      console.warn('LocalStorage access denied for CookieBanner');
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('geonova-cookie-consent', 'true');
    } catch (e) {
      console.warn('LocalStorage write failed');
    }
    setIsVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem('geonova-cookie-consent', 'false');
    } catch (e) {
      console.warn('LocalStorage write failed');
    }
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-[1400px] mx-auto">
            <div className="bg-background/95 backdrop-blur-md border border-primary/10 p-6 md:p-8 rounded-sm shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-12 ring-1 ring-black/5">
              
              <div className="flex-1">
                <h4 className="text-sm font-medium text-primary mb-2">Cookie Preferences</h4>
                <p className="text-xs text-secondary leading-relaxed max-w-2xl">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept", you consent to our use of cookies. Read our <button onClick={() => window.dispatchEvent(new CustomEvent('navigate', { detail: 'cookies' }))} className="text-primary hover:text-accent underline decoration-primary/30 hover:decoration-primary transition-all">Cookie Policy</button>.
                </p>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <button 
                  onClick={handleDecline}
                  className="flex-1 md:flex-none px-6 py-3 text-xs font-mono uppercase tracking-widest text-secondary hover:text-primary border border-primary/10 hover:border-primary/30 transition-colors rounded-sm"
                >
                  Decline
                </button>
                <button 
                  onClick={handleAccept}
                  className="flex-1 md:flex-none px-6 py-3 text-xs font-mono uppercase tracking-widest text-white bg-primary hover:bg-primary/90 transition-colors rounded-sm"
                >
                  Accept
                </button>
              </div>

              <button 
                onClick={handleDecline}
                className="absolute top-4 right-4 text-secondary hover:text-primary md:hidden"
              >
                <XIcon />
              </button>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;