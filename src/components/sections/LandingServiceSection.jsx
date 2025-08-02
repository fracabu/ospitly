import { CheckCircleIcon, GlobeAltIcon, ChartBarIcon } from '@heroicons/react/24/solid';
import OspitlyLogo from '../ui/OspitlyLogo';

export default function LandingServiceSection() {
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
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-semibold mb-4">
            🌐 Siti Web Personalizzati
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Smetti di pagare commissioni.<br />
            <span className="text-primary">Prendi il controllo.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ti creiamo una landing page su misura che converte i visitatori in ospiti. 
            Metti in mostra la tua struttura e costruisci il tuo brand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-2xl mb-8 border border-red-200">
              <h3 className="text-xl font-bold text-red-800 mb-2">💸 Stai perdendo soldi ogni giorno?</h3>
              <p className="text-red-700">
                Con 100 notti prenotate all'anno a €100/notte, paghi <strong>€1,500-1,800</strong> di commissioni alle OTA. 
                Il tuo sito si ripaga in 2-3 mesi!
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="bg-white p-4 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                  <benefit.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Features List */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">✨ Cosa Include:</h3>
              <ul className="space-y-3">
                {serviceFeatures.map(feature => ( 
                  <li key={feature} className="flex items-start gap-3"> 
                    <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" /> 
                    <span className="text-gray-700 font-medium">{feature}</span> 
                  </li> 
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-left">
              <a 
                href="mailto:info@ospitly.it?subject=Richiesta Preventivo Sito Web&body=Ciao! Sono interessato a creare un sito web per la mia struttura ricettiva.%0A%0AInformazioni sulla mia struttura:%0A- Nome:%0A- Tipologia (B%26B, casa vacanza, hotel):%0A- Numero camere/posti letto:%0A- Località:%0A- Sito web attuale (se presente):%0A%0AGrazie!" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-orange-400 text-white font-bold rounded-2xl shadow-xl hover:from-primary/90 hover:to-orange-400/90 transition-all transform hover:-translate-y-1 hover:shadow-2xl text-lg"
              >
                <GlobeAltIcon className="h-6 w-6" />
                Richiedi Preventivo Gratuito
              </a>
              <p className="text-sm text-gray-500 mt-3">
                💬 Risposta entro 24h | 📞 Consulenza gratuita | 🚀 Online in 7-14 giorni
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

        {/* Social Proof */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Perché Scegliere un Sito Personalizzato?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">0%</div>
                <p className="text-gray-600">Commissioni vs 15-18% OTA</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-gray-600">Prenotazioni automatiche</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                <p className="text-gray-600">Controllo del tuo brand</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}