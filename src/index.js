import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from './components/app-header';
import SearcPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false },
    { label: 'Make Awesome App', important: true },
    { label: 'Have a lunch', important: false },
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