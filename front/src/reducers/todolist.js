import {
  ADD_TASK_INPUT_CHANGE,
  ADD_TASK_SUCCESS,
} from '../actions/todolist';

const initialState = {
  labelNewTask: '',
  allData: {},
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_TASK_INPUT_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    case ADD_TASK_SUCCESS:
      return {
        ...state,
        labelNewTask: '',
      };
    default:
      return state;
  }
};

export default reducer;
