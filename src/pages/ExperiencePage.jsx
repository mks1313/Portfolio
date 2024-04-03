import { useTranslation } from "react-i18next";

const ExperiencePage = () => {
    const { t } = useTranslation();
return (
        <div>
           <h1 className="text-2xl font-bold mb-4 text-black flex justify-center">{t('experience.title')}</h1>
           <p>{t('experience.description')}</p>
        </div>
    )
}
export default ExperiencePage;