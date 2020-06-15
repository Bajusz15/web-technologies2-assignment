import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import WarehouseApp from './WarehouseApp'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from "./SignIn";
import {PrivateRoute} from "./components/PrivateRoute";
import SignIn from "./SignIn";

function App() {




    return (
        <BrowserRouter>
            <Switch >
                <Route exact path='/' component={SignIn}/>
                <Route exact path='/login' component={SignIn}/>
                <PrivateRoute exact path='/app' component={WarehouseApp}/>
            </Switch>
        </BrowserRouter>


    );
}



export default App;
