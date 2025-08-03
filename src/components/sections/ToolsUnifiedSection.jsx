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

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Column 1: Tool Tassa Soggiorno */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="p-6 text-center">
              {(() => {
                const IconComponent = activeTools[0].icon;
                return (
                  <div className={`inline-flex p-4 bg-gradient-to-br ${activeTools[0].gradient} rounded-2xl mb-6 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white"/>
                  </div>
                );
              })()}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {activeTools[0].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {activeTools[0].description}
              </p>
              <button
                onClick={() => handleToolClick(activeTools[0].url)}
                className={`w-full px-6 py-3 bg-gradient-to-r ${activeTools[0].gradient} text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all transform hover:scale-105`}
              >
                Apri Gratis
              </button>
            </div>
          </div>

          {/* Column 2: Tool Anti-Overbooking */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="p-6 text-center">
              {(() => {
                const IconComponent = activeTools[1].icon;
                return (
                  <div className={`inline-flex p-4 bg-gradient-to-br ${activeTools[1].gradient} rounded-2xl mb-6 shadow-lg`}>
                    <IconComponent className="h-8 w-8 text-white"/>
                  </div>
                );
              })()}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {activeTools[1].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {activeTools[1].description}
              </p>
              <button
                onClick={() => handleToolClick(activeTools[1].url)}
                className={`w-full px-6 py-3 bg-gradient-to-r ${activeTools[1].gradient} text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all transform hover:scale-105`}
              >
                Apri Gratis
              </button>
            </div>
          </div>

          {/* Column 3: Upcoming Tools */}
          <div className="space-y-6">
            {/* Upcoming Tools Card */}
            <div className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-600">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 text-center">
                Prossimi Tool
              </h3>
              
              <div className="space-y-3">
                {upcomingTools.map((tool, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-3 border border-gray-100 dark:border-gray-600">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 bg-gradient-to-br ${tool.gradient} rounded-lg opacity-70`}>
                        <tool.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-gray-900 dark:text-white">
                          {tool.title}
                        </h4>
                        <p className="text-xs text-gray-600 dark:text-gray-300">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Early Access Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="text-center">
                <BellIcon className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Early Access
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Ricevi accesso gratuito ai nuovi tool
                </p>
            
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="La tua email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-colors text-sm"
                    disabled={isSubscribed}
                    required
                  />
                  <button 
                    type="submit"
                    disabled={isSubscribed || isSubmitting}
                    className={`w-full px-4 py-3 font-semibold rounded-xl transition-all shadow-lg text-sm ${
                      isSubscribed 
                        ? 'bg-green-500 text-white cursor-not-allowed' 
                        : isSubmitting
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary to-orange-400 text-white hover:from-primary/90 hover:to-orange-400/90'
                    }`}
              >
                    {isSubscribed ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircleIcon className="h-4 w-4" />
                        Iscritto!
                      </span>
                    ) : isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Invio...
                      </span>
                    ) : (
                      'Iscriviti Gratis'
                    )}
                  </button>
                </form>

                <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400 mt-3">
                  <span className="flex items-center gap-1">
                    <CheckCircleIcon className="h-3 w-3 text-green-500" />
                    Gratis
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircleIcon className="h-3 w-3 text-green-500" />
                    No spam
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}