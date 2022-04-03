import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from './components/app-header';
import SearcPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Make Awesome App', important: true, id: 2 },
    { label: 'Have a lunch', important: false, id: 3 },
  ];

  return (
    <div>
      <AppHeader />
      <SearcPanel />
      <TodoList todos={todoData} />
    </div>
  );
};


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);