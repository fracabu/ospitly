import { useState } from 'react';
import { ClockIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import { GUIDE_CATEGORIES, GUIDES_DATA, GUIDE_CONTENT } from '../../data/guideContent.jsx';

export default function GuidesSection({ onGuideClick }) {
  const [activeCategory, setActiveCategory] = useState('tasse');
  
  return (
    <section id="guides" className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Guide Essenziali
          </h2>
        </div>

        {/* Guides Grid - Solo le più importanti */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "CIN Obbligatorio 2025",
              description: "Sanzioni €800-8000. Come richiederlo.",
              id: 'cin-2025'
            },
            {
              title: "Tassa Soggiorno 2025",
              description: "Tariffe aggiornate tutte le città.",
              id: 'tassa-soggiorno-2025'
            },
            {
              title: "Evitare Overbooking",
              description: "Come prevenire perdite €200-500.",
              id: 'overbooking-guida'
            }
          ].map((guide, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {guide.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {guide.description}
                </p>
                
                <button 
                  onClick={() => {
                    if (guide.id && GUIDE_CONTENT[guide.id]) {
                      onGuideClick(GUIDE_CONTENT[guide.id]);
                    } else {
                      alert(`📚 Guida "${guide.title}" in preparazione!`);
                    }
                  }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary to-orange-400 text-white font-bold rounded-xl shadow-lg hover:from-primary/90 hover:to-orange-400/90 transition-all transform hover:scale-105"
                >
                  Leggi Gratis
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}