import React, { useState } from 'react';
import { Bars3Icon, CheckCircleIcon, BoltIcon, LockClosedIcon, CurrencyDollarIcon, DocumentTextIcon, SparklesIcon, MegaphoneIcon } from '@heroicons/react/24/solid';
import './index.css';

const OspitlyLogo = ({ cssClass }) => (
  <img 
    src="/ospitly-logo.png" 
    alt="Ospitly Logo" 
    className={cssClass}
  />
);

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <main>
        <Hero />
        <FeaturesSection />
        <ToolsSection />
        <LandingServiceSection />
      </main>
      <Footer />
    </div>
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
          <a href="#tools" className="text-gray-600 hover:text-primary transition-colors">Tool Gratuiti</a>
          <a href="#custom-landing" className="text-gray-600 hover:text-primary transition-colors">Siti Web</a>
          <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contatti</a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="/login" className="font-semibold text-gray-600 hover:text-primary transition-colors">
            Accedi
          </a>
          <a href="#custom-landing" className="px-5 py-2 bg-primary text-white font-semibold rounded-lg shadow-sm hover:brightness-105 transition">
            Crea il tuo Sito
          </a>
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
            <a href="#tools" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700 hover:text-primary">Tool Gratuiti</a>
            <a href="#custom-landing" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700 hover:text-primary">Siti Web</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700 hover:text-primary">Contatti</a>
            <a href="/login" onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-700 hover:text-primary">Accedi</a>
            <a href="#custom-landing" onClick={() => setIsMenuOpen(false)} className="mt-4 w-full text-center px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:brightness-105">
              Crea il tuo Sito
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto grid md:grid-cols-2 items-center px-6 py-24 md:py-32">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            La burocrazia da host, <span className="text-primary">semplificata</span>.
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Usa i nostri tool gratuiti per velocizzare le tue attività quotidiane e scopri come creare un sito per la tua struttura per eliminare le commissioni.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#tools" className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 transition transform hover:-translate-y-1">
              Scopri i Tool Gratuiti
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">✔ Nessuna registrazione richiesta</p>
        </div>
        <div className="hidden md:block relative mt-12 md:mt-0">
          <div className="bg-gray-100 rounded-xl p-8 shadow-lg border border-gray-200">
            <p className="font-mono text-sm text-gray-400">// Esempio di output...</p>
            <div className="mt-4 bg-white p-4 rounded-md">
              <p><span className="text-primary font-semibold">Ospite:</span> Mario Rossi</p>
              <p><span className="text-primary font-semibold">Periodo:</span> 10/08/24 - 15/08/24 (5 notti)</p>
              <p><span className="text-primary font-semibold">Tassa Totale:</span> € 17.50</p>
            </div>
            <div className="mt-4 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-primary" style={{width: '75%'}}></div>
            </div>
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
        <section id="features" className="bg-gray-50 py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                     <h2 className="text-3xl font-bold text-gray-900">Creato per host come te</h2>
                     <p className="text-lg text-gray-600 mt-2">Semplice, intuitivo e senza fronzoli.</p>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature) => (
                        <div key={feature.title} className="text-center p-6 bg-white rounded-xl shadow-md border border-gray-100">
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

function ToolsSection() {
  return (
    <section id="tools" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">I Nostri Tool Gratuiti</h2>
            <p className="text-lg text-gray-600 mt-2">Inizia a semplificare il tuo lavoro, oggi stesso.</p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg"><CurrencyDollarIcon className="h-6 w-6 text-primary"/></div>
                <h3 className="text-xl font-semibold text-gray-900">Calcolatore Tassa Soggiorno</h3>
              </div>
              <p className="text-gray-600 text-sm mt-1 ml-11">Gratuito, senza login</p>
            </div>
            <div className="flex-1 border-t border-gray-200 aspect-video">
              <iframe src="https://tassa-soggiorno-calculator.vercel.app" className="w-full h-full" title="Calcolatore Tassa di Soggiorno" frameBorder="0"/>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-200 rounded-lg"><DocumentTextIcon className="h-6 w-6 text-gray-500"/></div>
                <h3 className="text-xl font-semibold text-gray-900">Estrattore Dati Documenti</h3>
              </div>
              <p className="text-gray-600 my-4">Carica una foto del documento, e Ospitly estrarrà i dati per l'invio al Portale Alloggiati.</p>
              <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                <SparklesIcon className="h-10 w-10 text-primary/50 mx-auto"/>
                <span className="absolute top-2 right-2 inline-block px-3 py-1 text-xs font-semibold bg-gray-200 rounded-full text-gray-600">In arrivo</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-white rounded-xl shadow-lg border border-gray-200 p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
            <div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-200 rounded-lg"><MegaphoneIcon className="h-6 w-6 text-gray-500"/></div>
                <h3 className="text-xl font-semibold text-gray-900">Assistente Post Social</h3>
              </div>
              <p className="text-gray-600 my-4">Genera post accattivanti per Facebook e Instagram partendo da poche info sulla tua struttura.</p>
              <div className="relative border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                <SparklesIcon className="h-10 w-10 text-primary/50 mx-auto"/>
                <span className="absolute top-2 right-2 inline-block px-3 py-1 text-xs font-semibold bg-gray-200 rounded-full text-gray-600">In arrivo</span>
              </div>
            </div>
          </div>
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
        <section id="custom-landing" className="bg-gray-50 py-20 overflow-hidden">
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
                        <a href="#contact" className="mt-8 inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary/90 transition transform hover:-translate-y-1">Richiedi una Consulenza Gratuita</a>
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
        <footer id="contact" className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-6 py-12">
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center md:items-start">
                        <a href="#">
                           <OspitlyLogo cssClass="logo-footer" />
                        </a>
                        <p className="text-gray-600 mt-2 text-center md:text-left">Semplifichiamo la vita degli host.</p>
                    </div>
                    <div className="text-center">
                        <h4 className="font-semibold text-gray-900">Link Utili</h4>
                        <nav className="mt-4 space-y-2">
                            <a href="#features" className="block text-gray-600 hover:text-primary">Vantaggi</a>
                            <a href="#tools" className="block text-gray-600 hover:text-primary">Tool Gratuiti</a>
                            <a href="#custom-landing" className="block text-gray-600 hover:text-primary">Siti Web per Host</a>
                        </nav>
                    </div>
                    <div className="text-center md:text-right">
                        <h4 className="font-semibold text-gray-900">Contatti</h4>
                        <p className="mt-4 text-gray-600">Hai domande o suggerimenti?</p>
                        <a href="mailto:info@ospitly.com" className="text-primary font-semibold hover:underline">info@ospitly.com</a>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-6 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} Ospitly — Tutti i diritti riservati.
                </div>
            </div>
        </footer>
    );
}