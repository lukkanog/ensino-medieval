import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from "./pages/Home/Home";
import Ranking from "./pages/Ranking/Ranking";
import Map from "./pages/Map/Map";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Missoes from './pages/Quest/Missoes';

const Router = ( 
  <BrowserRouter>
      <Switch>
        <Route path="/perfil" component={Profile}/>
        <Route path="/ranking" component={Ranking}/>
        <Route path="/missoes" component={Missoes}/>
        <Route path="/map" component={Map}/>
        <Route path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
      </Switch>  
  </BrowserRouter>
)


ReactDOM.render( Router, document.getElementById("root"));



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();