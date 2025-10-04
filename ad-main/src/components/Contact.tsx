import { Mail, Linkedin, Github, GraduationCap } from 'lucide-react'; // 1. Import GraduationCap icon
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`py-20 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Get in Touch
        </h2>

        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-12 max-w-2xl mx-auto">
          My inbox is always open. Whether you have a question, a proposal, or just want to say hello, I'll do my best to get back to you.
        </p>

        <a
          href="mailto:ashimdhor2003@gmail.com"
          className="inline-flex items-center gap-3 px-8 py-4 bg-blue-900 dark:bg-cyan-400 text-white dark:text-gray-900 rounded-lg font-medium text-lg transition-all duration-200 hover:bg-blue-800 dark:hover:bg-cyan-300 hover:-translate-y-1 shadow-lg hover:shadow-xl mb-12"
        >
          <Mail className="w-6 h-6" />
          Email Me
        </a>

        <div className="flex justify-center gap-6 pt-8">
          <a
            href="https://linkedin.com/in/ashim-dhor"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8 text-blue-900 dark:text-cyan-400" />
          </a>

          <a
            href="https://github.com/AshimDhor"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            aria-label="GitHub"
          >
            <Github className="w-8 h-8 text-blue-900 dark:text-cyan-400" />
          </a>

          {/* 2. Add the new Google Scholar link here */}
          <a
            href="https://scholar.google.com/citations?user=KnN80Q4AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            aria-label="Google Scholar"
          >
            <GraduationCap className="w-8 h-8 text-blue-900 dark:text-cyan-400" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;