/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { NavLink } from 'react-router-dom';
import iconsleep from 'src/assets/images/trackers/icone-sommeil.svg';
import modalsleep from 'src/assets/images/trackers/icone-open-modal-sommeil.svg';

const TrackerSleep = ({ setModal, sleep, estimatedSleepTime }) => {
  if (!estimatedSleepTime) {
    estimatedSleepTime = "--";
  }
  return (
    <li className="trackers__item trackers__sleep">
      <NavLink to="#">
        <img
          onClick={() => setModal('sleep')}
          src={modalsleep}
          alt="ajouter une entrée"
          className="trackers__modal-img"
        />
      </NavLink>
      <img src={iconsleep} alt="sleep" className="trackers__rounded-img" />
      <li className="user-stats__item">
        <span>{sleep} h / {estimatedSleepTime} h</span>
      </li>
    </li>
  );
};
export default TrackerSleep;
