/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  FETCH_SPORT_LIST,
  fetchSportListSuccess,
  SET_TRACKER_SPORT,
  setSportSuccess,
  FETCH_FOOD_LIST,
  fetchFoodListSuccess,
  SET_TRACKER_FOOD,
  setFoodSuccess,
} from '../actions/trackers';

export default (store) => (next) => (action) => {
  const userId = store.getState().user.id;
  switch (action.type) {
    case FETCH_SPORT_LIST:
      axios.get('http://52.91.105.182/sportTypeList', { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(fetchSportListSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SET_TRACKER_SPORT:
      console.log('SET_TRACKER_SPORT', action.payload);
      axios.post(`http://52.91.105.182/dashboard/${userId}/sport`, action.payload,
        { withCredentials: true })
        .then((res) => {
          console.log('SET_TRACKER_SPORT', res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(setSportSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SET_TRACKER_FOOD:
      console.log('SET_TRACKER_FOOD', action.payload);
      axios.post(`http://52.91.105.182/dashboard/${userId}/food`, action.payload,
        { withCredentials: true })
        .then((res) => {
          console.log('SET_TRACKER_FOOD', res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(setFoodSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_FOOD_LIST:
      // 52.91.105.182
      axios.get('http://52.91.105.182/foodTypeList', { withCredentials: true })
        .then((res) => {
          console.log('FETCH_FOOD_LIST', res.data);
          // A faire : envoyer les variables de la session utilisateur
          // Attention ! mettre à jour l'action creator
          store.dispatch(fetchFoodListSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    default:
      next(action);
      break;
  }
};
