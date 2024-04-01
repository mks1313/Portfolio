import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import logo from "/favicon.png";
import enTranslations from "../translations/en/navbar.json";
import esTranslations from "../translations/es/navbar.json";

const Navbar = () => {
  const [language, setLanguage] = useState("en");
  const translations = language === "en" ? enTranslations : esTranslations;

  const toggleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="navbar bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-32 h-auto mb-4 mx-auto rounded-full"
        />
      </div>
      <ul className="flex flex-col items-start space-y-4 mx-auto ">
        <li>
          <NavLink to="/" className="font-bold text-aqua">
            {translations.home}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="font-bold text-aqua">
            {translations.about}
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className="font-bold text-aqua">
            {translations.experience}
          </NavLink>
        </li>
        <li>
          <NavLink to="/studies" className="font-bold text-aqua">
            {translations.studies}
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faFlag} className="mr-1" />
        <select  value={language} onChange={toggleLanguage}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
      <p> by Maksim Georgiev Marinov </p>
    </div>
  );
};

export default Navbar;
