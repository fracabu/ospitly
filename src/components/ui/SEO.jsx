import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'Ospitly · Calcolo Tassa di Soggiorno e Automazione per B&B',
  description = 'Calcolatore gratuito tassa di soggiorno per B&B e case vacanza. Automatizza AlloggiatiWeb, ISTAT C/59 e compliance normative. Risparmia tempo e evita sanzioni.',
  keywords = 'tassa soggiorno, calcolatore, B&B, case vacanza, AlloggiatiWeb, ISTAT C59, automazione, ospiti, prenotazioni',
  ogImage = 'https://www.ospitly.it/og-image.jpg',
  twitterImage = 'https://www.ospitly.it/twitter-image.jpg',
  url = 'https://www.ospitly.it/',
  type = 'website',
  siteName = 'Ospitly',
  locale = 'it_IT',
  author = 'Ospitly',
  jsonLd = null,
}) {
  const fullTitle = title.includes('Ospitly') ? title : `${title} · Ospitly`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={locale} />

      {/* Twitter Card */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={twitterImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
