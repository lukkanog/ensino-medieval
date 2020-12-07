import React, { useState } from "react";
import ReinoExactus from "../../assets/img/exatas.svg";
import ReinoNatura from "../../assets/img/natura.svg";
import ReinoLinguagens from "../../assets/img/linguagens.svg";
import ReinoHumanas from "../../assets/img/humanas.svg";
import ReinoSocio from "../../assets/img/socioemocional.svg";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import IconeLogout from "../../assets/img/logout.png";
import Footer from "../../components/Footer";
import GameOptions from "../../components/GameOptions";
import Reinos from "../../components/Reinos";
import "./map.css"

export default function Map() {
    
    return (
        <div className="Map">
            <header className="home-header container">
                <nav className="content home-nav">
                    <Link to="/">
                        <img src={Logo} alt="Logo do Ensino Medieval" className="header-logo" />
                    </Link>                     
                    <ul className="menu-options">
                        <li className="menu-item">
                            <Link className="menu-link iniciar" to="/login">
                                <p>Sair</p>
                                <img alt="" src={IconeLogout} className="play-button" />
                            </Link>
                        </li>

                    </ul>
                </nav>
            </header>

            <div className="container title-container">
                <div className="content">
                    <h1 className="map-title">Lucas, veja seu progresso, nas missões em cada reino</h1>
                </div>
            </div>

            <div className="container map-container">
                <div className="content map-content">
                    <GameOptions />

                    <Reinos />
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}