import Letters from "../components/Letters";

const StudySection = ({
  title,
  date,
  description,
  subdescription,
  image,
  altText,
  imageClass = "",
  descriptionClass = "",
  animation = "animate__fadeInUp"  
}) => {
  return (
    <div className={`relative z-20 px-4 lg:pl-80 mt-6 mb-8 ${animation}`}>
      <Letters
        value={title}
        size="xl"
        gradient={true}
        className="text-center lg:text-left text-white mb-2 animate__animated animate__bounceIn animate__delay-1s"
        id="title"
      />
      <Letters
        value={date}
        size="s"
        gradient={true}
        className="text-center lg:text-left text-white mb-2 animate__animated animate__fadeInUp animate__delay-1s"
        id="date"
      />
      
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-x-6">
        {image && (
          <div className="flex-1 animate__animated animate__fadeIn animate__delay-0.5s animate__zoomIn">
            <img
              src={image}
              alt={altText || "Imagen"} 
              className={`w-full sm:w-3/4 lg:w-96 h-auto mb-8 mx-auto mt-4 rounded-lg border-[6px] border-gray-200 transition-transform transform hover:scale-105 hover:shadow-xl ${imageClass}`}
            />
          </div>
        )}
        <div className="flex-1 animate__animated animate__fadeInRight animate__delay-1s">
          <Letters
            value={description}
            size="m"
            gradient={true}
            className={`text-center lg:text-left text-white ${descriptionClass}`}
            id="description"
          />
          {subdescription && (
            <Letters
              value={subdescription}
              size="m"
              gradient={true}
              className="text-center lg:text-left text-white"
              id="subdescription"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default StudySection;