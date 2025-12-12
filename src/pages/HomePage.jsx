import { useTranslation } from "react-i18next";
import AboutSection from "../components/home/AboutSection";
import CareerTimeline from "../components/home/CareerTimeline";
import CurrentPositionCard from "../components/home/CurrentPositionCard";
import GoalCard from "../components/home/GoalCard";
import JourneyCards from "../components/home/JourneyCards";
import PhilosophySection from "../components/home/PhilosophySection";
import ProfileCard from "../components/home/ProfileCard";
import StatsCards from "../components/home/StatsCards";

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

        <StatsCards />

        <PhilosophySection />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <ProfileCard imageUrl={imageUrl} socialLinks={socialLinks} />

          <div className="lg:col-span-8 space-y-6 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <AboutSection />

            <CurrentPositionCard />

            <JourneyCards />

            <CareerTimeline />

            <GoalCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;