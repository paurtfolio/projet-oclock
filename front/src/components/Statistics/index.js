// == Import npm
import React from 'react';

// == Import style
import './statistics.scss';

// == Import composants
import Menu from './Menu';
import Stats from '../../containers/Stats';

// == Composant
const Statistics = () => (
  <div className="stats">
    <Menu />
    <div className="statistics">
      <Stats />
    </div>
  </div>
);

// == Export
export default Statistics;
