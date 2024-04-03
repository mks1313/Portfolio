import { useTranslation } from "react-i18next";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import stack from "../assets/icons/stack-overflow..svg";
import flag from "../assets/icons/flag.svg";
import phone from "../assets/icons/phone.svg";
import envelope from "../assets/icons/envelope.svg";
import map from "../assets/icons/map.svg";


const HomePage = () => {
    const { t } = useTranslation();
    const imageUrl = 'https://res.cloudinary.com/dnwyfbj7m/image/upload/v1712145110/project-3/yb1epe8w7tmtnvffy2zk.jpg';
    
  
    return (
      <div className="flex flex-col md:flex-row justify-between bg-grey text-white">
        <div className="md:w-2/3 px-4">
          <h1 className="text-2xl font-bold mb-4 text-black">{t('home.name')}</h1>
          <p className="text-lg text-black">{t('home.description')}</p>
        </div>
  
        <div className="md:w-1/5 px-4 mt-4 md:mt-0 bg-black text-white">
          <div className="flex">
            <img src={imageUrl} alt="Foto de perfil" className="w-50 h-50 rounded-full mb-4 mx-auto mt-8" />
          </div>
          <ul>
            <li className="flex items-center text-gray-500 text-lg">
              <img src={map} alt="Icon" className="mr-4" />
              {t('home.location')}
            </li>
            <li className="flex items-center text-gray-500 text-lg">
              <img src={flag} alt="Icon" className="mr-4" />
              {t('home.languages')}
            </li>
            <li>
              <a href="mailto:maksyara13@gmail.com" className="flex items-center text-gray-500 text-lg">
                <img src={envelope} alt="Icon" className="mr-4" />
                {t('home.gmail')}
              </a>
            </li>
            <li className="flex items-center text-gray-500 text-lg">
              <img src={phone} alt="Icon" className="mr-4" />
              {t('home.phone')}
            </li>
          </ul>
          <div className="flex item-center mt-5">
            <img src={github} alt="GitHub" className="w-8 h-8 mr-6" />
            <img src={linkedin} alt="LinkedIn" className="w-8 h-8 mr-6" />
            <img src={stack} alt="Stack Overflow" className="w-8 h-8 mr-6" />
          </div>
        </div>
      </div>
    );
  };
  
  export default HomePage;