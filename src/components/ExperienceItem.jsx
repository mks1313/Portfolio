const ExperienceItem = ({ title, date, description, category, skills }) => (
  <div className="relative pl-0 lg:pl-20">
    <div className="absolute left-6 top-6 hidden lg:block">
      <div className="w-5 h-5 bg-gradient-cyber rounded-full shadow-glow-md"></div>
    </div>
    <div className="card-modern p-6 hover-lift group">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gradient mb-2">
            {title}
          </h3>
          {category && (
            <span className="inline-block px-3 py-1 bg-gradient-emerald text-white text-sm rounded-full font-medium">
              {category}
            </span>
          )}
        </div>
        <div className="glass rounded-lg px-4 py-2 text-sm font-medium text-accent-cyan">
          📅 {date}
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed mb-4">
        {description}
      </p>
      {skills && skills.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <span
              key={skill + idx}
              className="skill-tag"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
      <div className="mt-4 h-0.5 w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-20 group-hover:opacity-40 transition-opacity"></div>
    </div>
  </div>
);

export default ExperienceItem;