import React, { useState } from 'react';
import './todo-list-item.css'

const TodoListItem = ({ label }) => {
  const [labelArg, setLabelArg] = useState(
    {
      done: false,
      important: false
    }
  )

  const { done, important } = labelArg

  const onLabelClick = () => {
    setLabelArg({ done: !labelArg.done });
  }

  const onMarkImportant = () => {
    setLabelArg({ important: !labelArg.important });
  }

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
        onClick={onLabelClick}>
        {label}
      </span>

      <span>
        <button type="button"
          className="btn btn-outline-success btn-sm float-right"
          onClick={onMarkImportant}>
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