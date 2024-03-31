import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Navbar</h1>
      <ul className="nav-links">
        <li><a href="#">Enlace 1</a></li>
        <li><a href="#">Enlace 2</a></li>
        <li><a href="#">Enlace 3</a></li>
        {/* Agrega más enlaces según sea necesario */}
      </ul>
    </div>
  );
}

export default Navbar;
