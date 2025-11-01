import { useTranslation } from "react-i18next";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.projects", { returnObjects: true });

  return (
    <div className="page-container bg-animated-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-pink rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent-emerald rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="content-wrapper">
        <div className="mb-12 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            🚀 {t("projects.title")}
          </h1>
          <div className="h-1 w-32 bg-gradient-cyber rounded-full"></div>
          <p className="mt-4 text-gray-400 text-base lg:text-lg">
            {t("projects.subtitle")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectItem
                title={project.title}
                date={project.date}
                image={project.image}
                description={project.description}
                clientUrl={project.clientUrl}
                serverUrl={project.serverUrl}
                liveUrl={project.liveUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;