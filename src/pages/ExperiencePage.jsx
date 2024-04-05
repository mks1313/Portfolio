import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";

const ExperiencePage = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col md:flex-row justify-between bg-black text-gray-300 lg:pl-8">
            <div className="px-4 lg:pl-80 bg-black mt-6">
                <Letters value={t('experience.title')} size="xl" underline={false} gradient={true} className="text-center text-white mb-4" id="title" />
                <Letters value={t('experience.description')} size="l" underline={false} gradient={true} className="text-center text-white" id="description" />
            </div>
        </div>
    )
}

export default ExperiencePage;

