import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";
import github from "../assets/icons/github.svg";
import Button from "../components/Button";

const Projects = () => {
  const { t } = useTranslation();
  const backgroundUrl =
    "https://res.cloudinary.com/dnwyfbj7m/image/upload/v1735992827/Background_portfolio.png";
  
  return (
    <div className="relative flex flex-col md:flex-col justify-between bg-black text-gray-300 lg:pl-8 min-h-screen projects">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      </div>
      <div className="relative z-10 px-4 lg:pl-80 mt-6 mb-8">
        <div className="flex justify-start items-center animate-slideInFromTop">
          <div className="flex flex-col items-center" style={{ height: "100px" }}>
            <Button
              href={"https://github.com/mks1313/project-3-client"}
              imageSrc={github}
              alt="GitHub-client"
              className="hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300"
            />
            <span className="text-white mt-2">Client</span>
          </div>
          <div className="flex flex-col items-center ml-4" style={{ height: "100px" }}>
            <Button
              href={"https://github.com/mks1313/project-3-server"}
              imageSrc={github}
              alt="GitHub-server"
              className="hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300"
            />
            <span className="text-white mt-2">Server</span>
          </div>
          <div className="flex flex-col items-center ml-4" style={{ height: "100px" }}>
            <Button
              href={"https://project-3-client.vercel.app/"}
              text="Visit"
              className="hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300"
            />
          </div>
        </div>
        <Letters
          value={t("projects.title1")}
          size="xl"
          underline={false}
          gradient={true}
          className="text-center text-white mb-2 animate-slideInFromTop"
          id="title1"
        />
        <Letters
          value={t("projects.date1")}
          size="s"
          underline={false}
          gradient={true}
          className="text-center text-white mb-2 animate-slideInFromTop"
          id="date1"
        />
        <img
          src={t("projects.image1")}
          alt="Imagen de web"
          className="w-90 h-60 mb-8 mx-auto mt-4 rounded-lg border-[6px] border-gray-200 animate-slideInFromTop"
        />
        <Letters
          value={t("projects.description1")}
          size="l"
          underline={false}
          gradient={true}
          className="text-center text-white animate-slideInFromTop"
          id="description1"
        />
      </div>
      <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
      </div>
      <div className="relative z-10 px-4 lg:pl-80 mt-6 mb-8">
        <div className="flex justify-start items-center animate-slideInFromTop">
          <div className="flex flex-col items-center mr-4">
            <Button
              href={"https://github.com/mks1313/Historical-events-CRUD"}
              imageSrc={github}
              alt="GitHub-Historical-events-CRUD"
              className="hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300"
            />
          </div>
          <div className="flex flex-col items-center">
            <Button
              href={"https://historical-events-crud.vercel.app/"}
              text="Visit"
              className="hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300"
            />
          </div>
        </div>
        <Letters
          value={t("projects.title")}
          size="xl"
          underline={false}
          gradient={true}
          className="text-center text-white mb-2 animate-slideInFromTop"
          id="title"
        />
        <Letters
          value={t("projects.date")}
          size="s"
          underline={false}
          gradient={true}
          className="text-center text-white mb-2 animate-slideInFromTop"
          id="date"
        />
        <img
          src={t("projects.image")}
          alt="Imagen de web"
          className="w-90 h-60 mb-8 mx-auto mt-4 rounded-lg border-[6px] border-gray-200 animate-slideInFromTop"
        />
        <Letters
          value={t("projects.description")}
          size="l"
          underline={false}
          gradient={true}
          className="text-center text-white animate-slideInFromTop"
          id="description"
        />
      </div>
      <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
      </div>
    </div>
  );
};

export default Projects;