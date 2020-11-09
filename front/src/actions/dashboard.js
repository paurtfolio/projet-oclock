export const FETCH_DASHBOARD = 'FETCH_DASHBOARD';
export const FETCH_DASHBOARD_SUCCESS = 'FETCH_DASHBOARD_SUCCESS';

export const SET_WATER = 'SET_WATER'; // id pour les actions
export const SET_WATER_SUCCESS = 'SET_WATER_SUCCESS'; // id pour les actions

export const SET_WEIGHT = 'SET_WEIGHT'; // id pour les actions
export const SET_WEIGHT_SUCCESS = 'SET_WEIGHT_SUCCESS'; // id pour les actions

export const SET_SLEEP = 'SET_SLEEP'; // id pour les actions
export const SET_SLEEP_SUCCESS = 'SET_SLEEP_SUCCESS'; // id pour les actions

export const fetchDashboard = () => ({
  type: FETCH_DASHBOARD,
});

export const fetchDashboardSuccess = (payload) => ({
  type: FETCH_DASHBOARD_SUCCESS,
  payload,
});

export const setWater = (payload) => ({
  type: SET_WATER,
  payload,
});

export const setWaterSuccess = (payload) => ({
  type: SET_WATER_SUCCESS,
  payload,
});

export const setWeight = (payload) => ({
  type: SET_WEIGHT,
  payload,
});

export const setWeightSuccess = (payload) => ({
  type: SET_WEIGHT_SUCCESS,
  payload,
});

export const setSleep = (payload) => ({
  type: SET_SLEEP,
  payload,
});

export const setSleepSuccess = (payload) => ({
  type: SET_SLEEP_SUCCESS,
  payload,
});
