import { useTranslation } from "react-i18next";

const StudiesPage = () => {
    const { t } = useTranslation();
    const imgCert = 'https://res.cloudinary.com/dnwyfbj7m/image/upload/v1712145962/project-3/ckdkulxvvihsq1i9h6dx.png';
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4 text-black flex justify-center">{t('studies.title')}</h1>
            <p>{t('studies.description')}</p>
            <img src={imgCert} alt="Foto de perfil" className="w-90 h-60  mb-80 mx-auto mt-8" />
        </div>
    )
}
export default StudiesPage;