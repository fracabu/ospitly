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