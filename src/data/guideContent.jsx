import { 
  ClockIcon, 
  ArrowLeftIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  SparklesIcon,
  CalendarDaysIcon,
  ShieldCheckIcon,
  LightBulbIcon
} from '@heroicons/react/24/solid';

export const GUIDE_CONTENT = {
  'cin-2025': {
    title: "CIN Obbligatorio dal 1° Gennaio 2025: Guida Completa",
    description: "Tutto quello che devi sapere sul Codice Identificativo Nazionale: procedura, sanzioni e scadenze.",
    timeRead: "15 min",
    difficulty: "Avanzato",
    content: (
      <div className="space-y-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-red-800 mb-2">🚨 SCADENZA: 1° Gennaio 2025</h2>
          <p className="text-red-700 font-semibold">Sanzioni fino a €8,000 per chi non si adegua</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cos'è il CIN?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Il <strong>Codice Identificativo Nazionale (CIN)</strong> è un codice alfanumerico univoco che identifica ogni struttura ricettiva e immobile destinato ad affitti brevi in Italia. È stato introdotto dal D.L. 18 dicembre 2023 n. 145 per uniformare la regolamentazione degli affitti brevi su tutto il territorio nazionale.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Chi deve richiederlo:</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✅ <strong>Tutti gli affitti brevi</strong> (sotto 30 giorni)</li>
            <li>✅ <strong>Locazioni turistiche</strong> (sopra 30 giorni)</li>
            <li>✅ <strong>Hotel, B&B, agriturismi</strong></li>
            <li>✅ <strong>Strutture alberghiere ed extralberghiere</strong></li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Timeline e Scadenze</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Data</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Evento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">3 Settembre 2024</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Pubblicazione in Gazzetta Ufficiale</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">22 Ottobre 2024</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Proroga annunciata</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="px-6 py-4 text-sm font-bold text-red-800">1° Gennaio 2025</td>
                  <td className="px-6 py-4 text-sm font-bold text-red-800">SCADENZA DEFINITIVA</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">2 Gennaio 2025</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Inizio controlli e sanzioni</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">📚 Fonti Ufficiali:</h3>
          <ul className="space-y-2 text-blue-700">
            <li>• <a href="https://www.ministeroturismo.gov.it/banca-dati-strutture-ricettive/" className="text-primary underline" target="_blank" rel="noopener noreferrer">Ministero del Turismo - BDSR</a></li>
            <li>• <a href="https://fiscomania.com/cin-affitti-brevi/" className="text-primary underline" target="_blank" rel="noopener noreferrer">Fiscomania - Aggiornamento CIN</a></li>
            <li>• <a href="https://www.regione.toscana.it/-/codice-identificativo-nazionale-cin" className="text-primary underline" target="_blank" rel="noopener noreferrer">Regione Toscana - Procedura CIN</a></li>
            <li>• D.L. 18 dicembre 2023 n. 145 (Decreto Anticipi)</li>
          </ul>
        </div>

        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-3">💡 Hai bisogno di aiuto?</h3>
          <p className="text-gray-700">
            Contattaci per supporto nella richiesta del CIN: <button onClick={() => window.dispatchEvent(new CustomEvent('openCinForm'))} className="text-primary underline hover:text-primary/80 transition-colors">info@ospitly.it</button>
          </p>
        </div>
      </div>
    )
  },

  'tassa-soggiorno-2025': {
    title: "Tassa di Soggiorno 2025: Tutte le Tariffe per Città",
    description: "Milano €7 (4-5 stelle), Roma €7.50, Napoli €6. Aumenti fino al 40% per il Giubileo 2025.",
    timeRead: "12 min",
    difficulty: "Intermedio", 
    content: (
      <div className="space-y-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-yellow-800 mb-2">💰 Gettito Record 2025</h2>
          <p className="text-yellow-700 font-semibold">1,186 miliardi di euro previsti (+15,8% rispetto al 2024)</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Principali Città: Tariffe 2025</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                🏙️ Milano
                <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">AUMENTI 2025</span>
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Hotel 4-5 stelle</span>
                  <span className="font-semibold">€7,00 <span className="text-sm text-red-600">(era €5,00)</span></span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel 3 stelle</span>
                  <span className="font-semibold">€6,30 <span className="text-sm text-red-600">(era €4,50)</span></span>
                </div>
                <div className="flex justify-between">
                  <span>Affitti brevi</span>
                  <span className="font-semibold">€6,30 <span className="text-sm text-red-600">(era €4,50)</span></span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Fonte: Comune di Milano - Giunta 7 novembre 2024</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                🏛️ Roma
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Hotel 5 stelle</span>
                  <span className="font-semibold">€7,50</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel 4 stelle</span>
                  <span className="font-semibold">€6,00</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel 3 stelle</span>
                  <span className="font-semibold">€4,50</span>
                </div>
                <div className="flex justify-between">
                  <span>Case vacanze</span>
                  <span className="font-semibold">€3,50</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Max 10 giorni consecutivi</p>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-3">💻 Metodo Automatico con Ospitly</h3>
          <p className="text-gray-700 mb-4">
            Invece di calcolare manualmente ogni prenotazione (3+ ore di lavoro), usa il nostro calcolatore gratuito:
          </p>
          <ol className="space-y-2 text-gray-700 mb-4">
            <li>1. Esporta il CSV delle prenotazioni da Airbnb/Booking</li>
            <li>2. Carica il file nel nostro calcolatore</li>
            <li>3. Ottieni automaticamente tutti i calcoli in 30 secondi</li>
          </ol>
          <button onClick={() => window.open('https://tassa-soggiorno-calculator.vercel.app', '_blank', 'noopener,noreferrer')} className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition cursor-pointer">
            Prova il Calcolatore Gratuito →
          </button>
        </div>
      </div>
    )
  },

  'checkin-normative-2025': {
    title: "Normative Check-in 2025: Cosa Devi Sapere",
    description: "Registrazione ospiti, documenti richiesti e adempimenti obbligatori per host italiani.",
    timeRead: "10 min",
    difficulty: "Intermedio",
    content: (
      <div className="space-y-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-2">📋 Check-in Legale</h2>
          <p className="text-blue-700 font-semibold">Adempimenti obbligatori per evitare sanzioni</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Documenti Obbligatori al Check-in</h2>
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Per TUTTI gli ospiti (italiani e stranieri):</h3>
            <ul className="space-y-3 text-gray-700">
              <li>✅ <strong>Documento d'identità valido</strong> (carta d'identità, patente, passaporto)</li>
              <li>✅ <strong>Registrazione in Questura</strong> (entro 24h dall'arrivo)</li>
              <li>✅ <strong>Comunicazione dati</strong> alla Polizia di Stato</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Procedura Step by Step</h2>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">1. All'arrivo dell'ospite</h4>
              <ul className="text-green-700 space-y-1">
                <li>• Richiedi documento d'identità</li>
                <li>• Fotocopia o scansiona il documento</li>
                <li>• Compila scheda di notifica</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">2. Entro 24 ore</h4>
              <ul className="text-blue-700 space-y-1">
                <li>• Invia dati alla Questura (online o di persona)</li>
                <li>• Conserva ricevuta di avvenuta comunicazione</li>
                <li>• Archivia documenti per controlli</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sanzioni per Inadempienza</h2>
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h3 className="text-lg font-semibold text-red-800 mb-3">Mancata registrazione ospiti:</h3>
            <ul className="text-red-700 space-y-2">
              <li>💰 <strong>Da €160 a €1,100</strong> per ospite non registrato</li>
              <li>📋 <strong>Segnalazione</strong> alle autorità competenti</li>
              <li>⚠️ <strong>Possibile chiusura</strong> dell'attività nei casi più gravi</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Strumenti Utili</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Portali online per registrazione:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>🌐 <strong>Alloggiati Web</strong> - Polizia di Stato</li>
              <li>📱 <strong>App Questura</strong> - Registrazione mobile</li>
              <li>💻 <strong>Portali regionali</strong> - Varia per regione</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-3">💡 Hai bisogno di supporto?</h3>
          <p className="text-gray-700">
            Contattaci per assistenza nella gestione delle normative check-in: <button onClick={() => window.dispatchEvent(new CustomEvent('openCinForm'))} className="text-primary underline hover:text-primary/80 transition-colors">info@ospitly.it</button>
          </p>
        </div>
      </div>
    )
  },

  'overbooking-guida': {
    title: "Overbooking: Come Evitarlo e Gestirlo (Guida Definitiva)",
    description: "1 overbooking = €200-500 di perdita + recensioni negative. Come prevenire il disastro.",
    timeRead: "12 min",
    difficulty: "Intermedio",
    content: (
      <div className="space-y-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-red-800 mb-2">💸 Il Costo dell'Overbooking</h2>
          <ul className="space-y-1 text-red-700">
            <li>• <strong>83% degli host</strong> ha subito almeno 1 overbooking</li>
            <li>• <strong>€200-500 di perdita</strong> per ogni conflitto</li>
            <li>• <strong>Recensioni negative</strong> danneggiano permanentemente la reputazione</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cos'è l'Overbooking</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            L'overbooking si verifica quando più ospiti prenotano la stessa proprietà per le stesse date attraverso piattaforme diverse, 
            o quando errori nella gestione dei calendari portano a conflitti di prenotazione.
          </p>
          
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Cause Principali</h3>
            <ul className="space-y-2 text-yellow-700">
              <li>• <strong>Sincronizzazione calendari</strong> mancata o in ritardo</li>
              <li>• <strong>Gestione manuale</strong> su più piattaforme</li>
              <li>• <strong>Errori umani</strong> nel bloccare/sbloccare date</li>
              <li>• <strong>Bug tecnici</strong> delle piattaforme</li>
              <li>• <strong>Prenotazione immediata</strong> attivata senza controllo</li>
            </ul>
          </div>
        </div>

        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-3">🤖 Tool in Sviluppo</h3>
          <p className="text-gray-700 mb-4">
            Stiamo sviluppando un sistema automatico che monitora H24 i tuoi calendari e ti avvisa immediatamente 
            se rileva possibili conflitti di prenotazione.
          </p>
          <button onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition cursor-pointer">
            Richiedi Early Access →
          </button>
        </div>
      </div>
    )
  }
};

