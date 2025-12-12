import { useTranslation } from "react-i18next";

const PhilosophySection = () => {
  const { t } = useTranslation();

  return (
    <div className="mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
      <div className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/3 to-transparent"></div>
        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-cyan-400/40"></div>
            <div className="w-2 h-2 rotate-45 bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50"></div>
            <div className="h-px flex-1 bg-linear-to-l from-cyan-400/40 via-cyan-400/40 to-transparent"></div>
          </div>

          <div className="space-y-5 px-4">
            <p className="text-gray-200/90 font-light tracking-[0.15em] text-sm md:text-base text-center
                          hover:text-cyan-300 hover:tracking-[0.2em] transition-all duration-500 ease-out
                          relative group">
              <span className="relative z-10">{t('home.philosophy.line1')}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
            </p>

            <div className="flex items-center justify-center gap-3">
              <div className="w-1 h-1 rotate-45 bg-cyan-400/30"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-cyan-400/50"></div>
              <div className="w-1 h-1 rotate-45 bg-cyan-400/30"></div>
            </div>

            <p className="text-gray-200/90 font-light tracking-[0.15em] text-sm md:text-base text-center
                          hover:text-cyan-300 hover:tracking-[0.2em] transition-all duration-500 ease-out
                          relative group">
              <span className="relative z-10">{t('home.philosophy.line2')}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
            </p>

            <div className="flex items-center justify-center gap-3">
              <div className="w-1 h-1 rotate-45 bg-cyan-400/30"></div>
              <div className="w-1.5 h-1.5 rotate-45 bg-cyan-400/50"></div>
              <div className="w-1 h-1 rotate-45 bg-cyan-400/30"></div>
            </div>

            <p className="text-gray-200/90 font-light tracking-[0.15em] text-sm md:text-base text-center
                          hover:text-cyan-300 hover:tracking-[0.2em] transition-all duration-500 ease-out
                          relative group">
              <span className="relative z-10">{t('home.philosophy.line3')}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/5 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></span>
            </p>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-400/40 to-cyan-400/40"></div>
            <div className="w-2 h-2 rotate-45 bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/50"></div>
            <div className="h-px flex-1 bg-linear-to-l from-cyan-400/40 via-cyan-400/40 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhilosophySection;
