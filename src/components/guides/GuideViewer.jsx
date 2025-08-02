import { ArrowLeftIcon, ClockIcon } from '@heroicons/react/24/solid';

export default function GuideViewer({ guide, onBack }) {
  return (
    <main className="flex-1">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4 group"
          >
            <ArrowLeftIcon className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
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