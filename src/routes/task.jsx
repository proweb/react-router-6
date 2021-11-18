import React from 'react';
import { useParams } from 'react-router-dom';

export default function Task() {
  let params = useParams();
  return (
    <div
      style={{
        padding: '1rem',
      }}
    >
      <h2>Task #{params.taskId}</h2>
    </div>
  );
}
