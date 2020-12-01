import React from "react";
import Header from "../../components/Header";
import "../../assets/css/global.css";
import "./home.css";
import Logo from "../../assets/img/logo.svg";
import DesenhoMaga from "../../assets/img/maga.png";
import ReinoExactus from "../../assets/img/exatas.png"
import ReinoNatura from "../../assets/img/natura.png"
import SetaCarousel from "../../assets/img/seta-verde.png";

import {useState} from "react";
import { Link } from "react-router-dom";
// import Carousel, { arrowsPlugin, autoplayPlugin, fastSwipePlugin } from '@brainhubeu/react-carousel';
// import '@brainhubeu/react-carousel/lib/style.css';

import {Carousel} from "react-bootstrap";

// import { Carousel } from 'react-responsive-carousel';


export default function Home() {
    const {currentSlide, changeSlide} = useState(0);

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

                <div className="carousel">
                    <div className="slide-container exatas-container">
                        <div className="slide exatas-slide">
                            <img alt="Imagem do Reino Exactus" src={ReinoExactus} className="reino-image" />
                            <div className="reino-description">
                                <h3 className="slide-title">Reino Exactus</h3>
                                <p className="slide-text">As missões em Exactus exigem rápidez e raciocínio lógico, tornando você um verdadeiro mestre frio e calculista no campo das Exatas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="slide-container natura-container">
                        <div className="slide natura-slide">
                            <img alt="Imagem do Reino natura" src={ReinoNatura} className="reino-image" />
                            <div className="reino-description">
                                <h3 className="slide-title">Reino Natura</h3>
                                <p className="slide-text">As missões em Exactus exigem rápidez e raciocínio lógico, tornando você um verdadeiro mestre frio e calculista no campo das Exatas.</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div className="slide-container exatas-container">
                        <div className="slide exatas-slide">
                            <img alt="Imagem do Reino Exactus" src={ReinoExactus} className="reino-image" />
                            <div className="reino-description">
                                <h3 className="slide-title">Reino Exactus</h3>
                                <p className="slide-text">As missões em Exactus exigem rápidez e raciocínio lógico, tornando você um verdadeiro mestre frio e calculista no campo das Exatas.</p>
                            </div>
                        </div>
                    </div>

                    <div className="slide-container natura-container">
                        <div className="slide natura-slide">
                            <img alt="Imagem do Reino natura" src={ReinoNatura} className="reino-image" />
                            <div className="reino-description">
                                <h3 className="slide-title">Reino Natura</h3>
                                <p className="slide-text">As missões em Exactus exigem rápidez e raciocínio lógico, tornando você um verdadeiro mestre frio e calculista no campo das Exatas.</p>
                            </div>
                        </div>
                    </div> */}
            </section>


        </div>
    )

}