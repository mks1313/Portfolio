import { useTranslation } from "react-i18next";
import ExperienceItem from "../components/ExperienceItem";

const ExperiencePage = () => {
  const { t } = useTranslation();
  const experienceData = t("experience.jobs", { returnObjects: true }) || [];

  return (
    <div className="img-background text-gray-300 relative min-h-screen">
      <div className="absolute inset-0 bg-black opacity-70 z-0"></div>

      {experienceData.length > 0 ? (
        experienceData.map((job, index) => (
          <div key={job.title + index}>
            <ExperienceItem
              title={job.title}
              date={job.date}
              description={job.description}
              category={job.category}
              skills={job.skills}
              delay={200 + index * 100}
            />
            <div className="w-full mx-4">
              <hr className="bg-gray-100 h-px mt-4 mb-8" />
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-white">No experience data available.</p>
      )}
    </div>
  );
};

export default ExperiencePage;