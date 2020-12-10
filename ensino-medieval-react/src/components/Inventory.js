import React, { useState, useEffect } from "react";
import SpecialIcon from "../assets/img/medalha-especial.png";
import ReinoExactus from "../assets/img/exatas.svg";
import ReinoNatura from "../assets/img/natura.svg";
import ReinoLinguagens from "../assets/img/linguagens.svg";
import ReinoHumanas from "../assets/img/humanas.svg";
import ReinoSocio from "../assets/img/socioemocional.svg";
import MedalIcon from "../assets/img/icon-medalha.png";
import MedalhaPsico from "../assets/img/Psicologia.svg";


export default function Inventory() {

    const [ opcaoinventario, setOpcaoInventario ] = useState('medalhas');
    const [ titulo, setTitulo ] = useState(String);

    useEffect(() => {
        switch (opcaoinventario) {
            case "medalhas":
                setTitulo("Medalhas Especiais");
                break;
            case "humanas":
                setTitulo("Medalhas do Reino Humanus");
                break;
            case "natura":
                setTitulo("Medalhas do Reino Natura");
                break;
            case "socioemocional":
                setTitulo("Medalhas do Reino Socius Émottionnel");  
                break;
            case "exatas":
                setTitulo("Medalhas do Reino Exactus");  
                break;
            case "linguagens":
                setTitulo("Medalhas do Reino Lenguatges");
                break;
        
            default:
                break;
        }
    })

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
                    <img 
                    onClick={() => setOpcaoInventario("medalhas")}         
                    className={opcaoinventario === "medalhas" ? "active-option inventory-option" : "inventory-option"} 
                    src={SpecialIcon} 
                    alt="" />

                    <img 
                    onClick={() => setOpcaoInventario("humanas")}          
                    className={`inventory-option ${opcaoinventario === "humanas" ? "active-option" : null}`}
                    src={ReinoHumanas} 
                    alt="" />

                    <img 
                    onClick={() => setOpcaoInventario("natura")}           
                    className={`inventory-option ${opcaoinventario === "natura" ? "active-option" : null}`}
                    src={ReinoNatura} 
                    alt="" />

                    <img 
                    onClick={() => setOpcaoInventario("socioemocional")}   
                    className={`inventory-option ${opcaoinventario === "socioemocional" ? "active-option" : null}`}
                    src={ReinoSocio} 
                    alt="" />

                    <img 
                    onClick={() => setOpcaoInventario("exatas")}           
                    className={`inventory-option ${opcaoinventario === "exatas" ? "active-option" : null}`}
                    src={ReinoExactus} 
                    alt="" />

                    <img 
                    onClick={() => setOpcaoInventario("linguagens")}       
                    className={`inventory-option ${opcaoinventario === "linguagens" ? "active-option" : null}`}
                    src={ReinoLinguagens} 
                    alt="" />
                </div>

                <div className="inventory-items">
                    <div className="inventory-header-shadow">

                        <div className="inventory-items-header">
                            <h3 className="inventory-items-title">{titulo}</h3>
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