// src/components/Navbar.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logoImage from '../assets/logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/* Public assets are served from the root */}
        <img src={logoImage} alt="Naturhistorisk Museum Aarhus" />
      </div>
      <ul className="navbar__links">
        <li>
          <Link to="/" className="navbar__link">
            About The Museum
          </Link>
        </li>
        <li>
          <NavLink
            to="/exhibitions"
            className={({ isActive }) =>
              isActive
                ? 'navbar__link navbar__link--active'
                : 'navbar__link'
            }
          >
            Exhibitions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tickets"
            className={({ isActive }) =>
              isActive
                ? 'navbar__link navbar__link--active'
                : 'navbar__link'
            }
          >
            Tickets
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
