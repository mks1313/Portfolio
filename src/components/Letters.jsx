const Letters = ({
  value,
  size,
  underline = false,
  gradient = false,
  className = "",
  id,
}) => {
  let fontSize = "";

  switch (size) {
    case "xl":
      fontSize =
        "xl:text-[36px] lg:text-[32px] md:text-[28px] text-[24px] font-bold";
      break;
    case "l":
      fontSize =
        "xl:text-[28px] lg:text-[24px] md:text-[20px] text-[16px] font-medium";
      break;
    case "m":
      fontSize = "xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px]";
      break;
    case "s":
      fontSize = "xl:text-[12px] lg:text-[10px] md:text-[9px] text-[8px]";
      break;
    default:
      fontSize = "";
  }

  const gradientClass = gradient ? "silver-gradient" : "text-[#ECECEC]";

  return (
    <p
      id={id}
      className={`
            ${gradientClass}
            ${underline ? "underline" : ""}
            ${fontSize}
            ${className}
        `}
    >
      {value}
    </p>
  );
};

export default Letters;
