import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [openDown, setOpenDown] = useState(false);
  const dropdownRef = useRef(null);
  const normalizedLanguage = i18n.language?.split("-")[0] || "en";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleChangeLanguage = (language) => {
    if (language === normalizedLanguage) {
      setIsOpen(false);
      return;
    }

    i18n.changeLanguage(language);
    localStorage.setItem("lang", language);
    setIsOpen(false);
  };

  const languages = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "ru", label: "Русский", flag: "🇷🇺" },
  ];

  const currentLang =
    languages.find((lang) => lang.code === normalizedLanguage) || languages[0];

  return (
    <section className="w-full px-4" aria-label="Language selector">
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            setOpenDown(window.innerHeight - rect.bottom >= rect.top);
            setIsOpen((open) => !open);
          }}
          className="w-full glass-strong rounded-xl px-4 py-3 flex items-center justify-between gap-3 border border-white/10 hover:bg-white/10 transition-all duration-250"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-label="Select language"
        >
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-xl leading-none shrink-0">
              {currentLang.flag}
            </span>
            <span className="text-sm font-medium text-gray-100 truncate">
              {currentLang.label}
            </span>
          </div>

          <svg
            className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div
            className={`absolute left-0 right-0 glass-strong rounded-xl border border-white/12 overflow-hidden shadow-glow-md z-50 ${
              openDown
                ? "top-full mt-2 animate-fadeInDown"
                : "bottom-full mb-2 animate-fadeInUp"
            }`}
            role="listbox"
            aria-label="Languages"
          >
            {languages.map((lang) => {
              const isActive = lang.code === normalizedLanguage;

              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => handleChangeLanguage(lang.code)}
                  className={`w-full px-4 py-3 flex items-center gap-3 text-left transition-colors duration-200 ${
                    isActive
                      ? "bg-linear-to-r from-cyan-500/30 to-purple-500/30 text-white"
                      : "text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                  role="option"
                  aria-selected={isActive}
                >
                  <span className="text-xl leading-none">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.label}</span>
                  {isActive ? (
                    <svg
                      className="w-4 h-4 ml-auto text-cyan-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : null}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default LanguageSelector;
