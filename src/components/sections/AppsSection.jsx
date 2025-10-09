import { 
  CurrencyDollarIcon, 
  ShieldCheckIcon, 
  ArrowTopRightOnSquareIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/solid';

export default function AppsSection() {
  const apps = [
    {
      id: 'tassa-soggiorno',
      title: 'Calcolatore Tassa Soggiorno',
      description: 'Calcola tasse per tutte le prenotazioni. Carica CSV → risultati in 30 sec.',
      icon: CurrencyDollarIcon,
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      url: 'https://tassa-soggiorno-calculator.vercel.app',
      features: [
        'Calcolo automatico ospiti',
        'Tutte le città italiane',
        'Zero errori'
      ],
      stats: {
        time: '30 sec',
        accuracy: '100%',
        savings: '3+ ore/mese'
      },
      status: 'live'
    },
    {
      id: 'anti-overbooking',
      title: 'Anti-Overbooking',
      description: 'Monitora calendari e rileva conflitti prima che diventino problemi.',
      icon: ShieldCheckIcon,
      gradient: 'from-red-500 to-orange-500',
      bgGradient: 'from-red-50 to-orange-50',
      borderColor: 'border-red-200',
      url: 'https://overbooking-shield-tool.vercel.app/',
      features: [
        'Controllo multi-piattaforma',
        'Alert tempo reale',
        'Previeni perdite €500+'
      ],
      stats: {
        time: '24/7',
        accuracy: '99.9%',
        savings: '€500+/anno'
      },
      status: 'beta'
    }
  ];

  const handleAppClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="apps" className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 py-12 sm:py-16 min-h-screen flex items-center transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Tool Gratuiti
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {apps.map((app) => (
            <div 
              key={app.id}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="p-4 sm:p-6 text-center">
                <div className={`inline-flex p-4 bg-gradient-to-br ${app.gradient} rounded-2xl shadow-lg mb-4`}>
                  <app.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {app.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6">
                  {app.description}
                </p>
                
                {/* CTA */}
                <button
                  onClick={() => handleAppClick(app.url)}
                  className={`w-full flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-gradient-to-r ${app.gradient} text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all transform hover:scale-105 text-sm sm:text-base md:text-lg`}
                >
                  Apri Gratis
                  <ArrowTopRightOnSquareIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}