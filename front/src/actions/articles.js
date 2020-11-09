export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR';

export const fetchArticles = () => ({
  type: FETCH_ARTICLES,
});

export const fetchArticlesSuccess = (payload) => ({
  type: FETCH_ARTICLES_SUCCESS,
  payload,
});

export const fetchArticlesError = () => ({
  type: FETCH_ARTICLES_ERROR,
});
