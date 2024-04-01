import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin.svg";
import stack from "../assets/icons/stack-overflow..svg";
import flag from "../assets/icons/flag.svg";
import phone from "../assets/icons/phone.svg";
import envelope from "../assets/icons/envelope.svg";
import map from "../assets/icons/map.svg";

const HomePage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="md:w-2/3 px-4">
        <h1 className="text-2xl font-bold mb-4">Experiencia</h1>
        <p className="text-lg"> experiencia.</p>
      </div>

      <div className="md:w-1/3 px-4 mt-4 md:mt-0 bg-blue-600 text-white">
        <div className="flex">
          <img src={github} alt="GitHub" className="w-8 h-8 mr-6" />
          <img src={linkedin} alt="LinkedIn" className="w-8 h-8 mr-6" />
          <img src={stack} alt="Stack Overflow" className="w-8 h-8 mr-6" />
        </div>
        <h2 className="text-xl font-bold mb-2">Contacto</h2>
        <ul>
          <li className="flex items-center text-gray-500 text-lg">
            <img src={map} alt="Icon" />
            Ciudad Ejemplo
          </li>
          <li className="flex items-center text-gray-500 text-lg">
            <img src={flag} alt="Icon" />
            Español, Ingles
          </li>
          <li>
            <a
              href="mailto:maksyara13@gmail.com"
              className="flex items-center text-gray-500 text-lg"
            >
              <img src={envelope} alt="Icon" />
              maksyara13@gmail.com
            </a>
          </li>
          <li className="flex items-center text-gray-500 text-lg">
            <img src={phone} alt="Icon" />
            +1234567890
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
