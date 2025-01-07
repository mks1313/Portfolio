import Button from "../components/Button";
import linkedin from "../assets/icons/linkedin.svg";
import github from "../assets/icons/github.svg";
import stack from "../assets/icons/stack-overflow.svg";

const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-6 mt-5 mb-20 animate-bounceLimited">
      <Button
        href={"https://www.linkedin.com/in/mgmarinov"}
        imageSrc={linkedin}
        alt="LinkedIn"
        className="transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px]"
      />
      <Button
        href={"https://github.com/mks1313"}
        imageSrc={github}
        alt="GitHub"
        className="transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px]"
      />
      <Button
        href={"https://stackoverflow.com/users/22835936/maksim-marinov"}
        imageSrc={stack}
        alt="Stack Overflow"
        className="transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px]"
      />
    </div>
  );
};

export default SocialLinks;
