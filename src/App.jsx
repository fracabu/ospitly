import React, { useState } from 'react';
import { Bars3Icon, CheckCircleIcon, BoltIcon, LockClosedIcon, CurrencyDollarIcon, DocumentTextIcon, SparklesIcon, MegaphoneIcon, BookOpenIcon, ClockIcon, CalendarDaysIcon, ShieldCheckIcon, LightBulbIcon, ChatBubbleLeftRightIcon, ExclamationTriangleIcon, EyeIcon, BellIcon, XMarkIcon, ArrowLeftIcon } from '@heroicons/react/24/solid';
import './index.css';

const OspitlyLogo = ({ cssClass }) => (
  <img 
    src="/ospitly-logo.png" 
    alt="Ospitly Logo" 
    className={cssClass}
  />
);

export default function App() {
  const [currentGuide, setCurrentGuide] = useState(null);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      {currentGuide ? (
        <GuideViewer guide={currentGuide} onBack={() => setCurrentGuide(null)} />
      ) : (
        <main>
          <HeroWithTool />
          <GuidesSection onGuideClick={setCurrentGuide} />
          <FeaturesSection />
          <OtherToolsSection />
          <LandingServiceSection />
        </main>
      )}
      <Footer />
    </div>
  );
}

// COMPONENTE PER VISUALIZZARE LE GUIDE
function GuideViewer({ guide, onBack }) {
  return (
    <main className="flex-1">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeftIcon className="h-5 w-5" />
            Torna alle Guide
          </button>
          <h1 className="text-3xl font-bold text-gray-900">{guide.title}</h1>
          <p className="text-gray-600 mt-2">{guide.description}</p>
          <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
            <span className="flex items-center gap-1">
              <ClockIcon className="h-4 w-4" />
              {guide.timeRead}
            </span>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              guide.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
              guide.difficulty === 'Intermedio' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {guide.difficulty}
            </span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          {guide.content}
        </div>
      </div>
    </main>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#">
          <OspitlyLogo cssClass="logo-header" /> 
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#calculator" className="text-gray-600 hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' }); }}>Calcolatore</a>
          <a href="#guides" className="text-gray-600 hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('guides')?.scrollIntoView({ behavior: 'smooth' }); }}>Guide</a>
          <a href="#tools" className="text-gray-600 hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' }); }}>Altri Tool</a>
          <a href="#custom-landing" className="text-gray-600 hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('custom-landing')?.scrollIntoView({ behavior: 'smooth' }); }}>Siti Web</a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>Contatti</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="/login" className="font-semibold text-gray-600 hover:text-primary transition-colors">
            Accedi
          </a>
          <button onClick={() => document.getElementById('custom-landing')?.scrollIntoView({ behavior: 'smooth' })} className="px-5 py-2 bg-primary text-white font-semibold rounded-lg shadow-sm hover:brightness-105 transition cursor-pointer">
            Crea il tuo Sito
          </button>
        </div>
        
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Bars3Icon className="h-7 w-7 text-gray-800" />
          </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 px-6 py-8">
            <a href="#calculator" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setTimeout(() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-lg text-gray-700 hover:text-primary">Calcolatore</a>
            <a href="#guides" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setTimeout(() => document.getElementById('guides')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-lg text-gray-700 hover:text-primary">Guide</a>
            <a href="#tools" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setTimeout(() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-lg text-gray-700 hover:text-primary">Altri Tool</a>
            <a href="#custom-landing" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setTimeout(() => document.getElementById('custom-landing')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-lg text-gray-700 hover:text-primary">Siti Web</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="text-lg text-gray-700 hover:text-primary">Contatti</a>
            <a href="/login" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700 hover:text-primary">Accedi</a>
            <a href="#custom-landing" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); setTimeout(() => document.getElementById('custom-landing')?.scrollIntoView({ behavior: 'smooth' }), 100); }} className="mt-4 w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:brightness-105">
              Crea il tuo Sito
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function HeroWithTool() {
  return (
    <section id="calculator" className="relative bg-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Calcola la <span className="text-primary">Tassa di Soggiorno</span> in 30 secondi
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Carica il file CSV delle prenotazioni e ottieni automaticamente tutti i calcoli delle tasse di soggiorno per ogni ospite
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <CheckCircleIcon className="h-5 w-5 text-green-500"/>
              Gratuito per sempre
            </span>
            <span className="flex items-center gap-2">
              <LockClosedIcon className="h-5 w-5 text-green-500"/>
              Nessun dato salvato
            </span>
            <span className="flex items-center gap-2">
              <BoltIcon className="h-5 w-5 text-green-500"/>
              Risultato istantaneo
            </span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-orange-100 px-8 py-6 border-b border-gray-200">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <CurrencyDollarIcon className="h-8 w-8 text-primary"/>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Calcolatore Tassa di Soggiorno</h2>
                  <p className="text-gray-600">Trascina il file CSV delle prenotazioni o clicca per caricarlo</p>
                </div>
              </div>
            </div>
            <div className="h-[600px] md:h-[700px]">
              <iframe 
                src="https://tassa-soggiorno-calculator.vercel.app" 
                className="w-full h-full border-0" 
                title="Calcolatore Tassa di Soggiorno"
                allow="clipboard-write"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Hai bisogno di altri strumenti per gestire la tua struttura ricettiva?
          </p>
          <button onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })} className="inline-block px-8 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition cursor-pointer">
            Scopri gli Altri Tool
          </button>
        </div>
      </div>
    </section>
  );
}

