import ExperienceItem from "@components/experience/ExperienceItem";
import { useTranslation } from "react-i18next";

const ExperiencePage = () => {
  const { t } = useTranslation();
  const experienceData = t("experience.jobs", { returnObjects: true }) || [];

  return (
    <div className="page-container bg-animated-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-40 w-96 h-96 bg-accent-cyan rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-40 w-80 h-80 bg-accent-purple rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="content-wrapper">
        <div className="mb-12 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-4">
            💼 {t("navbar.experience")}
          </h1>
          <div className="h-1 w-32 bg-gradient-cyber rounded-full"></div>
        </div>
        {experienceData.length > 0 ? (
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-purple to-accent-cyan hidden lg:block"></div>

            <div className="space-y-8">
              {experienceData.map((job, index) => (
                <div
                  key={job.title + index}
                  className="animate-fadeInUp"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ExperienceItem
                    title={job.title}
                    date={job.date}
                    description={job.description}
                    category={job.category}
                    skills={job.skills}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="glass-strong rounded-2xl p-12 text-center max-w-2xl mx-auto">
            <p className="text-gray-400 text-lg">No experience data available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperiencePage;