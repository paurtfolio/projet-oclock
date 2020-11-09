import { connect } from 'react-redux';
import TrackerSport from 'src/components/Dashboard/Trackers/TrackerSport';
import { getLastSport } from '../reducers/dashboard';

const mapStateToProps = (state) => ({
  lastSportCalory: getLastSport(state.dashboard.allData.sports),
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TrackerSport);
