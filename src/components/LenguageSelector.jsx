import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex items-center mt-20 ml-10">
      <FontAwesomeIcon icon={faGlobe} className="text-2xl mr-4 ml-3" style={{ color: "silver" }} />
      <select 
        value={i18n.language} 
        onChange={(e) => handleChangeLanguage(e.target.value)}
        className="text-gray-200 bg-transparent border-none text-lg cursor-pointer appearance-none focus:outline-none focus:ring-0 focus:bg-transparent"
      >
        <option value="en" className="bg-transparent">English</option>
        <option value="es" className="bg-transparent">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;