import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";

const AboutPage = () => {
  const { t } = useTranslation();

  const backgroundUrl =
    "https://res.cloudinary.com/dnwyfbj7m/image/upload/v1735992827/Background_portfolio.png";

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: `url(${backgroundUrl})`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
      </div>
      <div className="relative z-10 px-4 lg:pl-80 mt-6 space-y-6">
        <Letters
          value={t("about.about")}
          size="xl"
          underline={true}
          gradient={true}
          className="text-center text-white mb-4 fade-in"
          id="about"
        />

        <div className="fade-in">
          <Letters
            value={t("about.profile_name")}
            size="l"
            className="font-bold mb-2"
          />
          <Letters value={t("about.profile_skills")} size="m" />
        </div>

        <div className="fade-in">
          <Letters
            value={t("about.current_stage_description_1")}
            size="xl"
            className="font-bold mb-2"
          />
          <Letters value={t("about.current_stage_description_2")} size="m" />
        </div>

        <div className="fade-in">
          <Letters
            value={t("about.skills_technologies_intro")}
            size="xl"
            className="font-bold mb-2"
          />
          <Letters
            value={t("about.skills_technologies_technologies_trained")}
            size="m"
          />
          <Letters
            value={t("about.skills_technologies_continued_learning")}
            size="m"
            className="mt-4"
          />
        </div>

        <div className="fade-in">
          <Letters
            value={t("about.future_goal")}
            size="xl"
            className="font-bold mb-2"
          />
          <Letters value={t("about.future_opportunity")} size="m" />
          <Letters
            value={t("about.future_closing")}
            size="m"
            className="mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;