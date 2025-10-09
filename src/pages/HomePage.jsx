import HeroSection from '../components/sections/HeroSection';
import ToolsUnifiedSection from '../components/sections/ToolsUnifiedSection';
import LandingServiceSection from '../components/sections/LandingServiceSection';
import GuidesSection from '../components/sections/GuidesSection';
import ContactSection from '../components/sections/ContactSection';

export default function HomePage({ showToast }) {
  return (
    <main>
      <HeroSection />
      <ToolsUnifiedSection showToast={showToast} />
      <LandingServiceSection showToast={showToast} />
      <GuidesSection />
      <ContactSection showToast={showToast} />
    </main>
  );
}
