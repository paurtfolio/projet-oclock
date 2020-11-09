export const TOGGLE_FAV_ARTICLE = 'TOGGLE_FAV_ARTICLE';
export const TOGGLE_FAV_ARTICLE_SUCCESS = 'TOGGLE_FAV_ARTICLE_SUCCESS';

export const toggleFavArticle = (articleId) => ({
  type: TOGGLE_FAV_ARTICLE,
  articleId,
});

export const toggleFavArticleSuccess = (payload) => ({
  type: TOGGLE_FAV_ARTICLE_SUCCESS,
  payload,
});
