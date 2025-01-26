import { useTranslation } from "react-i18next";
import StudySection from "../components/StudySection";

const StudiesPage = () => {
  const { t } = useTranslation();
  // TODO hacer collapse, o algun otro estilo carousel tal vez, para UIUX
  return (
    <div className="relative bg-transparent text-gray-300 min-h-screen img-background">
      <div className="absolute inset-0 bg-black bg-opacity-70 z-10"></div>
      
      <div className="relative z-20">
      <StudySection
          title={t("studies.title5")}
          date={t("studies.date5")}
          description={t("studies.description5")}
          image={t("studies.image4")}
          altText="udemy certificate"
          animation="animate__fadeInLeft"
        />
        
        <div className="w-full mx-4">
          <hr className="bg-gray-100 h-px mt-4 mb-8" />
        </div>
      <StudySection
          title={t("studies.title4")}
          date={t("studies.date4")}
          description={t("studies.description4")}
          image={t("studies.image3")}
          altText="udemy certificate"
          animation="animate__fadeInLeft"
        />
        
        <div className="w-full mx-4">
          <hr className="bg-gray-100 h-px mt-4 mb-8" />
        </div>
        <StudySection
          title={t("studies.title3")}
          date={t("studies.date3")}
          description={t("studies.description3")}
          image={t("studies.image2")}
          altText="imagen campus 42"
          animation="animate__fadeInLeft"
        />
        
        <div className="w-full mx-4">
          <hr className="bg-gray-100 h-px mt-4 mb-8" />
        </div>

        <StudySection
          title={t("studies.title2")}
          date={t("studies.date2")}
          description={t("studies.description2")}
          subdescription={t("studies.subdescription1")}
          image={t("studies.image1")}
          altText="certificado"
          animation="animate__fadeInRight"
        />
        
        <div className="w-full mx-4">
          <hr className="bg-gray-100 h-px mt-4 mb-8" />
        </div>

        <StudySection
          title={t("studies.title")}
          date={t("studies.date")}
          description={t("studies.description")}
          image={t("studies.image")}
          altText="Foto de perfil"
          animation="animate__fadeInLeft"
        />
        
        <div className="w-full mx-4">
          <hr className="bg-gray-100 h-px mt-4 mb-8" />
        </div>

        <StudySection
          title={t("studies.title1")}
          date={t("studies.date1")}
          description={t("studies.description1")}
          subdescription={t("studies.subdescription")}
          animation="animate__fadeInRight"
        />
      </div>
    </div>
  );
};

export default StudiesPage;