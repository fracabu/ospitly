import React, { useState, useEffect } from 'react';
import './index.css';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import GuideViewer from './components/guides/GuideViewer';
import ContactForm from './components/forms/ContactForm';
import { useToast } from './components/ui/Toast';
import HeroSection from './components/sections/HeroSection';
import AppsSection from './components/sections/AppsSection';
import GuidesSection from './components/sections/GuidesSection';
import ToolsUnifiedSection from './components/sections/ToolsUnifiedSection';
import LandingServiceSection from './components/sections/LandingServiceSection';
import ContactSection from './components/sections/ContactSection';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const [currentGuide, setCurrentGuide] = useState(null);
  const [isCinFormOpen, setIsCinFormOpen] = useState(false);
  const { showToast, ToastContainer } = useToast();

  const handleGuideClick = (guide) => {
    setCurrentGuide(guide);
    // Scroll to top when opening a guide
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleBackToHome = () => {
    setCurrentGuide(null);
    // Scroll to top when returning to homepage
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  // Listen for CIN form open event
  useEffect(() => {
    const handleCinFormOpen = () => {
      setIsCinFormOpen(true);
    };

    window.addEventListener('openCinForm', handleCinFormOpen);
    return () => {
      window.removeEventListener('openCinForm', handleCinFormOpen);
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans transition-colors duration-300">
        <Header currentGuide={currentGuide} onBackToHome={handleBackToHome} />
        {currentGuide ? (
          <ErrorBoundary>
            <GuideViewer guide={currentGuide} onBack={handleBackToHome} />
          </ErrorBoundary>
        ) : (
          <main>
            <HeroSection />
            <ErrorBoundary>
              <ToolsUnifiedSection showToast={showToast} />
            </ErrorBoundary>
            <LandingServiceSection showToast={showToast} />
            <GuidesSection onGuideClick={handleGuideClick} />
            <ContactSection showToast={showToast} />
          </main>
        )}
        <Footer showToast={showToast} />

        {/* CIN Support Form */}
        <ErrorBoundary>
          <ContactForm
            type="cin"
            isOpen={isCinFormOpen}
            onClose={() => setIsCinFormOpen(false)}
            title="Supporto Richiesta CIN"
            description="Ti aiutiamo con la procedura per richiedere il Codice Identificativo Nazionale."
            showToast={showToast}
          />
        </ErrorBoundary>

        {/* Toast Container */}
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
}