/* eslint-disable import/no-unresolved */
import React from 'react';

// import food from 'src/assets/images/trackers/icone-alimentation.svg';
// import water from 'src/assets/images/trackers/icone-water.svg';
// import sleep from 'src/assets/images/trackers/icone-sommeil.svg';
// import sport from 'src/assets/images/trackers/icone-sport.svg';
// import weight from 'src/assets/images/trackers/icone-poids.svg';
import profile from 'src/assets/images/trackers/user.svg';

import './stats.scss';
import StatFood from './StatFood';
import StatWater from './StatWater';
import StatSleep from './StatSleep';
import StatSport from './StatSport';
import StatWeight from './StatWeight';

const Stats = () => (
  <div>
    <ul className="statistics__list">

      <li className="statistic statistic__profile">
        <img src={profile} alt="profile" className="statistics__rounded-img-profile" />

        <h2>Bonjour Paul Ochon !</h2>
        <ul className="user-details__tags--stats">
          <li className="user-details__tag--stats">23 ans</li>
          <li className="user-details__tag--stats">183 cm</li>
          <li className="user-details__tag--stats">75 kg</li>
          <li className="user-details__tag--stats">IMC : 22.4</li>
        </ul>
      </li>
      <StatFood />
      <StatWater />
      <StatSleep />
      <StatSport />
      <StatWeight />
    </ul>
  </div>
);

// == Export
export default Stats;
