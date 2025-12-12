import StudySection from "@components/studies/StudySection";
import { useTranslation } from "react-i18next";

const StudiesPage = () => {
  const { t } = useTranslation();
  const studyData = t("studies.studies", { returnObjects: true }) || [];

  return (
    <div className="page-container">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-600 bg-clip-text text-transparent mb-4">
          {t("navbar.studies")}
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {t("studies.pageSubtitle")}
        </p>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mt-6"></div>
      </div>

      {/* Timeline vertical */}
      <div className="max-w-6xl mx-auto relative">
        {/* Línea vertical central */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-pink-500/50 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {studyData.map((study, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={study.title + index}
                className="relative"
              >
                {/* Punto en la línea timeline */}
                <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
                  <div className="w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-gray-900 shadow-lg shadow-cyan-500/50"></div>
                </div>

                {/* Grid alternado */}
                <div className={`md:grid md:grid-cols-2 md:gap-12 ${isLeft ? '' : 'md:grid-flow-dense'}`}>
                  <div className={`${isLeft ? 'md:col-start-1' : 'md:col-start-2'}`}>
                    <StudySection
                      title={study.title}
                      date={study.date}
                      description={study.description}
                      subdescription={study.subdescription}
                      image={study.image}
                      altText={study.title}
                      index={index}
                      isTimeline={true}
                    />
                  </div>
                  <div className={`hidden md:block ${isLeft ? 'md:col-start-2' : 'md:col-start-1'}`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {studyData.length === 0 && (
          <div className="card-modern text-center py-16">
            <p className="text-gray-400 text-lg">No study data available.</p>
          </div>
        )}

        {/* End marker */}
        {studyData.length > 0 && (
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full">
              <span className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></span>
              <span className="text-gray-400 text-sm font-medium">{t("studies.timelineEnd")}</span>
              <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudiesPage;