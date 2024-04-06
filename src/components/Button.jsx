const Button = ({ href, imageSrc, alt }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <button type="button" className="xl:w-[60px] xl:h-[60px] w-[50px] h-[50px] silver-gradient flex justify-center items-center border-2 border-gray-200 rounded-lg">
                <img src={imageSrc} alt={alt} className="w-6 h-6" />
            </button>
        </a>
    );
};

export default Button;