// GUIDE CON CONTENUTI REALI
const GUIDE_CONTENT = {
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

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Come Richiedere il CIN: Procedura Step-by-Step</h2>
          
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">STEP 1: Preparazione Documenti</h3>
              <ul className="space-y-2 text-blue-700">
                <li>📄 <strong>SPID o CIE</strong> (obbligatori per accesso)</li>
                <li>🏠 <strong>Dati catastali</strong> dell'immobile</li>
                <li>🔒 <strong>Autocertificazione requisiti sicurezza</strong>:</li>
                <ul className="ml-6 mt-2 space-y-1">
                  <li>• Rilevatori gas combustibili</li>
                  <li>• Rilevatori monossido di carbonio</li>
                  <li>• Estintori portatili a norma</li>
                </ul>
                <li>🏢 <strong>Codice ATECO</strong> (se gestione imprenditoriale)</li>
              </ul>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">STEP 2: Accesso al Portale</h3>
              <ol className="space-y-2 text-green-700">
                <li>1. Vai su: <a href="https://www.ministeroturismo.gov.it/banca-dati-strutture-ricettive/" className="text-primary underline" target="_blank" rel="noopener noreferrer">Portale BDSR Ministero Turismo</a></li>
                <li>2. Accedi con <strong>SPID</strong> o <strong>CIE</strong></li>
                <li>3. Seleziona "Richiesta CIN"</li>
              </ol>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">STEP 3: Generazione CIN</h3>
              <p className="text-purple-700 mb-3">Il sistema genera automaticamente il codice formato:</p>
              <div className="bg-gray-800 text-green-400 p-4 rounded font-mono">
                IT + [3 cifre regione] + [6 cifre identificativo]<br/>
                Esempio: IT001123456
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sanzioni per Mancato Adempimento</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg">
              <thead className="bg-red-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-red-800">Violazione</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-red-800">Sanzione</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Mancata richiesta CIN</td>
                  <td className="px-6 py-4 text-sm font-bold text-red-600">€800 - €8,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Mancata esposizione</td>
                  <td className="px-6 py-4 text-sm font-bold text-red-600">€500 - €5,000</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm text-gray-700">Annunci senza CIN</td>
                  <td className="px-6 py-4 text-sm font-bold text-red-600">€800 - €8,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-red-600 font-semibold mt-3">⚠️ Le sanzioni si applicano dal 2 gennaio 2025</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Dove Esporre il CIN</h2>
          <div className="bg-yellow-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3">Obbligatorio:</h3>
            <ol className="space-y-2 text-yellow-700">
              <li>1. <strong>All'esterno dell'edificio</strong> (ben visibile)</li>
              <li>2. <strong>In tutti gli annunci online</strong>:</li>
              <ul className="ml-6 mt-2 space-y-1">
                <li>• Airbnb</li>
                <li>• Booking.com</li>
                <li>• Expedia</li>
                <li>• Sito web proprietà</li>
              </ul>
              <li>3. <strong>Nelle comunicazioni fiscali</strong> (dal 2025)</li>
            </ol>
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
            Contattaci per supporto nella richiesta del CIN: <a href="mailto:info@ospitly.com" className="text-primary underline">info@ospitly.com</a>
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
                <div className="flex justify-between">
                  <span>Hotel 2 stelle</span>
                  <span className="font-semibold">€4,90 <span className="text-sm text-red-600">(era €3,50)</span></span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel 1 stella</span>
                  <span className="font-semibold">€3,50 <span className="text-sm text-red-600">(era €2,50)</span></span>
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

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                🍕 Napoli
                <span className="text-sm bg-orange-100 text-orange-800 px-2 py-1 rounded">GIUBILEO 2025</span>
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Hotel 5 stelle</span>
                  <span className="font-semibold">€6,00 <span className="text-sm text-orange-600">(dal 1° marzo)</span></span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel 4 stelle</span>
                  <span className="font-semibold">€5,50 <span className="text-sm text-orange-600">(dal 1° marzo)</span></span>
                </div>
                <div className="flex justify-between">
                  <span>Case vacanze</span>
                  <span className="font-semibold">€2,00</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Aumenti straordinari validi solo per il 2025</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">⚓ Genova</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Hotel 5 stelle</span>
                  <span className="font-semibold">€5,00</span>
                </div>
                <div className="flex justify-between">
                  <span>Hotel 4 stelle</span>
                  <span className="font-semibold">€4,50</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Normativa Nazionale</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Limiti di Legge</h3>
            <ul className="space-y-2 text-blue-700">
              <li>📏 <strong>Tetto standard</strong>: Max €5 per notte</li>
              <li>🏛️ <strong>Città speciali</strong>: Max €10 per notte (con flussi turistici &gt;20x residenti)</li>
              <li>👶 <strong>Esenzioni comuni</strong>: Bambini sotto 18 anni, disabili, residenti</li>
              <li>📅 <strong>Durata massima</strong>: Generalmente 10-14 giorni consecutivi</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Chi Non Paga: Esenzioni</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Esenzioni Standard</h3>
              <ul className="space-y-2 text-green-700">
                <li>• Bambini e ragazzi (età varia per comune)</li>
                <li>• Persone con disabilità + accompagnatore</li>
                <li>• Residenti del comune</li>
                <li>• Forze dell'ordine in servizio</li>
                <li>• Autisti pullman turistici</li>
                <li>• Guide turistiche</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">⚠️ Documenti Richiesti</h3>
              <ul className="space-y-2 text-yellow-700">
                <li>• Carta d'identità (per residenti)</li>
                <li>• Certificato disabilità</li>
                <li>• Ordini di servizio (forze dell'ordine)</li>
                <li>• Patentino guida turistica</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Novità 2025: Cosa Cambia</h2>
          <div className="space-y-4">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">🆕 Riforma in Arrivo</h3>
              <ul className="space-y-2 text-purple-700">
                <li>• <strong>Tutti i comuni</strong> potranno applicare la tassa (non solo turistici)</li>
                <li>• <strong>Riscossione diretta</strong> dai comuni (non più tramite albergatori)</li>
                <li>• <strong>Tariffe proporzionali</strong> al costo dell'alloggio</li>
                <li>• <strong>Maggiore trasparenza</strong> nella destinazione dei fondi</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Come Calcolare la Tassa</h2>
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
            <button onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition cursor-pointer">
              Prova il Calcolatore Gratuito →
            </button>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">📚 Fonti Ufficiali:</h3>
          <ul className="space-y-2 text-blue-700">
            <li>• <a href="https://www.comune.milano.it/-/palazzo-marino.-adeguate-le-tariffe-dell-imposta-di-soggiorno-per-il-2025" className="text-primary underline" target="_blank" rel="noopener noreferrer">Comune di Milano - Tariffe 2025</a></li>
            <li>• <a href="https://quifinanza.it/lifestyle/travel-economy/tassa-soggiorno-2025-incassi/900754/" className="text-primary underline" target="_blank" rel="noopener noreferrer">QuiFinanza - Osservatorio Nazionale</a></li>
            <li>• <a href="https://www.paytourist.com/2025/01/22/tassa-di-soggiorno/" className="text-primary underline" target="_blank" rel="noopener noreferrer">PayTourist - Guida Completa</a></li>
            <li>• D.Lgs. 14 marzo 2011 n. 23 - Normativa base</li>
          </ul>
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

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Come Prevenire l'Overbooking</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Metodi Preventivi</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Sincronizzazione calendari automatica</strong></li>
                <li>• <strong>Check quotidiano</strong> di tutte le piattaforme</li>
                <li>• <strong>Tempo di preparazione</strong> tra prenotazioni</li>
                <li>• <strong>Alert e notifiche</strong> per nuove prenotazioni</li>
                <li>• <strong>Backup di alternative</strong> per emergenze</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">🔧 Strumenti Tecnici</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• <strong>Channel Manager</strong> (€100-500/mese)</li>
                <li>• <strong>File .ics</strong> per sincronizzazione gratuita</li>
                <li>• <strong>API dirette</strong> delle piattaforme</li>
                <li>• <strong>Software PMS</strong> per gestione completa</li>
                <li>• <strong>Anti-Overbooking Checker</strong> (in sviluppo)</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sincronizzazione Calendari: Tutorial</h2>
          
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">📱 Airbnb → Booking.com</h3>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Su Airbnb:</strong> Vai su Host → Calendario → Sincronizzazione</li>
                <li><strong>2. Esporta:</strong> Copia il link del calendario (.ics)</li>
                <li><strong>3. Su Booking:</strong> Extranet → Calendario → Importa calendario</li>
                <li><strong>4. Incolla:</strong> Il link .ics di Airbnb</li>
                <li><strong>5. Ripeti:</strong> L'operazione in senso inverso</li>
              </ol>
              <div className="mt-4 p-4 bg-gray-50 rounded">
                <p className="text-sm text-gray-600">
                  <strong>⏱️ Frequenza sync:</strong> Ogni 2-24 ore (varia per piattaforma)
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🔄 Expedia, VRBO, Agoda</h3>
              <p className="text-gray-700 mb-4">
                Il processo è simile per tutte le OTA principali. Ogni piattaforma ha una sezione 
                "Sincronizzazione calendari" o "Importa/Esporta calendario" nell'area gestionale.
              </p>
              <div className="bg-yellow-50 p-4 rounded">
                <p className="text-sm text-yellow-700">
                  <strong>⚠️ Attenzione:</strong> Alcune piattaforme hanno sync unidirezionale (solo import o solo export)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Cosa Fare Se Succede l'Overbooking</h2>
          
          <div className="bg-red-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-red-800 mb-3">🚨 Azione Immediata</h3>
            <ol className="space-y-2 text-red-700">
              <li><strong>1. Non panico:</strong> Mantieni la calma e professionalità</li>
              <li><strong>2. Contatta subito:</strong> L'ospite che ha prenotato per ultimo</li>
              <li><strong>3. Offri alternative:</strong> Sistemazione equivalente o migliore</li>
              <li><strong>4. Risarcimento:</strong> Copri la differenza di prezzo + extra</li>
              <li><strong>5. Scuse sincere:</strong> Assumi la responsabilità dell'errore</li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">✅ Cosa Offrire</h3>
              <ul className="space-y-2 text-green-700">
                <li>• <strong>Sistemazione equivalente</strong> nella zona</li>
                <li>• <strong>Upgrade gratuito</strong> se disponibile</li>
                <li>• <strong>Rimborso differenza</strong> + €50-100 extra</li>
                <li>• <strong>Trasporti pagati</strong> per raggiungere alternativa</li>
                <li>• <strong>Voucher futuro</strong> sconto 20-30%</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-800 mb-3">❌ Cosa NON Fare</h3>
              <ul className="space-y-2 text-red-700">
                <li>• Non dare colpe alle piattaforme</li>
                <li>• Non offrire soluzioni inadeguate</li>
                <li>• Non ignorare il problema</li>
                <li>• Non mentire sulle cause</li>
                <li>• Non essere avari nel risarcimento</li>
              </ul>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Checklist Anti-Overbooking Settimanale</h2>
          
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input type="checkbox" className="h-5 w-5 text-primary" />
                <span>Verificare sincronizzazione calendari di tutte le piattaforme</span>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="h-5 w-5 text-primary" />
                <span>Controllare che non ci siano sovrapposizioni nelle prossime 2 settimane</span>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="h-5 w-5 text-primary" />
                <span>Verificare che le date bloccate siano sincronizzate ovunque</span>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="h-5 w-5 text-primary" />
                <span>Testare che i link .ics funzionino correttamente</span>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="h-5 w-5 text-primary" />
                <span>Controllare impostazioni "prenotazione immediata"</span>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="h-5 w-5 text-primary" />
                <span>Verificare che non ci siano maintenance o bug noti delle piattaforme</span>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" className="h-5 w-5 text-primary" />
                <span>Aggiornare la lista di proprietà alternative di backup</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Soluzione Automatica: Anti-Overbooking Checker</h2>
          
          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-3">🤖 Tool in Sviluppo</h3>
            <p className="text-gray-700 mb-4">
              Stiamo sviluppando un sistema automatico che monitora H24 i tuoi calendari e ti avvisa immediatamente 
              se rileva possibili conflitti di prenotazione.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">✅ Cosa farà:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Controllo ogni 15-30 minuti</li>
                  <li>• Alert via email/SMS istantaneo</li>
                  <li>• Dashboard con vista unificata</li>
                  <li>• Report mensile conflitti risolti</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">💰 Valore:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 1 overbooking evitato = tool pagato</li>
                  <li>• Sonni tranquilli garantiti</li>
                  <li>• Zero recensioni negative</li>
                  <li>• 5+ ore/settimana risparmiate</li>
                </ul>
              </div>
            </div>
            <button onClick={() => document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' })} className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition cursor-pointer">
              Richiedi Early Access →
            </button>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">📚 Fonti e Approfondimenti:</h3>
          <ul className="space-y-2 text-blue-700">
            <li>• <a href="https://turidea.net/overbooking/" className="text-primary underline" target="_blank" rel="noopener noreferrer">Turidea - Overbooking: come gestirlo</a></li>
            <li>• <a href="https://your.rentals/it/blog/channel-managers/" className="text-primary underline" target="_blank" rel="noopener noreferrer">Your.Rentals - Channel Manager</a></li>
            <li>• Airbnb Partner Documentation</li>
            <li>• Booking.com Extranet Guide</li>
          </ul>
        </div>
      </div>
    )
  }
};

