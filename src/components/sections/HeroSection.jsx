import { CheckCircleIcon, BoltIcon, LockClosedIcon, ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/solid';

export default function HeroSection() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-white via-blue-50/30 to-orange-50/30 dark:from-gray-900 dark:via-gray-800/30 dark:to-gray-700/30 min-h-[calc(100vh-80px)] sm:h-[calc(100vh-120px)] flex items-center justify-center overflow-hidden transition-colors duration-300 py-8 sm:py-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-6">
            Gestisci la tua 
            <span className="block text-transparent bg-gradient-to-r from-primary via-orange-500 to-red-500 bg-clip-text">
              Struttura Ricettiva
            </span>
            senza stress
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto px-2">
            Tool gratuiti per <strong>calcolare tasse</strong>, <strong>evitare overbooking</strong> e <strong>rispettare normative</strong>.
          </p>

          {/* Single CTA */}
          <button 
            onClick={() => {
              const element = document.getElementById('tools');
              if (element) {
                element.scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start',
                  inline: 'nearest'
                });
              }
            }}
            className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-primary to-orange-400 text-white font-bold rounded-2xl shadow-xl hover:from-primary/90 hover:to-orange-400/90 transition-all transform hover:-translate-y-1 hover:shadow-2xl text-lg sm:text-xl"
          >
            Inizia Gratis
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}