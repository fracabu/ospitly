# TODO - Modifiche Prioritarie Ospitly

## 🔴 Alta Priorità (Da fare subito)

### 1. ✅ Bug Critico - Toast System
**File**: `src/components/ui/Toast.jsx` (linee 110-115)

**Problema**: La sintassi `<style jsx>` non è supportata nativamente in React e richiede `styled-jsx` che non è nelle dependencies. Questo può causare errori.

**Soluzione**:
```jsx
// Rimuovere:
<style jsx>{`
  @keyframes shrink {
    from { width: 100%; }
    to { width: 0%; }
  }
`}</style>

// Aggiungere in index.css:
@keyframes toast-shrink {
  from { width: 100%; }
  to { width: 0%; }
}

// E nel componente usare:
style={{
  animation: `toast-shrink ${duration}ms linear`
}}
```

**Stima**: 10 minuti

---

### 2. ✅ Error Boundaries
**Dove**: Creare `src/components/ErrorBoundary.jsx`

**Problema**: Se un componente crasha, tutta l'app va giù senza messaggi utili.

**Soluzione**: Aggiungere Error Boundary e wrappare le sezioni critiche:
- ThemeProvider
- GuideViewer
- ContactForm
- ToolsUnifiedSection

**Stima**: 30 minuti

**Esempio**:
```jsx
// src/components/ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Ops! Qualcosa è andato storto
          </h2>
          <p className="text-gray-600 mb-4">
            Ricarica la pagina o torna alla home.
          </p>
          <button
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-primary text-white rounded-lg"
          >
            Torna alla Home
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

---

### 3. ✅ Form Validation Migliorata
**File**: `src/components/forms/ContactForm.jsx`

**Problema**: Solo validazione HTML5, nessun feedback visivo per errori specifici.

**Soluzione**:
- Aggiungere validazione custom per email
- Mostrare errori sotto i campi
- Validare formato email italiano (@gmail, @libero, etc)
- Validare lunghezza minima messaggio (20 caratteri)

**Stima**: 45 minuti

**Esempio validazione**:
```jsx
const [errors, setErrors] = useState({});

const validateForm = () => {
  const newErrors = {};

  if (!formData.name || formData.name.length < 2) {
    newErrors.name = 'Il nome deve essere di almeno 2 caratteri';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    newErrors.email = 'Inserisci un indirizzo email valido';
  }

  if (!formData.message || formData.message.length < 20) {
    newErrors.message = 'Il messaggio deve essere di almeno 20 caratteri';
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};

// Nel form:
{errors.email && (
  <p className="text-red-600 text-sm mt-1">{errors.email}</p>
)}
```

---

## 🟡 Media Priorità (Questa settimana)

### 4. ✅ SEO - Completare Meta Tags
**File**: `src/pages/CalcolatoreTassa.jsx` + creare componente SEO globale

**Cosa aggiungere**:
- Open Graph tags (Facebook, LinkedIn)
- Twitter Cards
- JSON-LD per FAQ e WebApplication
- Canonical URLs
- Meta description personalizzate per ogni sezione

**Stima**: 1 ora

**Esempio**:
```jsx
// src/components/SEO.jsx
import { Helmet } from 'react-helmet-async';

export default function SEO({
  title,
  description,
  image = '/og-image.png',
  type = 'website'
}) {
  return (
    <Helmet>
      <title>{title} | Ospitly</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={type} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
```

---

### 5. ✅ Ottimizzare Scroll Behavior
**File**: `src/components/layout/Header.jsx` (linee 17-45)

**Problema**: Multipli `setTimeout` annidati creano race conditions.

**Soluzione**: Usare refs e async/await per controllo migliore del timing.

**Stima**: 30 minuti

---

### 6. ✅ Lazy Loading Componenti
**File**: `src/App.jsx`

**Ottimizzazione**: Caricare componenti pesanti solo quando necessario.

**Implementazione**:
```jsx
import { lazy, Suspense } from 'react';

const GuideViewer = lazy(() => import('./components/guides/GuideViewer'));
const ContactForm = lazy(() => import('./components/forms/ContactForm'));

// Nel render:
<Suspense fallback={<div className="p-8 text-center">Caricamento...</div>}>
  {currentGuide && <GuideViewer guide={currentGuide} onBack={handleBackToHome} />}
</Suspense>
```

**Stima**: 20 minuti

---

## 🔵 Bassa Priorità (Prossime settimane)

### 7. ✅ Testing - Setup Base
**Setup**:
- Vitest + React Testing Library
- Tests per componenti critici: Toast, ContactForm, ThemeContext

**Stima**: 2-3 ore

---

### 8. ✅ Rate Limiting EmailJS
**Problema**: Nessuna protezione contro spam del form.

**Soluzione**:
- Aggiungere cooldown (max 1 invio ogni 60 secondi)
- Salvare timestamp in localStorage
- Mostrare countdown se troppo presto

**Stima**: 30 minuti

---

### 9. ✅ Miglioramenti Accessibilità
**Dove**: Tutti i componenti

**Cosa fare**:
- Aggiungere `aria-live` regions per toast
- Migliorare aria-labels dinamici (tema, menu mobile)
- Test con screen reader (NVDA/JAWS)
- Focus trap nei modali

**Stima**: 1.5 ore

---

### 10. ✅ Performance - Image Optimization
**Cosa fare**:
- Aggiungere logo in formato WebP + fallback PNG
- Lazy loading per immagini future
- Preload per risorse critiche

**Stima**: 30 minuti

---

## 📊 Riepilogo Tempi

| Priorità | Tasks | Tempo Stimato |
|----------|-------|---------------|
| 🔴 Alta | 3 | ~1h 25min |
| 🟡 Media | 3 | ~1h 50min |
| 🔵 Bassa | 4 | ~4h 30min |
| **Totale** | **10** | **~7h 45min** |

---

## 🎯 Piano per Domani (Ordine Consigliato)

1. **Fix Toast Bug** (10 min) - CRITICO
2. **Aggiungere Error Boundaries** (30 min)
3. **Pausa Caffè** ☕
4. **Migliorare Form Validation** (45 min)
5. **Completare SEO Meta Tags** (1h)
6. **Ottimizzare Scroll** (30 min)

**Totale giornata**: ~3 ore di lavoro concentrato

---

## 📝 Note

- ✅ = Da fare
- 🚧 = In corso
- ✔️ = Completato

**Ultimo aggiornamento**: 2025-10-09

---

## 🔗 Link Utili

- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)
- [Vitest Guide](https://vitest.dev/guide/)
- [EmailJS Rate Limiting](https://www.emailjs.com/docs/user-guide/rate-limit/)
