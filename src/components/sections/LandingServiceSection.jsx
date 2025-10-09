import { useState } from 'react';
import { CheckCircleIcon, GlobeAltIcon } from '@heroicons/react/24/solid';
import OspitlyLogo from '../ui/OspitlyLogo';
import ContactForm from '../forms/ContactForm';

export default function LandingServiceSection({ showToast }) {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

  return (
    <section id="custom-landing" className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-12 min-h-screen flex items-center overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Sito Web Completo per Host<br />
            <span className="text-primary">Zero commissioni, massimi ricavi</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
          {/* Pricing Column */}
          <div className="space-y-6">
            {/* Pricing Box */}
            <div className="bg-gradient-to-r from-primary/10 to-orange-400/10 border-2 border-primary/20 rounded-2xl p-4">
              <div className="text-center">
                <div className="text-4xl font-black text-primary mb-2">€800</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Pagamento unico<br/>Nessun canone mensile</div>
                <div className="text-xs text-green-600 font-semibold mt-2">Si ripaga in 2-3 prenotazioni!</div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Perché sceglierci?</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">-15%</span>
                  <span className="text-gray-600 dark:text-gray-300">Niente commissioni Booking</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-bold">-18%</span>
                  <span className="text-gray-600 dark:text-gray-300">Niente commissioni Airbnb</span>
                </div>
                <div className="border-t pt-2 mt-3">
                  <span className="text-green-600 font-bold">+33% ricavi</span>
                  <span className="text-gray-600 dark:text-gray-300"> con prenotazioni dirette</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Cosa include:</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Sito web personalizzato</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Design unico per la tua struttura</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Form prenotazioni</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Raccogli richieste direttamente</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">SEO ottimizzazione</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Trovato facilmente su Google</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Google Analytics</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Monitora visite e conversioni</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Area admin + Database</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Gestisci tutte le richieste</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mockup Column */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 p-3 hover:shadow-3xl transition-shadow duration-300">
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
              <div className="aspect-video bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex flex-col items-center justify-center p-4 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-primary rounded-full -translate-x-20 -translate-y-20"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400 rounded-full translate-x-16 translate-y-16"></div>
                </div>

                <div className="relative text-center">
                  <div className="opacity-30 mb-4 flex justify-center">
                    <OspitlyLogo size="small" />
                  </div>
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

            {/* CTA Button under mockup */}
            <div className="text-center mt-6">
              <button 
                onClick={() => setIsQuoteFormOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-orange-400 text-white font-bold rounded-2xl shadow-xl hover:from-primary/90 hover:to-orange-400/90 transition-all transform hover:-translate-y-1 hover:shadow-2xl text-lg"
              >
                <GlobeAltIcon className="h-6 w-6" />
                Ordina il Tuo Sito - €800
              </button>
            </div>
          </div>
        </div>

        {/* Garanzie Section */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            ✅ Consegna in 7-14 giorni • ✅ Supporto gratuito incluso • ✅ Revisioni illimitate
          </p>
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