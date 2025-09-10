import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img className="logo-icon" src="/1.png" alt="logo" />
        </div>
        
        {/* Hamburger Menu Button */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#work" onClick={closeMenu}>Our Work</a>
          </li>
          <li>
            <a href="#clients" onClick={closeMenu}>Our Clients</a>
          </li>
          <li>
            <a href="#locations" onClick={closeMenu}>Locations</a>
          </li>
          <li>
            <a href="#why-hire-us" onClick={closeMenu}>Why Hire Us?</a>
          </li>
          <li>
            <a href="#quote" className="nav-cta" onClick={closeMenu}>
              Get A Quote
            </a>
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      </div>
    </nav>
  );
}
