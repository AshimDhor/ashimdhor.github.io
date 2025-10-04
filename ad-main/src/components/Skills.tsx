import { Award } from 'lucide-react';
import { useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollAnimation(sectionRef);

  const technicalSkills = {
    Languages: ["Python", "C", "C++", "SQL", "HTML", "MATLAB", "Qiskit"],
    Frameworks: ["Mathematica", "WordPress", "Linux(OS)", "Windows(OS)"],
    "Developer Tools": ["Git", "Visual Studio", "PyCharm"],
    Softwares: ["MS Office", "LaTeX", "Anaconda", "Virtual Box", "GPT"]
  };

  const achievements = [
    {
      title: "Reviewer - The AHLI Machine Learning for Health (ML4H) Symposium 2025",
      url: "https://ahli.cc/ml4h/"
    },
    {
      title: "Reviewer - The 40th Annual AAAI Conference on Artificial Intelligence",
      url: "https://aaai.org/conference/aaai/aaai-26/"
    },
    {
      title: "National Bio Entrepreneurship Competition (NBEC) 2025 - Selected for second round for HistoAI",
      url: "https://drive.google.com/file/d/1khkzdUyoLoZX-g6_r-4iRuJjHI1ynt-C/view?usp=drive_link"
    },
    {
      title: "Received Best Project and Best Presentation Prize - QIntern Internship"
    },
    {
      title: "Sports Secretary, IISER Bhopal",
      date: "Aug. 2023 - Aug. 2024"
    },
    {
      title: "Student Placement Head, ICDPC, IISER Bhopal",
      date: "June 2022 - May 2023"
    }
    
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`py-20 px-6 bg-gray-50 dark:bg-gray-900/50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-12">
          Leadership & Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Technical Skills
            </h3>

            <div className="space-y-6">
              {Object.entries(technicalSkills).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide mb-3">
                    {category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-blue-100 dark:bg-cyan-900/30 text-blue-900 dark:text-cyan-400 rounded-lg text-sm font-medium font-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Leadership & Achievements
            </h3>

            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start group"
                >
                  <Award className="w-5 h-5 text-blue-900 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    {achievement.url ? (
                      <a
                        href={achievement.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        // THIS IS THE MODIFIED LINE:
                        className="font-medium text-blue-900 dark:text-cyan-400 leading-relaxed hover:underline transition-colors duration-200"
                      >
                        {achievement.title}
                      </a>
                    ) : (
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement.title}
                      </p>
                    )}
                    {achievement.date && (
                      <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">
                        {achievement.date}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;