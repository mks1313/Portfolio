import ProjectItem from "@components/projects/ProjectItem";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const [showArchive, setShowArchive] = useState(false);
  const projects = t("projects.projects", { returnObjects: true });

  const { featuredProjects, archivedProjects } = useMemo(() => {
    const list = Array.isArray(projects) ? projects : [];
    return {
      featuredProjects: list.slice(0, 4),
      archivedProjects: list.slice(4),
    };
  }, [projects]);

  return (
    <div className="page-container bg-animated-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent-pink rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-accent-emerald rounded-full filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="content-wrapper">
        <div className="mb-12 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
            {t("projects.title")}
          </h1>
          <div className="h-1 w-32 bg-gradient-cyber rounded-full"></div>
          <p className="mt-4 text-gray-400 text-base lg:text-lg">
            {t("projects.subtitle")}
          </p>
        </div>
        <section className="mb-14">
          <div className="mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              {t("projects.featuredTitle")}
            </h2>
            <p className="text-gray-400">{t("projects.featuredSubtitle")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={`${project.title}-${index}`}
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
        </section>

        {archivedProjects.length > 0 && (
          <section>
            <div className="glass rounded-2xl border border-white/10 p-6 lg:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-white mb-1">
                    {t("projects.archiveTitle")}
                  </h3>
                  <p className="text-gray-400 text-sm lg:text-base">
                    {t("projects.archiveSubtitle")}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowArchive((current) => !current)}
                  className="px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10 transition-colors"
                  aria-expanded={showArchive}
                >
                  {showArchive
                    ? t("projects.hideArchive")
                    : t("projects.showArchive")}
                </button>
              </div>

              {showArchive ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-2">
                  {archivedProjects.map((project, index) => (
                    <div
                      key={`${project.title}-${index}`}
                      className="animate-fadeInUp"
                      style={{ animationDelay: `${index * 0.06}s` }}
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
              ) : null}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Projects;
