/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_DASHBOARD,
  SET_WATER,
  SET_WEIGHT,
  SET_SLEEP,
  fetchDashboardSuccess,
  setWaterSuccess,
  setWeightSuccess,
  setSleepSuccess,

} from '../actions/dashboard';

export default (store) => (next) => (action) => {
  const userId = store.getState().user.id;
  // const userId = store.getState().dashboard.allData.id;

  const {
    type,
    payload,
  } = action;
  switch (type) {
    case FETCH_DASHBOARD:
      axios.get(`http://52.91.105.182/dashboard/${userId}`, { withCredentials: true })
        .then((res) => {
          store.dispatch(fetchDashboardSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          // store.dispatch(fetchArticlesError());
        });
      break;
    case SET_WATER:
      axios.post(`http://52.91.105.182/dashboard/${userId}/water`, payload, { withCredentials: true })
        .then((res) => {
          store.dispatch(setWaterSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SET_WEIGHT:
      axios.post(`http://52.91.105.182/dashboard/${userId}/weight`, payload, { withCredentials: true })
        .then((res) => {
          store.dispatch(setWeightSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SET_SLEEP:
      axios.post(`http://52.91.105.182/dashboard/${userId}/sleep`, payload)
        .then((res) => {
          store.dispatch(setSleepSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
  }
};
