import { useState } from 'react';
import { CheckCircleIcon, GlobeAltIcon, ChartBarIcon } from '@heroicons/react/24/solid';
import OspitlyLogo from '../ui/OspitlyLogo';
import ContactForm from '../forms/ContactForm';

export default function LandingServiceSection({ showToast }) {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);
  
  const serviceFeatures = [ 
    "Sito web moderno e personalizzato", 
    "Form di contatto diretto", 
    "Area admin semplice per gestire i messaggi", 
    "Ottimizzato per essere trovato su Google", 
    "Nessuna commissione da pagare a Booking o Airbnb" 
  ];

  const benefits = [
    { icon: ChartBarIcon, title: "0% Commissioni", description: "Niente più 15-18% alle OTA" },
    { icon: GlobeAltIcon, title: "SEO Ottimizzato", description: "Trovato facilmente su Google" },
    { icon: CheckCircleIcon, title: "Gestione Facile", description: "Dashboard semplice e intuitiva" }
  ];

  return (
    <section id="custom-landing" className="bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Smetti di pagare commissioni.<br />
            <span className="text-primary">Prendi il controllo.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ti creiamo una landing page su misura che converte i visitatori in ospiti. 
            Metti in mostra la tua struttura e costruisci il tuo brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="order-2 lg:order-1 space-y-8">
            {/* Value Proposition */}
            <div>
              <p className="text-lg text-gray-600 mb-6">
                Smetti di pagare il <strong className="text-primary">15-18%</strong> di commissioni. 
                Il tuo sito si ripaga in pochi mesi.
              </p>
              
              {/* Key Features - Simplified */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Sito web personalizzato + form prenotazioni</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">Ottimizzato per Google (SEO incluso)</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">0% commissioni, 100% controllo</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div>
              <button 
                onClick={() => setIsQuoteFormOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-orange-400 text-white font-bold rounded-2xl shadow-xl hover:from-primary/90 hover:to-orange-400/90 transition-all transform hover:-translate-y-1 hover:shadow-2xl text-lg"
              >
                <GlobeAltIcon className="h-6 w-6" />
                Richiedi Preventivo Gratuito
              </button>
              <p className="text-sm text-gray-500 mt-3">
                Risposta entro 24h • Online in 7-14 giorni
              </p>
            </div>
          </div>

          {/* Mockup */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-4 hover:shadow-3xl transition-shadow duration-300">
              {/* Browser Bar */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-t-lg p-3 mb-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 text-center">
                  villamiabella.it
                </div>
              </div>

              {/* Website Content */}
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex flex-col items-center justify-center p-8 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full -translate-x-20 -translate-y-20"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400 rounded-full translate-x-16 translate-y-16"></div>
                </div>

                <div className="relative text-center">
                  <OspitlyLogo cssClass="h-8 w-auto mx-auto opacity-30 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-700 mb-2">Villa Mia Bella</h3>
                  <p className="text-gray-600 mb-4">Il tuo angolo di paradiso in Toscana</p>
                  
                  {/* Mockup Buttons */}
                  <div className="space-y-2">
                    <div className="h-12 bg-gradient-to-r from-primary/20 to-orange-400/20 rounded-lg border-2 border-dashed border-primary/30 flex items-center justify-center">
                      <span className="text-primary font-semibold">Prenota Ora</span>
                    </div>
                    <div className="h-8 bg-gray-200/50 rounded-md w-3/4 mx-auto"></div>
                    <div className="h-8 bg-gray-200/50 rounded-md w-1/2 mx-auto"></div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-xl shadow-lg transform rotate-12">
                <div className="text-xs font-semibold">0% Commissioni</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-xl shadow-lg transform -rotate-12">
                <div className="text-xs font-semibold">SEO Ottimizzato</div>
              </div>
            </div>
          </div>
        </div>

      </div>
      
      {/* Quote Form Modal */}
      <ContactForm
        type="website"
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
        title="Richiedi Preventivo Sito Web"
        description="Ricevi un preventivo personalizzato per il tuo sito web senza commissioni."
        showToast={showToast}
      />
    </section>
  );
}