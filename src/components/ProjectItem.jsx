import github from "../assets/icons/github.svg";
import Button from "./Button";

const ProjectItem = ({ title, date, image, description, clientUrl, serverUrl, liveUrl }) => {
  const isSingleRepo = clientUrl === serverUrl && serverUrl === liveUrl;

  return (
    <div className="card-modern overflow-hidden group h-full flex flex-col">
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

        <div className="absolute top-4 right-4 glass rounded-lg px-3 py-1 text-sm font-medium text-accent-cyan">
          {date}
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold text-gradient mb-3">
          {title}
        </h3>

        <p className="text-gray-300 leading-relaxed mb-6 flex-1">
          {description}
        </p>

        <div className="flex gap-3 justify-center">
          {isSingleRepo ? (
            <Button
              href={clientUrl}
              imageSrc={github}
              alt="GitHub Repository"
              className="glass hover-lift px-6 py-2 rounded-lg flex items-center gap-2 text-sm font-medium text-white hover:bg-white/10 transition-all"
            >
              <span>GitHub</span>
            </Button>
          ) : (
            <>
              <Button
                href={clientUrl}
                imageSrc={github}
                alt="GitHub Client"
                className="glass hover-lift px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium text-white hover:bg-white/10 transition-all"
              >
                <span>Client</span>
              </Button>

              <Button
                href={serverUrl}
                imageSrc={github}
                alt="GitHub Server"
                className="glass hover-lift px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium text-white hover:bg-white/10 transition-all"
              >
                <span>Server</span>
              </Button>

              <Button
                href={liveUrl}
                text="🌐 Visit"
                className="bg-gradient-cyber hover-lift px-6 py-2 rounded-lg text-sm font-semibold text-white shadow-glow-sm hover:shadow-glow-md transition-all"
              />
            </>
          )}
        </div>
      </div>

      <div className="h-1 bg-gradient-cyber transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    </div>
  );
};

export default ProjectItem;