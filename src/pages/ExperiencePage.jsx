import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";

const ExperiencePage = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col md:flex-col justify-between bg-black text-gray-300 lg:pl-8">
            <div className="px-4 lg:pl-80 bg-black mt-6 mb-8 ">
                <Letters value={t('experience.title1')} size="xl" underline={false} gradient={true} className="text-center text-white mb-2" id="title" />
                <Letters value={t('experience.date1')} size="s" underline={false} gradient={true} className="text-center text-white mb-2" id="date" />
                <Letters value={t('experience.description1')} size="l" underline={false} gradient={true} className="text-center text-white" id="description" />
            </div>
            <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
    </div>
            <div className="px-4 lg:pl-80 bg-black mt-6 mb-8 ">
                <Letters value={t('experience.title2')} size="xl" underline={false} gradient={true} className="text-center text-white mb-2" id="title" />
                <Letters value={t('experience.date2')} size="s" underline={false} gradient={true} className="text-center text-white mb-2" id="date" />
                <Letters value={t('experience.description2')} size="l" underline={false} gradient={true} className="text-center text-white" id="description" />
            </div>
            <hr className="bg-gray-100 h-px mt-4 mb-8" />
            <div className="px-4 lg:pl-80 bg-black mt-6 mb-8 ">
                <Letters value={t('experience.title3')} size="xl" underline={false} gradient={true} className="text-center text-white mb-2" id="title" />
                <Letters value={t('experience.date3')} size="s" underline={false} gradient={true} className="text-center text-white mb-2" id="date" />
                <Letters value={t('experience.description3')} size="l" underline={false} gradient={true} className="text-center text-white" id="description" />
            </div>
            <hr className="bg-gray-100 h-px mt-4 mb-8" />
        </div>
        
    )
}

export default ExperiencePage;