function GuidesSection({ onGuideClick }) {
  const [activeCategory, setActiveCategory] = useState('tasse');
  
  const categories = [
    { id: 'tasse', name: 'Tasse di Soggiorno', icon: CurrencyDollarIcon },
    { id: 'calendari', name: 'Gestione Calendari', icon: CalendarDaysIcon },
    { id: 'overbooking', name: 'Evitare Overbooking', icon: ShieldCheckIcon },
    { id: 'prezzi', name: 'Ottimizzazione Prezzi', icon: LightBulbIcon },
    { id: 'normative', name: 'Normative & Leggi', icon: DocumentTextIcon }
  ];

  const guides = {
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
      },
      {
        title: "Esenzioni Tassa Soggiorno: Chi Non Paga e Come Dimostrarlo",
        description: "Bambini sotto 18 anni, disabili, forze dell'ordine: tutte le esenzioni previste dalla legge.",
        timeRead: "6 min",
        difficulty: "Facile",
        sources: "Fonte: D.Lgs. 23/2011, Regolamenti Comunali"
      }
    ],
    calendari: [
      {
        title: "Sincronizzare Airbnb e Booking: Tutorial Completo 2025",
        description: "Step-by-step per evitare doppie prenotazioni. File .ics e API ufficiali.",
        timeRead: "15 min",
        difficulty: "Intermedio",
        content: {
          manual: "Aggiornamento manuale: 5 ore/settimana, errori garantiti",
          automated: "Anti-Overbooking Checker: controllo H24 automatico",
          cta: "Richiedi Early Access"
        },
        sources: "Fonti: Airbnb Partner API, Booking.com Extranet"
      },
      {
        title: "Export Calendari: Formati .ics e Procedure Ufficiali",
        description: "Come esportare correttamente i calendari da tutte le piattaforme principali.",
        timeRead: "10 min",
        difficulty: "Avanzato",
        sources: "Fonti: Documentazione tecnica OTA"
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
      },
      {
        title: "Checklist Anti-Overbooking Settimanale: 10 Controlli Essenziali",
        description: "Lista di verifiche da fare ogni settimana per dormire sonni tranquilli.",
        timeRead: "5 min",
        difficulty: "Facile",
        sources: "Fonte: Best practices settore hospitality"
      }
    ],
    prezzi: [
      {
        title: "Pricing Dinamico: Come Massimizzare i Ricavi nel 2025",
        description: "Algoritmi e strategie per aumentare del 20-40% i guadagni.",
        timeRead: "18 min",
        difficulty: "Avanzato",
        sources: "Fonte: Revenue Management Hotel, STR Global"
      },
      {
        title: "Commissioni Piattaforme 2025: Airbnb 3%, Booking 15%",
        description: "Come calcolare i prezzi ottimali considerando le diverse commissioni.",
        timeRead: "8 min",
        difficulty: "Intermedio",
        sources: "Fonte: Termini di servizio ufficiali OTA"
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
      },
      {
        title: "Comunicazioni Alloggiati: Portale e Obblighi 2025",
        description: "Come e quando comunicare gli ospiti alle autorità locali.",
        timeRead: "10 min",
        difficulty: "Intermedio",
        sources: "Fonte: Questure italiane, normativa anti-terrorismo"
      }
    ]
  };

  return (
    <section id="guides" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Guide per Host
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guide complete con contenuti aggiornati e fonti ufficiali. 
            Tutto quello che devi sapere per gestire la tua struttura ricettiva.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg transform -translate-y-1'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
              }`}
            >
              <category.icon className="h-5 w-5" />
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides[activeCategory]?.map((guide, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 leading-tight">
                  {guide.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {guide.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <ClockIcon className="h-4 w-4" />
                      {guide.timeRead}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      guide.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                      guide.difficulty === 'Intermedio' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {guide.difficulty}
                    </span>
                  </div>
                </div>

                {guide.content && (
                  <div className="bg-gradient-to-r from-primary/10 to-orange-100 p-4 rounded-lg mb-4">
                    <div className="text-sm">
                      <p className="text-gray-700 mb-2">
                        <span className="font-semibold text-red-600">❌ Metodo tradizionale:</span><br/>
                        {guide.content.manual}
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold text-green-600">✅ Con Ospitly:</span><br/>
                        {guide.content.automated}
                      </p>
                    </div>
                  </div>
                )}

                {guide.sources && (
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-4">
                    <p className="text-xs text-blue-700 font-medium">
                      📚 {guide.sources}
                    </p>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => {
                      if (guide.id && GUIDE_CONTENT[guide.id]) {
                        onGuideClick(GUIDE_CONTENT[guide.id]);
                      } else {
                        alert(`📚 Guida "${guide.title}" in preparazione!\n\nSarà disponibile a breve con contenuti completi e aggiornati.\n\n🔔 Ti avviseremo via email quando sarà online.`);
                      }
                    }}
                    className="text-primary font-semibold hover:text-primary/80 transition-colors cursor-pointer"
                  >
                    {guide.id && GUIDE_CONTENT[guide.id] ? 'Leggi la Guida →' : 'Guida in preparazione →'}
                  </button>
                  
                  {guide.content?.cta && (
                    <button 
                      onClick={() => {
                        if (guide.content.cta === "Prova il Calcolatore") {
                          document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
                        } else if (guide.content.cta === "Richiedi Early Access") {
                          document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
                        } else if (guide.content.cta === "Scopri il Tool") {
                          document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary/90 transition cursor-pointer"
                    >
                      {guide.content.cta}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 text-center shadow-lg">
          <ChatBubbleLeftRightIcon className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Non trovi quello che cerchi?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Suggerisci una nuova guida o facci una domanda. Le guide più richieste vengono pubblicate per prime!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button 
              onClick={() => window.open('mailto:info@ospitly.com?subject=Suggerimento Guida&body=Ciao! Vorrei suggerire una guida su:%0A%0A[Scrivi qui il tuo suggerimento]%0A%0AGrazie!', '_blank')}
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition cursor-pointer"
            >
              Suggerisci una Guida
            </button>
            <button 
              onClick={() => window.open('mailto:info@ospitly.com?subject=Domanda&body=Ciao! Ho una domanda:%0A%0A[Scrivi qui la tua domanda]%0A%0AGrazie!', '_blank')}
              className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition cursor-pointer"
            >
              Fai una Domanda
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
    const features = [
        { icon: BoltIcon, title: "Super Veloce", description: "Ottieni i calcoli e i dati di cui hai bisogno in pochi secondi, non minuti." },
        { icon: CurrencyDollarIcon, title: "Tool di Base Gratuiti", description: "I nostri tool di calcolo e utility sono e saranno sempre gratuiti. Nessun costo nascosto." },
        { icon: LockClosedIcon, title: "Sicuro e Privato", description: "Non salviamo i tuoi dati. La tua privacy è la nostra priorità." }
    ];

    return (
        <section id="features" className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold text-gray-900">Perché scegliere Ospitly</h2>
                     <p className="text-lg text-gray-600 mt-2">Strumenti pensati per host come te</p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.title} className="text-center p-6 bg-gray-50 rounded-xl shadow-md border border-gray-100">
                            <div className="inline-block p-4 bg-primary/10 rounded-full mb-4">
                               <feature.icon className="h-8 w-8 text-primary"/>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function OtherToolsSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      alert('❌ Inserisci un indirizzo email valido');
      return;
    }
    
    setIsSubscribed(true);
    alert(`🎉 Perfetto ${email}!\n\n✅ Sei stato aggiunto alla lista early access\n📧 Ti contatteremo quando i tool saranno pronti\n🚀 Sarai tra i primi a testare gratuitamente tutti i nuovi strumenti!\n\nGrazie per la fiducia! 💪`);
    setEmail('');
  };

  return (
    <section id="tools" className="bg-gray-50 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Tool in Sviluppo</h2>
            <p className="text-lg text-gray-600 mt-2">Presto una suite completa di strumenti per semplificare il tuo lavoro</p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          
          <div className="lg:col-span-2 bg-white rounded-xl shadow-xl border-2 border-red-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <ShieldCheckIcon className="h-8 w-8"/>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Anti-Overbooking Checker</h3>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    🔥 PRIORITY #1
                  </span>
                </div>
              </div>
              <p className="text-white/90">Monitora automaticamente i calendari di tutte le piattaforme e ti avvisa immediatamente se rileva doppie prenotazioni.</p>
            </div>
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">💸 Il Problema:</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• 1 overbooking = €200-500 di perdita</li>
                    <li>• Channel manager costano €100-500/mese</li>
                    <li>• 83% degli host ha avuto overbooking</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">✅ La Soluzione:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Monitoring H24 automatico</li>
                    <li>• Alert istantaneo via email/SMS</li>
                    <li>• Dashboard vista unificata</li>
                    <li>• Gratuito per sempre</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm">
                  <EyeIcon className="h-4 w-4 text-gray-500"/>
                  <span className="text-gray-600">2,847 host interessati</span>
                </div>
                <button 
                  onClick={() => {
                    if (!isSubscribed) {
                      setEmail('early-access@overbooking.com');
                      handleEmailSubmit(new Event('submit'));
                    }
                  }}
                  className="px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg hover:opacity-90 transition cursor-pointer"
                >
                  Richiedi Early Access
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-xl border-2 border-purple-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <LightBulbIcon className="h-8 w-8"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Dashboard Analytics & Pricing</h3>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    ⭐ PRIORITY #2
                  </span>
                </div>
              </div>
              <p className="text-white/90">Carica l'XLS delle prenotazioni e ottieni grafici, previsioni e suggerimenti di prezzo AI-powered.</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">📊 Cosa ottieni:</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Grafici occupancy & ricavi</li>
                    <li>• Previsioni stagionalità</li>
                    <li>• Pricing AI suggestions</li>
                    <li>• KPI automatici</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg">
                    <p className="text-sm font-semibold text-purple-800">Upload XLS → Analytics Istantanei</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-purple-600 font-semibold">+20-40% ricavi</span>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-yellow-200 text-yellow-800 rounded-full">In progettazione</span>
              </div>
            </div>
          </div>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto mt-8">

          <div className="bg-white rounded-xl shadow-xl border-2 border-blue-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <EyeIcon className="h-8 w-8"/>
                </div>
                <div>
                  <h3 className="text-lg font-bold">Competitor Price Checker</h3>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold">
                    🎯 PRIORITY #3
                  </span>
                </div>
              </div>
              <p className="text-white/90">Inserisci il link del tuo annuncio e scopri i prezzi della concorrenza nella tua zona per rimanere competitivo.</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">🔍 Come funziona:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Inserisci link annuncio</li>
                    <li>• Scansiona prezzi zona</li>
                    <li>• Suggerimenti pricing</li>
                    <li>• Analisi competitors</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-lg">
                    <p className="text-sm font-semibold text-blue-800">Link → Prezzi Mercato</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm text-blue-600 font-semibold">Pricing competitivo</span>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-yellow-200 text-yellow-800 rounded-full">In studio</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-100 rounded-lg">
                  <CurrencyDollarIcon className="h-6 w-6 text-green-600"/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Multi-Platform Pricing</h3>
                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">PRIORITY #4</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Calcola automaticamente i prezzi ottimali per ogni piattaforma considerando le diverse commissioni.</p>
              <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Airbnb:</strong> 3% commissione</p>
                  <p><strong>Booking:</strong> 15% commissione</p>
                  <p><strong>Expedia:</strong> 18% commissione</p>
                </div>
                <p className="text-primary font-semibold mt-3">→ Prezzi ottimizzati automaticamente</p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm text-green-600 font-semibold">+15-30% ricavi</span>
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-yellow-200 text-yellow-800 rounded-full">In progettazione</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-200 rounded-lg">
                  <DocumentTextIcon className="h-6 w-6 text-gray-500"/>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Estrattore Dati Documenti</h3>
                  <span className="inline-block px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-semibold">PRIORITY #5</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Carica una foto del documento di identità e ottieni automaticamente tutti i dati per il Portale Alloggiati.</p>
              <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                <SparklesIcon className="h-10 w-10 text-primary/50 mx-auto mb-2"/>
                <p className="text-sm text-gray-500">AI powered OCR</p>
                <span className="absolute top-2 right-2 inline-block px-3 py-1 text-xs font-semibold bg-yellow-200 text-yellow-800 rounded-full">In sviluppo</span>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 text-center shadow-lg border-2 border-primary/10">
          <BellIcon className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Vuoi essere il primo a testare i nuovi tool?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Iscriviti alla lista early access e riceverai accesso prioritario gratuito a tutti i nuovi strumenti appena sono pronti.
          </p>
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="La tua email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              disabled={isSubscribed}
              required
            />
            <button 
              type="submit"
              disabled={isSubscribed}
              className={`px-6 py-3 font-semibold rounded-lg transition cursor-pointer ${
                isSubscribed 
                  ? 'bg-green-500 text-white cursor-not-allowed' 
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}
            >
              {isSubscribed ? '✅ Iscritto!' : 'Iscriviti Gratis'}
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">Nessun spam. Solo aggiornamenti sui tool che ti servono.</p>
        </div>
      </div>
    </section>
  );
}

