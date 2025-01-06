import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";

const ExperiencePage = () => {
  const { t } = useTranslation();
  const backgroundUrl =
    "https://res.cloudinary.com/dnwyfbj7m/image/upload/w_1920,h_1080,c_fill,q_auto/v1735992827/Background_portfolio.png";

  return (
    <div
      className="bg-black text-gray-300 relative min-h-screen"
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      <div className="relative z-20 px-4 lg:pl-80 mt-6 mb-8 animate-fadeIn delay-200">
        <Letters
          value={t("experience.title1")}
          size="xl"
          underline={false}
          gradient={true}
          className="text-center lg:text-left text-white mb-2"
          id="title"
        />
        <Letters
          value={t("experience.date1")}
          size="s"
          underline={false}
          gradient={true}
          className="text-center lg:text-left text-white mb-2"
          id="date"
        />
        <Letters
          value={t("experience.description1")}
          size="l"
          underline={false}
          gradient={true}
          className="text-center lg:text-left text-white animate-slideIn"
          id="description"
        />
      </div>

      <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
      </div>
      <div className="relative z-20 px-4 lg:pl-80 mt-6 mb-8 animate-fadeIn delay-300">
        <Letters
          value={t("experience.title2")}
          size="xl"
          underline={false}
          gradient={true}
          className="text-center lg:text-left text-white mb-2"
          id="title"
        />
        <Letters
          value={t("experience.date2")}
          size="s"
          underline={false}
          gradient={true}
          className="text-center lg:text-left text-white mb-2"
          id="date"
        />
        <Letters
          value={t("experience.description2")}
          size="l"
          underline={false}
          gradient={true}
          className="text-center lg:text-left text-white animate-slideIn"
          id="description"
        />
      </div>

      <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
      </div>
      <div className="relative z-20 px-4 lg:pl-80 mt-6 mb-8 animate-fadeIn delay-400">
        <Letters
          value={t("experience.title3")}
          size="xl"
          underline={false}
          gradient={true}
          className="text-center lg:text-left text-white mb-2"
          id="title"
        />
        <Letters
          value={t("experience.date3")}
          size="s"
          underline={false}
          gradient={true}
          className="text-center lg:text-left text-white mb-2"
          id="date"
        />
        <Letters
          value={t("experience.description3")}
          size="l"
          underline={false}
          gradient={true}
          className="text-center lg:text-left text-white animate-slideIn"
          id="description"
        />
      </div>

      <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
      </div>
    </div>
  );
};

export default ExperiencePage;
