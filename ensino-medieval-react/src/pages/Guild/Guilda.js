import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import GuildEnter from '../../components/GuildEnter';
import MyGuild from '../../components/myGuild';

// importacação do Css
import * as S from './guilda-css';
import "../../assets/css/global.css";

//#region Importação dos ícones
import GuildaIcon from '../../assets/icons/shield.svg';
//#endregion

export default function Guilda() {
    const [guildParticipation, setguildParticipation] = useState(String);
    useEffect(() => setguildParticipation('XXX'), [])
    return (
        <div>
            <Header logado />
            {/* Banner */}
            <div className="bannerRanking">
                <div className="bannerContentRanking">
                    <img src={GuildaIcon} alt="Troféu ranking"></img>
                    <S.Title>Guildas</S.Title>
                </div>
            </div>
            <S.Content>
                {/* Escolha do ranking */}
                <S.MenuContent>
                    <p> Você ainda não está em nenhuma guilda </p>
                </S.MenuContent>
                <MyGuild />
                <GuildEnter />
            </S.Content>
            <Footer />
        </div>
    )
}