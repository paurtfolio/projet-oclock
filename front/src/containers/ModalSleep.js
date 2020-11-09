import { connect } from 'react-redux';
import { setSleep } from '../actions/dashboard';
import ModalSleep from '../components/Dashboard/Trackers/ModalSleep';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  setSleep: (payload) => {
    console.log('je passe dans le container setSleep', payload);
    dispatch(setSleep(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSleep);
