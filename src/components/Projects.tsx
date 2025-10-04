import { ExternalLink, Code2, Database, Cpu } from 'lucide-react';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const projects = [
    {
      title: "Precision Oxygen Detection & ML Enhancement",
      description: "Contributed to the PAWAMAAN Smart Air Quality Monitoring System by adding oxygen detection. Employed an ESP32C3 microcontroller for improved data accuracy and fabricated a custom 3D-printed casing.",
      tech: ["Python", "C++", "Hardware"],
      links: [
        {
          label: "OpenReview",
          url: "https://openreview.net/forum?id=I6Eh_2IWxu"
        },
        {
          label: "GitHub",
          url: "https://github.com/IISERB-UG/Pawamaan---Smart-Air-Quality-Monitoring-System"
        }
      ]
    },
    {
      title: "Credit Risk Management & Bank Profitability",
      description: "Analyzed Indian public banks using CMIE data with statistical models in R/Python. Built visualizations to show the link between credit policy and profitability.",
      tech: ["R", "Python", "Data Analysis"],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/saisab21/Credit-Risk-Management-and-Its-Impact-on-Indian-Bank-Profitability"
        }
      ]
    },
    {
      title: "CPCR: Proxy-based Contrastive Replay",
      description: "Implemented continual learning with Proxy-based Contrastive Replay on the CIFAR-100 dataset, achieving 8.62% end accuracy and showing improved retention.",
      tech: ["Python", "PyTorch"],
      links: [
        {
          label: "Report",
          url: "https://drive.google.com/file/d/1GHveS7as15oTIiMtvAXYaDLRbi_wFtM2/view?usp=drive_link"
        }
      ]
    }
  ];

  const getTechIcon = (tech: string) => {
    if (tech.toLowerCase().includes('python') || tech.toLowerCase().includes('pytorch')) return Code2;
    if (tech.toLowerCase().includes('data') || tech.toLowerCase().includes('r')) return Database;
    return Cpu;
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`py-20 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                {project.title}
              </h3>

              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => {
                  const Icon = getTechIcon(tech);
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 dark:bg-cyan-900/30 text-blue-900 dark:text-cyan-400 rounded-full text-xs font-medium"
                    >
                      <Icon className="w-3 h-3" />
                      {tech}
                    </span>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-blue-900 dark:bg-cyan-400 text-white dark:text-gray-900 rounded-lg text-xs font-medium transition-all duration-200 hover:bg-blue-800 dark:hover:bg-cyan-300 hover:-translate-y-0.5"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
