// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// == Import styles
import './footer.scss';

// == Composant
const Footer = () => (
  <footer className="footer">
    <NavLink to="/mentionslegales">
      <p>Mentions Légales</p>
    </NavLink>
  </footer>
);

// == Export
export default Footer;
