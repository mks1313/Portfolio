import { useTranslation } from "react-i18next";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import stack from "../assets/icons/stack-overflow.svg";
import flag from "../assets/icons/flag.svg";
import phone from "../assets/icons/phone.svg";
import envelope from "../assets/icons/envelope.svg";
import map from "../assets/icons/map.svg";
import Letters from "../components/Letters";
import Button from "../components/Button";

// TODO terminar arreglo de json, para exposicion de la info mas
const HomePage = () => {
  const { t } = useTranslation();
  const imageUrl =
    "https://res.cloudinary.com/dnwyfbj7m/image/upload/v1712145110/project-3/yb1epe8w7tmtnvffy2zk.jpg";

  return (
    <div
      className="relative flex flex-col md:flex-row justify-between text-gray-900 lg:pl-8 min-h-screen img-background">
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative px-4 lg:pl-80 mt-20 animate-slideInLeft">
        <Letters
          value={t("home.description")}
          size="l"
          className="animate-slideInLeft text-white"
        />
      </div>

      <div className="relative md:w-full px-4 mt-4 md:mt-0">
        <div className="flex justify-center animate-fadeIn">
          <img
            src={imageUrl}
            alt="Foto de perfil"
            className="w-50 h-50 mb-4 mt-6 mx-auto rounded-lg border-4 border-gray-200 animate-fadeIn"
          />
        </div>
        <div className="flex justify-center items-center space-x-6 mt-5 mb-20 animate-bounceLimited">
          <Button
            href={"https://www.linkedin.com/in/mgmarinov"}
            imageSrc={linkedin}
            alt="LinkedIn"
            className="transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px]"
          />
          <Button
            href={"https://github.com/mks1313"}
            imageSrc={github}
            alt="GitHub"
            className="transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px]"
          />
          <Button
            href={"https://stackoverflow.com/users/22835936/maksim-marinov"}
            imageSrc={stack}
            alt="Stack Overflow"
            className="transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px]"
          />
        </div>

        <ul className="mt-8 pr-4 animate-slideInRight text-white">
          <li className="flex items-center text-lg mb-4 animate-slideInRight">
            <img src={map} alt="Icon" className="mr-4" />
            <Letters value={t("home.location")} size="m" />
          </li>
          <li className="flex items-center text-lg mb-4 animate-slideInRight">
            <img src={flag} alt="Icon" className="mr-4" />
            <Letters value={t("home.languages")} size="m" />
          </li>
          <li className="flex items-center text-lg mb-4 animate-slideInRight">
            <a href="mailto:mg.marinov@gmx.es" className="flex items-center">
              <img src={envelope} alt="Icon" className="mr-4" />
              <Letters value={t("home.gmail")} size="m" />
            </a>
          </li>
          <li className="flex items-center text-lg animate-slideInRight">
            <img src={phone} alt="Icon" className="mr-4" />
            <Letters value={t("home.phone")} size="m" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;