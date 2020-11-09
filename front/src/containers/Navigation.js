import { connect } from 'react-redux';
import Navigation from 'src/components/Navigation';

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
