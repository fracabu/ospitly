/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        // NUOVA SINTASSI v4: molto più semplice.
        // Aggiungiamo 'sans-serif' come fallback generico.
        sans: ['Inter', 'sans-serif'], 
      },
      colors: {
        // I tuoi colori personalizzati vanno benissimo qui
        primary: '#EF7E23',
        secondary: '#22D212',
      },
    },
  },
  // Con la v4, i plugin come @forms e @typography non si usano più qui.
  // Molte delle loro funzionalità sono integrate o gestite diversamente.
  plugins: [],
}