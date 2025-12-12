import Letters from "@components/common/Letters";

const ContactItem = ({ iconSrc, text, link }) => {
  return (
    <li className="flex items-center text-lg mb-4 animate-slideInRight">
      <img src={iconSrc} alt="Icon" className="mr-4" />
      {link ? (
        <a href={link} className="flex items-center">
          <Letters value={text} size="m" />
        </a>
      ) : (
        <Letters value={text} size="m" />
      )}
    </li>
  );
};

export default ContactItem;