import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss' // <-- NUOVO IMPORT

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: { // <-- NUOVA SEZIONE CSS
    postcss: {
      plugins: [
        tailwindcss(), // <-- AGGIUNGI IL PLUGIN DI TAILWIND QUI
      ],
    },
  },
})