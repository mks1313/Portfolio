import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";

const StudiesPage = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col md:flex-col justify-between bg-black text-gray-300 lg:pl-8">
            <div className="px-4 lg:pl-80 bg-black mt-6 mb-8 ">
                <Letters value={t('studies.title')} size="xl" underline={false} gradient={true} className="text-center text-white mb-2" id="title" />
                <Letters value={t('studies.date')} size="s" underline={false} gradient={true} className="text-center text-white mb-2" id="date" />
                <img src={t('studies.image')} alt="Foto de perfil" className="w-90 h-60 mb-8 mx-auto mt-4" />
                <Letters value={t('studies.description')} size="l" underline={false} gradient={true} className="text-center text-white" id="description" />
            </div>
            <div className="w-full mx-4">
        <hr className="bg-gray-100 h-px mt-4 mb-8" />
    </div>
            <div className="px-4 lg:pl-80 bg-black mt-6 mb-8 ">
                <Letters value={t('studies.title')} size="xl" underline={false} gradient={true} className="text-center text-white mb-2" id="title" />
                <Letters value={t('studies.date')} size="s" underline={false} gradient={true} className="text-center text-white mb-2" id="date" />
                <img src={t('studies.image')} alt="Foto de perfil" className="w-90 h-60 mb-8 mx-auto mt-4" />
                <Letters value={t('studies.description')} size="l" underline={false} gradient={true} className="text-center text-white" id="description" />
            </div>
            <hr className="md:hidden bg-gray-100 w-full border-0 h-px" />
        </div>
    )
}

export default StudiesPage;






