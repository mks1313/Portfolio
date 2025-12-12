import { useTranslation } from "react-i18next";

const StatsCards = () => {
  const { t } = useTranslation();

  const stats = [
    { value: "2+", label: t('home.stats.yearsCoding'), color: "text-emerald-400", delay: "0s" },
    { value: "9+", label: t('home.stats.projects'), color: "text-cyan-400", delay: "0.1s" },
    { value: "20+", label: t('home.stats.technologies'), color: "text-purple-400", delay: "0.2s" },
    { value: "3", label: t('home.stats.languages'), color: "text-pink-400", delay: "0.3s" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fadeInUp">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="card-modern p-6 text-center hover-lift"
          style={{ animationDelay: stat.delay }}
        >
          <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
          <div className="text-sm text-gray-400">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
