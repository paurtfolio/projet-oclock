export const FETCH_SPORT_LIST = 'FETCH_SPORT_LIST';
export const FETCH_FOOD_LIST = 'FETCH_FOOD_LIST';

export const FETCH_SPORT_LIST_SUCCESS = 'FETCH_SPORT_LIST_SUCCESS';
export const FETCH_FOOD_LIST_SUCCESS = 'FETCH_FOOD_LIST_SUCCESS';
export const SET_TRACKER_SPORT = 'SET_TRACKER_SPORT';
export const SET_SPORT_SUCCESS = 'SET_SPORT_SUCCESS';
export const SET_TRACKER_FOOD = 'SET_TRACKER_FOOD';
export const SET_FOOD_SUCCESS = 'SET_FOOD_SUCCESS';

export const fetchSportList = () => ({
  type: FETCH_SPORT_LIST,
});

export const fetchFoodList = () => ({
  type: FETCH_FOOD_LIST,
});

export const fetchSportListSuccess = (payload) => ({
  type: FETCH_SPORT_LIST_SUCCESS,
  payload,
});

export const fetchFoodListSuccess = (payload) => ({
  type: FETCH_FOOD_LIST_SUCCESS,
  payload,
});

export const setTrackerSport = (payload) => ({
  type: SET_TRACKER_SPORT,
  payload,
});

export const setTrackerFood = (payload) => ({
  type: SET_TRACKER_FOOD,
  payload,
});

export const setSportSuccess = (payload) => ({
  type: SET_SPORT_SUCCESS,
  payload,
});

export const setFoodSuccess = (payload) => ({
  type: SET_FOOD_SUCCESS,
  payload,
});