export const GUIDE_CATEGORIES = [
  { id: 'tasse', name: 'Tasse di Soggiorno', icon: CurrencyDollarIcon },
  { id: 'calendari', name: 'Gestione Calendari', icon: CalendarDaysIcon },
  { id: 'overbooking', name: 'Evitare Overbooking', icon: ShieldCheckIcon },
  { id: 'prezzi', name: 'Ottimizzazione Prezzi', icon: LightBulbIcon },
  { id: 'normative', name: 'Normative & Leggi', icon: DocumentTextIcon }
];

export const GUIDES_DATA = {
  tasse: [
    {
      id: 'cin-2025',
      title: "Come Calcolare la Tassa di Soggiorno: Guida Completa 2025",
      description: "Procedura manuale vs automatica con il nostro calcolatore. Tariffe aggiornate per tutte le città italiane.",
      timeRead: "8 min",
      difficulty: "Facile",
      content: {
        manual: "Processo manuale: 3 ore per calcolare 50 prenotazioni, rischio errori",
        automated: "Con Ospitly: 30 secondi, carica il CSV e ottieni tutti i calcoli",
        cta: "Prova il Calcolatore"
      },
      sources: "Fonti: Ministero del Turismo, Comuni italiani"
    },
    {
      id: 'tassa-soggiorno-2025',
      title: "Tassa di Soggiorno 2025: Tutte le Tariffe per Città",
      description: "Milano €7 (4-5 stelle), Roma €7.50, Napoli €6. Aumenti fino al 40% per il Giubileo 2025.",
      timeRead: "12 min",
      difficulty: "Intermedio",
      sources: "Fonte: Comune di Milano, Osservatorio Nazionale Tassa Soggiorno"
    }
  ],
  overbooking: [
    {
      id: 'overbooking-guida',
      title: "Overbooking: Come Evitarlo e Gestirlo (Guida Definitiva)",
      description: "1 overbooking = €200-500 di perdita + recensioni negative. Come prevenire il disastro.",
      timeRead: "12 min",
      difficulty: "Intermedio",
      content: {
        manual: "Controllo manuale: 83% degli host ha subito overbooking",
        automated: "Monitoring automatico: alert istantaneo se rileva conflitti",
        cta: "Scopri il Tool"
      },
      sources: "Fonte: Studio Turidea, Associazioni Host"
    }
  ],
  normative: [
    {
      id: 'cin-2025',
      title: "CIN Obbligatorio dal 1° Gennaio 2025: Come Richiederlo",
      description: "Codice Identificativo Nazionale: procedura, sanzioni €800-8000, scadenze.",
      timeRead: "20 min",
      difficulty: "Avanzato",
      content: {
        manual: "Procedura BDSR: SPID, dati catastali, autocertificazione sicurezza",
        automated: "Ti aiutiamo con checklist e documentazione automatica",
        cta: "Scarica Checklist CIN"
      },
      sources: "Fonte: Ministero del Turismo, D.L. 145/2023, Fiscomania.com"
    }
  ]
};