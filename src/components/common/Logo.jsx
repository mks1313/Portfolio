import { NavLink } from 'react-router-dom';
import matrix from "../../assets/icons/matrix.svg";

const Logo = ({ handlePageClick }) => (
  <NavLink
    to="/"
    onClick={handlePageClick}
    className="group relative block"
  >
    <div className="absolute -inset-4 bg-gradient-cyber rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>

    <div className="relative">
      <div className="absolute -inset-1 bg-gradient-cyber rounded-full blur-sm opacity-40 group-hover:opacity-75 animate-pulse-slow"></div>
      <img
        src={matrix}
        alt="Logo"
        className="relative w-32 h-32 lg:w-36 lg:h-36 mx-auto rounded-full border-4 border-primary-500 group-hover:border-accent-cyan transition-all duration-300 group-hover:scale-105 shadow-glow-md"
      />
    </div>

    <div className="mt-3 text-center">
      <span className="text-gradient font-bold text-lg tracking-wider">
        Portfolio
      </span>
    </div>
  </NavLink>
);

export default Logo;