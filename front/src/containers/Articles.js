import { connect } from 'react-redux';
import { fetchArticles } from '../actions/articles';
import Articles from '../components/Articles/index';

const mapStateToProps = (state) => ({
  list: state.article.list,
  errorMessage: state.article.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchArticles: () => {
    // console.log('je passe dans le container fetchArticles');
    dispatch(fetchArticles());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
