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
  },

  'sincronizzazione-calendari': {
    title: "Sincronizzare Google Calendar con Airbnb e Booking (Guida Completa)",
    description: "Guida step-by-step per sincronizzare i tuoi calendari e prevenire overbooking. Include istruzioni per tutte le piattaforme.",
    timeRead: "18 min",
    difficulty: "Intermedio",
    content: (
      <div className="space-y-8">
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-blue-800 mb-2">📅 Perché Sincronizzare i Calendari</h2>
          <ul className="space-y-1 text-blue-700">
            <li>• <strong>Previeni overbooking</strong> - Evita doppie prenotazioni e conflitti</li>
            <li>• <strong>Risparmia tempo</strong> - Aggiorna automaticamente tutti i calendari</li>
            <li>• <strong>Riduci errori</strong> - Elimina la gestione manuale delle date</li>
            <li>• <strong>Massimizza occupazione</strong> - Sincronizza disponibilità su tutte le piattaforme</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Come Funziona la Sincronizzazione</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            La sincronizzazione dei calendari avviene tramite <strong>file iCal (.ics)</strong>, un formato standard che permette
            lo scambio di informazioni tra diversi sistemi. Ogni piattaforma genera un link iCal univoco che può essere importato
            nelle altre piattaforme.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🔄 Flusso di Sincronizzazione</h3>
            <div className="space-y-2 text-gray-700">
              <p>1. <strong>Esporta</strong> il calendario da Piattaforma A (ottieni link iCal)</p>
              <p>2. <strong>Importa</strong> il link iCal in Piattaforma B</p>
              <p>3. <strong>Ripeti</strong> per tutte le combinazioni di piattaforme</p>
              <p>4. ⚠️ <strong>Importante</strong>: La sincronizzazione è unidirezionale (A → B)</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Sincronizzare Airbnb → Google Calendar</h2>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📤 Step 1: Esportare da Airbnb</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1.</strong> Accedi al tuo account Airbnb</li>
                <li><strong>2.</strong> Vai su <strong>Annunci</strong> → Seleziona il tuo annuncio</li>
                <li><strong>3.</strong> Clicca su <strong>Calendario</strong></li>
                <li><strong>4.</strong> In basso, clicca su <strong>"Sincronizza calendario con altre app"</strong></li>
                <li><strong>5.</strong> Nella sezione <strong>"Esporta calendario"</strong>, copia il link iCal</li>
              </ol>
              <div className="mt-4 p-3 bg-yellow-50 rounded border border-yellow-200">
                <p className="text-sm text-yellow-800">💡 <strong>Nota</strong>: Il link generato è specifico per ogni annuncio. Se hai più proprietà, dovrai ripetere per ognuna.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-green-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📥 Step 2: Importare in Google Calendar</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1.</strong> Apri <a href="https://calendar.google.com" className="text-primary underline" target="_blank" rel="noopener noreferrer">Google Calendar</a></li>
                <li><strong>2.</strong> Clicca sull'icona <strong>⚙️ Impostazioni</strong> in alto a destra</li>
                <li><strong>3.</strong> Nel menu laterale, clicca su <strong>"Aggiungi calendario"</strong> → <strong>"Da URL"</strong></li>
                <li><strong>4.</strong> Incolla il link iCal copiato da Airbnb</li>
                <li><strong>5.</strong> Clicca su <strong>"Aggiungi calendario"</strong></li>
                <li><strong>6.</strong> Dai un nome riconoscibile (es. "Airbnb - Appartamento Centro")</li>
              </ol>
              <div className="mt-4 p-3 bg-green-50 rounded border border-green-200">
                <p className="text-sm text-green-800">✅ <strong>Fatto!</strong> Google Calendar ora si aggiorna automaticamente con le prenotazioni Airbnb (ogni 8-24 ore)</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Sincronizzare Booking.com → Google Calendar</h2>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border-2 border-blue-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📤 Step 1: Esportare da Booking.com</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1.</strong> Accedi al tuo <a href="https://admin.booking.com" className="text-primary underline" target="_blank" rel="noopener noreferrer">Extranet Booking.com</a></li>
                <li><strong>2.</strong> Vai su <strong>Calendario e prezzi</strong></li>
                <li><strong>3.</strong> Clicca su <strong>"Sincronizza calendari"</strong></li>
                <li><strong>4.</strong> Nella sezione <strong>"Esporta il calendario"</strong>, copia il link iCal</li>
                <li><strong>5.</strong> Salva il link in un posto sicuro</li>
              </ol>
              <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                <p className="text-sm text-blue-800">📌 <strong>Importante</strong>: Booking.com permette l'esportazione solo del calendario principale, non di singole proprietà.</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border-2 border-green-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📥 Step 2: Importare in Google Calendar</h3>
              <p className="text-gray-700 mb-3">Segui gli stessi passaggi del punto precedente (Airbnb → Google Calendar):</p>
              <ol className="space-y-2 text-gray-700">
                <li><strong>1.</strong> Google Calendar → Impostazioni</li>
                <li><strong>2.</strong> Aggiungi calendario → Da URL</li>
                <li><strong>3.</strong> Incolla il link iCal di Booking.com</li>
                <li><strong>4.</strong> Dai un nome (es. "Booking.com - Casa Vacanze")</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sincronizzare Google Calendar → Airbnb/Booking</h2>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg mb-4">
            <h3 className="text-lg font-semibold text-yellow-800 mb-2">⚠️ Sincronizzazione Bidirezionale</h3>
            <p className="text-yellow-700">
              Per evitare overbooking, devi anche importare i calendari esterni (Airbnb, Booking) nelle rispettive piattaforme.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl border-2 border-purple-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🔄 Collegare Airbnb ↔ Booking.com</h3>

              <h4 className="font-semibold text-gray-800 mb-2">Airbnb → Booking.com:</h4>
              <ol className="space-y-2 text-gray-700 mb-4">
                <li><strong>1.</strong> Copia il link iCal da Airbnb (vedi punto 1)</li>
                <li><strong>2.</strong> Vai su Booking.com Extranet → <strong>Sincronizza calendari</strong></li>
                <li><strong>3.</strong> Clicca su <strong>"Importa calendario"</strong></li>
                <li><strong>4.</strong> Incolla il link iCal di Airbnb</li>
                <li><strong>5.</strong> Dai un nome e salva</li>
              </ol>

              <h4 className="font-semibold text-gray-800 mb-2">Booking.com → Airbnb:</h4>
              <ol className="space-y-2 text-gray-700">
                <li><strong>1.</strong> Copia il link iCal da Booking.com (vedi punto 2)</li>
                <li><strong>2.</strong> Vai su Airbnb → <strong>Calendario</strong> → <strong>"Sincronizza calendario"</strong></li>
                <li><strong>3.</strong> Nella sezione <strong>"Importa calendario"</strong>, incolla il link</li>
                <li><strong>4.</strong> Dai un nome (es. "Booking.com") e salva</li>
              </ol>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Problemi Comuni e Soluzioni</h2>

          <div className="space-y-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">❌ Problema: Il calendario non si aggiorna</h4>
              <p className="text-red-700 text-sm mb-2"><strong>Cause possibili:</strong></p>
              <ul className="text-red-700 text-sm space-y-1 mb-2">
                <li>• Link iCal errato o scaduto</li>
                <li>• Ritardo nella sincronizzazione (può richiedere 8-24 ore)</li>
                <li>• Cache del browser non aggiornata</li>
              </ul>
              <p className="text-red-700 text-sm"><strong>Soluzione:</strong> Rigenera il link iCal e re-importalo. Attendi almeno 24 ore prima di verificare.</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">❌ Problema: Overbooking nonostante la sincronizzazione</h4>
              <p className="text-red-700 text-sm mb-2"><strong>Cause possibili:</strong></p>
              <ul className="text-red-700 text-sm space-y-1 mb-2">
                <li>• Sincronizzazione non bidirezionale (solo A → B, manca B → A)</li>
                <li>• Ritardo tra piattaforme (fino a 24h)</li>
                <li>• Prenotazione immediata attivata</li>
              </ul>
              <p className="text-red-700 text-sm"><strong>Soluzione:</strong> Verifica che TUTTE le piattaforme siano collegate tra loro. Disattiva "prenotazione immediata" o aggiungi 1 giorno di buffer.</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-2">❌ Problema: Date bloccate non sincronizzate</h4>
              <p className="text-red-700 text-sm mb-2"><strong>Causa:</strong> Le date bloccate manualmente spesso non vengono esportate nei file iCal.</p>
              <p className="text-red-700 text-sm"><strong>Soluzione:</strong> Blocca le date manualmente su TUTTE le piattaforme, non solo su una.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-green-800 mb-4">✅ Consigli per una sincronizzazione perfetta:</h3>
            <ul className="space-y-3 text-green-700">
              <li><strong>1. Sincronizza TUTTE le combinazioni</strong> - Non solo A → B, ma anche B → A</li>
              <li><strong>2. Aggiungi un buffer</strong> - 1 giorno prima/dopo ogni prenotazione per check-in/out e pulizie</li>
              <li><strong>3. Controlla settimanalmente</strong> - Verifica che i calendari siano allineati</li>
              <li><strong>4. Usa nomi chiari</strong> - "Airbnb Villa Mare" invece di "Calendario 1"</li>
              <li><strong>5. Testa la sincronizzazione</strong> - Blocca manualmente una data e verifica che appaia su tutte le piattaforme</li>
              <li><strong>6. Mantieni aggiornati i link</strong> - Se rigeneri un link iCal, aggiorna tutte le importazioni</li>
              <li><strong>7. Disattiva "prenotazione immediata"</strong> - O imposta un tempo di preparazione di 24h</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tempi di Sincronizzazione</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Piattaforma</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Frequenza Aggiornamento</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Tempo Massimo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Airbnb</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Ogni 8-12 ore</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24 ore</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Booking.com</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Ogni 4-8 ore</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24 ore</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Google Calendar</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Ogni 8-24 ore</td>
                  <td className="px-6 py-4 text-sm text-gray-700">48 ore</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-3">⚠️ I tempi possono variare. Non fare affidamento su sincronizzazioni immediate.</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">📚 Fonti Ufficiali:</h3>
          <ul className="space-y-2 text-blue-700">
            <li>• <a href="https://www.airbnb.it/help/article/99" className="text-primary underline" target="_blank" rel="noopener noreferrer">Airbnb - Sincronizzazione Calendario</a></li>
            <li>• <a href="https://partner.booking.com/it/help/rates-availability/calendar-sync-how-can-i-sync-my-bookingcom-calendar-external-calendars" className="text-primary underline" target="_blank" rel="noopener noreferrer">Booking.com - Guida Sincronizzazione</a></li>
            <li>• <a href="https://support.google.com/calendar/answer/37100" className="text-primary underline" target="_blank" rel="noopener noreferrer">Google Calendar - Importare Calendari</a></li>
          </ul>
        </div>

        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-3">🛡️ Tool Anti-Overbooking</h3>
          <p className="text-gray-700 mb-4">
            Anche con la sincronizzazione, i ritardi di 8-24 ore possono causare overbooking. Il nostro tool monitora in tempo reale
            tutti i tuoi calendari e ti avvisa immediatamente se rileva conflitti.
          </p>
          <button onClick={() => window.open('https://overbooking-shield-tool.vercel.app/', '_blank', 'noopener,noreferrer')} className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition cursor-pointer">
            Prova il Tool Gratuito →
          </button>
        </div>
      </div>
    )
  },

  'dotazioni-sicurezza-2025': {
    title: "Dotazioni di Sicurezza Obbligatorie per B&B 2025",
    description: "Estintori, rilevatori CO/fumo, uscite di emergenza: tutto ciò che serve per legge. Normativa aggiornata 2025.",
    timeRead: "18 min",
    difficulty: "Avanzato",
    content: (
      <div className="space-y-8">
        <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-red-800 mb-2">⚠️ Sicurezza = Obbligatoria</h2>
          <p className="text-red-700 font-semibold">Sanzioni da €1,000 a €10,000 + possibile chiusura struttura</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Dotazioni Antincendio Obbligatorie</h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                🧯 Estintori
                <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">OBBLIGATORIO</span>
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>✅ <strong>Tipo</strong>: Estintori a polvere ABC da 6 kg (copertura 13A-89B)</li>
                <li>✅ <strong>Quantità</strong>: 1 per piano, minimo 1 ogni 200 mq</li>
                <li>✅ <strong>Posizionamento</strong>: Vicino uscite/scale, altezza 1.20-1.50m</li>
                <li>✅ <strong>Manutenzione</strong>: Revisione ogni 6 mesi + collaudo ogni 3 anni</li>
                <li>💰 <strong>Costo</strong>: €30-60 (acquisto) + €25/anno (manutenzione)</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                🔥 Rilevatori di Fumo
                <span className="text-sm bg-red-100 text-red-800 px-2 py-1 rounded">OBBLIGATORIO</span>
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>✅ <strong>Dove</strong>: Ogni camera, corridoi, zone comuni</li>
                <li>✅ <strong>Tipo</strong>: Rilevatori ottici di fumo con allarme acustico 85dB</li>
                <li>✅ <strong>Alimentazione</strong>: Batteria 9V (durata 1 anno) o cablati 220V</li>
                <li>✅ <strong>Test</strong>: Mensile con pulsante test</li>
                <li>💰 <strong>Costo</strong>: €8-25 cadauno</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                💨 Rilevatori di Monossido di Carbonio (CO)
                <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">CONSIGLIATO</span>
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>⚠️ <strong>Quando obbligatorio</strong>: Presenza di caldaie, stufe, camini, garage collegato</li>
                <li>✅ <strong>Dove</strong>: Vicino zone notte, locale caldaia</li>
                <li>✅ <strong>Standard</strong>: Certificazione EN 50291</li>
                <li>✅ <strong>Manutenzione</strong>: Sostituzione ogni 5-7 anni</li>
                <li>💰 <strong>Costo</strong>: €20-40 cadauno</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Segnaletica di Sicurezza</h2>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Cartelli Obbligatori</h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li>🚪 <strong>Uscite di emergenza</strong>: Cartelli fotoluminescenti verdi (dimensione minima 21x21 cm)</li>
              <li>↗️ <strong>Percorsi di esodo</strong>: Frecce direzionali ogni 10 metri lungo il percorso</li>
              <li>📍 <strong>Planimetria</strong>: Pianta piano con vie di fuga in ogni camera</li>
              <li>🧯 <strong>Posizione estintori</strong>: Cartello rosso sopra ogni estintore</li>
              <li>🚭 <strong>Divieto di fumo</strong>: Obbligatorio in tutte le aree chiuse</li>
              <li>💰 <strong>Costo</strong>: €3-8 per cartello, kit completo €50-100</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Uscite di Emergenza</h2>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-3">📏 Requisiti Tecnici</h3>
            <ul className="space-y-2 text-yellow-700 dark:text-yellow-400">
              <li>• <strong>Larghezza minima</strong>: 80 cm per porte, 90 cm per corridoi</li>
              <li>• <strong>Apertura</strong>: Solo verso l'esterno o scorrevoli se >25 persone</li>
              <li>• <strong>Serrature</strong>: Apribili dall'interno senza chiave (maniglione antipanico se >50 persone)</li>
              <li>• <strong>Numero</strong>: Almeno 2 vie di fuga indipendenti se capacità >50 persone</li>
              <li>• <strong>Illuminazione</strong>: Luci di emergenza lungo le vie di fuga</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Altre Dotazioni</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">🩹 Kit Pronto Soccorso</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>✅ Obbligatorio se >5 camere</li>
                <li>• Bende, cerotti, disinfettante</li>
                <li>• Guanti monouso, forbici</li>
                <li>• Termometro</li>
                <li>💰 €15-30</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">💡 Illuminazione Emergenza</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm">
                <li>✅ Obbligatoria lungo vie di fuga</li>
                <li>• Autonomia minima: 1 ora</li>
                <li>• Luci LED con batteria backup</li>
                <li>• Test mensile funzionamento</li>
                <li>💰 €20-50 per lampada</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Certificazioni e Documenti</h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-4">📋 Cosa Serve</h3>
            <ul className="space-y-3 text-blue-700 dark:text-blue-400">
              <li>✅ <strong>CPI (Certificato Prevenzione Incendi)</strong>: Obbligatorio se >25 posti letto o >6 camere</li>
              <li>✅ <strong>Registro manutenzione</strong>: Estintori, rilevatori, impianti sicurezza</li>
              <li>✅ <strong>Piano di emergenza</strong>: Procedure evacuazione, numeri emergenza</li>
              <li>✅ <strong>Formazione personale</strong>: Addetti antincendio e primo soccorso</li>
              <li>✅ <strong>Assicurazione</strong>: RC struttura con copertura incendio</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Costi Totali Stimati</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Dotazione</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Costo Iniziale</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Costo Annuale</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Estintori (2x)</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">€60-120</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">€50/anno</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Rilevatori fumo (4x)</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">€32-100</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">€10/anno</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Rilevatori CO (2x)</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">€40-80</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Segnaletica completa</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">€50-100</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">-</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Luci emergenza (3x)</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">€60-150</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">€20/anno</td>
                </tr>
                <tr className="bg-gray-50 dark:bg-gray-700 font-semibold">
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">TOTALE</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">€240-550</td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">€80/anno</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">* Costi per B&B di 4 camere. Aumentano proporzionalmente per strutture più grandi.</p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">✅ Checklist Verifica</h3>
          <ul className="space-y-2 text-green-700 dark:text-green-400">
            <li>☐ Estintori installati e revisionati</li>
            <li>☐ Rilevatori fumo in ogni camera</li>
            <li>☐ Rilevatori CO se presenti caldaie/stufe</li>
            <li>☐ Segnaletica uscite emergenza installata</li>
            <li>☐ Luci emergenza funzionanti</li>
            <li>☐ Planimetrie evacuazione affisse</li>
            <li>☐ Registro manutenzioni aggiornato</li>
            <li>☐ CPI richiesto/ottenuto (se necessario)</li>
          </ul>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">📚 Fonti Normative:</h3>
          <ul className="space-y-2 text-blue-700 dark:text-blue-400 text-sm">
            <li>• D.M. 3 agosto 2015 - Codice Prevenzione Incendi</li>
            <li>• D.P.R. 151/2011 - Attività soggette a CPI</li>
            <li>• Normativa regionale (varia per regione)</li>
            <li>• EN 50291 - Standard rilevatori CO</li>
          </ul>
        </div>

        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-3">💡 Hai dubbi sulla sicurezza?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Contattaci per una consulenza personalizzata: <button onClick={() => window.dispatchEvent(new CustomEvent('openCinForm'))} className="text-primary underline hover:text-primary/80 transition-colors">info@ospitly.it</button>
          </p>
        </div>
      </div>
    )
  },

  'marketing-bnb-social': {
    title: "Marketing per B&B: Oltre il Sito, Servono Social e Community",
    description: "SEO ottimizzato non basta: strategia social, gruppi Facebook, Instagram e creazione di movimento per riempire il calendario.",
    timeRead: "16 min",
    difficulty: "Intermedio",
    content: (
      <div className="space-y-8">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ La Verità che Nessuno Dice</h2>
          <p className="text-yellow-700 dark:text-yellow-400 font-semibold">Un sito perfetto senza traffico = €0 di prenotazioni dirette</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Il Problema del "Sito Fantasma"</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Molti host investono migliaia di euro in siti web perfetti con SEO ottimizzato, booking engine integrato,
            foto professionali... e poi ricevono <strong>zero prenotazioni dirette</strong>.
          </p>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h3 className="text-lg font-semibold text-red-800 dark:text-red-300 mb-3">❌ Errori Comuni</h3>
            <ul className="space-y-2 text-red-700 dark:text-red-400">
              <li>• <strong>"Ho il sito, aspetto che le persone lo trovino"</strong> → Il sito è invisibile su Google senza autorità</li>
              <li>• <strong>"Faccio solo Google Ads"</strong> → CPC alto (€2-8), difficile competere con OTA</li>
              <li>• <strong>"Basta essere su Booking/Airbnb"</strong> → Commissioni 15-20%, zero ownership clienti</li>
              <li>• <strong>"I social non servono per B&B"</strong> → 78% dei viaggiatori cerca ispirazione su Instagram</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">La Strategia che Funziona</h2>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                1️⃣ Instagram: La Vetrina Visiva
                <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">PRIORITÀ ALTA</span>
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li>📸 <strong>Contenuti</strong>: Foto camere, colazione, dintorni, momenti "dietro le quinte"</li>
                <li>📅 <strong>Frequenza</strong>: 3-4 post/settimana + 2-3 stories/giorno</li>
                <li>🎯 <strong>Hashtag</strong>: Mix di locali (#turismoroma) + generici (#bnblife)</li>
                <li>💬 <strong>Engagement</strong>: Rispondi a TUTTI i commenti entro 2 ore</li>
                <li>🔗 <strong>Bio</strong>: Link al sito con "Prenota Diretto -15%" ben visibile</li>
                <li>⏱️ <strong>Tempo</strong>: 30-45 min/giorno</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 flex items-center gap-2">
                2️⃣ Gruppi Facebook: La Miniera d'Oro
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">ROI ALTISSIMO</span>
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">I gruppi Facebook sono il canale più sottovalutato e più redditizio per B&B.</p>

              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ Gruppi dove essere ATTIVI:</h4>
                <ul className="space-y-2 text-green-700 dark:text-green-400 text-sm">
                  <li>• "Viaggiare low cost in Italia" (200k membri)</li>
                  <li>• "Weekend in Italia - Dove andare?" (150k membri)</li>
                  <li>• Gruppi locali: "Cosa fare a [tua città]" (40-80k membri)</li>
                  <li>• Gruppi tematici: "Viaggi con bambini", "Pet-friendly Italia", ecc.</li>
                  <li>• Host & B&B: Networking con altri host per scambio consigli</li>
                </ul>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ Come Postare (senza essere bannati)</h4>
                <ul className="space-y-2 text-yellow-700 dark:text-yellow-400 text-sm">
                  <li>❌ NO spam diretto "Vieni nel mio B&B!"</li>
                  <li>✅ SÌ risposte utili: "Se cerchi zona X ti consiglio [consigli veri], poi se ti serve alloggio scrivimi in privato"</li>
                  <li>✅ SÌ contenuti valore: "3 posti segreti a Roma che nessuno conosce" + menzione discreta B&B</li>
                  <li>✅ SÌ offerte esclusive: "Per membri gruppo: sconto 20% prenotando diretto"</li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">3️⃣ Google My Business: Visibilità Locale</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>📍 <strong>Claim della scheda</strong>: Fondamentale per "B&B vicino a me"</li>
                <li>⭐ <strong>Recensioni</strong>: Chiedi a OGNI ospite recensione su GMB (+ importante di Booking)</li>
                <li>📸 <strong>Foto</strong>: Almeno 20 foto professionali + 5-10 foto clienti</li>
                <li>📅 <strong>Post settimanali</strong>: Aggiornamenti, eventi locali, offerte</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">4️⃣ Email Marketing: Clienti Ripetuti</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>📧 <strong>Lista email</strong>: Raccogli email di TUTTI gli ospiti (con consenso)</li>
                <li>💌 <strong>Newsletter mensile</strong>: Eventi locali, novità B&B, offerte esclusive</li>
                <li>🎁 <strong>Compleanno/Anniversario</strong>: Email personale con sconto 15%</li>
                <li>📊 <strong>Tool</strong>: Mailchimp gratuito fino 500 contatti</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Calendario Settimanale (90 min totali)</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Giorno</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Attività</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900 dark:text-white">Tempo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Lunedì</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Post Instagram + risposte commenti</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">20 min</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Martedì</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Gruppi FB: 5 risposte utili</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">15 min</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Mercoledì</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Post Instagram + Stories</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">20 min</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Giovedì</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Gruppi FB + GMB post</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">15 min</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900 dark:text-white">Venerdì</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">Post Instagram + Email ospiti partiti</td>
                  <td className="px-6 py-4 text-sm text-gray-700 dark:text-gray-300">20 min</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Risultati Realistici (dopo 3 mesi)</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">15-25%</div>
              <p className="text-green-800 dark:text-green-300 font-semibold">Prenotazioni Dirette</p>
              <p className="text-sm text-green-700 dark:text-green-400 mt-2">vs 0-5% senza marketing</p>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">€800-2000</div>
              <p className="text-blue-800 dark:text-blue-300 font-semibold">Risparmio Commissioni</p>
              <p className="text-sm text-blue-700 dark:text-blue-400 mt-2">al mese (media 4 camere)</p>
            </div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">3-5x</div>
              <p className="text-purple-800 dark:text-purple-300 font-semibold">ROI Marketing</p>
              <p className="text-sm text-purple-700 dark:text-purple-400 mt-2">Ogni €1 investito rende €3-5</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">📚 Risorse Consigliate:</h3>
          <ul className="space-y-2 text-blue-700 dark:text-blue-400">
            <li>• Canva: Design grafico facile per post Instagram (gratuito)</li>
            <li>• Later/Buffer: Programmazione post social (gratuito fino 10 post/mese)</li>
            <li>• Mailchimp: Email marketing (gratuito fino 500 contatti)</li>
            <li>• Google My Business: Gestione scheda locale (gratuito)</li>
          </ul>
        </div>

        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-3">🚀 Vuoi una strategia personalizzata?</h3>
          <p className="text-gray-700 dark:text-gray-300">
            Contattaci per una consulenza marketing gratuita: <button onClick={() => window.dispatchEvent(new CustomEvent('openCinForm'))} className="text-primary underline hover:text-primary/80 transition-colors">info@ospitly.it</button>
          </p>
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