import { useTranslation } from "react-i18next";

const CareerTimeline = () => {
  const { t } = useTranslation();

  const timelineItems = [
    { date: "08/2025", company: t('home.timeline.sensingTex'), role: t('home.timeline.sensingTexRole'), color: "text-accent-emerald" },
    { date: "04/2024", company: t('home.timeline.freelance'), role: t('home.timeline.freelanceRole'), color: "text-accent-cyan" },
    { date: "2024", company: t('home.timeline.barcelona42'), role: t('home.timeline.barcelona42Role'), color: "text-accent-purple" },
    { date: "2023", company: t('home.timeline.ironhack'), role: t('home.timeline.ironhackRole'), color: "text-accent-pink" }
  ];

  return (
    <div className="card-modern p-6 hover-lift">
      <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-6 flex items-center gap-2">
        <span>📍</span> {t('home.sections.careerTimeline')}
      </h3>
      <div className="space-y-4">
        {timelineItems.map((item, index) => (
          <div key={index} className="flex items-start gap-4 group/item">
            <div className={`flex-shrink-0 w-24 text-sm ${item.color} font-semibold`}>
              {item.date}
            </div>
            <div className="flex-1">
              <div className="font-semibold text-gray-200 group-hover/item:text-white transition-colors">
                {item.company}
              </div>
              <div className="text-sm text-gray-400">{item.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerTimeline;
