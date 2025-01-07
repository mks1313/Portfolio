import { useTranslation } from "react-i18next";
import ProjectItem from "../components/ProjectItem";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div className="relative flex flex-col justify-between bg-black text-gray-300 img-background min-h-screen">
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-10 px-4 lg:pl-80 mt-6 mb-8">
        <ProjectItem
          title={t("projects.title1")}
          date={t("projects.date1")}
          image={t("projects.image1")}
          description={t("projects.description1")}
          clientUrl="https://github.com/mks1313/project-3-client"
          serverUrl="https://github.com/mks1313/project-3-server"
          liveUrl="https://project-3-client.vercel.app/"
        />
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
        <ProjectItem
          title={t("projects.title")}
          date={t("projects.date")}
          image={t("projects.image")}
          description={t("projects.description")}
          clientUrl="https://github.com/mks1313/Historical-events-CRUD"
          liveUrl="https://historical-events-crud.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;