import { NavLink } from 'react-router-dom';
import matrix from "../assets/icons/matrix.svg";

const Logo = ({ handlePageClick }) => (
  <NavLink to="/" onClick={handlePageClick}>
    <img src={matrix} alt="Logo" className="w-32 h-auto mt-10 mb-4 mx-auto rounded-full" />
  </NavLink>
);

export default Logo;