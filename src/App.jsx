import React, { useState, useEffect } from 'react';
import './index.css';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import GuideViewer from './components/guides/GuideViewer';
import ContactForm from './components/forms/ContactForm';
import { useToast } from './components/ui/Toast';
import SEO from './components/ui/SEO';
import HeroSection from './components/sections/HeroSection';
import AppsSection from './components/sections/AppsSection';
import GuidesSection from './components/sections/GuidesSection';
import ToolsUnifiedSection from './components/sections/ToolsUnifiedSection';
import LandingServiceSection from './components/sections/LandingServiceSection';
import ContactSection from './components/sections/ContactSection';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import { webApplicationSchema, organizationSchema } from './data/jsonLdSchemas';

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

  // SEO Meta Tags - Dynamic based on current view
  const getSEOData = () => {
    if (currentGuide) {
      return {
        title: currentGuide.title,
        description: currentGuide.description,
        url: `https://www.ospitly.it/guide/${currentGuide.id}`,
        jsonLd: {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": currentGuide.title,
          "description": currentGuide.description,
          "author": {
            "@type": "Organization",
            "name": "Ospitly"
          },
          "publisher": organizationSchema,
          "datePublished": "2025-01-01",
          "dateModified": new Date().toISOString().split('T')[0],
        }
      };
    }

    // Homepage SEO
    return {
      title: 'Ospitly · Calcolo Tassa di Soggiorno e Automazione per B&B',
      description: 'Calcolatore gratuito tassa di soggiorno per B&B e case vacanza. Automatizza AlloggiatiWeb, ISTAT C/59 e compliance normative. Risparmia tempo e evita sanzioni.',
      url: 'https://www.ospitly.it/',
      jsonLd: [webApplicationSchema, organizationSchema]
    };
  };

  const seoData = getSEOData();

  return (
    <ThemeProvider>
      <SEO
        title={seoData.title}
        description={seoData.description}
        url={seoData.url}
        jsonLd={seoData.jsonLd}
      />
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