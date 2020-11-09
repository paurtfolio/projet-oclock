/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import weight from 'src/assets/images/trackers/icone-poids.svg';

import './modalweight.scss';

const ModalWeight = ({ onClick, setWeight }) => {
  const [value, setValue] = React.useState(0);
  const onValidate = React.useCallback(() => {
    setWeight({
      date: new Date(),
      weight: value,
    });
    onClick();
  }, [value]);

  return (
    <div className="modal-weight">
      <img className="logo-weight" src={weight} alt="" />
      <h1 className="mod-title-weight">Poids</h1>
      <form className="mod-form-weight">
        <label className="mod-label-weight">Nouveau poids :</label>
        <input className="mod-input-weight" type="number" min="40" max="140" placeholder="80 kg" value={value} onChange={(e) => setValue(e.target.value)} />
      </form>
      <button className="modal-button-weight" type="button" onClick={onValidate}>Valider</button>
    </div>
  );
};

ModalWeight.propTypes = {
  onClick: PropTypes.func.isRequired,
  setWeight: PropTypes.func.isRequired,
};

export default ModalWeight;
