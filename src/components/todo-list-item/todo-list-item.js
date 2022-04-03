import React from 'react';
import './todo-list-item.css'

const TodoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'tomato' : 'black',
    fontWeight: important ? 'bold' : 'normal'
  };

  return (
    <span className='todo-list-item'>
      <span
        className='todo-list-item-label'
        style={style}>
        {label}
      </span>

      <span>
        <button type="button"
          className="btn btn-outline-success btn-sm float-right">
          <i className="fas fa-exclamation"></i>
        </button>

        <button type="button"
          className="btn btn-outline-danger btn-sm float-right">
          <i className="fas fa-trash-alt"></i>
        </button>
      </span>
    </span>
  );
};

export default TodoListItem;