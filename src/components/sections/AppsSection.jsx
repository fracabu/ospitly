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
      url: 'https://ospitly-anti-overbooking.vercel.app/',
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
    <section id="apps" className="bg-gradient-to-br from-gray-50 to-white py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Tool Gratuiti
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {apps.map((app) => (
            <div 
              key={app.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Header */}
              <div className="p-6 text-center">
                <div className={`inline-flex p-4 bg-gradient-to-br ${app.gradient} rounded-2xl shadow-lg mb-4`}>
                  <app.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {app.description}
                </p>
                
                {/* CTA */}
                <button
                  onClick={() => handleAppClick(app.url)}
                  className={`w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r ${app.gradient} text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all transform hover:scale-105 text-lg`}
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