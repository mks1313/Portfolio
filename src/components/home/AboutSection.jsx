import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="card-modern p-8 hover-lift group lg:min-h-96">
      <div className="mb-6">
        <h2 className="text-3xl font-bold bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2 lg:min-h-28">
          {t("home.profile.intro")}
        </h2>
        <div className="h-1 w-20 bg-gradient-cyber rounded-full"></div>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed mb-4 lg:min-h-22">
        {t("home.profile.background")}
      </p>
      <p className="text-gray-400 leading-relaxed lg:min-h-22">
        {t("home.profile.skills")}
      </p>
    </div>
  );
};

export default AboutSection;
