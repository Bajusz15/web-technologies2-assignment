import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    // this.state = { apiResponse: "" }
   const[apiResponse, setApiResponse] =  useState([]);
    useEffect(() => {
        async function callAPI() {
            await fetch("http://localhost:5000/products")
                .then(res => res.json())
                .then(res => setApiResponse(res));
        }
                callAPI();
    }, []);
  return (
    <div className="App">

        {apiResponse.map(p => (
            <p className="App-intro">{p.name}</p>
        ))}

    </div>
  );
}

export default App;
