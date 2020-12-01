import Header from "../../components/Header";
import "../../assets/css/global.css";
import "./home.css";
import Logo from "../../assets/img/logo.svg";
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
                            <Link className="button orange-button">Ranking</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}