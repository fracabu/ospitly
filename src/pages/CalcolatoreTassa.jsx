import SEO from "../components/ui/SEO";
import { faqSchema, webPageSchema } from "../data/jsonLdSchemas";

export default function CalcolatoreTassa() {
  const pageJsonLd = [
    webPageSchema(
      "Calcolatore Tassa di Soggiorno 2025",
      "Calcola automaticamente la tassa di soggiorno per B&B e case vacanza in tutte le città italiane. Carica il CSV delle prenotazioni e ottieni i calcoli in 30 secondi.",
      "https://www.ospitly.it/calcolatore-tassa"
    ),
    faqSchema
  ];

  return (
    <>
      <SEO
        title="Calcola la tassa di soggiorno online 2025"
        description="Calcola in pochi secondi la tassa di soggiorno per B&B e case vacanza. Tariffe aggiornate 2025 per tutte le città italiane: Milano, Roma, Firenze e oltre."
        keywords="calcolatore tassa soggiorno, tassa turistica, B&B, case vacanza, tariffe 2025, Milano, Roma, Firenze"
        url="https://www.ospitly.it/calcolatore-tassa"
        type="website"
        jsonLd={pageJsonLd}
      />

      <main className="min-h-screen bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Calcolatore Tassa di Soggiorno
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Pagina in sviluppo. Il calcolatore è disponibile nella homepage.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
          >
            Torna alla Home
          </a>
        </div>
        {/* Future: CalcolatoreHero component */}
        {/* Future: FAQ section + supporto (600-800 parole) */}
      </main>
    </>
  );
}
