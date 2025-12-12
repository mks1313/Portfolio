import { useTranslation } from "react-i18next";

const CurrentPositionCard = () => {
  const { t } = useTranslation();

  const technologies = ['React', 'Docker', 'WebSocket', 'IoT', 'Linux'];

  return (
    <div className="card-modern p-6 hover-lift bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border-emerald-500/20">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-emerald-400">{t('home.sections.currentlyAt')}</h3>
        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full">
          {t('home.sections.activeStatus')}
        </span>
      </div>
      <p className="text-gray-300 mb-4">{t('home.sections.position')}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-gray-800/50 border border-emerald-500/20 rounded-sm text-xs text-gray-400">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default CurrentPositionCard;
