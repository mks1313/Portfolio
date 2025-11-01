import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ to, setSelectedPage, label, handlePageClick }) => {
  const { t } = useTranslation();

  return (
    <li className='w-full'>
      <NavLink
        to={to}
        onClick={() => {
          setSelectedPage(to);
          handlePageClick();
        }}
        className={({ isActive }) => `
          block w-full px-4 xl:px-6 py-3 xl:py-4 rounded-lg text-center font-medium text-sm xl:text-base
          transition-all duration-300 ease-out
          ${isActive
            ? 'bg-gradient-cyber text-white shadow-glow-md scale-105'
            : 'text-gray-300 hover:bg-white/5 hover:text-white hover:translate-x-1'
          }
        `}
      >
        {t(label)}
      </NavLink>
    </li>
  );
};

export default NavLinkItem;