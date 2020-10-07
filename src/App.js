import React, { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todos, setTodos] = useState([
    'Take dog on a walk',
    'Take trash out',
    'Work out!!',
  ]);

  const [input, setInput] = useState('');

  const addTodo = (e) => {
    // this will work when button is clicked and ... is appending it to the current state
    e.preventDefault();
    setTodos([...todos, input]);
    // this will clear the input field after submitting
    setInput('');
  };

  // anything typed is stored in the variable input and is being set to the value
  return (
    <div className="App">
      <h1>FRAME</h1>
      <h3>your day with a list of goals, chores, deadlines and even meals! </h3>

      <form>
        <input value={input} onChange={(e) => setInput(e.target.value)} />

        <button onClick={addTodo} type="submit" class="btn btn-warning">
          add to list
        </button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
