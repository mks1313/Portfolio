import { useTranslation } from "react-i18next";
import Letters from "../components/Letters";

const ExperiencePage = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Letters value={t('experience.title')} size="xl" underline={false} gradient={true} className="text-black text-center mb-4" id="title" />
            <Letters value={t('experience.description')} size="l" underline={false} gradient={true} className="text-center" id="description" />
        </div>
    )
}
export default ExperiencePage;
