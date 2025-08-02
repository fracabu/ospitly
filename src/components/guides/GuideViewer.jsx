import { ArrowLeftIcon, ClockIcon, BookOpenIcon } from '@heroicons/react/24/solid';

export default function GuideViewer({ guide, onBack }) {
  const handleBackToGuides = () => {
    onBack();
    // Scroll to guides section after returning to homepage
    setTimeout(() => {
      document.getElementById('guides')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 200);
  };
  return (
    <main className="flex-1 bg-gray-50">
      {/* Hero Header with Gradient */}
      <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/5 border-b border-gray-200">
        <div className="container mx-auto px-6 py-8 max-w-5xl">
          <button 
            onClick={handleBackToGuides}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-200 mb-6 group bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm hover:shadow-md"
          >
            <ArrowLeftIcon className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Torna alle Guide</span>
          </button>
          
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0 bg-primary/10 p-4 rounded-2xl">
              <BookOpenIcon className="h-12 w-12 text-primary" />
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
                {guide.title}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 max-w-3xl">
                {guide.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-4">
                <span className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
                  <ClockIcon className="h-4 w-4 text-primary" />
                  {guide.timeRead}
                </span>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold shadow-sm ${
                  guide.difficulty === 'Facile' ? 'bg-green-100 text-green-800 border border-green-200' :
                  guide.difficulty === 'Intermedio' ? 'bg-yellow-100 text-yellow-800 border border-yellow-200' :
                  'bg-red-100 text-red-800 border border-red-200'
                }`}>
                  Livello: {guide.difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <article className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="prose prose-lg prose-gray max-w-none
              prose-headings:text-gray-900 prose-headings:font-bold
              prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-gray-800
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-ul:space-y-2 prose-li:text-gray-700
              prose-table:border-collapse prose-table:border prose-table:border-gray-200 prose-table:rounded-lg prose-table:overflow-hidden
              prose-th:bg-gray-50 prose-th:px-6 prose-th:py-4 prose-th:text-left prose-th:font-semibold prose-th:text-gray-900 prose-th:border-b prose-th:border-gray-200
              prose-td:px-6 prose-td:py-4 prose-td:border-b prose-td:border-gray-100
              prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-medium prose-code:text-gray-800
              prose-a:text-primary prose-a:font-medium prose-a:no-underline hover:prose-a:underline
            ">
              {guide.content}
            </div>
          </div>
          
          {/* Bottom Action */}
          <div className="bg-gray-50 px-8 md:px-12 py-6 border-t border-gray-200">
            <button 
              onClick={handleBackToGuides}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-200 group font-medium"
            >
              <ArrowLeftIcon className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Torna alle Guide
            </button>
          </div>
        </article>
        
        {/* Spacer for better visual breathing */}
        <div className="h-16"></div>
      </div>
    </main>
  );
}