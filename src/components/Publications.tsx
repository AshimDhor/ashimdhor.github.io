import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Publications = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const publications = [
    {
      number: "01",
      title: "Financial fraud detection using quantum graph neural networks.",
      authors: "Innan, N., Sawaika, A., Dhor, A., et al.",
      venue: "Quantum Machine Intelligence."
    },
    {
      number: "02",
      title: "An Uncertainty-Aware Deep Learning Model for Prostate Gland Segmentation in Histopathology Images.",
      authors: "Accepted at IndoML 2025 for Poster Presentation:",
      venue: "The Sixth Indian Symposium on Machine Learning."
    }
 
  ];

  return (
    <section
      id="publications"
      ref={sectionRef}
      className={`py-20 px-6 bg-gray-50 dark:bg-gray-900/50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12">
          Publications
        </h2>

        <div className="space-y-6">
          {publications.map((pub) => (
            <div
              key={pub.number}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700"
            >
              <div className="flex gap-4">
                <span className="text-blue-900 dark:text-cyan-400 font-mono font-bold text-lg flex-shrink-0">
                  [{pub.number}]
                </span>
                <div className="space-y-1">
                  <p className="text-gray-900 dark:text-gray-100 font-medium leading-relaxed">
                    {pub.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {pub.authors} {pub.venue}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
