import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import IconeIniciar from "../assets/img/play-button.png";
import IconeLogout from "../assets/img/logout.png";


export default function Header(props) {

    const [header, setHeader] = useState(false);

    const changeHeader = () => {
        if (window.scrollY > 80) {
            setHeader(true);
        } else {
            setHeader(false);
        }
    }

    window.addEventListener("scroll", changeHeader);

    return (
        <header className={`home-header container ${props.fixed ? header ? "fixed active" : "fixed" : null}`}>
            <nav className="content home-nav">
                <Link to="/">
                    <img src={Logo} alt="Logo do Ensino Medieval" className="header-logo" />
                </Link>
                {props.logado ?

                    <ul className="logado menu-options">
                        <li className="menu-item">
                            <Link className="menu-link" to="/mapa">Reinos</Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to="/missoes">Missões</Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link iniciar" to="/">
                                <p>Sair</p>
                                <img alt="" src={IconeLogout} className="play-button" />
                            </Link>
                        </li>

                    </ul>

                    :
                    <ul className="menu-options">
                        <li className="menu-item">
                            <Link className="menu-link" to="/sobre">Sobre</Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link" to="/ranking">Ranking</Link>
                        </li>
                        <li className="menu-item">
                            <Link className="menu-link iniciar" to="/login">
                                <img alt="" src={IconeIniciar} className="play-button" />
                                <p>Iniciar</p>
                            </Link>
                        </li>
                    </ul>
                }
            </nav>
        </header>
    )
}