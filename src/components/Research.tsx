import { ExternalLink } from 'lucide-react';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Research = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const experiences = [
    {
      title: "Master's Thesis, IISER Bhopal",
      date: "May 2025 - Present",
      affiliation: {
        text: "Biomedical Data Science Lab",
        url: "https://bdslab-iiserb.github.io/"
      },
      pi: "Dr. Tanmay Basu",
      description: "Currently working on whole slide image (WSI) analysis in collaboration with JNCHRC and AIIMS Bhopal to develop a novel WSI dataset for Head and Neck Cancer. Developing and evaluating trustworthy Vision-Language Models (VLMs) for high-stakes cancer diagnostics, with a focus on ensuring output safety and reliability. Analyzing VLM failure modes and implementing rigorous stress-testing protocols.",
      tags: ["WSI Analysis", "Vision-Language Models", "Trustworthy AI"],
      links: []
    },
    {
      title: "BS Thesis, IISER Bhopal",
      date: "Jan. - April 2025",
      affiliation: {
        text: "Biomedical Data Science Lab",
        url: "https://bdslab-iiserb.github.io/"
      },
      pi: "Dr. Tanmay Basu",
      description: "Developed a deep learning framework for gland segmentation to address the critical issue of overconfident predictions in histopathology images. Architected the solution using a UNet++ backbone and integrated a dual uncertainty-quantification mechanism to improve diagnostic trust.",
      tags: ["Deep Learning", "Histopathology", "Uncertainty Quantification"],
      links: [
        {
          label: "Presentation",
          url: "https://drive.google.com/file/d/14-UYETFARjUJjt1PS5saNvpmmWyP5I1k/view?usp=drive_link"
        },
        {
          label: "Report",
          url: "https://drive.google.com/file/d/1n8dQ8ohsgOnDs0BDqvMUeW1FafCQa4gv/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Research Internship, QWorld",
      date: "June - Sept. 2023",
      affiliation: null,
      pi: null,
      description: "Architected a Quantum Graph Neural Network (QGNN) using Topological Data Analysis (TDA) and a Variational Quantum Circuit (VQC). Demonstrated a quantum advantage by achieving 94.5% accuracy and a 0.85 Precision-Recall AUC, significantly outperforming the classical GraphSAGE baseline.",
      tags: ["Quantum ML", "Fraud Detection", "QGNN"],
      links: [
        {
          label: "Award",
          url: "https://drive.google.com/file/d/1_DRre3HxeK_UnkRPNFdMg_Rm5VRYRdbN/view?usp=sharing"
        },
        {
          label: "Presentation",
          url: "https://drive.google.com/file/d/19vFI1O_gmAPe9jXPsWQNQZpVE0sbviAj/view?usp=drive_link"
        }
      ]
    }
  ];

  return (
    <section
      id="research"
      ref={sectionRef}
      className={`py-20 px-6 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12">
          Research Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 font-mono text-sm mt-1">
                    {exp.date}
                  </p>
                </div>

                {exp.affiliation && (
                  <p className="text-gray-700 dark:text-gray-300">
                    At the{' '}
                    <a
                      href={exp.affiliation.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-900 dark:text-cyan-400 hover:underline font-medium"
                    >
                      {exp.affiliation.text}
                    </a>
                    {exp.pi && <>, PI - {exp.pi}</>}
                  </p>
                )}

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 dark:bg-cyan-900/30 text-blue-900 dark:text-cyan-400 rounded-full text-sm font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {exp.links.length > 0 && (
                  <div className="flex flex-wrap gap-3 pt-2">
                    {exp.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-900 dark:bg-cyan-400 text-white dark:text-gray-900 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-800 dark:hover:bg-cyan-300 hover:-translate-y-0.5"
                      >
                        {link.label}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
