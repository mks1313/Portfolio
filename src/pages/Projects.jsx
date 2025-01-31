import { useTranslation } from "react-i18next";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  const { t } = useTranslation();
  const projects = t("projects.projects", { returnObjects: true });

  return (
    <div className="relative flex flex-col justify-between bg-black text-gray-300 img-background min-h-screen">
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-10 px-4 lg:pl-80 mt-6 mb-8">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectItem
              title={project.title}
              date={project.date}
              image={project.image}
              description={project.description}
              clientUrl={project.clientUrl}
              serverUrl={project.serverUrl}
              liveUrl={project.liveUrl}
            />
            {index !== projects.length - 1 && (
              <hr className="bg-gray-100 h-px mt-4 mb-8" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;