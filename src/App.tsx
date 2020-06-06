import './App.css';

import React from 'react';
import logo from './logo.svg';

function App() {

  // const methodDoesNotExist = () => { 
  //   throw new Error('ERRO')
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vamos aprender React
        </p>
        {/* <button onClick={methodDoesNotExist}>Break the world</button>; */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React é legal
        </a>
      </header>
    </div>
  );
}

export default App;