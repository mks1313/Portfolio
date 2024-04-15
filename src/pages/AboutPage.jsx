import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <div className="bg-black text-white min-h-screen flex justify-center items-center">
            <div className="px-4 lg:pl-80 bg-black mt-6">
            <Letters value={t('about.about')} size="xl" underline={true} gradient={true} className="text-center text-white mb-2" id="about" />
                <Letters value={t('about.content')} size="l" underline={false} gradient={true} className="text-center" id="about-content" />
            </div>
        </div>
    );
}

export default AboutPage;

