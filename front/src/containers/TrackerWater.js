import { connect } from 'react-redux';
import TrackerWater from '../components/Dashboard/Trackers/TrackerWater';

const mapStateToProps = (state) => {
  const { waters = [] } = state.dashboard.allData;
  let water = 0;

  if (waters.length > 0) {
    water = waters[waters.length - 1].water;
  }

  return {
    water,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TrackerWater);
