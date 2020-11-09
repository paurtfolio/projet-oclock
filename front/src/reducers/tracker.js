import {
  FETCH_SPORT_LIST_SUCCESS,
  FETCH_FOOD_LIST_SUCCESS,
} from '../actions/trackers';

const initialState = {
  sport: [],
  food: [],
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_SPORT_LIST_SUCCESS:
      console.log('state', action.payload);
      return {
        ...state,
        sport: action.payload,
      };
    case FETCH_FOOD_LIST_SUCCESS:
      console.log('state', action.payload);
      return {
        ...state,
        food: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
