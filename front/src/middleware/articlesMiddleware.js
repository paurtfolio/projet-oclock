/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_ARTICLES,
  fetchArticlesSuccess,
  fetchArticlesError,
} from '../actions/articles';
import {
  TOGGLE_FAV_ARTICLE,
  toggleFavArticleSuccess,
} from '../actions/article';

export default (store) => (next) => (action) => {
  const userId = store.getState().dashboard.allData.id;
  console.log('user id article middle', userId);
  switch (action.type) {
    case FETCH_ARTICLES:
      axios.get('http://52.91.105.182/articles', { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          store.dispatch(fetchArticlesSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(fetchArticlesError());
        });
      break;
    case TOGGLE_FAV_ARTICLE:
      console.log('action.articleId', action.articleId);
      // http://52.91.105.182/
      axios.get(`http://52.91.105.182/user/${userId}/article/${action.articleId}`, {},
        { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          store.dispatch(toggleFavArticleSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          // store.dispatch(error);
        });
      next(action);
      break;
    default:
      next(action);
  }
};
