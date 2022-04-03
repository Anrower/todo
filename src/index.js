import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from './components/app-header/app-header';
import SearcPanel from './components/search-panel/search-panel';
import TodoList from './components/todo-list/todo-list';
import ItemStatusFilter from './components/item-status-filter/item-status-filter';
import './index.css'

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ];

  return (
    <div className='todo-app'>
      <AppHeader todo={1} done={3} />
      <div className='top-panel d-flex'>
        <SearcPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);