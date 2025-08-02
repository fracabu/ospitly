import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { PaperAirplaneIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';

export default function ContactForm({ 
  type = 'general', 
  isOpen, 
  onClose, 
  title = 'Contattaci',
  description = 'Scrivici per qualsiasi domanda o richiesta di supporto.',
  showToast
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    // Fields for website quote
    structureName: '',
    structureType: '',
    rooms: '',
    location: '',
    currentWebsite: '',
    // Fields for CIN support
    supportType: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getEmailTemplate = () => {
    switch (type) {
      case 'website':
        return {
          service_id: 'service_kj88jdm',
          template_id: 'template_wifuco4',
          template_params: {
            to_email: 'info@ospitly.it',
            from_name: formData.name,
            from_email: formData.email,
            subject: 'Richiesta Preventivo Sito Web',
            message: `
Richiesta preventivo per sito web:

Nome: ${formData.name}
Email: ${formData.email}
Nome Struttura: ${formData.structureName}
Tipologia: ${formData.structureType}
Numero Camere: ${formData.rooms}
Località: ${formData.location}
Sito Attuale: ${formData.currentWebsite || 'Nessuno'}

Messaggio:
${formData.message}
            `
          }
        };
      
      case 'cin':
        return {
          service_id: 'service_kj88jdm',
          template_id: 'template_wifuco4',
          template_params: {
            to_email: 'info@ospitly.it',
            from_name: formData.name,
            from_email: formData.email,
            subject: 'Richiesta Supporto CIN',
            message: `
Richiesta supporto per CIN:

Nome: ${formData.name}
Email: ${formData.email}
Nome Struttura: ${formData.structureName}
Località: ${formData.location}
Tipo Supporto: ${formData.supportType}

Messaggio:
${formData.message}
            `
          }
        };
      
      default:
        return {
          service_id: 'service_kj88jdm',
          template_id: 'template_wifuco4',
          template_params: {
            to_email: 'info@ospitly.it',
            from_name: formData.name,
            from_email: formData.email,
            subject: 'Contatto dal sito Ospitly',
            message: formData.message
          }
        };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const emailConfig = getEmailTemplate();
      
      await emailjs.send(
        emailConfig.service_id,
        emailConfig.template_id,
        emailConfig.template_params,
        'cwovNf-cy5sogmFWn'
      );

      setStatus('success');
      showToast?.('✅ Email inviata con successo! Ti risponderemo entro 24h.', 'success');
      
      // Reset form and close
      setTimeout(() => {
        setFormData({
          name: '', email: '', message: '', structureName: '', 
          structureType: '', rooms: '', location: '', currentWebsite: '', supportType: ''
        });
        setStatus('idle');
        onClose?.();
      }, 1000);

    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('error');
      showToast?.('❌ Errore nell\'invio. Riprova o scrivici direttamente a info@ospitly.it', 'error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
              <p className="text-gray-600 mt-1">{description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Basic Fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nome *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder="Il tuo nome"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder="la-tua-email@example.com"
              />
            </div>
          </div>

          {/* Website Quote Fields */}
          {type === 'website' && (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Struttura
                  </label>
                  <input
                    type="text"
                    name="structureName"
                    value={formData.structureName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="B&B Villa Rosa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipologia
                  </label>
                  <select
                    name="structureType"
                    value={formData.structureType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  >
                    <option value="">Seleziona...</option>
                    <option value="bed-breakfast">B&B</option>
                    <option value="casa-vacanza">Casa Vacanza</option>
                    <option value="hotel">Hotel</option>
                    <option value="agriturismo">Agriturismo</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Numero Camere/Posti Letto
                  </label>
                  <input
                    type="text"
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="3 camere / 8 posti letto"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Località
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Roma, Milano, Firenze..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sito Web Attuale (opzionale)
                </label>
                <input
                  type="url"
                  name="currentWebsite"
                  value={formData.currentWebsite}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="https://..."
                />
              </div>
            </>
          )}

          {/* CIN Support Fields */}
          {type === 'cin' && (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nome Struttura
                  </label>
                  <input
                    type="text"
                    name="structureName"
                    value={formData.structureName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="B&B Villa Rosa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Località
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    placeholder="Roma, Milano, Firenze..."
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo di Supporto Richiesto
                </label>
                <select
                  name="supportType"
                  value={formData.supportType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                >
                  <option value="">Seleziona...</option>
                  <option value="richiesta-cin">Aiuto per richiedere il CIN</option>
                  <option value="documenti">Preparazione documenti</option>
                  <option value="procedure">Spiegazione procedure</option>
                  <option value="altro">Altro supporto</option>
                </select>
              </div>
            </>
          )}

          {/* Message */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Messaggio *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
              placeholder="Descrivici la tua richiesta..."
            />
          </div>


          {/* Submit Button */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              Annulla
            </button>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-orange-400 text-white rounded-lg hover:from-primary/90 hover:to-orange-400/90 transition-all font-semibold disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Invio...
                </>
              ) : (
                <>
                  <PaperAirplaneIcon className="h-4 w-4" />
                  Invia Messaggio
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}