import { Link } from 'react-router-dom';
import { ClockIcon } from '@heroicons/react/24/solid';
import { GUIDE_CONTENT } from '../../data/guideContent.jsx';
import FadeInOnScroll, { FadeInStagger, FadeInStaggerItem } from '../ui/FadeInOnScroll';

export default function GuidesSection() {

  return (
    <section id="guides" className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 py-16 min-h-screen flex items-center transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeInOnScroll direction="up" duration={0.6}>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Guide Essenziali
            </h2>
          </div>
        </FadeInOnScroll>

        {/* Responsive Grid Layout */}
        <FadeInStagger staggerDelay={0.15}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "CIN Obbligatorio 2025",
              description: "Sanzioni €800-8000. Come richiederlo passo per passo.",
              id: 'cin-2025',
              badge: "Urgente",
              badgeColor: "bg-red-500",
              timeRead: "15 min"
            },
            {
              title: "Dotazioni Sicurezza 2025",
              description: "Estintori, rilevatori, segnaletica: tutto ciò che serve per legge.",
              id: 'dotazioni-sicurezza-2025',
              badge: "Nuovo",
              badgeColor: "bg-orange-500",
              timeRead: "18 min"
            },
            {
              title: "Marketing per B&B",
              description: "Social, gruppi Facebook e strategie per riempire il calendario.",
              id: 'marketing-bnb-social',
              badge: "Nuovo",
              badgeColor: "bg-pink-500",
              timeRead: "16 min"
            },
            {
              title: "Sincronizzare Calendari",
              description: "Guida completa per Google Calendar, Airbnb e Booking.com.",
              id: 'sincronizzazione-calendari',
              badge: "Completa",
              badgeColor: "bg-purple-500",
              timeRead: "18 min"
            },
            {
              title: "Tassa Soggiorno 2025",
              description: "Tariffe aggiornate per tutte le città italiane.",
              id: 'tassa-soggiorno-2025',
              badge: "Aggiornato",
              badgeColor: "bg-green-500",
              timeRead: "12 min"
            },
            {
              title: "Evitare Overbooking",
              description: "Come prevenire perdite di €200-500 per conflitto.",
              id: 'overbooking-guida',
              badge: "Essenziale",
              badgeColor: "bg-blue-500",
              timeRead: "12 min"
            }
          ].map((guide, index) => (
            <FadeInStaggerItem key={index}>
              <div className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative">
              {/* Badge */}
              <div className={`absolute top-4 right-4 ${guide.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                {guide.badge}
              </div>

              <div className="p-4 sm:p-6 text-center flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 mt-4">
                  {guide.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {guide.description}
                </p>

                <div className="mt-auto space-y-3">
                  {GUIDE_CONTENT[guide.id] ? (
                    <Link
                      to={`/guide/${guide.id}`}
                      className="block w-full px-4 sm:px-6 py-3 bg-gradient-to-r from-primary to-orange-400 text-white font-bold rounded-xl shadow-lg hover:from-primary/90 hover:to-orange-400/90 transition-all transform hover:scale-105 text-sm sm:text-base"
                    >
                      Leggi Gratis
                    </Link>
                  ) : (
                    <button
                      onClick={() => alert(`📚 Guida "${guide.title}" in preparazione!`)}
                      className="w-full px-4 sm:px-6 py-3 bg-gray-400 text-white font-bold rounded-xl shadow-lg cursor-not-allowed text-sm sm:text-base"
                      disabled
                    >
                      In Preparazione
                    </button>
                  )}

                  {/* Time indicator */}
                  <div className="flex items-center justify-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                    <ClockIcon className="h-4 w-4" />
                    <span>{guide.timeRead}</span>
                  </div>
                </div>
              </div>
            </div>
            </FadeInStaggerItem>
          ))}
          </div>
        </FadeInStagger>

      </div>
    </section>
  );
}