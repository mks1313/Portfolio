import '../styles/buttons.css'; 

const Button = ({ href, imageSrc, alt, text, className, ariaLabel }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={ariaLabel || alt || text}>
      <div
        className={`btn ${className}`}
      >
        {imageSrc ? (
          <img src={imageSrc} alt={alt} className="w-6 h-6" />
        ) : (
          <span>{text}</span>
        )}
      </div>
    </a>
  );
};

export default Button;