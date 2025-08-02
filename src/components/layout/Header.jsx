import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import OspitlyLogo from '../ui/OspitlyLogo';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Tool', href: '#apps' },
    { name: 'Guide', href: '#guides' },
    { name: 'Altri Tool', href: '#tools' },
    { name: 'Siti Web', href: '#custom-landing' },
    { name: 'Contatti', href: '#contact' }
  ];

  const scrollToSection = (sectionId, closeMenu = false) => {
    if (closeMenu) setIsMenuOpen(false);
    setTimeout(() => {
      document.getElementById(sectionId.replace('#', ''))?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, closeMenu ? 100 : 0);
  };

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex items-center justify-between px-6 py-1">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          <OspitlyLogo cssClass="logo-header" /> 
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="text-gray-600 hover:text-primary transition-colors font-medium relative group text-sm"
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection(item.href);
              }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col px-6 py-3 space-y-2">
            {navigation.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                onClick={(e) => { 
                  e.preventDefault(); 
                  scrollToSection(item.href, true);
                }} 
                className="text-base text-gray-700 hover:text-primary transition-colors py-1 hover:bg-gray-50 px-2 rounded-lg"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}