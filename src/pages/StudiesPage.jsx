import { useTranslation } from "react-i18next";
import StudySection from "../components/StudySection";

const StudiesPage = () => {
  const { t } = useTranslation();
  const studyData = t("studies.studies", { returnObjects: true });
  const isArray = Array.isArray(studyData);

  return (
    <div className="relative bg-transparent text-gray-300 min-h-screen img-background">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
      <div className="relative z-20">
        {isArray && studyData.length > 0 ? (
          studyData.map((data, index) => (
            <div key={data.title + index}>
              <StudySection
                title={data.title}
                date={data.date}
                description={data.description}
                image={data.image}
                altText={data.altText || ""}
                animation={data.animation || "animate__fadeInUp"}
                subdescription={data.subdescription}
              />
              <div className="w-full mx-4">
                <hr className="bg-gray-100 h-px mt-4 mb-8" />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white">No study data available.</p>
        )}
      </div>
    </div>
  );
};

export default StudiesPage;