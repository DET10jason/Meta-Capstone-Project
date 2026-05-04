import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="/#about">About</a></li> {/* Use anchor for section scroll */}
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
export default Nav;