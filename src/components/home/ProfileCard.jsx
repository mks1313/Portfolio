import { useTranslation } from "react-i18next";
import ContactInfo from "../ContactInfo";
import SocialLinks from "../SocialLinks";

const ProfileCard = ({ imageUrl, socialLinks }) => {
  const { t } = useTranslation();

  return (
    <div className="lg:col-span-4 space-y-6 animate-fadeInUp">
      <div className="card-modern p-6 hover-lift">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-cyber rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
          <img
            src={imageUrl}
            alt="Foto de perfil"
            className="relative w-full aspect-square rounded-2xl object-cover border-2 border-white/20 shadow-2xl"
          />
        </div>
      </div>

      <div className="card-modern p-6 hover-lift">
        <h3 className="text-lg font-bold mb-4 text-cyan-400">{t('home.sections.coreSkills')}</h3>
        <div className="flex flex-wrap gap-2">
          {['React', 'Node.js', 'C/C++', 'Docker', 'Linux', 'Git'].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-gray-800/50 border border-cyan-500/20 rounded-full text-sm text-gray-300">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="card-modern p-6 hover-lift">
        <ContactInfo />
      </div>

      <div className="card-modern p-6 hover-lift">
        <SocialLinks socialLinks={socialLinks} />
      </div>
    </div>
  );
};

export default ProfileCard;
