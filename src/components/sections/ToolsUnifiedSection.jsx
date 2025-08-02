import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  CurrencyDollarIcon,
  ShieldCheckIcon, 
  LightBulbIcon, 
  EyeIcon, 
  ArrowTopRightOnSquareIcon,
  BellIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/solid';

export default function ToolsUnifiedSection({ showToast }) {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Tools attivi
  const activeTools = [
    {
      id: 'tassa-soggiorno',
      title: 'Calcolatore Tassa Soggiorno',
      description: 'Calcola tasse per tutte le prenotazioni. Carica CSV → risultati in 30 sec.',
      icon: CurrencyDollarIcon,
      gradient: 'from-green-500 to-emerald-600',
      url: 'https://tassa-soggiorno-calculator.vercel.app',
      status: 'live'
    },
    {
      id: 'anti-overbooking',
      title: 'Anti-Overbooking',
      description: 'Monitora calendari e rileva conflitti prima che diventino problemi.',
      icon: ShieldCheckIcon,
      gradient: 'from-red-500 to-orange-500',
      url: 'https://ospitly-anti-overbooking.vercel.app/',
      status: 'beta'
    }
  ];

  // Tools in sviluppo
  const upcomingTools = [
    {
      title: "Analytics & Pricing",
      description: "Grafici ricavi e suggerimenti AI per prezzi.",
      icon: LightBulbIcon,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Competitor Checker",
      description: "Controlla prezzi concorrenza nella tua zona.",
      icon: EyeIcon,
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const handleToolClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast?.('❌ Inserisci un indirizzo email valido', 'error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      await emailjs.send(
        'service_kj88jdm',
        'template_wifuco4',
        {
          to_email: 'info@ospitly.it',
          user_email: email,
          subject: 'Nuova Iscrizione Early Access List',
          message: `
Nuova iscrizione alla Early Access List:

Email: ${email}
Data: ${new Date().toLocaleDateString('it-IT')}
Tool richiesti: Analytics & Pricing, Competitor Checker

L'utente vuole essere contattato quando i nuovi tool saranno disponibili.
          `
        },
        'cwovNf-cy5sogmFWn'
      );

      setIsSubscribed(true);
      setEmail('');
      showToast?.('🎉 Perfetto! Sei stato aggiunto alla lista early access. Ti contatteremo quando i tool saranno pronti!', 'success', 6000);
      
    } catch (error) {
      console.error('Error sending early access email:', error);
      showToast?.('❌ Errore nell\'invio. Riprova o scrivici direttamente a info@ospitly.it', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="tools" className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-16 min-h-screen flex items-center transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Tool Gratuiti
          </h2>
        </div>

        {/* Active Tools */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {activeTools.map((tool) => (
            <div 
              key={tool.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {tool.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {tool.description}
                </p>
                
                <button
                  onClick={() => handleToolClick(tool.url)}
                  className={`w-full px-6 py-3 bg-gradient-to-r ${tool.gradient} text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all transform hover:scale-105`}
                >
                  Apri Gratis
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Tools Section */}
        <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600 max-w-4xl mx-auto">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Prossimi Tool
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Strumenti in sviluppo per ottimizzare la gestione della tua struttura
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {upcomingTools.map((tool, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-600 overflow-hidden">
                <div className="p-4 text-center">
                  <div className={`inline-flex p-2 bg-gradient-to-br ${tool.gradient} rounded-xl shadow-lg mb-3 opacity-70`}>
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                    {tool.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mb-3">
                    {tool.description}
                  </p>
                  <button
                    onClick={() => {
                      document.querySelector('form input[type="email"]')?.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                      });
                      document.querySelector('form input[type="email"]')?.focus();
                    }}
                    className={`w-full px-4 py-2 bg-gradient-to-r ${tool.gradient} text-white font-semibold rounded-lg opacity-70 hover:opacity-90 transition-all text-sm`}
                  >
                    Richiedi Accesso
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Early Access Form */}
          <div className="text-center">
            <BellIcon className="h-12 w-12 text-primary mx-auto mb-4" />
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Vuoi essere il primo a testare i nuovi tool?
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Iscriviti alla lista early access e riceverai accesso prioritario gratuito
            </p>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-4">
              <input 
                type="email" 
                placeholder="La tua email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                disabled={isSubscribed}
                required
              />
              <button 
                type="submit"
                disabled={isSubscribed || isSubmitting}
                className={`px-6 py-3 font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg ${
                  isSubscribed 
                    ? 'bg-green-500 text-white cursor-not-allowed' 
                    : isSubmitting
                    ? 'bg-gray-400 text-white cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary to-orange-400 text-white hover:from-primary/90 hover:to-orange-400/90'
                }`}
              >
                {isSubscribed ? (
                  <span className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5" />
                    Iscritto!
                  </span>
                ) : isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Invio...
                  </span>
                ) : (
                  'Iscriviti Gratis'
                )}
              </button>
            </form>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <CheckCircleIcon className="h-4 w-4 text-green-500" />
                Nessun spam
              </span>
              <span className="flex items-center gap-1">
                <BellIcon className="h-4 w-4 text-blue-500" />
                Solo aggiornamenti utili
              </span>
              <span className="flex items-center gap-1">
                <StarIcon className="h-4 w-4 text-yellow-500" />
                Accesso prioritario
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}