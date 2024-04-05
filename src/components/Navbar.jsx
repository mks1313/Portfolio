import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import flag from "../assets/icons/flag.svg";
import { NavLink } from 'react-router-dom';
import logo from '/favicon.png';
import { useTranslation } from 'react-i18next';
import Letters from '../components/Letters';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    setSelectedPage(null);
  };

  const handlePageClick = () => {
    if (isOpen) {
      setIsOpen(false);
      setSelectedPage(null);
    }
  };

  return (
    <>
      <button
        onClick={toggleNavbar}
        className={`
          fixed ${isOpen ? 'left-2 top-2' : 'left-5 top-5'} z-50 lg:hidden
          p-2 text-sm text-gray-400
          rounded-lg focus:outline-none
          ring-2 ring-gray-400 bg-[#2E2E2E]
        `}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </button>

      <div
        className={`
          ${isOpen ? '' : 'hidden'} lg:block
          fixed top-0 left-0 z-40 w-64 h-dvh transition-transform bg-[#2E2E2E]
          flex flex-col justify-between items-center
        `}
      >
        <img src={logo} alt="Logo" className="w-32 h-auto mt-10 mb-4 mx-auto rounded-full" />
        <div className='mt-20'>
        <ul className="flex flex-col items-center space-y-4 ">
          <li>
            <NavLink
              to="/"
              className={`font-bold text-${selectedPage === '/' ? 'silver' : 'aqua'}`}
              onClick={handlePageClick}
              onMouseDown={() => setSelectedPage('/')}
            >
              <Letters value={t('navbar.home')} size="m" underline={false} gradient={false} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={`font-bold text-${selectedPage === '/about' ? 'silver' : 'aqua'}`}
              onClick={handlePageClick}
              onMouseDown={() => setSelectedPage('/about')}
            >
              <Letters value={t('navbar.about')} size="m" underline={false} gradient={false} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              className={`font-bold text-${selectedPage === '/experience' ? 'silver' : 'aqua'}`}
              onClick={handlePageClick}
              onMouseDown={() => setSelectedPage('/experience')}
            >
              <Letters value={t('navbar.experience')} size="m" underline={false} gradient={false} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/studies"
              className={`font-bold text-${selectedPage === '/studies' ? 'silver' : 'aqua'}`}
              onClick={handlePageClick}
              onMouseDown={() => setSelectedPage('/studies')}
            >
              <Letters value={t('navbar.studies')} size="m" underline={false} gradient={false} />
            </NavLink>
          </li>
        </ul>
        </div>
        <div className="flex items-center mt-20">
        <img src={flag} alt="Icon" className="mr-4" />
          <select value={i18n.language} className="text-gray-400 border-none mt-1" onChange={(e) => i18n.changeLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Español</option>
          </select>
        </div>
        <p className="text-sm text-gray-400 mt-80">Created by: Maksim Georgiev Marinov</p>
      </div>
    </>
  );
};

export default Navbar;






