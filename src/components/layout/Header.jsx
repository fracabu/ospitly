import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import OspitlyLogo from '../ui/OspitlyLogo';
import { useTheme } from '../../contexts/ThemeContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTimeoutRef = useRef(null);
  const pendingScrollRef = useRef(null);

  const navigation = [
    { name: 'Tool', href: '#tools' },
    { name: 'Siti Web', href: '#custom-landing' },
    { name: 'Guide', href: '#guides' },
    { name: 'Contatti', href: '#contact' }
  ];

  const isOnHomepage = location.pathname === '/';

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Scroll to element when on homepage
  useEffect(() => {
    if (isOnHomepage && pendingScrollRef.current) {
      const sectionId = pendingScrollRef.current;
      pendingScrollRef.current = null;

      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          });
        }
      });
    }
  }, [isOnHomepage]);

  const scrollToSection = async (sectionId, closeMenu = false) => {
    // Clear any pending scroll timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }

    // Close mobile menu if needed
    if (closeMenu) {
      setIsMenuOpen(false);
    }

    // If we're not on homepage, navigate there first
    if (!isOnHomepage) {
      pendingScrollRef.current = sectionId;
      navigate('/');
    } else {
      // Small delay only if closing menu to allow animation
      const delay = closeMenu ? 150 : 0;

      if (delay > 0) {
        scrollTimeoutRef.current = setTimeout(() => {
          const element = document.getElementById(sectionId.replace('#', ''));
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          }
          scrollTimeoutRef.current = null;
        }, delay);
      } else {
        // Immediate scroll with requestAnimationFrame
        requestAnimationFrame(() => {
          const element = document.getElementById(sectionId.replace('#', ''));
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
              inline: 'nearest'
            });
          }
        });
      }
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (isOnHomepage) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <header className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-gray-100 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a
          href="/"
          onClick={handleLogoClick}
          className="flex-shrink-0 hover:opacity-80 transition-opacity"
        >
          <OspitlyLogo size="normal" />
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium relative group text-base"
              onClick={(e) => { 
                e.preventDefault(); 
                scrollToSection(item.href);
              }}
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <SunIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </nav>

        {/* Mobile menu and theme toggle */}
        <div className="md:hidden flex items-center space-x-2">
          {/* Theme Toggle for Mobile */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
            ) : (
              <SunIcon className="h-5 w-5 text-gray-800 dark:text-gray-200" />
            )}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg border-t border-gray-100 dark:border-gray-800 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col px-6 py-3 space-y-2">
            {navigation.map((item) => (
              <a 
                key={item.name}
                href={item.href} 
                onClick={(e) => { 
                  e.preventDefault(); 
                  scrollToSection(item.href, true);
                }} 
                className="text-base text-gray-700 dark:text-gray-300 hover:text-primary transition-colors py-1 hover:bg-gray-50 dark:hover:bg-gray-800 px-2 rounded-lg"
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