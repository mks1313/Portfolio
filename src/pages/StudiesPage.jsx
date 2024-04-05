import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";

const StudiesPage = () => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col md:flex-row justify-between bg-black text-gray-300 lg:pl-8">
            <div className="px-4 lg:pl-80 bg-black mt-6">
                <Letters value={t('studies.title')} size="xl" underline={false} gradient={true} className="text-center text-white mb-2" id="title" />
                <img src={t('studies.image')} alt="Foto de perfil" className="w-90 h-60 mb-8 mx-auto mt-4" />
                <Letters value={t('studies.description')} size="l" underline={false} gradient={true} className="text-center text-white" id="description" />
            </div>
        </div>
    )
}

export default StudiesPage;





