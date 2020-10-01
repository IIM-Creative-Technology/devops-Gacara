import React from 'react';
import lilian from '../img/lilian.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={lilian} className="App-logo" alt="logo" />
        <p>
          Lilian is currently spinning his head right round right round 
        </p>
          Click on his face soon
      </header>
    </div>
  );
}

export default App;
