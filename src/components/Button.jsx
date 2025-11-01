const Button = ({ href, imageSrc, alt, text, className, ariaLabel, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || alt || text}
      className={`inline-flex items-center justify-center gap-2 transition-all duration-300 ${className}`}
    >
      {imageSrc && <img src={imageSrc} alt={alt} className="w-5 h-5" />}
      {text && <span>{text}</span>}
      {children}
    </a>
  );
};

export default Button;