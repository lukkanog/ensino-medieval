import React, { useState } from "react";
import ReinoExactus from "../assets/img/exatas.svg";
import ReinoNatura from "../assets/img/natura.svg";
import ReinoLinguagens from "../assets/img/linguagens.svg";
import ReinoHumanas from "../assets/img/humanas.svg";
import ReinoSocio from "../assets/img/socioemocional.svg";
// import { Link } from "react-router-dom";

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
        // <div className="reinos">
        //     <div className="reino linguagens">
        //         <img src={ReinoLinguagens} alt="" className="reino-image" style={{ filter: `grayscale(${100 - getOpacity(nivelLinguagens)}%)` }} />
        //         <p className="reino-status">{`${nivelLinguagens}%`}</p>
        //     </div>
        //     <div className="reino socioemocional">
        //         <img src={ReinoSocio} alt="" className="reino-image" style={{ filter: `grayscale(${100 - getOpacity(nivelSocio)}%)` }} />
        //         <p className="reino-status">{`${nivelSocio}%`}</p>
        //     </div>
        //     <div className="reino exatas">
        //         <img src={ReinoExactus} alt="" className="reino-image" style={{ filter: `grayscale(${100 - getOpacity(nivelExatas)}%)` }} />
        //         <p className="reino-status">{`${nivelExatas}%`}</p>
        //     </div>
        //     <div className="reino humanas">
        //         <img src={ReinoHumanas} alt="" className="reino-image" style={{ filter: `grayscale(${100 - getOpacity(nivelHumanas)}%)` }} />
        //         <p className="reino-status">{`${nivelHumanas}%`}</p>
        //     </div>
        //     <div className="reino natura">
        //         <img src={ReinoNatura} alt="" className="reino-image" style={{ filter: `grayscale(${100 - getOpacity(nivelNatura)}%)` }} />
        //         <p className="reino-status">{`${nivelNatura}%`}</p>
        //     </div>
        // </div>

        <div className="reinos">
            <div className="reino linguagens">
                <img src={ReinoLinguagens} alt="" className="reino-image" style={{ opacity: `${getOpacity(nivelLinguagens)}%` }} />
                <p className="reino-status">{`${nivelLinguagens}%`}</p>
            </div>
            <div className="reino socioemocional">
                <img src={ReinoSocio} alt="" className="reino-image" style={{ opacity: `${getOpacity(nivelSocio)}%` }} />
                <p className="reino-status">{`${nivelSocio}%`}</p>
            </div>
            <div className="reino exatas">
                <img src={ReinoExactus} alt="" className="reino-image" style={{ opacity: `${getOpacity(nivelExatas)}%` }} />
                <p className="reino-status">{`${nivelExatas}%`}</p>
            </div>
            <div className="reino humanas">
                <img src={ReinoHumanas} alt="" className="reino-image" style={{ opacity: `${getOpacity(nivelHumanas)}%` }} />
                <p className="reino-status">{`${nivelHumanas}%`}</p>
            </div>
            <div className="reino natura">
                <img src={ReinoNatura} alt="" className="reino-image" style={{ opacity: `${getOpacity(nivelNatura)}%` }} />
                <p className="reino-status">{`${nivelNatura}%`}</p>
            </div>
        </div>
    )
}