import React from "react";
import "../pages/Map/map.css";
import IconeAvatar from "../assets/img/user.png";
import IconeTrofeu from "../assets/img/trophy.png";
import iconeMissoes from "../assets/img/target.png";
import IconeEscudo from "../assets/img/shield.png";
import { Link } from "react-router-dom";
import ReactTooltip from 'react-tooltip';


export default function GameOptions(){
    return(
        <div className="game-options">
            <Link className="game-option" data-for="options-tooltip" data-tip="Meu Perfil">
                <img src={IconeAvatar} alt="" className="game-option-icon"/>
            </Link>
            <Link className="game-option" data-for="options-tooltip" data-tip="Minhas Missões">
                <img src={iconeMissoes} alt="" className="game-option-icon"/>
            </Link>
            <Link to="/ranking" className="game-option" data-for="options-tooltip" data-tip="Ranking">
                <img src={IconeTrofeu} alt="" className="game-option-icon"/>
            </Link>
            <Link className="game-option" data-for="options-tooltip" data-tip="Guildas">
                <img src={IconeEscudo} alt="" className="game-option-icon"/>
            </Link>

            <ReactTooltip
                className="tooltip"
                id="options-tooltip"
                place="left"
                backgroundColor="#66350C00"
                effect="solid"
            />

        </div>
    )
}