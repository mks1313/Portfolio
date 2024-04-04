import { useTranslation } from "react-i18next";

const StudiesPage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-black flex justify-center">{t('studies.title')}</h1>
            <p>{t('studies.description')}</p>
            <img src={t('studies.image')} alt="Foto de perfil" className="w-90 h-60  mb-80 mx-auto mt-8" />
        </div>
    )
}
export default StudiesPage;



