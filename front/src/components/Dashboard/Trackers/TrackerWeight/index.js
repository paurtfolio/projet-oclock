/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { NavLink } from 'react-router-dom';
import iconweight from 'src/assets/images/trackers/icone-poids.svg';
import modalweight from 'src/assets/images/trackers/icone-open-modal-poids.svg';

const TrackerWeight = ({ setModal, weight }) => {
  let weightGoal = "--";
  if (weight > 0) {
    weightGoal = weight * 0.96;
  }
  return (
    <li className="trackers__item trackers__weight">
      <NavLink to="#">
        <img
          onClick={() => setModal('weight')}
          src={modalweight}
          alt="ajouter une entrée"
          className="trackers__modal-img"
        />
      </NavLink>
      <img src={iconweight} alt="poids" className="trackers__rounded-img" />
      <li className="user-stats__item">
        <span>{weight} / {weightGoal} kg</span>
      </li>
    </li>
  );
};
export default TrackerWeight;
