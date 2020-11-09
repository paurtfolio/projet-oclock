import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import modaltrash from 'src/assets/images/icone-poubelle.svg';
import './todolist.scss';

const Todolist = ({
  toDoList,
  labelNewTask,
  submitAddTask,
  onChange,
  deleteOnClick,
}) => {
  if (!toDoList || !toDoList.tasks) {
    return <div>Récupération de la ressource</div>;
  }

  const handleOnChange = (event) => {
    event.preventDefault();
    onChange(event.target.value, event.target.name);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    submitAddTask();
  };

  const handleOnClick = (event) => {
    console.log(event.target.dataset);
    deleteOnClick(event.target.dataset.taskId);
  };

  return (
    <div className="todolist">
      <div className="todo-content">
        <div className="todolist__header">
          <h2>A FAIRE
            <form onSubmit={handleOnSubmit} className="form">
              <input
                name="labelNewTask"
                className="form__input"
                type="text"
                placeholder="Saissisez votre tâche ici"
                value={labelNewTask}
                onChange={handleOnChange}
              />
            </form>
          </h2>
        </div>
        <ul className="todolist__items">
          <form action="" method="post">
            {
            toDoList.tasks.map((task) => (
              <li className="todolist__item" key={task.id}>
                {/* <input type="checkbox" className="todolist__checkbox" /> */}
                <span>{task.title}</span>
                <NavLink to="#" onClick={handleOnClick}>
                  <img src={modaltrash} alt="supprimer une tâche" className="todolist__modaltrash-img" data-task-id={task.id} />
                </NavLink>
              </li>
            ))
          }
          </form>
        </ul>
      </div>
    </div>
  );
};

Todolist.propTypes = {
  toDoList: PropTypes.objectOf().isRequired,
  labelNewTask: PropTypes.string.isRequired,
  submitAddTask: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  deleteOnClick: PropTypes.func.isRequired,
};

// == Export
export default Todolist;
