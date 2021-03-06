import React, { useState } from 'react';
import AppHeader from '../app-header/app-header'
import SearcPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.css'
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const createTodoItem = (label) => {
    return {
      label,
      important: false,
      done: false,
      id: uuidv4(),
      filter: ''
    };
  }

  const [currentStatusFilter, setCurrentStatusFilter] = useState('');
  const [term, setTerm] = useState('');
  const [todoData, setTodoData] = useState([
    createTodoItem('Drink Coffee'),
    createTodoItem('Make Awesome App'),
    createTodoItem('Have a Lunch')
  ]);

  const search = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    const result = items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
    return result;
  }

  const onSearch = (value) => {
    setTerm(value);
  }

  const setFilter = (items, currentStatusFilter, term) => {
    let result = items;
    if (currentStatusFilter.length === 0 || currentStatusFilter === 'all') {
      return search(result, term);
    } else if (currentStatusFilter === 'done') {
      result = items.filter((item) => item.done);
      return search(result, term);
    } else {
      result = items.filter((item) => !item.done);
      return search(result, term);
    }
  }

  const visibleItems = (todoData, currentStatusFilter, term) => {
    return setFilter(todoData, currentStatusFilter, term);
  }


  const toggleProperty = (arr, id, propName,) => {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = {
      ...oldItem,
      [propName]: !oldItem[propName]
    };
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  const deleteItem = (id) => {
    setTodoData(todoData.filter(el => el.id !== id));
  }

  const toggleFilter = (statusFilter) => {
    setCurrentStatusFilter(statusFilter);
  }

  const onToggleDone = (id) => {
    setTodoData(toggleProperty(todoData, id, 'done'));
  };

  const onToggleImportant = (id) => {
    setTodoData(toggleProperty(todoData, id, 'important'));
  };

  const addItem = (label) => {
    const newItem = createTodoItem(label)
    setTodoData([...todoData, newItem]);
  };

  const doneCount = todoData.filter(p => p.done).length;
  const todoCount = todoData.length - doneCount;

  return (
    <div className='todo-app'>
      <AppHeader todo={todoCount} done={doneCount} />
      <div className='top-panel d-flex'>
        <SearcPanel onSearch={onSearch}
          state={term}
        />
        <ItemStatusFilter onToggleStatus={toggleFilter}
          statusFilter={currentStatusFilter}
        />
      </div>
      <TodoList todos={visibleItems(todoData, currentStatusFilter, term)}
        onDeleted={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone} />
      <ItemAddForm onItemAdded={addItem} />
    </div>
  );
};

export default App;
