import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_ERROR,
} from '../actions/articles';
import {
  FETCH_DASHBOARD_SUCCESS,
} from '../actions/dashboard';

import {
  TOGGLE_FAV_ARTICLE,
} from '../actions/article';

const initialState = {
  list: [],
  error: null,
  favArticle: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
        error: null,
      };
    case FETCH_ARTICLES_ERROR:
      return {
        ...state,
        error: 'Aucun article ici',
      };
    case FETCH_DASHBOARD_SUCCESS:
      console.log('action.payload', action.payload);
      return {
        ...state,
        favArticle: action.payload.articles.map((article) => article.id),
      };
    case TOGGLE_FAV_ARTICLE:
      console.log('action', action);
      // Si l'id de l'article véhiculé dans l'action, est present dans mon state
      if (state.favArticle.includes(action.articleId)) {
        // alors je retourne a nouveau le tableau de favoris avec une valeur en moins
        return {
          ...state,
          favArticle: state.favArticle.filter((id) => id !== action.articleId),
        };
      }
      return {
        ...state,
        favArticle: [
          ...state.favArticle,
          action.articleId,
        ],
      };
    default:
      return state;
  }
};
export default reducer;
