import { useState } from 'react';
import { 
  ShieldCheckIcon, 
  LightBulbIcon, 
  EyeIcon, 
  CurrencyDollarIcon, 
  DocumentTextIcon, 
  SparklesIcon, 
  BellIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/solid';

export default function OtherToolsSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('❌ Inserisci un indirizzo email valido');
      return;
    }
    
    setIsSubscribed(true);
    alert(`🎉 Perfetto ${email}!\n\n✅ Sei stato aggiunto alla lista early access\n📧 Ti contatteremo quando i tool saranno pronti\n🚀 Sarai tra i primi a testare gratuitamente tutti i nuovi strumenti!\n\nGrazie per la fiducia! 💪`);
    setEmail('');
  };

  return (
    <section id="tools" className="bg-gradient-to-br from-white to-gray-50 py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Prossimi Tool</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Anti-Overbooking",
              description: "Monitoring automatico H24 per evitare conflitti.",
              icon: ShieldCheckIcon,
              gradient: "from-red-500 to-orange-500"
            },
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
          ].map((tool, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 text-center">
                <div className={`inline-flex p-4 bg-gradient-to-br ${tool.gradient} rounded-2xl shadow-lg mb-4`}>
                  <tool.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {tool.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {tool.description}
                </p>
                
                <button
                  onClick={() => {
                    if (!isSubscribed) {
                      setEmail('early-access@example.com');
                      handleEmailSubmit(new Event('submit'));
                    }
                  }}
                  className={`w-full px-6 py-3 bg-gradient-to-r ${tool.gradient} text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all transform hover:scale-105`}
                >
                  Richiedi Accesso
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Email Subscription CTA */}
        <div className="mt-16 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 text-center shadow-xl border-2 border-primary/10">
          <div className="max-w-3xl mx-auto">
            <BellIcon className="h-16 w-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Vuoi essere il primo a testare i nuovi tool?
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Iscriviti alla lista early access e riceverai accesso prioritario gratuito a tutti i nuovi strumenti appena sono pronti.
            </p>
            
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto mb-6">
              <input 
                type="email" 
                placeholder="La tua email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent text-lg shadow-sm"
                disabled={isSubscribed}
                required
              />
              <button 
                type="submit"
                disabled={isSubscribed}
                className={`px-8 py-4 font-semibold rounded-xl transition-all transform hover:scale-105 shadow-lg text-lg ${
                  isSubscribed 
                    ? 'bg-green-500 text-white cursor-not-allowed' 
                    : 'bg-gradient-to-r from-primary to-orange-400 text-white hover:from-primary/90 hover:to-orange-400/90'
                }`}
              >
                {isSubscribed ? (
                  <span className="flex items-center gap-2">
                    <CheckCircleIcon className="h-5 w-5" />
                    Iscritto!
                  </span>
                ) : (
                  'Iscriviti Gratis'
                )}
              </button>
            </form>

            <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
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