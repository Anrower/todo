import React from 'react';
import './item-status-filter.css';

const ItemStatusFilter = ({ onToggleStatus, statusFilter }) => {
  const { active, done } = statusFilter;

  let activeAll = 'btn btn-secondary',
    activeActive = 'btn btn-secondary',
    activeDone = 'btn btn-secondary';

  switch (true) {
    case done: activeDone += ' btn-info';
      break;
    case active: activeActive += ' btn-info';
      break;
    default: activeAll += ' btn-info';
  }

  return (
    <div className='btn-group'>
      <button type='button'
        className={activeAll}
        onClick={() => onToggleStatus('all')}>All</button>
      <button type='button'
        className={activeActive}
        onClick={() => onToggleStatus('active')}>Active</button>
      <button type='button'
        className={activeDone}
        onClick={() => onToggleStatus('done')}>Done</button>
    </div>
  )
}

export default ItemStatusFilter;