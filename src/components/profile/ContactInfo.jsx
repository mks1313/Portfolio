import { useTranslation } from "react-i18next";
import envelope from "../../assets/icons/envelope.svg";
import flag from "../../assets/icons/flag.svg";
import map from "../../assets/icons/map.svg";
import phone from "../../assets/icons/phone.svg";

const ContactInfo = () => {
  const { t } = useTranslation();

  const contactItems = [
    { icon: map, label: t("home.location") },
    { icon: flag, label: t("home.languages") },
    { icon: envelope, label: t("home.gmail"), href: "mailto:mg.marinov@gmx.es" },
    { icon: phone, label: t("home.phone") },
  ];

  return (
    <div className="w-full">
      <h3 className="text-lg font-semibold text-gradient mb-4 text-center">
        {t("home.contactInfo")}
      </h3>
      <ul className="space-y-3">
        {contactItems.map((item, index) => (
          <li key={index} className="contact-item">
            {item.href ? (
              <a
                href={item.href}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
              >
                <img src={item.icon} alt="Icon" className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </a>
            ) : (
              <div className="flex items-center gap-3 text-gray-300 p-2">
                <img src={item.icon} alt="Icon" className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;