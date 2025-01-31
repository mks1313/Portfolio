import Letters from "../components/Letters";

const ExperienceItem = ({ title, date, description, category, skills, delay }) => (
  <div className={`relative z-20 px-4 lg:pl-80 mt-6 mb-8 animate-fadeIn delay-${delay}`}>
    <div className="flex items-center justify-center lg:justify-center">
      <Letters value={title} size="xl" underline={false} gradient={true} className="text-white mb-2" id="title" />
    </div>
    <div className="flex items-center justify-center lg:justify-center">
      <Letters value={date} size="s" underline={false} gradient={true} className="text-white mb-2" id="date" />
    </div>
    {category && (
      <div className="flex items-center justify-center lg:justify-center">
        <Letters value={category} size="m" underline={false} gradient={true} className="text-white mb-2" id="category" />
      </div>
    )}
    <div className="flex items-center justify-center lg:justify-center">
      <Letters value={description} size="l" underline={false} gradient={true} className="text-white animate-slideIn" id="description" />
    </div>
    {skills && skills.length > 0 && (
      <div className="flex flex-wrap justify-center lg:justify-start mt-4">
        {skills.map((skill, index) => (
          <div key={skill + index} className="text-white text-sm bg-gray-600 rounded-lg px-3 py-1 m-2">
            {skill}
          </div>
        ))}
      </div>
    )}
  </div>
);

export default ExperienceItem;