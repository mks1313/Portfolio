import { useTranslation } from "react-i18next";
import ProfileSection from "../components/ProfileSection";
import ProfileImageAndButtons from "../components/ProfileImageAndButtons";
import ContactInfo from "../components/ContactInfo";

const HomePage = () => {
  const { t } = useTranslation();
  const imageUrl =
    "https://res.cloudinary.com/dnwyfbj7m/image/upload/v1712145110/project-3/yb1epe8w7tmtnvffy2zk.jpg";
  const linkedinURL = "https://www.linkedin.com/in/mgmarinov/";
  const githubURL = "https://github.com/mks1313";
  const stackOverflowURL = "https://stackoverflow.com/users/22835936/maksim-marinov";
// TODO hacer texto mas explicativo, uso de tecnologias, etc tanto en about como en
// https://1drv.ms/b/c/a920611cfc94b283/EUTz02GzsI1KuSnDo0ng9msBMsdFTFnw2hu6_WBuP6bVeg?e=WAg4Ur-link cv.es
// https://1drv.ms/b/c/a920611cfc94b283/EQvNwz83b_5Diaaw-g8rCx4BCUbEOLL1e3GcwmEiTJBH6w?e=8LdC9H cv.en
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
        <ProfileImageAndButtons
          imageUrl={imageUrl}
          linkedinURL={linkedinURL}
          githubURL={githubURL}
          stackOverflowURL={stackOverflowURL}
        />
        <ContactInfo />
      </div>
    </div>
  );
};

export default HomePage;