import { connect } from 'react-redux';
import { setWater } from '../actions/dashboard';
import ModalWater from '../components/Dashboard/Trackers/ModalWater';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  setWater: (payload) => {
    console.log('je passe dans le container setWater', payload);
    dispatch(setWater(payload));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalWater);
