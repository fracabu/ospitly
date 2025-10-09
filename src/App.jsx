import React, { useState, useEffect, lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import GuidePage from './pages/GuidePage';

// Lazy-loaded Components
const ContactForm = lazy(() => import('./components/forms/ContactForm'));

// Regular Components
import { useToast } from './components/ui/Toast';
import SEO from './components/ui/SEO';
import { ThemeProvider } from './contexts/ThemeContext';
import ErrorBoundary from './components/ErrorBoundary';
import { webApplicationSchema, organizationSchema } from './data/jsonLdSchemas';
import { GUIDE_CONTENT } from './data/guideContent';

export default function App() {
  const [isCinFormOpen, setIsCinFormOpen] = useState(false);
  const { showToast, ToastContainer } = useToast();
  const location = useLocation();

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

  // SEO Meta Tags - Dynamic based on current route
  const getSEOData = () => {
    const pathParts = location.pathname.split('/');

    // Guide page
    if (pathParts[1] === 'guide' && pathParts[2]) {
      const guideSlug = pathParts[2];
      const guide = GUIDE_CONTENT[guideSlug];

      if (guide) {
        return {
          title: guide.title,
          description: guide.description,
          url: `https://www.ospitly.it/guide/${guideSlug}`,
          jsonLd: {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": guide.title,
            "description": guide.description,
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
    }

    // Homepage SEO (default)
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
        <Header />

        <Routes>
          <Route path="/" element={<HomePage showToast={showToast} />} />
          <Route path="/guide/:slug" element={<GuidePage />} />
        </Routes>

        <Footer showToast={showToast} />

        {/* CIN Support Form - Lazy loaded */}
        <ErrorBoundary>
          <Suspense fallback={null}>
            <ContactForm
              type="cin"
              isOpen={isCinFormOpen}
              onClose={() => setIsCinFormOpen(false)}
              title="Supporto Richiesta CIN"
              description="Ti aiutiamo con la procedura per richiedere il Codice Identificativo Nazionale."
              showToast={showToast}
            />
          </Suspense>
        </ErrorBoundary>

        {/* Toast Container */}
        <ToastContainer />
      </div>
    </ThemeProvider>
  );
}