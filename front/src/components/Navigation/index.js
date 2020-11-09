// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import './navigation.scss';
import profile from 'src/assets/images/icone-nav-profile.svg';
import hamburger from 'src/assets/images/icone-nav-burger.svg';
import statistics from 'src/assets/images/icone-nav-stat.svg';
import Burger from 'src/components/Burger';

const getModal = (name, closeHandler) => {
  let Modal;
  if (name === 'burger') Modal = Burger;
  return <Modal onClick={() => closeHandler(null)} />;
};
// == Composant
const Navigation = ({ isLogged }) => {
  const [modal, setModal] = React.useState(null);
  console.log();
  return (
    <div className="navigation">
      <nav className="navigation--desktop">
        <ul className="navigation-list">
          <li><NavLink exact to="/" className="navigation-link" activeClassName="navigation-link--active">Accueil</NavLink></li>
          <li><NavLink to="/articles/alimentation" className="navigation-link" activeClassName="navigation-link--active">Alimentation</NavLink></li>
          <li><NavLink to="/articles/sport" className="navigation-link" activeClassName="navigation-link--active">Sport</NavLink></li>
          <li><NavLink to="/articles/bienetre" className="navigation-link" activeClassName="navigation-link--active">Bien-être</NavLink></li>

          { isLogged &&
          (<li><NavLink to="/tableaudebord" className="navigation-link" activeClassName="navigation-link--active">Tableau de bord</NavLink></li>)}
        </ul>
      </nav>

      <nav className="navigation--mobile">
        <ul className="navigation-list">
          <li className="navigation-link"><NavLink to="/tableaudebord"><img src={profile} alt="profile utilisateur" className="navigation--mobile-img" /></NavLink></li>
          <li className="navigation-link"><NavLink to="/statistiques"><img src={statistics} alt="statistiques utilisateur" className="navigation--mobile-img" /></NavLink></li>
          <li className="navigation-link">
            <NavLink to="#">
              <img
                onClick={() => setModal('burger')}
                src={hamburger}
                alt="ajouter une entrée"
                className="navigation--mobile-img"
              />
            </NavLink>
          </li>
          { modal && <div className="modal-burger">{ getModal(modal, setModal) }</div> }
        </ul>
      </nav>
    </div>
  );
};

Navigation.propTypes = {
  isLogged: PropTypes.bool.isRequired,
};
// == Export
export default Navigation;
