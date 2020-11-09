/* eslint-disable no-case-declarations */
import axios from 'axios';
import {
  ADD_TASK_SUBMIT,
  addTaskSuccess,
  addTaskError,
  DELETE_TASK,
  deleteTaskSuccess,
} from '../actions/todolist';

export default (store) => (next) => (action) => {
  const userId = store.getState().dashboard.allData.id;
  switch (action.type) {
    case ADD_TASK_SUBMIT:
      // console.log('middleware todolist');
      // http://52.91.105.182/dashboard/
      axios.post(`http://52.91.105.182/dashboard/${userId}/task`, {
        title: store.getState().todolist.labelNewTask,
      }, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          store.dispatch(addTaskSuccess(res.data));
        })
        .catch((error) => {
          console.log(error);
          store.dispatch(addTaskError(error));
        });
      break;
    case DELETE_TASK:
      // http://52.91.105.182/dashboard/
      axios.delete(`http://52.91.105.182/dashboard/${userId}/task/${action.taskId}`, {
        title: store.getState().todolist.labelNewTask,
      }, { withCredentials: true })
        .then((res) => {
          console.log(res.data);
          // http://52.91.105.182/dashboard/
          axios.get(`http://52.91.105.182/dashboard/${userId}/task`)
            .then((res2) => {
              console.log(res2.data);
              store.dispatch(deleteTaskSuccess(res2.data));
            });
        })
        .catch((error) => {
          console.log(error);
          // store.dispatch(addTaskError(error));
        });
      break;
    default:
      next(action);
  }
};
