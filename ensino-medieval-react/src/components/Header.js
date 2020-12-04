import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import IconeIniciar from "../assets/img/play-button.png";

export default function Header() {
    return (
        <header className="home-header container">
            <nav className="content home-nav">
                <Link to="/">
                    <img src={Logo} alt="Logo do Ensino Medieval" className="header-logo" />
                </Link>
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
            </nav>
        </header>
    )
}