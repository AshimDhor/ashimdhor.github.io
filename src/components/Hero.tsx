import ParticleAnimation from './ParticleAnimation';
import { useRef, useState, useEffect } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Icons are not used, but we can leave the import
import { Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);
  const [displayedWords, setDisplayedWords] = useState(0);
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);

  // The full text split into words with markers for bold sections
  const textContent = [
    { text: "As", bold: false },
    { text: "a", bold: false },
    { text: "final-year", bold: false },
    { text: "BS-MS", bold: false },
    { text: "student", bold: false },
    { text: "in", bold: false },
    { text: "Data", bold: true },
    { text: "Science", bold: true },
    { text: "&", bold: true },
    { text: "Engineering", bold: true },
    { text: "at", bold: true },
    { text: "the", bold: true },
    { text: "Indian", bold: true },
    { text: "Institute", bold: true },
    { text: "of", bold: true },
    { text: "Science", bold: true },
    { text: "Education", bold: true },
    { text: "and", bold: true },
    { text: "Research", bold: true },
    { text: "Bhopal,", bold: true },
    { text: "I", bold: false },
    { text: "am", bold: false },
    { text: "driven", bold: false },
    { text: "by", bold: false },
    { text: "a", bold: false },
    { text: "central", bold: false },
    { text: "mission:", bold: false },
    { text: "to", bold: false },
    { text: "build", bold: false },
    { text: "AI", bold: false },
    { text: "systems", bold: false },
    { text: "we", bold: false },
    { text: "can", bold: false },
    { text: "trust", bold: false },
    { text: "with", bold: false },
    { text: "critical,", bold: false },
    { text: "high-stakes", bold: false },
    { text: "decisions.", bold: false },
    { text: "My", bold: false },
    { text: "work", bold: false },
    { text: "is", bold: false },
    { text: "focused", bold: false },
    { text: "at", bold: false },
    { text: "the", bold: false },
    { text: "intersection", bold: false },
    { text: "of", bold: false },
    { text: "machine", bold: false },
    { text: "intelligence", bold: false },
    { text: "and", bold: false },
    { text: "medical", bold: false },
    { text: "diagnostics,", bold: false },
    { text: "where", bold: false },
    { text: "I", bold: false },
    { text: "leverage", bold: false },
    { text: "a", bold: false },
    { text: "specialized", bold: false },
    { text: "toolkit", bold: false },
    { text: "to", bold: false },
    { text: "create", bold: false },
    { text: "solutions", bold: false },
    { text: "that", bold: false },
    { text: "are", bold: false },
    { text: "not", bold: false },
    { text: "just", bold: false },
    { text: "powerful,", bold: false },
    { text: "but", bold: false },
    { text: "fundamentally", bold: false },
    { text: "reliable.", bold: false },
    { text: "My", bold: false },
    { text: "expertise", bold: false },
    { text: "is", bold: false },
    { text: "centered", bold: false },
    { text: "on", bold: false },
    { text: "Trustworthy", bold: true },
    { text: "AI,", bold: true },
    { text: "applying", bold: false },
    { text: "its", bold: false },
    { text: "principles", bold: false },
    { text: "to", bold: false },
    { text: "advanced", bold: false },
    { text: "Medical", bold: true },
    { text: "Image", bold: true },
    { text: "Analysis", bold: true },
    { text: "through", bold: false },
    { text: "the", bold: false },
    { text: "use", bold: false },
    { text: "of", bold: false },
    { text: "Large", bold: true },
    { text: "Language", bold: true },
    { text: "Models", bold: true },
    { text: "(LLMs)", bold: true },
    { text: "and", bold: false },
    { text: "Vision-Language", bold: true },
    { text: "Models", bold: true },
    { text: "(VLMs).", bold: true },
  ];

  // Start animation when component becomes visible
  useEffect(() => {
    if (isVisible && !hasStartedAnimation) {
      setHasStartedAnimation(true);
      setDisplayedWords(0);
    }
  }, [isVisible, hasStartedAnimation]);

  // Animate words appearing one by one
  useEffect(() => {
    if (!hasStartedAnimation) return;

    if (displayedWords < textContent.length) {
      const timer = setTimeout(() => {
        setDisplayedWords(prev => prev + 1);
      }, 80); // Adjust speed here (80ms per word)

      return () => clearTimeout(timer);
    }
  }, [displayedWords, hasStartedAnimation, textContent.length]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-16 px-6"
    >
      <div className="absolute inset-0 z-0">
        <ParticleAnimation />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-6">

          <img
            src="/profile-photo.jpg"
            alt="Ashim Dhor"
            className={`w-40 h-40 rounded-full mx-auto border-4 border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          />

          <h1 className={`text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <span className="block text-xl md:text-2xl font-mono font-normal text-blue-900 dark:text-cyan-400 mb-2 tracking-wider">
              Hello, I'm
            </span>
            Ashim Dhor
          </h1>

          <h2 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 dark:from-cyan-400 dark:via-cyan-300 dark:to-cyan-200 bg-clip-text text-transparent animate-gradient transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            AI Researcher & Engineer
          </h2>

          {/* Animated paragraph with word-by-word reveal */}
          <div className={`text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <p className="inline">
              {textContent.map((word, index) => (
                <span
                  key={index}
                  className={`inline-block transition-opacity duration-300 ${
                    index < displayedWords ? 'opacity-100' : 'opacity-0'
                  } ${word.bold ? 'font-bold' : ''}`}
                  style={{
                    transitionDelay: `${index * 30}ms`
                  }}
                >
                  {word.text}{' '}
                </span>
              ))}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;