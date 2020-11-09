import { connect } from 'react-redux';
import TrackerFood from 'src/components/Dashboard/Trackers/TrackerFood';
import { getLastFood } from '../reducers/dashboard';

const mapStateToProps = (state) => ({
  lastFoodCalory: getLastFood(state.dashboard.allData.foods),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TrackerFood);
