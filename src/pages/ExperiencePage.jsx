import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";

const ExperiencePage = () => {
  const { t } = useTranslation();
  const backgroundUrl =
    "https://res.cloudinary.com/dnwyfbj7m/image/upload/v1735992827/Background_portfolio.png";

  const commonTextClasses = "text-center text-white mb-2 animate-fadeIn";
  const commonDescriptionClasses = "text-center text-white animate-slideIn";

  return (
    <div className="relative flex flex-col justify-between min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div> 
      </div>
      <div className="relative z-10 px-4 lg:pl-80 mt-6 mb-8">
        <Letters
          value={t("experience.title1")}
          size="xl"
          underline={false}
          gradient={true}
          className={commonTextClasses}
          id="title1"
        />
        <Letters
          value={t("experience.date1")}
          size="s"
          underline={false}
          gradient={true}
          className={commonTextClasses}
          id="date1"
        />
        <Letters
          value={t("experience.description1")}
          size="l"
          underline={false}
          gradient={true}
          className={commonDescriptionClasses}
          id="description1"
        />
      </div>
      <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
      </div>

      <div className="relative z-10 px-4 lg:pl-80 mt-6 mb-8">
        <Letters
          value={t("experience.title2")}
          size="xl"
          underline={false}
          gradient={true}
          className={commonTextClasses}
          id="title2"
        />
        <Letters
          value={t("experience.date2")}
          size="s"
          underline={false}
          gradient={true}
          className={commonTextClasses}
          id="date2"
        />
        <Letters
          value={t("experience.description2")}
          size="l"
          underline={false}
          gradient={true}
          className={commonDescriptionClasses}
          id="description2"
        />
      </div>
      <hr className="bg-gray-100 h-px mt-4 mb-8" />

      <div className="relative z-10 px-4 lg:pl-80 mt-6 mb-8">
        <Letters
          value={t("experience.title3")}
          size="xl"
          underline={false}
          gradient={true}
          className={commonTextClasses}
          id="title3"
        />
        <Letters
          value={t("experience.date3")}
          size="s"
          underline={false}
          gradient={true}
          className={commonTextClasses}
          id="date3"
        />
        <Letters
          value={t("experience.description3")}
          size="l"
          underline={false}
          gradient={true}
          className={commonDescriptionClasses}
          id="description3"
        />
      </div>
      <hr className="bg-gray-100 h-px mt-4 mb-8" />
    </div>
  );
};

export default ExperiencePage;
