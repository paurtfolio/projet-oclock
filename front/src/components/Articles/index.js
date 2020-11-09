import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Article from '../../containers/Article';

import logoAlimentation from 'src/assets/images/illustrations/illustration-alimentation.svg';
import logoSport from 'src/assets/images/illustrations/illustration-sport.svg';
import logoBienEtre from 'src/assets/images/illustrations/illustration-bien-etre.svg';

import './articles.scss';

const Articles = ({ fetchArticles, list, errorMessage }) => {
  useEffect(() => {
    fetchArticles();
  }, []);
  const { slug } = useParams();
  const articleList = list.filter((item) => (
    item.label === slug
  ));
  let logoImage = '';
  switch (slug) {
    case 'alimentation':
      logoImage = logoAlimentation;
      break;
    case 'sport':
      logoImage = logoSport;
      break;
    case 'bienetre':
      logoImage = logoBienEtre;
      break;
    default:
      logoImage = logoAlimentation;
  }

  return (
    <div className="articles">
      {errorMessage}
      <ul className="articles__list">
        <img className="logo-category" src={logoImage} alt="aliment" />
        {
          articleList.map((article) => (
            <Article
              key={article.id}
              article={article}
            />
          ))
        }
      </ul>
      <div className="more__articles">
        <a href="#">Afficher plus</a>
      </div>
    </div>
  );
};

Articles.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      content: PropTypes.string,
      source: PropTypes.string,
      media: PropTypes.string,
      label: PropTypes.string,
    }).isRequired,
  ).isRequired,
  fetchArticles: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

Articles.defaultProps = {
  errorMessage: null,
};

export default Articles;
