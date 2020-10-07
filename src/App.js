import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    'Take dog on a walk',
    'Take trash out',
    'Work out!!',
  ]);

  const [input, setInput] = useState('');
  return (
    <div className="App">
      <h1>hello world!</h1>
      <input />
      <button>Add to list</button>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
