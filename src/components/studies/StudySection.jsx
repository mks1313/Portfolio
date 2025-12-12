const StudySection = ({
  title,
  date,
  description,
  subdescription,
  image,
  altText = "Imagen",
  index = 0
}) => {
  const getIcon = () => {
    if (title.includes("42") || title.includes("Barcelona")) return "🚀";
    if (title.includes("Full Stack") || title.includes("MERN")) return "💻";
    if (title.includes("Python")) return "🐍";
    if (title.includes("JavaScript")) return "⚡";
    if (title.includes("SQL") || title.includes("Database")) return "🗄️";
    if (title.includes("University") || title.includes("Universidad")) return "🎓";
    return "📚";
  };

  const getColors = () => {
    const schemes = [
      { accent: 'cyan', border: 'border-cyan-500/30', text: 'text-cyan-400', bg: 'bg-cyan-500/5', glow: 'shadow-cyan-500/20' },
      { accent: 'purple', border: 'border-purple-500/30', text: 'text-purple-400', bg: 'bg-purple-500/5', glow: 'shadow-purple-500/20' },
      { accent: 'emerald', border: 'border-emerald-500/30', text: 'text-emerald-400', bg: 'bg-emerald-500/5', glow: 'shadow-emerald-500/20' },
      { accent: 'pink', border: 'border-pink-500/30', text: 'text-pink-400', bg: 'bg-pink-500/5', glow: 'shadow-pink-500/20' },
    ];
    return schemes[index % 4];
  };

  const colors = getColors();

  return (
    <div className="group">
      <div className={`card-modern h-full flex flex-col border-l-4 ${colors.border} hover:border-${colors.accent}-500/60 transition-all duration-300 hover:shadow-xl ${colors.glow}`}>

        <div className={`p-6 border-b border-white/10 ${colors.bg}`}>
          <div className="flex items-start justify-between gap-4 mb-4">
            <span className="text-5xl group-hover:scale-110 transition-transform duration-300">{getIcon()}</span>
            <span className={`${colors.text} text-xs font-bold px-3 py-1.5 ${colors.bg} rounded-full border ${colors.border}`}>
              {date}
            </span>
          </div>
          <h3 className="font-bold text-white text-2xl leading-tight group-hover:text-gradient transition-all duration-300">
            {title}
          </h3>
        </div>

        {image && (
          <div className="p-6 border-b border-white/10">
            <div className={`rounded-xl overflow-hidden border-2 ${colors.border} bg-white/5 group-hover:border-${colors.accent}-500/50 transition-all duration-300`}>
              <img
                src={image}
                alt={altText}
                loading="lazy"
                className="w-full h-56 object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        )}

        <div className="p-6 flex-1 flex flex-col space-y-4">
          <p className="text-gray-300 leading-relaxed text-base">
            {description}
          </p>

          {subdescription && (
            <div className={`${colors.bg} rounded-lg p-4 border-l-3 ${colors.border}`}>
              <p className={`${colors.text} text-sm leading-relaxed`}>
                💡 {subdescription}
              </p>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            <div className={`h-1 flex-1 rounded-full bg-gradient-to-r from-${colors.accent}-500/30 to-transparent`}></div>
            <div className={`w-2 h-2 rounded-full bg-${colors.accent}-500`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudySection;