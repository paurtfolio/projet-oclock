// == Import npm
import React from 'react';

// == Import style
import './settings.scss';

// == Import composants
import Params from 'src/containers/Params';
import Menu from './Menu';

// == Composant
const Settings = () => (
  <div className="settings">
    <Menu />
    <div className="params">
      <Params />
    </div>
  </div>
);

// == Export
export default Settings;
