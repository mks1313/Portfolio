import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' }
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  return (
    <div ref={dropdownRef} className="relative w-full px-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full glass-strong rounded-xl px-4 py-3 flex items-center justify-between gap-3 hover:bg-white/10 transition-all duration-300 group"
      >
        <div className="flex items-center gap-3">
          <FontAwesomeIcon
            icon={faGlobe}
            className="text-lg text-accent-cyan group-hover:rotate-12 transition-transform"
          />
          <div className="flex items-center gap-2">
            <span className="text-2xl">{currentLang.flag}</span>
            <span className="text-sm font-medium text-gray-200">{currentLang.label}</span>
          </div>
        </div>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute bottom-full left-4 right-4 mb-2 glass-strong rounded-xl overflow-hidden border border-white/10 shadow-glow-md z-50 animate-fadeInUp">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleChangeLanguage(lang.code)}
              className={`w-full px-4 py-3 flex items-center gap-3 transition-all duration-200 ${lang.code === i18n.language
                ? 'bg-gradient-cyber text-white'
                : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.label}</span>
              {lang.code === i18n.language && (
                <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;