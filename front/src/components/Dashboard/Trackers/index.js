/* eslint-disable import/no-unresolved */
import React from 'react';
import { NavLink } from 'react-router-dom';

import './trackers.scss';

import sleep from 'src/assets/images/trackers/icone-sommeil.svg';
import modalsleep from 'src/assets/images/trackers/icone-open-modal-sommeil.svg';

import TrackerWater from 'src/containers/TrackerWater';
import TrackerWeight from 'src/containers/TrackerWeight';
import TrackerSport from 'src/containers/TrackerSport';
import TrackerFood from 'src/containers/TrackerFood';
import TrackerSleep from 'src/containers/TrackerSleep';

import ModalWater from 'src/containers/ModalWater';
import ModalWeight from 'src/containers/ModalWeight';
import ModalSport from 'src/containers/ModalSport';
import ModalFood from 'src/containers/ModalFood';
import ModalSleep from 'src/containers/ModalSleep';

const getModal = (name, closeHandler) => {
  let Modal;
  if (name === 'food') Modal = ModalFood;
  else if (name === 'water') Modal = ModalWater;
  if (name === 'sleep') Modal = ModalSleep;
  else if (name === 'sport') Modal = ModalSport;
  else if (name === 'weight') Modal = ModalWeight;
  return <Modal onClick={() => closeHandler(null)} />;
};
const Trackers = () => {
  const [modal, setModal] = React.useState(null);
  return (
    <ul className="trackers">
      <TrackerFood setModal={setModal} />
      <TrackerWater setModal={setModal} />
      <TrackerSleep setModal={setModal} />
      <TrackerSport setModal={setModal} />
      <TrackerWeight setModal={setModal} />
      { modal && <div className="trackers-modal">{ getModal(modal, setModal) }</div> }
    </ul>
  );
};
// == Export
export default Trackers;
