import React, { useState } from 'react';
import './index.css';

// Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import GuideViewer from './components/guides/GuideViewer';
import HeroSection from './components/sections/HeroSection';
import AppsSection from './components/sections/AppsSection';
import GuidesSection from './components/sections/GuidesSection';
import FeaturesSection from './components/sections/FeaturesSection';
import OtherToolsSection from './components/sections/OtherToolsSection';
import LandingServiceSection from './components/sections/LandingServiceSection';

export default function App() {
  const [currentGuide, setCurrentGuide] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      {currentGuide ? (
        <GuideViewer guide={currentGuide} onBack={() => setCurrentGuide(null)} />
      ) : (
        <main>
          <HeroSection />
          <AppsSection />
          <GuidesSection onGuideClick={setCurrentGuide} />
          <FeaturesSection />
          <OtherToolsSection />
          <LandingServiceSection />
        </main>
      )}
      <Footer />
    </div>
  );
}