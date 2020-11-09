import { connect } from 'react-redux';
import TrackerWeight from '../components/Dashboard/Trackers/TrackerWeight';

const mapStateToProps = (state) => {
  const { weights = [] } = state.dashboard.allData;
  let weight = 0;

  if (weights.length > 0) {
    weight = weights[weights.length - 1].weight;
  }

  return {
    weight,
  };
};

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TrackerWeight);
