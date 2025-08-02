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
import FeaturesSection from './components/sections/FeaturesSection';
import OtherToolsSection from './components/sections/OtherToolsSection';
import LandingServiceSection from './components/sections/LandingServiceSection';
import ContactSection from './components/sections/ContactSection';

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
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header currentGuide={currentGuide} onBackToHome={handleBackToHome} />
      {currentGuide ? (
        <GuideViewer guide={currentGuide} onBack={handleBackToHome} />
      ) : (
        <main>
          <HeroSection />
          <AppsSection />
          <GuidesSection onGuideClick={handleGuideClick} />
          <FeaturesSection />
          <OtherToolsSection showToast={showToast} />
          <LandingServiceSection showToast={showToast} />
          <ContactSection showToast={showToast} />
        </main>
      )}
      <Footer showToast={showToast} />
      
      {/* CIN Support Form */}
      <ContactForm
        type="cin"
        isOpen={isCinFormOpen}
        onClose={() => setIsCinFormOpen(false)}
        title="Supporto Richiesta CIN"
        description="Ti aiutiamo con la procedura per richiedere il Codice Identificativo Nazionale."
        showToast={showToast}
      />
      
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}