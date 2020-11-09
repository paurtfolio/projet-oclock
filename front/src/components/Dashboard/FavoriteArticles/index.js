// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './favoriteArticles.scss';

const FavoriteArticles = ({
  articleFav,
  toggleFavArticle,
}) => {
  if (!articleFav || !articleFav.articles) {
    return <div>recuperation de la ressource</div>;
  }
  return (
    <ul className="favs">
      <div className="favs-content">
        <h2>Articles favoris</h2>
        {
          articleFav.articles.map((article) => {
            const handleOnClick = () => {
              console.log('articleFav.articles.id', article.id);
              toggleFavArticle(article.id);
            };
            return (
              <li className="favs__item" key={article.id}>
                <div className="favs__overview">
                  <div onClick={handleOnClick}>
                    <FontAwesomeIcon
                      icon={faHeart}
                    />
                  </div>
                  <img src={article.media} alt="article" className="favs__thumbnail" />
                </div>
                <div className="favs__excerpt">
                  <h3>{article.title}</h3>
                  <p>{article.content}</p>
                </div>
              </li>
            );
          })
        }
      </div>
    </ul>
  );
};

FavoriteArticles.propTypes = {
  articleFav: PropTypes.objectOf().isRequired,
  toggleFavArticle: PropTypes.func.isRequired,
};

// == Export
export default FavoriteArticles;
