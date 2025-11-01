import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  const sections = [
    {
      icon: "👨‍💻",
      title: t("about.profile_name"),
      content: t("about.profile_skills"),
      gradient: "from-primary-500 to-accent-cyan"
    },
    {
      icon: "🚀",
      title: t("about.current_stage_description_1"),
      content: t("about.current_stage_description_2"),
      gradient: "from-accent-purple to-accent-pink"
    },
    {
      icon: "💡",
      title: t("about.skills_technologies_intro"),
      content: `${t("about.skills_technologies_technologies_trained")} ${t("about.skills_technologies_continued_learning")}`,
      gradient: "from-accent-emerald to-accent-cyan"
    },
    {
      icon: "🎯",
      title: t("about.future_goal"),
      content: `${t("about.future_opportunity")} ${t("about.future_closing")}`,
      gradient: "from-primary-600 to-accent-purple"
    }
  ];

  return (
    <div className="page-container bg-animated-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent-purple rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary-500 rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="content-wrapper">
        <div className="mb-12 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
            {t("about.about")}
          </h1>
          <div className="h-1 w-32 bg-gradient-cyber rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="card-modern p-8 hover-lift group animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {section.icon}
              </div>
              <h2 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${section.gradient} bg-clip-text text-transparent`}>
                {section.title}
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {section.content}
              </p>
              <div className={`mt-6 h-1 w-16 bg-gradient-to-r ${section.gradient} rounded-full group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>
        <div className="animate-fadeInUp max-w-6xl mx-auto" style={{ animationDelay: '0.4s' }}>
          <div className="glass-strong rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gradient mb-8 text-center">
              🔧 {t("about.techStack.title")}
            </h3>
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-accent-cyan mb-4 flex items-center gap-2">
                <span>🎨</span> {t("about.techStack.frontend")}
              </h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Bootstrap', 'HTML5', 'CSS3', 'Vite'].map((tech, i) => (
                  <span
                    key={i}
                    className="skill-tag bg-gradient-to-r from-accent-cyan/20 to-primary-600/20 border-accent-cyan/30"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-accent-emerald mb-4 flex items-center gap-2">
                <span>⚙️</span> {t("about.techStack.backend")}
              </h4>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'Express', 'C', 'C++', 'MongoDB', 'SQL', 'PostgreSQL', 'RESTful APIs', 'WebSocket', 'AJAX', 'Axios'].map((tech, i) => (
                  <span
                    key={i}
                    className="skill-tag bg-gradient-to-r from-accent-emerald/20 to-primary-600/20 border-accent-emerald/30"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-accent-purple mb-4 flex items-center gap-2">
                <span>🛠️</span> {t("about.techStack.devops")}
              </h4>
              <div className="flex flex-wrap gap-3">
                {['Docker', 'Docker Compose', 'Git', 'GitHub', 'Linux', 'Bash', 'VM', 'Networking', 'Cloudinary'].map((tech, i) => (
                  <span
                    key={i}
                    className="skill-tag bg-gradient-to-r from-accent-purple/20 to-primary-600/20 border-accent-purple/30"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-accent-pink mb-4 flex items-center gap-2">
                <span>💻</span> {t("about.techStack.languages")}
              </h4>
              <div className="flex flex-wrap gap-3">
                {['C', 'C++', 'JavaScript', 'TypeScript', 'Python', 'VS Code', 'Vim', 'MiniLibX'].map((tech, i) => (
                  <span
                    key={i}
                    className="skill-tag bg-gradient-to-r from-accent-pink/20 to-primary-600/20 border-accent-pink/30"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                <span>🧪</span> {t("about.techStack.testing")}
              </h4>
              <div className="flex flex-wrap gap-3">
                {['Cypress', 'Selenium', 'Unit Testing'].map((tech, i) => (
                  <span
                    key={i}
                    className="skill-tag bg-gradient-to-r from-yellow-400/20 to-primary-600/20 border-yellow-400/30"
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;