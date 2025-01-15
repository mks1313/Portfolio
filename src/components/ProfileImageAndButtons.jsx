import Button from "./Button";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import stack from "../assets/icons/stack-overflow.svg";
import cv from "../assets/icons/cv.svg";

const ProfileImageAndButtons = ({ imageUrl, socialLinks }) => {
  return (
    <div className="flex flex-col items-center mx-2 mt-12">
      <img
        src={imageUrl}
        alt="Foto de perfil"
        className="w-auto h-80 mb-6 mt-6 rounded-lg border-4 border-gray-200 object-cover"
        style={{ maxWidth: "100%", height: "auto" }}
      />

      <div className="flex justify-center items-center space-x-6 mt-5 mb-20">
        <Button
          href={socialLinks.linkedin}
          imageSrc={linkedin}
          alt="LinkedIn"
          className="profile-button"
        />
        <Button
          href={socialLinks.github}
          imageSrc={github}
          alt="GitHub"
          className="profile-button"
        />
        <Button
          href={socialLinks.stackOverflow}
          imageSrc={stack}
          alt="Stack Overflow"
          className="profile-button"
        />
        <Button
          href={socialLinks.cv}
          imageSrc={cv}
          alt="Descargar CV"
          className="profile-button"
          download
        />
      </div>
    </div>
  );
};

export default ProfileImageAndButtons;