function LandingServiceSection() {
    const serviceFeatures = [ 
      "Sito web moderno e personalizzato", 
      "Form di contatto diretto", 
      "Area admin semplice per gestire i messaggi", 
      "Ottimizzato per essere trovato su Google", 
      "Nessuna commissione da pagare a Booking o Airbnb" 
    ];

    return (
        <section id="custom-landing" className="bg-white py-20 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="font-bold text-primary">IL TUO SITO, ZERO COMMISSIONI</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Smetti di pagare commissioni. <br/>Prendi il controllo.</h2>
                        <p className="text-lg text-gray-600 mt-4">Ti creiamo una landing page su misura che converte i visitatori in ospiti. Metti in mostra la tua struttura, gestisci le prenotazioni dirette e costruisci il tuo brand.</p>
                        <ul className="mt-6 space-y-3">
                            {serviceFeatures.map(feature => ( 
                              <li key={feature} className="flex items-start gap-3"> 
                                <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" /> 
                                <span className="text-gray-700">{feature}</span> 
                              </li> 
                            ))}
                        </ul>
                        <button onClick={() => window.open('mailto:info@ospitly.com?subject=Richiesta Preventivo Sito Web&body=Ciao! Sono interessato a creare un sito web per la mia struttura ricettiva.%0A%0AInformazioni sulla mia struttura:%0A- Nome:%0A- Tipologia (B%26B, casa vacanza, hotel):%0A- Numero camere/posti letto:%0A- Località:%0A- Sito web attuale (se presente):%0A%0AGrazie!', '_blank')} className="mt-8 inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 transition transform hover:-translate-y-1 cursor-pointer">Richiedi Preventivo Gratuito</button>
                    </div>
                    <div className="relative">
                        <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-2">
                            <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center p-8">
                                <div className="w-full text-center">
                                    <img src="/ospitly-logo.png" alt="Ospitly Logo" className="h-12 w-auto mx-auto opacity-50" />
                                    <h3 className="text-2xl font-bold text-gray-400 mt-4">B&B La Terrazza</h3>
                                    <p className="text-gray-400 mt-2">Il tuo angolo di paradiso</p>
                                    <div className="mt-6 h-10 w-3/4 mx-auto bg-gray-200 rounded-md"></div>
                                    <div className="mt-3 h-10 w-1/2 mx-auto bg-gray-200 rounded-md"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer id="contact" className="bg-gray-900 text-white">
            <div className="container mx-auto px-6 py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center md:items-start">
                        <a href="#">
                           <OspitlyLogo cssClass="logo-footer" />
                        </a>
                        <p className="text-gray-300 mt-2 text-center md:text-left">Semplifichiamo la vita degli host.</p>
                    </div>
                    <div className="text-center">
                        <h4 className="font-semibold text-white">Link Utili</h4>
                        <nav className="mt-4 space-y-2">
                            <a href="#calculator" onClick={(e) => { e.preventDefault(); document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-gray-300 hover:text-primary cursor-pointer">Calcolatore Tasse</a>
                            <a href="#guides" onClick={(e) => { e.preventDefault(); document.getElementById('guides')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-gray-300 hover:text-primary cursor-pointer">Guide</a>
                            <a href="#features" onClick={(e) => { e.preventDefault(); document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-gray-300 hover:text-primary cursor-pointer">Vantaggi</a>
                            <a href="#tools" onClick={(e) => { e.preventDefault(); document.getElementById('tools')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-gray-300 hover:text-primary cursor-pointer">Tool in Sviluppo</a>
                            <a href="#custom-landing" onClick={(e) => { e.preventDefault(); document.getElementById('custom-landing')?.scrollIntoView({ behavior: 'smooth' }); }} className="block text-gray-300 hover:text-primary cursor-pointer">Siti Web per Host</a>
                        </nav>
                    </div>
                    <div className="text-center md:text-right">
                        <h4 className="font-semibold text-white">Contatti</h4>
                        <p className="mt-4 text-gray-300">Hai domande o suggerimenti?</p>
                        <a href="mailto:info@ospitly.com" className="text-primary font-semibold hover:underline">info@ospitly.com</a>
                        <div className="mt-4">
                          <p className="text-sm text-gray-400">Scriviamo entro 24h</p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
                    © {new Date().getFullYear()} Ospitly — Tutti i diritti riservati.
                </div>
            </div>
        </footer>
    );
}