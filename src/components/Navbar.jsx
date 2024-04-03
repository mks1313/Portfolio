import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import logo from '/favicon.png';
import { useTranslation } from 'react-i18next'; 

const Navbar = () => {
  const { t, i18n } = useTranslation(); 

  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    setLanguage(i18n.language);
  }, [i18n.language]);

  const toggleLanguage = (e) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="navbar bg-black text-white p-4">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-32 h-auto mb-4 mx-auto rounded-full" />
      </div>
      <ul className="flex flex-col items-start space-y-4 mx-auto">
        <li>
          <NavLink to="/" className="font-bold text-aqua">
            {t('navbar.home')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="font-bold text-aqua">
            {t('navbar.about')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" className="font-bold text-aqua">
            {t('navbar.experience')}
          </NavLink>
        </li>
        <li>
          <NavLink to="/studies" className="font-bold text-aqua">
            {t('navbar.studies')}
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center">
        <FontAwesomeIcon icon={faFlag} className="mr-1" />
        <select value={language} onChange={toggleLanguage}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
      <p> by Maksim Georgiev Marinov </p>
    </div>
  );
};

export default Navbar;



