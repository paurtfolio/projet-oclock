import { connect } from 'react-redux';
import ModalSport from 'src/components/Dashboard/Trackers/ModalSport';
import {
  fetchSportList,
  setTrackerSport,
} from '../actions/trackers';

const mapStateToProps = (state) => ({
  sportTypeList: state.tracker.sport,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSportList: () => {
    dispatch(fetchSportList());
  },
  setTrackerSport: (sportTime, sportIntensity, sportType) => {
    // console.log('container setTrackerSport');
    const object = {
      sportTime,
      sportIntensity,
      sportType,
    };
    dispatch(setTrackerSport(object));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalSport);
