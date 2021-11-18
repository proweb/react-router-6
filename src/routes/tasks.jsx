import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getTasks } from '../data';

export default function Tasks() {
  let tasks = getTasks();
  return (
    <main style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px #eee',
          padding: '1rem',
        }}
      >
        {tasks.map((task) => (
          <Link
            style={{ display: 'block', margin: '1rem 0' }}
            to={`/tasks/${task.number}`}
          >
            {task.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </main>
  );
}
