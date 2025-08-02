import { useState } from 'react';
import { EnvelopeIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/solid';
import ContactForm from '../forms/ContactForm';

export default function ContactSection({ showToast }) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section id="contact" className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Hai domande? Scrivici!
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Il nostro supporto è completamente gratuito. Ti rispondiamo entro 24h.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Email Contact */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all">
              <div className="bg-primary/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <EnvelopeIcon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Email Diretta</h3>
              <p className="text-gray-300 mb-6">
                Contattaci direttamente per qualsiasi domanda o supporto
              </p>
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="w-full px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-colors"
              >
                Scrivi Messaggio
              </button>
            </div>

            {/* Support Info */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
              <div className="bg-secondary/20 p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Supporto Gratuito</h3>
              <div className="text-gray-300 space-y-2">
                <p>✅ Risposta entro 24h</p>
                <p>✅ Supporto per tutti i tool</p>
                <p>✅ Consulenza gratuita</p>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Email diretta:</strong> info@ospitly.it
            </p>
            <p className="text-sm text-gray-400">
              Strumenti gratuiti per host italiani • Sempre aggiornati con le normative 2025
            </p>
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