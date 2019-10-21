import React from 'react';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./LogoTest2.PNG")} class="App-logo" alt="logo" />
        <h4>
          Welcome to Tabletop Combat!
        </h4>
      <div>
        <div class="btn-holder">
          <button class="btn btn-primary btn-flat">
            I've already created a character
          </button>
        </div>
      <div class="btn-holder">
      <button class="btn btn-primary btn-flat">
        I'm starting from scratch
      </button> 
      </div>
      </div>
      
      
      </header>
      
    </div>
  );
}

function dataInput() {
  return(
    <div className="App">
      <header className="App-header">
        <img src={require("./LogoTest2.PNG")} class="App-logo" alt="logo" />
        <h4>
          Welcome to Tabletop Combat!
        </h4>
      </header>
    </div>
  );
}

export default App;
