import React, { useState } from 'react';
import AppHeader from '../app-header/app-header'
import SearcPanel from '../search-panel/search-panel';
import TodoList from '../todo-list/todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form/item-add-form';
import './app.css'
import { v4 as uuidv4 } from 'uuid';

const App = () => {

  const [todoData, setTodoData] = useState([
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ]);

  const deleteItem = (id) => {
    setTodoData(todoData.filter(p => p.id !== id))
  }

  const addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: uuidv4()
    }
    setTodoData([...todoData, newItem]);
    console.log('Added', newItem);
  }

  return (
    <div className='todo-app'>
      <AppHeader todo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearcPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData}
        onDeleted={deleteItem} />
      <ItemAddForm onItemAdded={addItem} />
    </div>
  );
};

export default App;
