import { useState } from 'react';
import OspitlyLogo from '../ui/OspitlyLogo';
import ContactForm from '../forms/ContactForm';

export default function Footer({ showToast }) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId.replace('#', ''))?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const footerLinks = [
    { name: 'Tool Gratuiti', href: '#tools' },
    { name: 'Guide', href: '#guides' },
    { name: 'Siti Web per Host', href: '#custom-landing' },
    { name: 'Contatti', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-1 md:grid-cols-3 items-start">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:opacity-80 transition-opacity"
            >
              <OspitlyLogo size="normal" />
            </a>
            <p className="text-gray-300 mt-3 text-center md:text-left text-base sm:text-lg">
              Semplifichiamo la vita degli host.
            </p>
            <div className="mt-4 text-center md:text-left">
              <p className="text-sm text-gray-400">
                Strumenti gratuiti per la gestione<br />
                delle strutture ricettive in Italia
              </p>
            </div>
          </div>

          {/* Links Section */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-white text-base sm:text-lg mb-4">Link Utili</h4>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    scrollToSection(link.href);
                  }} 
                  className="block text-gray-300 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-white text-base sm:text-lg mb-4">Contatti</h4>
            <div className="space-y-3">
              <button 
                onClick={() => setIsContactFormOpen(true)}
                className="text-primary font-semibold hover:text-primary/80 transition-colors text-base block w-full md:w-auto"
              >
                📧 info@ospitly.it
              </button>
              <p className="text-sm text-gray-400">
                Supporto gratuito per tutti i tool
              </p>
              <p className="text-sm text-gray-400">
                Risposta entro 24 ore
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Ospitly — Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-4 mt-4 md:mt-0 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                🇮🇹 Developed with ❤️ by Codecraft Studio
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Form Modal */}
      <ContactForm
        type="general"
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        title="Contattaci"
        description="Scrivici per qualsiasi domanda o richiesta di supporto."
        showToast={showToast}
      />
    </footer>
  );
}