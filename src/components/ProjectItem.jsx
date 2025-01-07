import Button from "./Button";
import Letters from "./Letters";
import github from "../assets/icons/github.svg";
import '../styles/ProjectItem.css';

const ProjectItem = ({ title, date, image, description, clientUrl, serverUrl, liveUrl }) => {
  return (
    <div className="project-item-container">
      <div className="project-button-container">
        <div className="project-button-column">
          <Button
            href={clientUrl}
            imageSrc={github}
            alt="GitHub-client"
            className="hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300"
          />
          <span className="text-white mt-2">Client</span>
        </div>
        <div className="project-button-column">
          <Button
            href={serverUrl}
            imageSrc={github}
            alt="GitHub-server"
            className="hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300"
          />
          <span className="text-white mt-2">Server</span>
        </div>
        <div className="project-button-column">
          <Button
            href={liveUrl}
            text="Visit"
            className="hover:scale-105 hover:translate-y-[-2px] transition-transform duration-300"
          />
          <span className="text-white mt-2">Visit</span>
        </div>
      </div>
      <Letters
        value={title}
        size="xl"
        underline={false}
        gradient={true}
        className="text-center text-white mb-2 animate-slideInFromTop"
        id="title"
      />
      <Letters
        value={date}
        size="s"
        underline={false}
        gradient={true}
        className="text-center text-white mb-2 animate-slideInFromTop"
        id="date"
      />
      <img
        src={image}
        alt="Imagen de web"
        className="mx-auto project-image animate-slideInFromTop"
      />
      <Letters
        value={description}
        size="l"
        underline={false}
        gradient={true}
        className="project-description text-center text-white animate-slideInFromTop"
        id="description"
      />
    </div>
  );
};

export default ProjectItem;