import { connect } from 'react-redux';
import App from 'src/components/App';
import { checkAuth } from '../actions/user';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  justSubscribe: state.user.justSubscribe,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => {
    console.log('je passe ds checkAuth');
    dispatch(checkAuth());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
