import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './style.css';

export default function App() {
  return (
    <div>
      <header>
      <h1>My desk</h1>
      <nav>
        <Link to="/todo">Todos</Link> |{' '} <Link to="/tasks">Tasks</Link>
      </nav>
      </header>
      {/* Sub routing */}
      <Outlet />
    </div>
  );
}
