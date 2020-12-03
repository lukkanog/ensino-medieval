import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "../../assets/css/global.css";
import "./home.css";
import Logo from "../../assets/img/logo.svg";
import DesenhoMaga from "../../assets/img/maga.png";
import HomeCarousel from "../../components/HomeCarousel";
import Alquimista from "../../assets/img/alquimista.svg";
import Cavaleira from "../../assets/img/cavaleira.svg";
import Elfo from "../../assets/img/elfo.svg";
import Furtivo from "../../assets/img/furtivo.svg";
import Maga from "../../assets/img/mago.svg";
import Guerreiro from "../../assets/img/guerreiro.svg";
import Trofeu from '../../assets/img/trophy.png';

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
                            <Link className="button brown-button" to="/login">Iniciar</Link>
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

            <section class="container classes-container">
                <div className="content classes-content">
                    <h2 className="classes-title">Escolha sua classe!</h2>
                    <div className="classes">
                        <div className="classe">
                            <img src={Cavaleira} alt="" className="classe-image"/>
                            <h3 className="classe-name">Cavaleiro(a)</h3>
                        </div>
                        <div className="classe">
                        <img src={Maga} alt="" className="classe-image"/>
                            <h3 className="classe-name">Mago(a)</h3>
                        </div>
                        <div className="classe">
                        <div className="classe-box">
                            <img src={Furtivo} alt="" className="classe-image"/>
                        </div>
                            <h3 className="classe-name">Furtivo(a)</h3>
                        </div>
                        <div className="classe">
                        <img src={Alquimista} alt="" className="classe-image"/>
                            <h3 className="classe-name">Alquimista</h3>
                        </div>
                        <div className="classe">
                        <img src={Guerreiro} alt="" className="classe-image"/>
                            <h3 className="classe-name">Guerreiro(a)</h3>
                        </div>
                        <div className="classe">
                        <img src={Elfo} alt="" className="classe-image"/>
                            <h3 className="classe-name">Elfo(a)</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container ranking-container">
                <div className="content ranking-content">
                    <div className="title-and-icon">
                        <img src={Trofeu} alt="" className="trofeu-ranking"/>
                        <h2 className="ranking-title">Conquiste seu lugar no ranking!</h2>
                    </div>

                    <div className="ranking">
                        <div className="ranking-box">
                            <p className="ranking-position">1</p>
                            <img src={Furtivo} alt="" className="student-image"/>
                            <div className="student-textgroup">
                                <h3 className="student-name">Lucas Nogueira de Souza</h3>
                                <p className="student-description">3º ano D · Furtivo</p>
                            </div>
                        </div>
                        <div className="ranking-box">
                            <p className="ranking-position">2</p>
                            <img src={Furtivo} alt="" className="student-image"/>
                            <div className="student-textgroup">
                                <h3 className="student-name">Lucas Nogueira de Souza</h3>
                                <p className="student-description">3º ano D · Furtivo</p>
                            </div>
                        </div>
                        <div className="ranking-box">
                            <p className="ranking-position">3</p>
                            <img src={Furtivo} alt="" className="student-image"/>
                            <div className="student-textgroup">
                                <h3 className="student-name">Lucas Nogueira de Souza</h3>
                                <p className="student-description">3º ano D · Furtivo</p>
                            </div>
                        </div>
                        <div className="ranking-box">
                            <p className="ranking-position">4</p>
                            <img src={Furtivo} alt="" className="student-image"/>
                            <div className="student-textgroup">
                                <h3 className="student-name">Lucas Nogueira de Souza</h3>
                                <p className="student-description">3º ano D · Furtivo</p>
                            </div>
                        </div>
                        <div className="ranking-box">
                            <p className="ranking-position">5</p>
                            <img src={Furtivo} alt="" className="student-image"/>
                            <div className="student-textgroup">
                                <h3 className="student-name">Lucas Nogueira de Souza</h3>
                                <p className="student-description">3º ano D · Furtivo</p>
                            </div>
                        </div>
                    </div>

                    <Link className="button orange-button ranking-button" to="/ranking">Ver ranking completo</Link>


                </div>
            </section>
            
            <Footer />
        </div>
    )

}