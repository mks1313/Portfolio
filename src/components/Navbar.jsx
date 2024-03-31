import { NavLink } from 'react-router-dom';
import logo from '../../public/favicon.png';

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white p-12">
      <img src={logo} alt="Logo" className="w-32 h-auto mb-4 rounded-full" /> 
      <ul className="flex flex-col items-start space-y-4">
        <li><NavLink to="/" className={({isActive}) => (isActive ? "font-bold text-aqua" : "")}>Casa</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => (isActive ? "font-bold text-aqua" : "")}>Acerca de mí</NavLink></li>
        <li><NavLink to="/experience" className={({isActive}) => (isActive ? "font-bold text-aqua" : "")}>Experiencia</NavLink></li>
        <li><NavLink to="/studies" className={({isActive}) => (isActive ? "font-bold text-aqua" : "")}>Estudios</NavLink></li>
      </ul>
    </div>
  );
}

export default Navbar;





