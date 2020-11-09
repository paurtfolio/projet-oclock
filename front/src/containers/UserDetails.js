import { connect } from 'react-redux';
import UserDetails from 'src/components/Dashboard/UserDetails';

const mapStateToProps = (state) => ({
  userData: state.dashboard.allData,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(UserDetails);
