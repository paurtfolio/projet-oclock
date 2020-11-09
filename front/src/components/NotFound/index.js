// == Import npm
import React from 'react';

// == Import
import './notfound.scss';
import notfoundDesktop from 'src/assets/images/illustrations/illustration-notfound-d.svg';
import notfoundMobile from 'src/assets/images/illustrations/illustration-notfound-m.svg';

// == Composant
const NotFound = () => (
  <div className="notfound">
    <img src={notfoundDesktop} alt="page non trouvée" className="desktop" />
    <img src={notfoundMobile} alt="page non trouvée" className="mobile" />
  </div>
);

// == Export
export default NotFound;
