import Logo from '@components/common/Logo';
import LanguageSelector from '@components/i18n/LanguageSelector';
import { useState } from 'react';
import MenuButton from './MenuButton';
import NavLinkItem from './NavLinkItem';

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
          fixed top-0 left-0 z-40 h-full transition-all duration-300
          backdrop-blur-2xl bg-gradient-to-b from-dark-card/95 via-dark-card/90 to-dark-card/95
          border-r border-white/10
          flex flex-col justify-between items-center
          shadow-2xl shadow-primary-500/10
          overflow-y-auto
        `}
        style={{ width: 'var(--navbar-width)' }}
      >
        <div className="hidden lg:block show-on-tall mt-6 xl:mt-8">
          <Logo handlePageClick={handlePageClick} />
        </div>

        <nav className="mt-8 lg:mt-16 xl:mt-20 flex-1 flex flex-col justify-center w-full px-4 xl:px-6">
          <ul className="flex flex-col items-center space-y-3 w-full">
            <NavLinkItem
              to="/"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              label="navbar.home"
              handlePageClick={handlePageClick}
            />
            <NavLinkItem
              to="/about"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              label="navbar.about"
              handlePageClick={handlePageClick}
            />
            <NavLinkItem
              to="/studies"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              label="navbar.studies"
              handlePageClick={handlePageClick}
            />
            <NavLinkItem
              to="/experience"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              label="navbar.experience"
              handlePageClick={handlePageClick}
            />
            <NavLinkItem
              to="/projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              label="navbar.projects"
              handlePageClick={handlePageClick}
            />
          </ul>
        </nav>

        <div className="mt-8 mb-6 xl:mb-8">
          <LanguageSelector />
        </div>
        <div className="mb-6 xl:mb-8 text-center px-4">
          <p className="text-xs xl:text-sm text-gray-400">
            Created by <span className="text-gradient font-semibold">Maksim</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;