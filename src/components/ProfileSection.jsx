const ProfileSection = ({ title, content }) => (
  <div className="card-modern p-5 sm:p-6 xl:p-8 hover-lift group">
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="flex-shrink-0">
        <div className="w-2 h-2 xl:w-3 xl:h-3 bg-gradient-cyber rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl xl:text-2xl font-bold text-gradient mb-2 sm:mb-3">
          {title}
        </h3>
        {content && (
          <p className="text-sm sm:text-base xl:text-lg text-gray-300 leading-relaxed">
            {content}
          </p>
        )}
      </div>
    </div>
  </div>
);

export default ProfileSection;
