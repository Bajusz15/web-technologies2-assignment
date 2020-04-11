import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // this.state = { apiResponse: "" }
   const[apiResponse, setApiResponse] =  useState("");
    useEffect(() => {
        async function callAPI() {
            await fetch("http://localhost:5000/")
                .then(res => res.text())
                .then(res => setApiResponse(res));
        }
                callAPI();
    }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

        <p className="App-intro">{apiResponse}</p>
    </div>
  );
}

export default App;
