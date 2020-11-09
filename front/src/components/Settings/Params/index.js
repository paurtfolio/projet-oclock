/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-unresolved */
import React from 'react';
import PropTypes from 'prop-types';
import Field from 'src/containers/Field';

import './params.scss';

import profile from 'src/assets/images/trackers/user.svg';
import settings from 'src/assets/images/illustrations/illustration-settings.svg';

const Params = (
  {
    lastName,
    firstName,
    birthdate,
    height,
    estimatedSleepTime,
    weight,
    imc,
    weightGoal,
    handleParams,
  },
) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleParams();
    console.log('soumission du formulaire');
  };
  return (
    <div className="params-content">

      <div className="params-infos">

        <ul className="user-params__tags">
          <li className="user-params__tag-list">
            <img src={profile} alt="profile" className="user-params__picture" />
          </li>
          <li className="user-params__tag-list">Prénom : {firstName}</li>
          <li className="user-params__tag-list">Nom : {lastName}</li>
          <li className="user-params__tag-list">Poids initial : {weight}kg</li>
          {/* <li className="user-params__tag-list">Poids à atteindre : kg</li> */}
          <li className="user-params__tag-list">IMC : {imc}</li>
          <li className="user-params__tag-list">Sommeil nécessaire : {estimatedSleepTime}h</li>
        </ul>
      </div>

      <div className="params-settings">

        <form className="settings-form" onSubmit={handleSubmit}>

          <div className="params-settings-bloc">
            <h1 className="settings-title">Vos informations :</h1>
            <div className="settings-content">
              <label className="settings-label">Prénom :
                <Field
                  value={firstName}
                  name="firstName"
                  placeholder={firstName}
                  type="text"
                  className="settings-input"
                />
              </label>
              <label className="settings-label">Nom :
                <Field
                  value={lastName}
                  name="lastName"
                  placeholder={lastName}
                  type="text"
                  className="settings-input"
                />
              </label>

              <p className="personnal-info">Pour effectuer un suivi exact, nous avons besoin de quelques informations basiques de votre part :</p>

              <label className="settings-label">Date de naissance :
                <Field
                  value={birthdate}
                  name="birthdate"
                  placeholder={birthdate}
                  type="date"
                  min="1900-01-01"
                  max="2020-12-31"
                  className="settings-input"
                />
              </label>

              <label className="settings-label">Taille en cm :
                <Field
                  value={height}
                  name="height"
                  placeholder={height}
                  type="number"
                  min="100"
                  max="200"
                  className="settings-input"
                />
              </label>

              <label className="settings-label">Poids initial :
                <Field
                  value={weight}
                  name="weight"
                  placeholder={weight}
                  type="number"
                  min="40"
                  max="140"
                  className="settings-input"
                />
              </label>

              {/* <label className="settings-label">Votre poids à atteindre :
                <Field
                  value={weightGoal}
                  name="weightGoal"
                  placeholder="79 kg"
                  type="number"
                  min="40"
                  max="140"
                  className="settings-input"
                />
              </label> */}

              <label className="settings-label">Besoin en sommeil :
                <Field
                  value={estimatedSleepTime}
                  name="estimatedSleepTime"
                  placeholder={estimatedSleepTime}
                  type="number"
                  min="1"
                  max="24"
                  className="settings-input"
                />
              </label>
            </div>
          </div>
          <button className="settings-button" type="submit">Mettre à jour</button>
        </form>
      </div>
      <img src={settings} alt="paramètres" className="user-params__illustration" />

    </div>
  );
};

Params.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  birthdate: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  estimatedSleepTime: PropTypes.number.isRequired,
  weight: PropTypes.number.isRequired,
  weightGoal: PropTypes.number.isRequired,
  handleParams: PropTypes.func.isRequired,
};

// == Export
export default Params;
