import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            <Letters value={t('about.content')} size="xl" underline={false} gradient={true} className="text-center" id="about-content" />
        </div>
    );
}

export default AboutPage;
