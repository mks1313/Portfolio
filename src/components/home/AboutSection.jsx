import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <div className="card-modern p-8 hover-lift group">
      <div className="flex items-start gap-4 mb-6">
        <div className="text-5xl group-hover:scale-110 transition-transform">
          👨‍💻
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
            {t("home.profile.intro")}
          </h2>
          <div className="h-1 w-20 bg-gradient-cyber rounded-full"></div>
        </div>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed mb-4">
        {t("home.profile.background")}
      </p>
      <p className="text-gray-400 leading-relaxed">
        {t("home.profile.skills")}
      </p>
    </div>
  );
};

export default AboutSection;
