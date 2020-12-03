import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import IconeVoltar from "../../assets/img/play-button.png";
import FormLogin from "../../components/FormLogin";
import "./login.css"

export default function Login(){
    return(
       <div className="Login">
           <Link to="/" className="back-link">
               <img src={IconeVoltar} alt="" className="back-icon"/>
               <p>Voltar</p>
            </Link>
           <div className="login-container">
               <div className="login-content">
                   <div className="login-block">
                       <img src={Logo} alt="" className="logo"/>
                       <h1 className="login-title">Login</h1>
                       <FormLogin />
                   </div>
               </div>
           </div>
       </div>
    )
}

