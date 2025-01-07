import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const MenuButton = ({ isOpen, toggleNavbar }) => (
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
);

export default MenuButton;