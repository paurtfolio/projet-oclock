import {
  FETCH_DASHBOARD_SUCCESS,
  SET_WATER_SUCCESS,
  SET_WEIGHT_SUCCESS,
  SET_SLEEP_SUCCESS,
} from '../actions/dashboard';
import {
  ADD_TASK_SUCCESS,
  DELETE_TASK_SUCCESS,
} from '../actions/todolist';
import {
  SET_SPORT_SUCCESS,
  SET_FOOD_SUCCESS,
} from '../actions/trackers';
import {
  TOGGLE_FAV_ARTICLE_SUCCESS,
} from '../actions/article';

const initialState = {
  allData: {},
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_DASHBOARD_SUCCESS:
      return {
        ...state,
        allData: {
          ...action.payload,
        },
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        allData: {
          ...state.allData,
          tasks: [
            ...state.allData.tasks,
            action.payload,
          ],
        },
      };
    case DELETE_TASK_SUCCESS:
      return {
        ...state,
        allData: {
          ...state.allData,
          tasks: [
            ...action.payload,
          ],
        },
      };
    case SET_WATER_SUCCESS:
      return {
        ...state,
        allData: {
          ...state.allData,
          waters: [
            ...state.allData.waters,
            action.payload,
          ],
        },
      };
    case SET_WEIGHT_SUCCESS:
      return {
        ...state,
        allData: {
          ...state.allData,
          weights: [
            ...state.allData.weights,
            action.payload,
          ],
        },
      };
    case SET_SPORT_SUCCESS:
      // console.log('state123', action.payload);
      return {
        ...state,
        allData: {
          ...state.allData,
          sports: [
            ...state.allData.sports,
            action.payload,
          ],
        },
      };
    case SET_FOOD_SUCCESS:
      console.log('state123', action.payload);
      return {
        ...state,
        allData: {
          ...state.allData,
          foods: [
            ...state.allData.foods,
            action.payload,
          ],
        },
      };
    case TOGGLE_FAV_ARTICLE_SUCCESS:
      return {
        ...state,
        allData: {
          ...state.allData,
          articles: [
            ...action.payload,
          ],
        },
      };
    case SET_SLEEP_SUCCESS:
      return {
        ...state,
        allData: {
          ...state.allData,
          sleeps: [
            ...state.allData.sleeps,
            action.payload,
          ],
        },
      };
    default:
      return state;
  }
};
export const getLastSleep = (sleeps) => {
  console.log(sleeps);
  let sleepHours = [];
  if (sleeps && sleeps.length > 0) {
    sleepHours = sleeps[sleeps.length - 1].sleepHours;
  }
  return sleepHours;
};
export const getLastSport = (sports) => {
  console.log(sports);
  let caloryTotal = [];
  if (sports && sports.length > 0) {
    caloryTotal = sports[sports.length - 1].caloryTotal;
  }
  return caloryTotal;
};
export const getLastFood = (foods) => {
  console.log(foods);
  let caloryTotal = [];
  if (foods && foods.length > 0) {
    caloryTotal = foods[foods.length - 1].caloryTotal;
  }
  return caloryTotal;
};
export default reducer;
