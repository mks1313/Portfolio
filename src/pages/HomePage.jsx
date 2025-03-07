import { useTranslation } from "react-i18next";
import ProfileSection from "../components/ProfileSection";
import SocialLinks from "../components/SocialLinks";
import ContactInfo from "../components/ContactInfo";
// Terminar responsive en medianas y peq pantallas
const HomePage = () => {
  const { t } = useTranslation();

  const imageUrl =
    "https://res.cloudinary.com/dnwyfbj7m/image/upload/v1741356004/foto_portfolio.jpg";
  
  const socialLinks = {
    linkedin: "https://www.linkedin.com/in/mgmarinov/",
    github: "https://github.com/mks1313",
    stackOverflow: "https://stackoverflow.com/users/22835936/maksim-marinov",
    cv: "https://asset.cloudinary.com/dnwyfbj7m/70a460925fb57cfbb660f9221ad7d124"
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-between text-gray-900 lg:pl-8 min-h-screen img-background">
      <div className="absolute inset-0 bg-black opacity-70"></div>

      <div className="relative px-4 lg:pl-64 mt-20 w-full animate-slideInLeft">
        <ProfileSection
          title={t("home.profile.intro")}
          content={t("home.profile.background")}
        />
        <ProfileSection
          title={t("home.profile.current")}
          content={t("home.profile.skills")}
        />
        <ProfileSection
          title={t("home.profile.collaboration")}
          content={t("home.profile.future")}
        />
        <ProfileSection
          title={t("home.profile.goal")}
          content=""
        />
      </div>

      <div className="relative md:w-1/3 w-full px-4 mt-4 md:mt-0 flex flex-col items-center justify-center md:justify-start space-y-4">
        <img
          src={imageUrl}
          alt="Foto de perfil"
          className="w-auto h-80 mb-6 mt-6 rounded-lg border-4 border-gray-200 object-cover"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <SocialLinks socialLinks={socialLinks} />
        <ContactInfo />
      </div>
    </div>
  );
};

export default HomePage;