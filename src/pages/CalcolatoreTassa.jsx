import { Helmet } from "react-helmet-async";   // npm i react-helmet-async
import CalcolatoreHero from "../components/CalcolatoreHero";   // il blocco che ora è nella home

export default function CalcolatoreTassa() {
  return (
    <>
      <Helmet>
        <title>Calcola la tassa di soggiorno online – Ospitly</title>
        <meta
          name="description"
          content="Calcola in pochi secondi l'importo 2025: comune, tariffa e notti."
        />
        {/* qui dentro incollerai il JSON-LD FAQ/WebApplication */}
      </Helmet>

      <main className="min-h-screen bg-white">
        <CalcolatoreHero />           {/* iframe + testo sopra/sotto  */}
        {/* ↓ sezione FAQ + contenuto di supporto (600-800 parole) */}
      </main>
    </>
  );
}
