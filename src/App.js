import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Tabletop Combat!
        </p>
      <div class="btn-holder">
      <button class="btn btn-primary">
        I've already created a character
      </button>
      <button class="btn btn-primary">
        I'm starting from scratch
      </button> 
      </div>
      
      </header>
      
    </div>
  );
}

export default App;
