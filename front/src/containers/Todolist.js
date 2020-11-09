import { connect } from 'react-redux';
import {
  addTaskSubmit,
  addTaskInputChange,
  deleteTask,
} from '../actions/todolist';

import Todolist from '../components/Dashboard/Todolist';

const mapStateToProps = (state) => ({
  labelNewTask: state.todolist.labelNewTask,
  allData: state.dashboard.allData,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (value, name) => {
    const object = {
      [name]: value,
    };
    dispatch(addTaskInputChange(object));
  },
  submitAddTask: () => {
    dispatch(addTaskSubmit());
  },
  deleteOnClick: (taskId) => {
    dispatch(deleteTask(taskId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
