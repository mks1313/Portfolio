import Letters from "../components/Letters";

const ExperienceItem = ({ title, date, description, delay }) => (
  <div className={`relative z-20 px-4 lg:pl-80 mt-6 mb-8 animate-fadeIn delay-${delay}`}>
    <div className="flex items-center justify-center lg:justify-center">
      <Letters value={title} size="xl" underline={false} gradient={true} className="text-white mb-2" id="title" />
    </div>
    <div className="flex items-center justify-center lg:justify-center">
      <Letters value={date} size="s" underline={false} gradient={true} className="text-white mb-2" id="date" />
    </div>
    <div className="flex items-center justify-center lg:justify-center">
      <Letters value={description} size="l" underline={false} gradient={true} className="text-white animate-slideIn" id="description" />
    </div>
  </div>
);

export default ExperienceItem;
