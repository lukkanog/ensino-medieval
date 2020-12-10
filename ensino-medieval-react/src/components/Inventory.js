import React, { useState } from "react";
import SpecialIcon from "../assets/img/medalha-especial.png";
import ReinoExactus from "../assets/img/exatas.svg";
import ReinoNatura from "../assets/img/natura.svg";
import ReinoLinguagens from "../assets/img/linguagens.svg";
import ReinoHumanas from "../assets/img/humanas.svg";
import ReinoSocio from "../assets/img/socioemocional.svg";
import MedalIcon from "../assets/img/icon-medalha.png";
import MedalhaPsico from "../assets/img/Psicologia.svg";


export default function Inventory() {

    // const [opcaoinventario, setOpcaoInventario] = useState('medalhas');

    return (

        <div className="content wooden-card inventory-box">
            <div className="card-header">
                <img src={MedalIcon} alt="" className="title-icon" />
                <div className="title-group">
                    <h2 className="card-title">Meu Inventário</h2>
                </div>
            </div>

            <div className="card-content">
                <div className="inventory-options">
                    <img className="inventory-option" src={SpecialIcon} alt="" />
                    <img className="inventory-option" src={ReinoHumanas} alt="" />
                    <img className="inventory-option" src={ReinoNatura} alt="" />
                    <img className="inventory-option" src={ReinoSocio} alt="" />
                    <img className="inventory-option" src={ReinoExactus} alt="" />
                    <img className="inventory-option" src={ReinoLinguagens} alt="" />
                </div>

                <div className="inventory-items">
                    <div className="inventory-header-shadow">

                        <div className="inventory-items-header">
                            <h3 className="inventory-items-title">Medalhas Especiais</h3>
                            <form className="order-form">
                                <label htmlFor="order-by">Ordenar por</label>
                                <select name="order-by" id="order-by">
                                    <option value={0} className="order-by-option">Data</option>
                                    <option value={1} className="order-by-option">Valor</option>
                                    <option value={2} className="order-by-option">Raridade</option>
                                </select>
                            </form>
                        </div>
                    </div>

                    <div className="inventory-items-group">
                        <div className="inventory-item">
                            <p className="inventory-item-name">Psicologia</p>
                            <img src={MedalhaPsico} alt="" className="inventory-item-image active-option" />
                        </div>
                        <div className="inventory-item">
                        <p className="inventory-item-name">Psicologia</p>
                            <img src={MedalhaPsico} alt="" className="inventory-item-image" />
                        </div>
                        <div className="inventory-item">
                        <p className="inventory-item-name">Psicologia</p>
                            <img src={MedalhaPsico} alt="" className="inventory-item-image" />
                        </div>
                        <div className="inventory-item">
                        <p className="inventory-item-name">Psicologia</p>
                            <img src={MedalhaPsico} alt="" className="inventory-item-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}