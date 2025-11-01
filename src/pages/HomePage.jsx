import { useTranslation } from "react-i18next";
import ContactInfo from "../components/ContactInfo";
import SocialLinks from "../components/SocialLinks";

const HomePage = () => {
  const { t } = useTranslation();

  const imageUrl =
    "https://res.cloudinary.com/dnwyfbj7m/image/upload/v1747944389/FotoPerfil.jpg";

  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/mgmarinov/",
    github: "https://github.com/mks1313",
    stackOverflow: "https://stackoverflow.com/users/22835936/maksim-marinov",
    cv: "https://asset.cloudinary.com/dnwyfbj7m/70a460925fb57cfbb660f9221ad7d124"
  };

  return (
    <div className="page-container bg-animated-gradient overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent-purple rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-accent-cyan rounded-full filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="content-wrapper">
        <div className="text-center mb-16 animate-fadeInDown">
          <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t('home.name')}
          </h1>
          <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            {t('home.role')}
          </p>
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {t('home.location')}
            </span>
            <span className="text-gray-600">•</span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              {t('home.languages')}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 animate-fadeInUp">
          <div className="card-modern p-6 text-center hover-lift">
            <div className="text-4xl font-bold text-emerald-400 mb-2">2+</div>
            <div className="text-sm text-gray-400">{t('home.stats.yearsCoding')}</div>
          </div>
          <div className="card-modern p-6 text-center hover-lift" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-cyan-400 mb-2">9+</div>
            <div className="text-sm text-gray-400">{t('home.stats.projects')}</div>
          </div>
          <div className="card-modern p-6 text-center hover-lift" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-purple-400 mb-2">20+</div>
            <div className="text-sm text-gray-400">{t('home.stats.technologies')}</div>
          </div>
          <div className="card-modern p-6 text-center hover-lift" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-pink-400 mb-2">3</div>
            <div className="text-sm text-gray-400">{t('home.stats.languages')}</div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          <div className="lg:col-span-4 space-y-6 animate-fadeInUp">
            <div className="card-modern p-6 hover-lift">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-cyber rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <img
                  src={imageUrl}
                  alt="Foto de perfil"
                  className="relative w-full aspect-square rounded-2xl object-cover border-2 border-white/20 shadow-2xl"
                />
              </div>
            </div>
            <div className="card-modern p-6 hover-lift">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">{t('home.sections.coreSkills')}</h3>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'C/C++', 'Docker', 'Linux', 'Git'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-gray-800/50 border border-cyan-500/20 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="card-modern p-6 hover-lift">
              <ContactInfo />
            </div>

            <div className="card-modern p-6 hover-lift">
              <SocialLinks socialLinks={socialLinks} />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>

            <div className="card-modern p-8 hover-lift group">
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  👨‍💻
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                    {t("home.profile.intro")}
                  </h2>
                  <div className="h-1 w-20 bg-gradient-cyber rounded-full"></div>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                {t("home.profile.background")}
              </p>
              <p className="text-gray-400 leading-relaxed">
                {t("home.profile.skills")}
              </p>
            </div>
            <div className="card-modern p-6 hover-lift bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 border-emerald-500/20">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold text-emerald-400">{t('home.sections.currentlyAt')}</h3>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full">
                  {t('home.sections.activeStatus')}
                </span>
              </div>
              <p className="text-gray-300 mb-4">{t('home.sections.position')}</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Tailwind CSS', 'JavaScript', 'Git', 'Docker', 'Docker Compose', 'WebSocket', 'IoT', 'Linux'].map((tech) => (
                  <span key={tech} className="px-2 py-1 bg-gray-800/50 border border-emerald-500/20 rounded text-xs text-gray-400">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div className="card-modern p-6 hover-lift group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-cyan-400 mb-3">
                  {t('home.sections.learningJourney')}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {t("home.profile.current")}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
                  {t('home.sections.education')}
                </div>
              </div>
              <div className="card-modern p-6 hover-lift group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  💡
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-3">
                  {t('home.sections.openToCollaborate')}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {t("home.profile.collaboration")}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span className="w-2 h-2 rounded-full bg-accent-purple"></span>
                  {t('home.sections.areas')}
                </div>
              </div>
            </div>

            {/* Experience Timeline Mini */}
            <div className="card-modern p-6 hover-lift">
              <h3 className="text-xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-6 flex items-center gap-2">
                <span>📍</span> {t('home.sections.careerTimeline')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 group/item">
                  <div className="flex-shrink-0 w-24 text-sm text-accent-emerald font-semibold">
                    08/2025
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-200 group-hover/item:text-white transition-colors">
                      {t('home.timeline.sensingTex')}
                    </div>
                    <div className="text-sm text-gray-400">{t('home.timeline.sensingTexRole')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/item">
                  <div className="flex-shrink-0 w-24 text-sm text-accent-cyan font-semibold">
                    04/2024
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-200 group-hover/item:text-white transition-colors">
                      {t('home.timeline.freelance')}
                    </div>
                    <div className="text-sm text-gray-400">{t('home.timeline.freelanceRole')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/item">
                  <div className="flex-shrink-0 w-24 text-sm text-accent-purple font-semibold">
                    2024
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-200 group-hover/item:text-white transition-colors">
                      {t('home.timeline.barcelona42')}
                    </div>
                    <div className="text-sm text-gray-400">{t('home.timeline.barcelona42Role')}</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 group/item">
                  <div className="flex-shrink-0 w-24 text-sm text-accent-pink font-semibold">
                    2023
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-200 group-hover/item:text-white transition-colors">
                      {t('home.timeline.ironhack')}
                    </div>
                    <div className="text-sm text-gray-400">{t('home.timeline.ironhackRole')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Goal Card - Full Width */}
            <div className="card-modern p-8 hover-lift group bg-gradient-to-br from-primary-800/50 to-accent-purple/30">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-5xl group-hover:scale-110 transition-transform">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {t("home.profile.goal")}
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                {t("home.profile.future")}
              </p>
              <div className="h-1 w-full bg-gradient-to-r from-accent-emerald via-primary-500 to-accent-purple rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;