import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Home, PlayCircle } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Trang chủ', icon: <Home size={18} /> },
    { path: '/theory', label: 'Học thuyết', icon: <BookOpen size={18} /> },
    { path: '/roleplay', label: 'Khảo nghiệm', icon: <PlayCircle size={18} /> },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" aria-label="MLN111 Studio">
          <span className="logo-mark">M</span>
          <span>MLN111 Studio</span>
        </Link>
        <ul className="navbar-menu">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                {link.icon}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
