import { useTranslation } from "react-i18next";
import map from "../assets/icons/map.svg";
import flag from "../assets/icons/flag.svg";
import envelope from "../assets/icons/envelope.svg";
import phone from "../assets/icons/phone.svg";
import Letters from "./Letters";

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
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
  );
};

export default ContactInfo;