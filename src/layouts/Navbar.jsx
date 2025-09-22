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
        <a href="/#home" className="nav-logo">
          <img className="logo-icon" src="/logo.png" alt="logo" />
        </a>

        <h3 style={{color: 'white'}}>UDYYATT CREATIONS</h3>
        
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
            <a href="/#our-work" onClick={closeMenu}>Our Work</a>
          </li>
          <li>
            <a href="/our-designs" onClick={closeMenu}>Our Digital marketing</a>
          </li>
          <li>
            <a href="/#locations" onClick={closeMenu}>Locations</a>
          </li>
          <li>
            <a href="/#why-hire-us" onClick={closeMenu}>Why Hire Us?</a>
          </li>
          <li>
            <a href='/#home' style={{cursor: 'pointer'}} className="nav-cta" onClick={closeMenu}>
              Get A Quote
            </a>
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && <div className="menu-overlay active" onClick={closeMenu}></div>}
      </div>
    </nav>
  );
}
