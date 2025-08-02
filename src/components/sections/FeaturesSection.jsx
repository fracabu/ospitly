import { BoltIcon, CurrencyDollarIcon, LockClosedIcon, SparklesIcon } from '@heroicons/react/24/solid';

export default function FeaturesSection() {
  const features = [
    { 
      icon: BoltIcon, 
      title: "Veloce", 
      description: "Risultati in secondi, non minuti.",
      color: "from-yellow-400 to-orange-500"
    },
    { 
      icon: CurrencyDollarIcon, 
      title: "Gratuito", 
      description: "Tool sempre gratuiti, nessun costo.",
      color: "from-green-400 to-emerald-500"
    },
    { 
      icon: LockClosedIcon, 
      title: "Privato", 
      description: "Non salviamo dati. Privacy garantita.",
      color: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <section id="features" className="bg-gradient-to-br from-gray-50 to-white py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full text-primary font-semibold mb-4">
            <SparklesIcon className="h-5 w-5" />
            I Nostri Vantaggi
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Perché Ospitly</h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">Strumenti sviluppati da host per host.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title} 
              className="group relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              
              <div className="relative">
                <div className={`inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 shadow-lg`}>
                  <feature.icon className="h-8 w-8 text-white"/>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-gray-800 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>

              {/* Number indicator */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">
                {index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Additional benefits */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Cosa dicono gli host che ci usano</h3>
            <p className="text-gray-600">Risultati reali da host reali</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold text-primary mb-2">3+ ore</div>
              <p className="text-gray-600">risparmiate ogni mese<br />nel calcolo tasse</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">0 errori</div>
              <p className="text-gray-600">nei calcoli automatici<br />vs metodo manuale</p>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">dei dati processati<br />restano privati</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}