import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Todos from './routes/todos';
import Tasks from './routes/tasks';
import Task from './routes/task';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="todo" element={<Todos />} />
        <Route path="tasks" element={<Tasks />} >
          <Route path=":taskId" element={<Task />} />
        </Route>
        <Route path="*" element={
        <main style={{ padding: "1rem" }}>
          <h3>404 - Error: <br/><br/><br/>There's nothing here!</h3>
        </main>
      }
    />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
