import { useTranslation } from "react-i18next";
import ExperienceItem from "../components/ExperienceItem";

const ExperiencePage = () => {
  const { t } = useTranslation();

  return (
    <div className="img-background text-gray-300 relative min-h-screen">
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      <ExperienceItem
        title={t("experience.title1")}
        date={t("experience.date1")}
        description={t("experience.description1")}
        delay="200"
      />
      <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
      </div>

      <ExperienceItem
        title={t("experience.title2")}
        date={t("experience.date2")}
        description={t("experience.description2")}
        delay="300"
      />
      <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
      </div>

      <ExperienceItem
        title={t("experience.title3")}
        date={t("experience.date3")}
        description={t("experience.description3")}
        delay="400"
      />
      <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
      </div>
    </div>
  );
};

export default ExperiencePage;