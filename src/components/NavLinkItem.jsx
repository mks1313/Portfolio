import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Letters from '../components/Letters';

const NavLinkItem = ({ to, selectedPage, setSelectedPage, label, handlePageClick }) => {
  const { t } = useTranslation();

  return (
    <li className='transform transition-transform duration-300 hover:scale-105'>
      <NavLink
        to={to}
        onClick={() => {
          setSelectedPage(to);
          handlePageClick(); 
        }}
        className={`font-bold ${selectedPage === to ? 'text-gray-500' : 'text-teal-400'} hover:text-teal-600`} 
      >
        <Letters value={t(label)} size="m" underline={false} gradient={true} />
      </NavLink>
    </li>
  );
};

export default NavLinkItem;