import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/logo.svg";
import IconeLogout from "../../assets/img/logout.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import GameOptions from "../../components/GameOptions";
import Reinos from "../../components/Reinos";
import "./map.css"

export default function Map() {
    
    return (
        <div className="Map">
           <Header logado />

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