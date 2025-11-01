import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MenuButton = ({ isOpen, toggleNavbar }) => (
  <button
    onClick={toggleNavbar}
    className={`
      fixed left-4 top-4 z-50 lg:hidden
      p-3 text-white
      glass-strong rounded-xl
      hover:bg-white/20 focus:outline-none
      shadow-glow-sm hover:shadow-glow-md
      transition-all duration-300
      ${isOpen ? 'rotate-90' : 'rotate-0'}
    `}
    aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
  >
    <FontAwesomeIcon
      icon={isOpen ? faTimes : faBars}
      className="text-xl"
    />
  </button>
);

export default MenuButton;