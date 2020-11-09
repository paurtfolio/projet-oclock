/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { NavLink } from 'react-router-dom';
import iconsport from 'src/assets/images/trackers/icone-sport.svg';
import modalsport from 'src/assets/images/trackers/icone-open-modal-sport.svg';

const TrackerSport = ({ setModal, lastSportCalory }) => (
  <li className="trackers__item trackers__sport">
    <NavLink to="#">
      <img
        onClick={() => setModal('sport')}
        src={modalsport}
        alt="ajouter une entrée"
        className="trackers__modal-img"
      />
    </NavLink>
    <img src={iconsport} alt="sport" className="trackers__rounded-img" />
    <li className="user-stats__item">
      <span>{lastSportCalory} cal</span>
    </li>
  </li>
);

export default TrackerSport;
