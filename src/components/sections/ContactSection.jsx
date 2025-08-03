import { useState } from 'react';
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import ContactForm from '../forms/ContactForm';

export default function ContactSection({ showToast }) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 py-16 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Hai domande? Scrivici!
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Il nostro supporto è completamente gratuito. Ti rispondiamo entro 24h.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Column 1: Email Contact */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
            <div className="text-center">
              <div className="bg-primary/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <EnvelopeIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email Diretta</h3>
              <p className="text-gray-300 mb-6">
                Contattaci per qualsiasi domanda sui tool o richiesta di supporto
              </p>
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-colors"
              >
                Scrivi Messaggio
              </button>
            </div>
          </div>

          {/* Column 2: Support Info */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="text-center">
              <div className="bg-secondary/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-6">Supporto Gratuito</h3>
              <div className="text-gray-300 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-secondary">✅</span>
                  <span>Risposta entro 24h</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-secondary">✅</span>
                  <span>Supporto per tutti i tool</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-secondary">✅</span>
                  <span>Consulenza gratuita</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-secondary">✅</span>
                  <span>Assistenza normative 2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Company Info */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-6">Ospitly</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <p className="font-semibold text-white">Email diretta:</p>
                  <p className="text-primary">info@ospitly.it</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Specializzazione:</p>
                  <p>Tool per host italiani</p>
                </div>
                <div>
                  <p className="font-semibold text-white">Focus:</p>
                  <p>Normative 2025 sempre aggiornate</p>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm text-gray-400">
                    Semplifichiamo la vita degli host con strumenti gratuiti e affidabili
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <ContactForm
        type="general"
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        title="Contattaci"
        description="Scrivici per qualsiasi domanda o richiesta di supporto."
        showToast={showToast}
      />
    </section>
  );
}