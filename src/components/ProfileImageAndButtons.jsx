import Button from "./Button";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import stack from "../assets/icons/stack-overflow.svg";

const ProfileImageAndButtons = ({ imageUrl, linkedinURL, githubURL, stackOverflowURL }) => {
  return (
    <div className="flex flex-col items-center mx-2 mt-12">
      {/* Imagen de perfil */}
      <img
        src={imageUrl}
        alt="Foto de perfil"
        className="w-auto h-80 mb-6 mt-6 rounded-lg border-4 border-gray-200 object-cover"
        style={{ maxWidth: "100%", height: "auto" }}
      />

      {/* Contenedor de botones */}
      <div className="flex justify-center items-center space-x-6 mt-5 mb-20">
        <Button
          href={linkedinURL}
          imageSrc={linkedin}
          alt="LinkedIn"
          className="profile-button"
        />
        <Button
          href={githubURL}
          imageSrc={github}
          alt="GitHub"
          className="profile-button"
        />
        <Button
          href={stackOverflowURL}
          imageSrc={stack}
          alt="Stack Overflow"
          className="profile-button"
        />
      </div>
    </div>
  );
};

export default ProfileImageAndButtons;