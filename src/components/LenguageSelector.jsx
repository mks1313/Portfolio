import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="flex items-center mt-40 ml-10">
      <FontAwesomeIcon icon={faGlobe} className="text-2xl mr-4 ml-3" style={{ color: "silver" }} />
      <select value={i18n.language} className="text-gray-200 border-none mt-1 bg-transparent appearance-none text-lg" onChange={(e) => handleChangeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
