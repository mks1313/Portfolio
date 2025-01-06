import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Letters from '../components/Letters';
import LanguageSelector from './LenguageSelector';
import matrix from "../assets/icons/matrix.svg";

// TODO hacer más responsive, tamaño de enlaces, estilos
const Navbar = () => {
  const { t } = useTranslation();
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
          fixed top-0 left-0 z-40 w-64 h-full transition-transform
          bg-gradient-to-r from-[#0a0a0a] via-[#003300] to-[#008000]
          flex flex-col justify-between items-center
        `}
      >
        <img src={matrix} alt="Logo" className="w-32 h-auto mt-10 mb-4 mx-auto rounded-full" />
        <div className='mt-20'>
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <NavLink
                to="/"
                onClick={handlePageClick}
                onMouseDown={() => setSelectedPage('/')}
                className={`font-bold ${selectedPage === '/' ? 'text-gray-500' : 'text-teal-400'}`}
              >
                <Letters value={t('navbar.home')} size="m" underline={false} gradient={true} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={handlePageClick}
                onMouseDown={() => setSelectedPage('/about')}
                className={`font-bold ${selectedPage === '/about' ? 'text-gray-500' : 'text-teal-400'}`}
              >
                <Letters value={t('navbar.about')} size="m" underline={false} gradient={true} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/studies"
                onClick={handlePageClick}
                onMouseDown={() => setSelectedPage('/studies')}
                className={`font-bold ${selectedPage === '/studies' ? 'text-gray-500' : 'text-teal-400'}`}
              >
                <Letters value={t('navbar.studies')} size="m" underline={false} gradient={true} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/experience"
                onClick={handlePageClick}
                onMouseDown={() => setSelectedPage('/experience')}
                className={`font-bold ${selectedPage === '/experience' ? 'text-gray-500' : 'text-teal-400'}`}
              >
                <Letters value={t('navbar.experience')} size="m" underline={false} gradient={true} />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={handlePageClick}
                onMouseDown={() => setSelectedPage('/projects')}
                className={`font-bold ${selectedPage === '/projects' ? 'text-gray-500' : 'text-teal-400'}`}
              >
                <Letters value={t('navbar.projects')} size="m" underline={false} gradient={true} />
              </NavLink>
            </li>
          </ul>
        </div>
        <LanguageSelector />
        <p className="text-sm text-gray-200 mt-20 mb-20 text-center">Created by: Maksim</p>
      </div>
    </>
  );
};

export default Navbar;