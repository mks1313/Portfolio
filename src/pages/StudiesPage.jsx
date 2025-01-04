import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";

const StudiesPage = () => {
  const { t } = useTranslation();
  return (
    <div className="text-gray-300">
      <div className="flex flex-col lg:flex-row items-center lg:items-start px-4 lg:pl-80 mt-6 mb-8 space-y-8 lg:space-y-0">
        <div className="lg:w-2/3 animate__animated animate__fadeInLeft">
          <Letters
            value={t("studies.title3")}
            size="xl"
            underline={false}
            gradient={true}
            className="text-left text-white mb-2"
            id="title"
          />
          <Letters
            value={t("studies.date3")}
            size="s"
            underline={false}
            gradient={true}
            className="text-left text-white mb-2"
            id="date"
          />
          <Letters
            value={t("studies.description3")}
            size="m"
            underline={false}
            gradient={true}
            className="text-left text-white mt-8"
            id="description"
          />
        </div>
        <div className="lg:w-1/3 lg:pl-8 mt-4 lg:mt-0 flex justify-center animate__animated animate__fadeInRight">
          <img
            src={t("studies.image2")}
            alt="imagen campus 42"
            className="w-72 h-auto mb-8 mx-auto mt-8 lg:mx-0 rounded-lg border-[6px] border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl"
          />
        </div>
      </div>

      <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
      </div>

      <div className="px-4 lg:pl-80 mt-6 mb-8">
        <Letters
          value={t("studies.title2")}
          size="xl"
          underline={false}
          gradient={true}
          className="text-center text-white mb-2"
          id="title"
        />
        <Letters
          value={t("studies.date2")}
          size="s"
          underline={false}
          gradient={true}
          className="text-center text-white mb-2"
          id="date"
        />
        <img
          src={t("studies.image1")}
          alt="certificado"
          className="w-72 h-auto mb-8 mx-auto mt-4 rounded-lg border-[6px] border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl"
        />
        <Letters
          value={t("studies.description2")}
          size="l"
          underline={false}
          gradient={true}
          className="text-center text-white"
          id="description"
        />
        <Letters
          value={t("studies.subdescription1")}
          size="m"
          underline={false}
          gradient={true}
          className="text-center text-white"
          id="subdescription"
        />
      </div>

      <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
      </div>

      <div className="px-4 lg:pl-80 mt-6 mb-8">
        <Letters
          value={t("studies.title")}
          size="xl"
          underline={false}
          gradient={true}
          className="text-center text-white mb-2"
          id="title"
        />
        <Letters
          value={t("studies.date")}
          size="s"
          underline={false}
          gradient={true}
          className="text-center text-white mb-2"
          id="date"
        />
        <img
          src={t("studies.image")}
          alt="Foto de perfil"
          className="w-72 h-auto mb-8 mx-auto mt-4 rounded-lg border-[6px] border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl"
        />
        <Letters
          value={t("studies.description")}
          size="m"
          underline={false}
          gradient={true}
          className="text-center text-white"
          id="description"
        />
      </div>

      <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
      </div>

      <div className="px-4 lg:pl-80 mt-6 mb-8">
        <Letters
          value={t("studies.title1")}
          size="xl"
          underline={false}
          gradient={true}
          className="text-center text-white mb-2"
          id="title"
        />
        <Letters
          value={t("studies.date1")}
          size="s"
          underline={false}
          gradient={true}
          className="text-center text-white mb-2"
          id="date"
        />
        <Letters
          value={t("studies.description1")}
          size="l"
          underline={false}
          gradient={true}
          className="text-center text-white"
          id="description"
        />
        <Letters
          value={t("studies.subdescription")}
          size="m"
          underline={false}
          gradient={true}
          className="text-center text-white"
          id="subdescription"
        />
      </div>
    </div>
  );
};

export default StudiesPage;
