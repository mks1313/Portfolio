import { useTranslation } from "react-i18next";
import StudySection from "../components/StudySection";

const StudiesPage = () => {
  const { t } = useTranslation();
  
  const studyData = [
    { titleKey: "title5", dateKey: "date5", descriptionKey: "description5", imageKey: "image4", altText: "Udemy certificate", animation: "animate__fadeInLeft" },
    { titleKey: "title4", dateKey: "date4", descriptionKey: "description4", imageKey: "image3", altText: "Udemy certificate", animation: "animate__fadeInLeft" },
    { titleKey: "title3", dateKey: "date3", descriptionKey: "description3", imageKey: "image2", altText: "42 Barcelona campus image", animation: "animate__fadeInLeft" },
    { titleKey: "title2", dateKey: "date2", descriptionKey: "description2", imageKey: "image1", altText: "Responsive Web Design certificate", animation: "animate__fadeInRight", subdescriptionKey: "subdescription1" },
    { titleKey: "title", dateKey: "date", descriptionKey: "description", imageKey: "image", altText: "Profile picture", animation: "animate__fadeInLeft" },
    { titleKey: "title1", dateKey: "date1", descriptionKey: "description1", imageKey: "", altText: "Profile picture", animation: "animate__fadeInRight", subdescriptionKey: "subdescription" }
  ];

  return (
    <div className="relative bg-transparent text-gray-300 min-h-screen img-background">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
      <div className="relative z-20">
        {studyData.map((data, index) => (
          <div key={data.titleKey + index}>
            <StudySection
              title={t(`studies.${data.titleKey}`)}
              date={t(`studies.${data.dateKey}`)}
              description={t(`studies.${data.descriptionKey}`)}
              image={data.imageKey ? t(`studies.${data.imageKey}`) : undefined}
              altText={data.altText}
              animation={data.animation}
              subdescription={data.subdescriptionKey ? t(`studies.${data.subdescriptionKey}`) : undefined}
            />
            <div className="w-full mx-4">
              <hr className="bg-gray-100 h-px mt-4 mb-8" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudiesPage;