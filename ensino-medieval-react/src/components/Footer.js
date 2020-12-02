import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";
import IconeIniciar from "../assets/img/play-button.png";

export default function Footer() {
    return (
        <footer className="container footer">
            <div className="content">
                <img src={Logo} alt="Logo do ensino medieval" className="logo-footer" />
                <div className="footer-info">
                    <div className="info">
                        <ul className="footer-links">
                            <li>
                                <Link className="footer-link" to="/sobre">Sobre</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/ranking">Ranking</Link>
                            </li>
                            <li>
                                <Link className="footer-link" to="/">Cadastro</Link>
                            </li>
                            <li>
                                <Link className="footer-link"to ="/login">Entrar</Link>
                            </li>
                        </ul>

                        <p class="copyright">2020 © Todos os direitos reservados</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}