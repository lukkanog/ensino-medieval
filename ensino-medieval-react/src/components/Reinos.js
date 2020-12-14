import React, { useState } from "react";
import ReinoExactus from "../assets/img/exatas.svg";
import ReinoNatura from "../assets/img/natura.svg";
import ReinoLinguagens from "../assets/img/linguagens.svg";
import ReinoHumanas from "../assets/img/humanas.svg";
import ReinoSocio from "../assets/img/socioemocional.svg";
import { Link } from "react-router-dom";

export default function Reinos() {
    const [nivelLinguagens, setNivelLinguagens] = useState(0);
    const [nivelExatas, setNivelExatas] = useState(100);
    const [nivelHumanas, setNivelHumanas] = useState(50);
    const [nivelSocio, setNivelSocio] = useState(75);
    const [nivelNatura, setNivelNatura] = useState(100);

    const getOpacity = (nivel) => {
        return nivel > 40 ? nivel : 40;
        // return nivel
    }

    return (
        <div className="reinos">
            <Link to={"/missoes"} className="reino linguagens">
                <img src={ReinoLinguagens} alt="" className="reino-image" style={{ opacity: `${getOpacity(nivelLinguagens)}%` }} />
                <p className="reino-status">{`${nivelLinguagens}%`}</p>
            </Link>
            <Link to="/missoes" className="reino socioemocional">
                <img src={ReinoSocio} alt="" className="reino-image" style={{ opacity: `${getOpacity(nivelSocio)}%` }} />
                <p className="reino-status">{`${nivelSocio}%`}</p>
            </Link>
            <Link to="/missoes" className="reino exatas">
                <img src={ReinoExactus} alt="" className="reino-image" style={{ opacity: `${getOpacity(nivelExatas)}%` }} />
                <p className="reino-status">{`${nivelExatas}%`}</p>
            </Link>
            <Link to="/missoes" className="reino humanas">
                <img src={ReinoHumanas} alt="" className="reino-image" style={{ opacity: `${getOpacity(nivelHumanas)}%` }} />
                <p className="reino-status">{`${nivelHumanas}%`}</p>
            </Link>
            <Link to="/missoes" className="reino natura">
                <img src={ReinoNatura} alt="" className="reino-image" style={{ opacity: `${getOpacity(nivelNatura)}%` }} />
                <p className="reino-status">{`${nivelNatura}%`}</p>
            </Link>
        </div>
    )
}