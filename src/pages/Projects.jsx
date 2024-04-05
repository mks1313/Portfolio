import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";

const Projects = () => {
const { t } = useTranslation();
return (
    <div className="flex flex-col md:flex-col justify-between bg-black text-gray-300 lg:pl-8">
            <div className="px-4 lg:pl-80 bg-black mt-6 mb-8 ">
                <Letters value={t('projects.title')} size="xl" underline={false} gradient={true} className="text-center text-white mb-2" id="title" />
                <Letters value={t('projects.date')} size="s" underline={false} gradient={true} className="text-center text-white mb-2" id="date" />
                <img src={t('projects.image')} alt="Imagen de web"className="w-90 h-60 mb-8 mx-auto mt-4 rounded-lg border-[6px] border-gray-200"/>

                <Letters value={t('projects.description')} size="l" underline={false} gradient={true} className="text-center text-white" id="description" />
            </div>
            <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
    </div>
            <div className="px-4 lg:pl-80 bg-black mt-6 mb-8 ">
                <Letters value={t('projects.title1')} size="xl" underline={false} gradient={true} className="text-center text-white mb-2" id="title1" />
                <Letters value={t('projects.date1')} size="s" underline={false} gradient={true} className="text-center text-white mb-2" id="date1" />
                <img src={t('projects.image1')} alt="Imagen de web" className="w-90 h-60 mb-8 mx-auto mt-4" />
                <Letters value={t('projects.description1')} size="l" underline={false} gradient={true} className="text-center text-white" id="description1" />
            </div>
            <hr className="md:hidden bg-gray-100 w-full border-0 h-px" />
    </div>
)

}

export default Projects;