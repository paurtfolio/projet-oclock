import { connect } from 'react-redux';
import { setWeight } from '../actions/dashboard';
import ModalWeight from '../components/Dashboard/Trackers/ModalWeight';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  setWeight: (payload) => {
    console.log('je passe dans le container setWeight', payload);
    dispatch(setWeight(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalWeight);
