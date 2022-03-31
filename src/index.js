import React from 'react';
import ReactDOM from 'react-dom/client';
import AppHeader from './components/app-header';
import SearcPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

  return (
    <div>
      <AppHeader />
      <SearcPanel />
      <TodoList />
    </div>
  );
};


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);