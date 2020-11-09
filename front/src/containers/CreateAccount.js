import { connect } from 'react-redux';
import { registerInputSubmit } from '../actions/user';

import CreateAccount from '../components/CreateAccount';

const mapStateToProps = (state) => ({
  lastName: state.user.lastName,
  firstName: state.user.firstName,
  email: state.user.email,
  password: state.user.password,
  confirmedPassword: state.user.confirmedPassword,
  isLogged: state.user.isLogged,
  justSubscribe: state.user.justSubscribe,
});

const mapDispatchToProps = (dispatch) => ({
  handleRegisterUser: () => {
    dispatch(registerInputSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
