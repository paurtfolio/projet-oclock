// == Import npm
import React from 'react';
import { NavLink } from 'react-router-dom';

// image
import illustration1 from 'src/assets/images/illustrations/illustration-accueil.svg';
import illustration2 from 'src/assets/images/illustrations/illustration-accueil-2.svg';
import testDesktop from 'src/assets/images/illustrations/test-accueil-d.png';
import testMobile from 'src/assets/images/illustrations/test-accueil-m.png';

// == Import
import './home.scss';

// == Composant
const Home = () => (
  <div className="home">
    <div className="home-bloc-top">
      <div className="home-bloc-title">
        <span className="home-title-pc">TrackFit,</span> <span className="home-title-sc">votre journal alimentaire</span>
      </div>
      <img src={illustration1} alt="illustration page d'accueil" className="home-bloc-top-img" />
      <div className="home-paragraphs">
        <p className="home-paragraph">
          Simple et pratique, notez les aliments que vous consommez
          repas après repas, sans distraction.
        </p>
        <p className="home-paragraph">
          Notez également vos activités sportives, la durée, l’intensité,
          obtenez des statistiques
          sur la semaine, le mois et l’année !
        </p>
        <p className="home-paragraph">
          Compteur de calories,
          journal alimentaire, courbes de poids et bien plus..
        </p>
        <p className="home-paragraph">
          Cet outil est accessible à tous les membres enregistrés.
        </p>
      </div>
    </div>
    <div className="home-bloc-bottom">
      <img src={illustration2} alt="illustration page d'accueil" className="home-bloc-bottom-img" />
      <span className="home-title-white">Aperçu des fonctionnalités du journal alimentaire</span>
      <img src={testDesktop} alt="illustration page d'accueil" className="home-bloc-bottom-img--test-d" />
      <img src={testMobile} alt="illustration page d'accueil" className="home-bloc-bottom-img--test-m" />

      <span className="home-subtitle-pc">Et bien entendu, la possibilité d’obtenir des statistiques !
        <button className="signup-home-button" type="submit">
          <NavLink to="/inscription">Inscrivez-vous !</NavLink>
        </button>
      </span>
    </div>
  </div>
);

// == Export
export default Home;
