import { connect } from 'react-redux';
import { fetchDashboard } from '../actions/dashboard';
import Dashboard from '../components/Dashboard';

const mapStateToProps = (state) => {
  const { weights = [] } = state.dashboard.allData;
  let weight = 0;

  if (weights.length > 0) {
    weight = weights[weights.length - 1].weight;
  }
  const imc = Math.round(weight / ((state.dashboard.allData.height/100) * (state.dashboard.allData.height/100)));
  const data = state.dashboard.allData;
  data.imc = imc;
  return ({
    allData: data,
    isLogged: state.user.isLogged,
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchDashboard: () => {
    console.log('je passe dans le container fetchDashboard');
    dispatch(fetchDashboard());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
