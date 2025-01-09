import Button from "./Button";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import stack from "../assets/icons/stack-overflow.svg";

const ProfileImageAndButtons = ({ imageUrl, linkedinURL, githubURL, stackOverflowURL }) => {
  return (
    <div className="flex flex-col items-center ml-12 mt-12">
      {/* Imagen de perfil */}
      <img
        src={imageUrl}
        alt="Foto de perfil"
        className="w-auto h-80 mb-6 mt-6 rounded-lg border-4 border-gray-200"
      />

      {/* Contenedor de botones */}
      <div className="flex justify-center items-center space-x-6 mt-5 mb-20">
        <Button
          href={linkedinURL}
          imageSrc={linkedin}
          alt="LinkedIn"
          className="transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px]"
        />
        <Button
          href={githubURL}
          imageSrc={github}
          alt="GitHub"
          className="transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px]"
        />
        <Button
          href={stackOverflowURL}
          imageSrc={stack}
          alt="Stack Overflow"
          className="transform transition-transform duration-300 hover:scale-110 hover:translate-y-[-2px]"
        />
      </div>
    </div>
  );
};

export default ProfileImageAndButtons;