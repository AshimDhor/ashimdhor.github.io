import ParticleAnimation from './ParticleAnimation';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Icons are not used, but we can leave the import
import { Github, Linkedin, Download } from 'lucide-react';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen flex items-center justify-center pt-24 pb-16 px-6"
    >
      <div className="absolute inset-0 z-0">
        <ParticleAnimation />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">

          {/* Left side - Text content */}
          <div className="flex-1 space-y-6 text-left">

            <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-gray-100 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <span className="block text-xl md:text-2xl font-mono font-normal text-blue-900 dark:text-cyan-400 mb-2 tracking-wider">
                Hello, I'm
              </span>
              Ashim Dhor
            </h1>

            <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 dark:from-cyan-400 dark:via-cyan-300 dark:to-cyan-200 bg-clip-text text-transparent animate-gradient transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              AI Researcher & Engineer
            </h2>

            <p className={`text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              As a final-year BS-MS student in <strong>Data Science & Engineering at the Indian Institute of Science Education and Research Bhopal</strong>, I am driven by a central mission: to build AI systems we can trust with critical, high-stakes decisions. My work is focused at the intersection of machine intelligence and medical diagnostics, where I leverage a specialized toolkit to create solutions that are not just powerful, but fundamentally reliable.
              <br/><br/>
              My expertise is centered on <strong>Trustworthy AI</strong>, applying its principles to advanced <strong>Medical Image Analysis</strong> through the use of <strong>Large Language Models (LLMs)</strong> and <strong>Vision-Language Models (VLMs)</strong>.
            </p>
            
          </div>

          {/* Right side - Square photo */}
          <div className="flex-shrink-0">
            <img
              src="/profile-photo.jpg"
              alt="Ashim Dhor"
              className={`w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg border-4 border-gray-200 dark:border-gray-700 shadow-lg transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
              }`}
            />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;