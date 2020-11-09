/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState, useRef } from 'react';
import Sport from 'src/assets/images/trackers/icone-sport.svg';
import PropTypes from 'prop-types';

import './modalsport.scss';

const ModalSport = ({
  onClick,
  fetchSportList,
  sportTypeList,
  setTrackerSport,
}) => {
  useEffect(() => {
    fetchSportList();
  }, []);
  const inputSportTime = useRef(null);
  const [sportTime, setSportTime] = useState('');

  const inputSportIntensity = useRef(null);
  const [sportIntensity, setSportIntensity] = useState('');

  const inputSportType = useRef(null);
  const [sportType, setSportType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log('event.target', event.target);
    onClick();
    setTrackerSport(sportTime, sportIntensity, sportType);
  };
  const inputChange = (event) => {
    // console.log('event.target', event.target.value);
    setSportTime(inputSportTime.current.value);
    setSportIntensity(inputSportIntensity.current.value);
    setSportType(inputSportType.current.value);
  };
  return (
    <div className="modal-sport">
      <img className="logo-sport" src={Sport} alt="" />
      <h1 className="mod-title-sport">Activité physique</h1>
      {/* <div className="mod-cal-sport">
        <label className="mod-label-sport">Dépense estimée :</label>
        <p className="mod-para">x cal. consommée</p>
      </div> */}
      <form className="mod-form-sport" onSubmit={handleSubmit}>
        <label className="mod-label-sport">Activité physique :</label>
        <select className="mod-input-sport" name="sport-list" id="sport-select" ref={inputSportType} onChange={inputChange}>
          {
            sportTypeList.map((item) => (
              <option value={item.id}>{item.name}</option>
            ))
          }
        </select>
        <label className="mod-label-sport">Intensité :</label>
        <select className="mod-input-sport" name="intensities" id="intensity-select" value={sportIntensity} ref={inputSportIntensity} onChange={inputChange}>
          <option value="1">Effort léger</option>
          <option value="2">Effort modéré</option>
          <option value="3">Effort intense</option>
        </select>
        <label className="mod-label-sport">Durée de la séance (en minutes):</label>
        <input className="mod-input-sport" type="number" value={sportTime} ref={inputSportTime} onChange={inputChange} />
        <button type="submit" className="modal-button-sport">
          Valider
        </button>
      </form>
    </div>
  );
};

ModalSport.propTypes = {
  onClick: PropTypes.func.isRequired,
  fetchSportList: PropTypes.func.isRequired,
  sportTypeList: PropTypes.func.isRequired,
  setTrackerSport: PropTypes.func.isRequired,
};

export default ModalSport;
