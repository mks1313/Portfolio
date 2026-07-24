import { useTranslation } from "react-i18next";

const JourneyCards = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="card-modern p-6 hover-lift group lg:min-h-80">
        <span className="inline-block mb-4 text-xs uppercase tracking-[0.14em] text-cyan-300 border border-cyan-400/30 rounded-full px-3 py-1">
          Journey
        </span>
        <h3 className="text-xl font-bold text-cyan-400 mb-3">
          {t("home.sections.learningJourney")}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 lg:min-h-32">
          {t("home.profile.current")}
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
          {t("home.sections.education")}
        </div>
      </div>

      <div className="card-modern p-6 hover-lift group lg:min-h-80">
        <span className="inline-block mb-4 text-xs uppercase tracking-[0.14em] text-purple-300 border border-purple-400/30 rounded-full px-3 py-1">
          Collaboration
        </span>
        <h3 className="text-xl font-bold text-purple-400 mb-3">
          {t("home.sections.openToCollaborate")}
        </h3>
        <p className="text-gray-300 text-sm leading-relaxed mb-4 lg:min-h-32">
          {t("home.profile.collaboration")}
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span className="w-2 h-2 rounded-full bg-accent-purple"></span>
          {t("home.sections.areas")}
        </div>
      </div>
    </div>
  );
};

export default JourneyCards;
