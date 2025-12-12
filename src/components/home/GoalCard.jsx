import { useTranslation } from "react-i18next";

const GoalCard = () => {
  const { t } = useTranslation();

  return (
    <div className="card-modern p-8 hover-lift group bg-gradient-to-br from-primary-800/50 to-accent-purple/30">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-5xl group-hover:scale-110 transition-transform">
          🎯
        </div>
        <h3 className="text-2xl font-bold text-white">
          {t("home.profile.goal")}
        </h3>
      </div>
      <p className="text-gray-300 leading-relaxed mb-4">
        {t("home.profile.future")}
      </p>
      <div className="h-1 w-full bg-gradient-to-r from-accent-emerald via-primary-500 to-accent-purple rounded-full opacity-30"></div>
    </div>
  );
};

export default GoalCard;
