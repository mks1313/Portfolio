import Button from "../components/Button";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import stack from "../assets/icons/stack-overflow.svg";
import cv from "../assets/icons/cv.svg";

const SocialLinks = ({ socialLinks }) => {
  return (
    <div className="flex justify-center items-center space-x-6 mt-5 mb-20 animate-bounceLimited">
      <Button
        href={socialLinks.linkedin}
        imageSrc={linkedin}
        alt="LinkedIn"
        className="transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px]"
      />
      <Button
        href={socialLinks.github}
        imageSrc={github}
        alt="GitHub"
        className="transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px]"
      />
      <Button
        href={socialLinks.stackOverflow}
        imageSrc={stack}
        alt="Stack Overflow"
        className="transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px]"
      />
      <Button
        href={socialLinks.cv}
        imageSrc={cv}
        alt="Descargar CV"
        className="transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px]"
        download
      />
    </div>
  );
};

export default SocialLinks;