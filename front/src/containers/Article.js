import { connect } from 'react-redux';
import Article from 'src/components/Articles/Article';
import {
  toggleFavArticle,
} from '../actions/article';

const mapStateToProps = (state) => ({
  colorFavArticles: state.article.favArticle,
});

const mapDispatchToProps = (dispatch) => ({
  toggleFavArticle: (articleId) => {
    // console.log('articleId', articleId);
    dispatch(toggleFavArticle(articleId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
