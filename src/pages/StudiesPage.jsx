import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";

const StudiesPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Letters value={t('studies.title')} size="xl" underline={false} gradient={true} className="text-black text-center mb-2" id="title" />
            <img src={t('studies.image')} alt="Foto de perfil" className="w-90 h-60 mb-8 mx-auto mt-4" />
            <Letters value={t('studies.description')} size="l" underline={false} gradient={true} className="my-custom-class text-center" id="description" />
        </div>
    )
}
export default StudiesPage;





