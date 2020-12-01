import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from "./pages/Home/Home"
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = ( 
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>  
    </div>
  </BrowserRouter>
)


ReactDOM.render( Router, document.getElementById("root"));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();