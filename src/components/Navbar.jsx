import { useState } from 'react';
import NavLinkItem from './NavLinkItem';
import Logo from './Logo';
import MenuButton from './MenuButton';
import LanguageSelector from './LenguageSelector';

const Navbar = () => {
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
      <MenuButton isOpen={isOpen} toggleNavbar={toggleNavbar} />

      <div
        className={`
          ${isOpen ? '' : 'hidden'} lg:block
          fixed top-0 left-0 z-40 w-64 h-full transition-transform
          bg-gradient-to-r from-[#0a0a0a] via-[#003300] to-[#008000]
          flex flex-col justify-between items-center
        `}
      >
        {/* Mostrar logo solo en pantallas con altura mayor a 500px */}
        <div className="hidden lg:block show-on-tall">
          <Logo handlePageClick={handlePageClick} />
        </div>

        <div className="mt-10 lg:mt-20 flex-1 flex flex-col justify-center">
          <ul className="flex flex-col items-center space-y-4">
            <NavLinkItem to="/" selectedPage={selectedPage} setSelectedPage={setSelectedPage} label="navbar.home" handlePageClick={handlePageClick} />
            <NavLinkItem to="/about" selectedPage={selectedPage} setSelectedPage={setSelectedPage} label="navbar.about" handlePageClick={handlePageClick} />
            <NavLinkItem to="/studies" selectedPage={selectedPage} setSelectedPage={setSelectedPage} label="navbar.studies" handlePageClick={handlePageClick} />
            <NavLinkItem to="/experience" selectedPage={selectedPage} setSelectedPage={setSelectedPage} label="navbar.experience" handlePageClick={handlePageClick} />
            <NavLinkItem to="/projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} label="navbar.projects" handlePageClick={handlePageClick} />
          </ul>
        </div>

        <LanguageSelector />

        <p className="text-center text-sm text-gray-200 mt-10 lg:mt-20 mb-10 lg:mb-20">Created by: Maksim</p>
      </div>
    </>
  );
};

export default Navbar;