import { useTranslation } from "react-i18next";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import stack from "../assets/icons/stack-overflow..svg";
import flag from "../assets/icons/flag.svg";
import phone from "../assets/icons/phone.svg";
import envelope from "../assets/icons/envelope.svg";
import map from "../assets/icons/map.svg";
import Letters from "../components/Letters"; 

const HomePage = () => {
  const { t } = useTranslation();
  const imageUrl =
    "https://res.cloudinary.com/dnwyfbj7m/image/upload/v1712145110/project-3/yb1epe8w7tmtnvffy2zk.jpg";

  return (
    <div className="flex flex-col md:flex-row justify-between bg-gray-100 text-gray-900 lg:pl-8">
      <div className="md:w-2/3 px-4 lg:pl-80 bg-black">
        {/* <h1 className="text-2xl font-bold mb-4">{t("home.name")}</h1> */}
        {/* <Letters value={t("home.name")} size="xl" /> */}
        <Letters value={t("home.description")} size="l" />
      </div>

      <div className="md:w-1/5 px-4 mt-4 md:mt-0 bg-black text-white">
        <div className="flex">
          <img
            src={imageUrl}
            alt="Foto de perfil"
            className="w-50 h-50 mb-4 mx-auto rounded-lg border-2 border-gray-200"
          />
        </div>

        <ul>
          <li className="flex items-center text-lg">
            <img src={map} alt="Icon" className="mr-4" />
            <Letters value={t("home.location")} size="m" />
          </li>
          <li className="flex items-center text-lg">
            <img src={flag} alt="Icon" className="mr-4" />
            <Letters value={t("home.languages")} size="m" />
          </li>
          <li>
            <a
              href="mailto:mg.marinov@gmx.es"
              className="flex items-center text-lg"
            >
              <img src={envelope} alt="Icon" className="mr-4" />
              <Letters value={t("home.gmail")} size="m" />
            </a>
          </li>
          <li className="flex items-center text-lg">
            <img src={phone} alt="Icon" className="mr-4" />
            <Letters value={t("home.phone")} size="m" />
          </li>
        </ul>
        <div className="flex item-center mt-5">
          <img src={github} alt="GitHub" className="w-8 h-8 mr-6" />
          <img src={linkedin} alt="LinkedIn" className="w-8 h-8 mr-6" />
          <img src={stack} alt="Stack Overflow" className="w-8 h-8 mr-6" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;

