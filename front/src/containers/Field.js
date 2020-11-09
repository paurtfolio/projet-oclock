import { connect } from 'react-redux';
import { inputChange } from '../actions/user';

import FieldCreateAccount from '../components/CreateAccount/Field';

const mapStateToProps = (state, ownProps) => ({
  value: state[ownProps],
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    const object = {
      [name]: value,
    };
    dispatch(inputChange(object));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FieldCreateAccount);
