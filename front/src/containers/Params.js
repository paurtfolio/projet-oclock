import { connect } from 'react-redux';
import Params from '../components/Settings/Params';

import { paramsInputSubmit, inputChange } from '../actions/user';

const mapStateToProps = (state) => {
  const { weights = [] } = state.dashboard.allData;
  let weight = "--";
  let imc = "--";

  if (weights.length > 0) {
    weight = weights[weights.length - 1].weight;
  }
  if (state.dashboard.allData.height && weights.length > 0) {
    imc = Math.round(weight / ((state.dashboard.allData.height/100) * (state.dashboard.allData.height/100)));
  }
  return ({
    lastName: state.dashboard.allData.lastName,
    firstName: state.dashboard.allData.firstName,
    birthdate: state.dashboard.allData.birthdate,
    height: state.dashboard.allData.height,
    imc,
    estimatedSleepTime: state.dashboard.allData.estimatedSleepTime,
    weight,
  });
};

const mapDispatchToProps = (dispatch) => ({
  handleParams: () => {
    console.log('je passe l\'action paramsInputSubmit');
    dispatch(paramsInputSubmit());
  },
  changeField: (value, name) => {
    const object = {
      [name]: value,
    };
    dispatch(inputChange(object));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Params);
