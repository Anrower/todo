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
      id: uuidv4()
    };
  }

  const [todoData, setTodoData] = useState([
    createTodoItem('Drink Coffee'),
    createTodoItem('Make Awesome App'),
    createTodoItem('Have a Lunch')
  ]);

  const deleteItem = (id) => {
    setTodoData(todoData.filter(p => p.id !== id))
  }

  const onToggleDone = (id) => {
    console.log('done toggled', id);
  };

  const onToggleImportant = (id) => {
    console.log('important toggled', id)
  };

  const addItem = (label) => {
    const newItem = createTodoItem(label)
    setTodoData([...todoData, newItem]);
    console.log('Added', newItem);
  };

  return (
    <div className='todo-app'>
      <AppHeader todo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearcPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData}
        onDeleted={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleDone={onToggleDone} />
      <ItemAddForm onItemAdded={addItem} />
    </div>
  );
};

export default App;
