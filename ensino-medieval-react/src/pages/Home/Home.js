import React from "react";
import Header from "../../components/Header";
import "../../assets/css/global.css";
import "./home.css";
import Logo from "../../assets/img/logo.svg";
import DesenhoMaga from "../../assets/img/maga.png";
import HomeCarousel from "../../components/HomeCarousel";

import {useState} from "react";
import { Link } from "react-router-dom";




export default function Home() {


    return (
        <div className="Home">
            <Header />

            <div className="banner">
                <div className="banner-content content">
                    <div className="logo-e-botoes">
                        <img alt="Logo do Ensino Medieval" className="banner-logo" src={Logo} />
                        <div className="botoes-banner">
                            <Link className="button brown-button">Iniciar</Link>
                            <Link className="button orange-button" to="/ranking">Ranking</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="wooden-card content">
                <img alt="" src={DesenhoMaga} className="desenho-maga" />
                <div className="titulo-e-textos">
                    <h2 className="card-title">Um ensino médio diferente</h2>
                    <p className="card-text">O Ensino Medieval vem para gamificar o processo do Ensino Médio, mudando o conceito de que ele é uma época CHATA e desinteressante, e o pensamento de que esse aprendizado não serve para nada na vida. Venha se tornar o herói protagonista dessa jornada ÉPICA!</p>
                </div>
            </div>

            <section className="container reinos-container">
                <h2 className="reinos-title">Desbrave os reinos e <br />conquiste novos territórios!</h2>

                <HomeCarousel />


                
            </section>


        </div>
    )

}