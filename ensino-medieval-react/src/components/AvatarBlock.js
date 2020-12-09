import React, { useState } from "react";
import Maga from "../assets/img/mago.svg";
import UserIcon from "../assets/img/user-orange.png";
import EditIcon from "../assets/img/editar-icone.png";
import EyeIcon from "../assets/img/eye-icon.svg";
import FaceIcon from "../assets/img/face-icon.svg";
import ClassIcon from "../assets/img/classe-icon.svg";
import HairIcon from "../assets/img/hair-icon.svg";
import SkinIcon from "../assets/img/skin-icon.svg";
import Eye from "../assets/img/olho-1.svg";
import EyeBrow from "../assets/img/sobrancelha.svg";


export default function AvatarBlock() {

    const [opcaoPersonagem, setOpcaoPersonagem] = useState('eye');
    // const [opcaoinventario, setOpcaoInventario] = useState('medalhas');

    return (

        <div className="content wooden-card profile-box">
            <div className="card-header">
                <img src={UserIcon} alt="" className="title-icon" />
                <div className="title-group">
                    <p className="card-subtitle">Meu Avatar</p>
                    <h2 className="card-title">Claudete</h2>
                </div>
                <button className="edit-button">
                    <img src={EditIcon} alt="Editar nome" className="edit-icon" />
                </button>
            </div>

            <div className="card-content">
                <div className="user-info">
                    <div className="info-group">
                        <p className="info-description">Frase</p>
                        <p className="info-value">"Lorem Ipsum Dolor Sit Amet"</p>
                    </div>
                    <div className="info-group">
                        <p className="info-description">Classe</p>
                        <p className="info-value">Mago</p>
                    </div>
                    <div className="info-group">
                        <p className="info-description">Clã</p>
                        <p className="info-value">3º ano D</p>
                    </div>
                    <div className="info-group">
                        <p className="info-description">Guilda</p>
                        <p className="info-value">Fanrofeiros do leste</p>
                    </div>
                </div>

                <div className="avatar-group">
                    <img src={Maga} alt="Seu avatar" className="avatar" />

                    <div className="edit-avatar">
                        <div className="edit-options">
                            <div onClick={() => setOpcaoPersonagem("eye")} className={`edit-option ${opcaoPersonagem === 'eye' ? 'active-option' : null}`}>
                                <img src={EyeIcon} alt="Olhos" className="option-icon" />
                            </div>
                            <div onClick={() => setOpcaoPersonagem("hair")} className={`edit-option ${opcaoPersonagem === 'hair' ? 'active-option' : null}`}>
                                <img src={HairIcon} alt="Cabelo" className="option-icon" />
                            </div>
                            <div onClick={() => setOpcaoPersonagem("face")} className={`edit-option ${opcaoPersonagem === 'face' ? 'active-option' : null}`}>
                                <img src={FaceIcon} alt="Face" className="option-icon" />
                            </div>
                            <div onClick={() => setOpcaoPersonagem("skin")} className={`edit-option ${opcaoPersonagem === 'skin' ? 'active-option' : null}`}>
                                <img src={SkinIcon} alt="Cor de Pele" className="option-icon" />
                            </div>
                            <div onClick={() => setOpcaoPersonagem("hat")} className={`edit-option ${opcaoPersonagem === 'hat' ? 'active-option' : null}`}>
                                <img src={ClassIcon} alt="Chapéu" className="option-icon" />
                            </div>
                        </div>

                        <div className="edit-items">
                            <div className="items-group">
                                <p className="items-name">Olhos</p>
                                <div className="items">
                                    <img src={Eye} alt="" className="item active-option" />
                                    <img src={Eye} alt="" className="item" />
                                    <img src={Eye} alt="" className="item" />
                                    <img src={Eye} alt="" className="item" />
                                    <img src={Eye} alt="" className="item" />
                                </div>
                            </div>
                            <div className="items-group">
                                <p className="items-name">Sobrancelhas</p>
                                <div className="items">
                                    <img src={EyeBrow} alt="" className="item active-option" />
                                    <img src={EyeBrow} alt="" className="item" />
                                    <img src={EyeBrow} alt="" className="item" />
                                    <img src={EyeBrow} alt="" className="item" />
                                    <img src={EyeBrow} alt="" className="item" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}