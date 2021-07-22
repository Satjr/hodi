import React from 'react';
import { Counter } from './features/counter/Counter';
import { Board } from './features/board/Board';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
      </header>
      <Board />
    </div>
  );
}

export default App;
