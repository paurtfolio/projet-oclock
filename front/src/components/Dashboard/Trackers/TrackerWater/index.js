/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { NavLink } from 'react-router-dom';
import iconwater from 'src/assets/images/trackers/icone-water.svg';
import modalwater from 'src/assets/images/trackers/icone-open-modal-water.svg';

const TrackerWater = ({ setModal, water }) => (
  <li className="trackers__item trackers__water">
    <NavLink to="#">
      <img
        onClick={() => setModal('water')}
        src={modalwater}
        alt="ajouter une entrée"
        className="trackers__modal-img"
      />
    </NavLink>
    <img src={iconwater} alt="water" className="trackers__rounded-img" />
    <li className="user-stats__item">
      <span>{water} / 200 cl</span>
    </li>
  </li>
);

export default TrackerWater;
