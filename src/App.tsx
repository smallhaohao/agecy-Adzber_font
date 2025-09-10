import React, { useState, useEffect } from 'react';
import { Provider } from 'jotai';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TechnologySection from './components/TechnologySection';
import SpecialitiesSection from './components/SpecialitiesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import Careers from './components/Careers';
import AdminApp from './admin-dashboard/App';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'careers' | 'admin'>('home');

  // 根据URL hash处理页面路由
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      
      if (hash === 'privacy') {
        setCurrentPage('privacy');
      } else if (hash === 'careers') {
        setCurrentPage('careers');
      } else if (hash.startsWith('admin')) {
        setCurrentPage('admin');
      } else {
        setCurrentPage('home');
      }
    };

    // 初始加载时检查hash
    handleHashChange();
    
    // 监听hash变化
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const scrollToContact = () => {
    if (currentPage === 'home') {
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        const element = document.getElementById('contact');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const navigateToSection = (sectionId: string) => {
    if (sectionId === 'careers') {
      window.location.hash = 'careers';
      setCurrentPage('careers');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'privacy') {
      window.location.hash = 'privacy';
      setCurrentPage('privacy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sectionId === 'admin') {
      window.location.hash = 'admin';
      setCurrentPage('admin');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentPage === 'home') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setCurrentPage('home');
      setTimeout(() => {
        if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
    }
  };

  const showPrivacyPolicy = () => {
    window.location.hash = 'privacy';
    setCurrentPage('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'admin') {
    return <AdminApp />;
  }

  if (currentPage === 'privacy') {
    return (
      <Provider>
        <PrivacyPolicy 
          onNavigateToSection={navigateToSection}
          onContactClick={scrollToContact}
        />
      </Provider>
    );
  }

  if (currentPage === 'careers') {
    return (
      <Provider>
        <Careers 
          onNavigateToSection={navigateToSection}
          onContactClick={scrollToContact}
        />
      </Provider>
    );
  }

  return (
    <Provider>
      <div className="min-h-screen relative">
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute top-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-30"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-60 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce opacity-20"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-30"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-purple-500 rounded-full animate-pulse opacity-25"></div>
          
          <div className="absolute top-1/4 left-0 w-screen h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent animate-pulse opacity-30"></div>
          <div className="absolute bottom-1/3 left-0 w-screen h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse opacity-20"></div>
        </div>
        
        <div className="relative z-10">
          <Header 
            onContactClick={scrollToContact} 
            onNavigateToSection={navigateToSection}
          />
          <HeroSection />
          <AboutSection />
          <TechnologySection />
          <SpecialitiesSection />
          <ContactSection />
          <Footer onPrivacyClick={showPrivacyPolicy} />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </Provider>
  );
};

export default App;