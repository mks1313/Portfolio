import Button from "@components/common/Button";
import { useTranslation } from "react-i18next";
import cv from "../../assets/icons/cv.svg";
import github from "../../assets/icons/github.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import stack from "../../assets/icons/stack-overflow.svg";

const SocialLinks = ({ socialLinks }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-gradient mb-4 text-center">
        {t("home.connectWithMe")}
      </h3>
      <div className="grid grid-cols-4 gap-3">
        <Button
          href={socialLinks.linkedin}
          imageSrc={linkedin}
          alt="LinkedIn"
          className="glass hover-lift p-3 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
        />
        <Button
          href={socialLinks.github}
          imageSrc={github}
          alt="GitHub"
          className="glass hover-lift p-3 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
        />
        <Button
          href={socialLinks.stackOverflow}
          imageSrc={stack}
          alt="Stack Overflow"
          className="glass hover-lift p-3 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
        />
        <Button
          href={socialLinks.cv}
          imageSrc={cv}
          alt="Descargar CV"
          className="glass hover-lift p-3 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all"
          download
        />
      </div>
    </div>
  );
};

export default SocialLinks;