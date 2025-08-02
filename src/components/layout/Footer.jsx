import OspitlyLogo from '../ui/OspitlyLogo';

export default function Footer() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId.replace('#', ''))?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const footerLinks = [
    { name: 'Tool Gratuiti', href: '#apps' },
    { name: 'Guide', href: '#guides' },
    { name: 'Vantaggi', href: '#features' },
    { name: 'Tool in Sviluppo', href: '#tools' },
    { name: 'Siti Web per Host', href: '#custom-landing' }
  ];

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-3">
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
              <OspitlyLogo cssClass="logo-footer" />
            </a>
            <p className="text-gray-300 mt-3 text-center md:text-left text-lg">
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
          <div className="text-center">
            <h4 className="font-semibold text-white text-lg mb-4">Link Utili</h4>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    scrollToSection(link.href);
                  }} 
                  className="block text-gray-300 hover:text-primary transition-colors hover:translate-x-1 duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold text-white text-lg mb-4">Contatti</h4>
            <div className="space-y-3">
              <p className="text-gray-300">
                Hai domande o suggerimenti?
              </p>
              <div className="space-y-2">
                <a 
                  href="mailto:info@ospitly.it" 
                  className="text-primary font-semibold hover:text-primary/80 transition-colors text-lg block"
                >
                  info@ospitly.it
                </a>
                <p className="text-sm text-gray-400">
                  📧 Rispondiamo entro 24h
                </p>
                <p className="text-sm text-gray-400">
                  💬 Supporto gratuito per tutti i tool
                </p>
              </div>
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
                🇮🇹 Made in Italy
              </span>
              <span className="flex items-center gap-1">
                ❤️ Per gli host italiani
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}