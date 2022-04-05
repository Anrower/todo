import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({ label,
  important,
  done,
  onDeleted,
  onToggleImportant,
  onToggleDone }) => {

  let classNames = 'todo-list-item'
  if (done) {
    classNames += ' done';
  }

  if (important) {
    classNames += ' important'
  }

  return (
    <span className={classNames}>
      <span
        className='todo-list-item-label'
        onClick={onToggleDone}>
        {label}
      </span>

      <span>
        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onToggleImportant}>
          <i className="fas fa-exclamation"></i>
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right"
          onClick={onDeleted}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </span>
    </span>
  );
};

export default TodoListItem;