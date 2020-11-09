export const ADD_TASK_INPUT_CHANGE = 'ADD_TASK_INPUT_CHANGE';
export const ADD_TASK_SUBMIT = 'ADD_TASK_SUBMIT';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_ERROR = 'ADD_TASK_ERROR';
export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';

export const addTaskInputChange = (payload) => ({
  type: ADD_TASK_INPUT_CHANGE,
  payload,
});

export const addTaskSubmit = () => ({
  type: ADD_TASK_SUBMIT,
});

export const addTaskSuccess = (payload) => ({
  type: ADD_TASK_SUCCESS,
  payload,
});

export const addTaskError = () => ({
  type: ADD_TASK_ERROR,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  taskId,
});

export const deleteTaskSuccess = (payload) => ({
  type: DELETE_TASK_SUCCESS,
  payload,
});
