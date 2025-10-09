// JSON-LD Structured Data Schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ospitly",
  "url": "https://www.ospitly.it",
  "logo": "https://www.ospitly.it/logo.png",
  "description": "Software per il calcolo automatico della tassa di soggiorno e automazione compliance per B&B e case vacanza",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "email": "info@ospitly.it",
    "availableLanguage": ["Italian"]
  },
  "sameAs": []
};

export const webApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Ospitly",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "url": "https://www.ospitly.it",
  "description": "Software per il calcolo automatico della tassa di soggiorno e automazione compliance per B&B e case vacanza",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  },
  "creator": {
    "@type": "Organization",
    "name": "Ospitly",
    "url": "https://www.ospitly.it"
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Come si calcola la tassa di soggiorno?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La tassa di soggiorno si calcola moltiplicando la tariffa comunale (varia da città a città) per il numero di notti e il numero di ospiti. Ospitly automatizza questo calcolo per tutte le principali città italiane."
      }
    },
    {
      "@type": "Question",
      "name": "Cos'è il CIN (Codice Identificativo Nazionale)?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Il CIN è un codice obbligatorio dal 1° gennaio 2025 per tutte le strutture ricettive in Italia. Serve a identificare univocamente ogni alloggio turistico e deve essere esposto in tutti gli annunci online. Le sanzioni vanno da €800 a €8.000."
      }
    },
    {
      "@type": "Question",
      "name": "Come si previene l'overbooking?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "L'overbooking si previene sincronizzando i calendari di tutte le piattaforme (Airbnb, Booking.com, Expedia) tramite file .ics o utilizzando un channel manager. Ospitly offre strumenti gratuiti per verificare la corretta sincronizzazione."
      }
    },
    {
      "@type": "Question",
      "name": "Cosa sono AlloggiatiWeb e ISTAT C/59?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AlloggiatiWeb è il portale della Polizia di Stato per comunicare gli arrivi degli ospiti. ISTAT C/59 è il modulo statistico mensile da compilare per l'ISTAT. Entrambi sono obblighi burocratici per gli host in Italia."
      }
    }
  ]
};

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Schema for specific guides
export const articleSchema = (title, description, datePublished, dateModified) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Organization",
    "name": "Ospitly"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Ospitly",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.ospitly.it/logo.png"
    }
  },
  "datePublished": datePublished,
  "dateModified": dateModified,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.ospitly.it"
  }
});

// Schema for tools/calculators
export const webPageSchema = (name, description, url) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": name,
  "description": description,
  "url": url,
  "publisher": {
    "@type": "Organization",
    "name": "Ospitly"
  }
});
