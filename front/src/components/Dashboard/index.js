// == Import npm
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import PropTypes from 'prop-types';

// == Import composants
import connectionRequired from 'src/assets/images/illustrations/illustration-connexion-requise.svg';
import Trackers from './Trackers';
import FavoriteArticles from '../../containers/FavoriteArticles';
import Todolist from '../../containers/Todolist';
import UserDetails from './UserDetails';
import Menu from './Menu';

// == Import style
import './dashboard.scss';

// == Composant
const Dashboard = ({
  fetchDashboard,
  allData,
  isLogged,
}) => {
  if (isLogged) {
    useEffect(() => {
      fetchDashboard();
    }, []);
  }
  if (!isLogged) {
    return (
      <div className="dashboard-connexion-required">
        <p className="dashboard-guests">Cet espace est réservé aux membres connectés.</p>
        <p className="dashboard-guests">Veuillez vous identifier ou créer un compte.</p>
        <img src={connectionRequired} alt="connexion requise" className="dashboard-guests-img" />
        <div className="buttons-connexion-required">
          <button className="signup-dashboard-button" type="submit"><NavLink to="/inscription">S'inscrire</NavLink></button>
          <button className="signin-dashboard-button" type="submit"><NavLink to="/connexion">Se connecter</NavLink></button>
        </div>
      </div>
    );
  }
  return (
    <div className="dashboard">
      <Menu />
      <div className="dashboard__content">
        <div className="dashboard__left">
          <Trackers />
          <div className="favs-todo">
            <FavoriteArticles
              articleFav={allData}
            />
            <Todolist
              toDoList={allData}
            />
          </div>
        </div>
        {/* dashboard__right"> */}
        <UserDetails
          userData={allData}
        />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  fetchDashboard: PropTypes.func.isRequired,
  isLogged: PropTypes.bool.isRequired,
};

// == Export
export default Dashboard;
