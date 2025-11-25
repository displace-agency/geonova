
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Layout/Navbar';
import HomePage from './components/Pages/HomePage';
import CompanyPage from './components/Pages/CompanyPage';
import CommunityPage from './components/Pages/CommunityPage';
import NewsPage from './components/Pages/NewsPage';
import ContactPage from './components/Pages/ContactPage';
import PrivacyPage from './components/Pages/Legal/PrivacyPage';
import TermsPage from './components/Pages/Legal/TermsPage';
import CookiesPage from './components/Pages/Legal/CookiesPage';
import Footer from './components/Sections/Footer';
import { GridLines } from './components/Layout/GridLines';
import CookieBanner from './components/ui/CookieBanner';
import NoiseOverlay from './components/Layout/NoiseOverlay';

function App() {
  // Initialize state from URL
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      return params.get('page') || 'home';
    }
    return 'home';
  });

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      setCurrentPage(params.get('page') || 'home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL when page changes
  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    
    setCurrentPage(page);
    const url = page === 'home' ? '/' : `?page=${page}`;
    window.history.pushState({}, '', url);
    // Scroll handling is now done in onExitComplete to work with page transitions
  };

  // Update Document Title
  useEffect(() => {
    const titles: Record<string, string> = {
      home: 'GEONOVA SYSTEMS – Land Intelligence Platform',
      company: 'Company | Geonova',
      community: 'Community | Geonova',
      news: 'News | Geonova',
      contact: 'Contact | Geonova',
      privacy: 'Privacy Policy | Geonova',
      terms: 'Terms of Service | Geonova',
      cookies: 'Cookie Policy | Geonova',
    };
    document.title = titles[currentPage] || 'GEONOVA SYSTEMS';
  }, [currentPage]);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Listen for navigation events from children (like Cookie Banner)
  useEffect(() => {
    // Cast safely inside the handler to avoid strict type errors
    const handleNavEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail) {
        handleNavigate(customEvent.detail);
      }
    };
    
    window.addEventListener('navigate', handleNavEvent);
    return () => {
      window.removeEventListener('navigate', handleNavEvent);
    };
  }, [currentPage]); 

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'company': return <CompanyPage />;
      case 'community': return <CommunityPage />;
      case 'news': return <NewsPage />;
      case 'contact': return <ContactPage />;
      case 'privacy': return <PrivacyPage />;
      case 'terms': return <TermsPage />;
      case 'cookies': return <CookiesPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-accent selection:text-white overflow-hidden">
      <NoiseOverlay />
      <GridLines />
      <Navbar onNavigate={handleNavigate} activePage={currentPage} />
      
      <main className="min-h-screen">
        <AnimatePresence 
          mode="wait" 
          onExitComplete={() => {
            // Force instant scroll to top after exit animation completes and before new content enters
            window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          }}
        >
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer onNavigate={handleNavigate} />
      <CookieBanner />
    </div>
  );
}

export default App;