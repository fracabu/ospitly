import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { GUIDE_CONTENT } from '../data/guideContent';
import ErrorBoundary from '../components/ErrorBoundary';

const GuideViewer = lazy(() => import('../components/guides/GuideViewer'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center p-8 min-h-[400px]">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
      <p className="text-gray-600 dark:text-gray-400 text-lg">Caricamento guida...</p>
    </div>
  </div>
);

const NotFound = ({ onBackToHome }) => (
  <div className="container mx-auto px-4 py-16 text-center">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
      404 - Guida non trovata
    </h1>
    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
      La guida che stai cercando non esiste o è stata rimossa.
    </p>
    <button
      onClick={onBackToHome}
      className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition"
    >
      Torna alla Home
    </button>
  </div>
);

export default function GuidePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const guide = GUIDE_CONTENT[slug];

  // Scroll to top when guide changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const handleBackToHome = () => {
    navigate('/');
  };

  if (!guide) {
    return <NotFound onBackToHome={handleBackToHome} />;
  }

  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingFallback />}>
        <GuideViewer guide={{ id: slug, ...guide }} onBack={handleBackToHome} />
      </Suspense>
    </ErrorBoundary>
  );
}
