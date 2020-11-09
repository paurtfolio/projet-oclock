import React from 'react';
import { NavLink } from 'react-router-dom';

import './menu.scss';

const Menu = () => (
  <div className="dashboard__menu">
    <ul className="dashboard__menu-list">
      <li className="dashboard__menu-item dashboard__menu-item-active">
        <NavLink to="/tableaudebord" className="dashboard__menu-link">Tableau de bord</NavLink>
      </li>
      <li className="dashboard__menu-item">
        <NavLink to="/statistiques" className="dashboard__menu-link">Statistiques</NavLink>
      </li>
      <li className="dashboard__menu-item">
        <NavLink to="/parametres" className="dashboard__menu-link">Paramètres</NavLink>
      </li>
    </ul>
  </div>
);

// == Export
export default Menu;
