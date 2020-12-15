import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import GuildEnter from '../../components/GuildEnter';
import MyGuild from '../../components/myGuild';
import logoGuild from '../../assets/icons/logo-guild.svg';

// importacação do Css
import * as S from './guilda-css';
import "../../assets/css/global.css";

//#region Importação dos ícones
import GuildaIcon from '../../assets/icons/shield.svg';
//#endregion

export default function Guilda() {
    const [guildCodeParticipation, setguildCodeParticipation] = useState(localStorage.getItem('code'));

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
                    {guildCodeParticipation === 'XXX' ?
                        <S.GuildaDiv>
                            <img src={logoGuild} alt="logo-guilda" />
                            <div>
                                Minha Guilda
                            <p>Fanrofeiros do Leste</p>
                            </div>
                            <div>
                                Código
                            <p>vmo-gplk</p>
                            </div>
                            <div>
                                Pontuação
                            <p>128 360 pontos</p>
                            </div>
                            <div>
                                Nível
                            <p>Prata</p>
                            </div>
                        </S.GuildaDiv>
                        : <p> Você ainda não está em nenhuma guilda </p>}
                </S.MenuContent>
                {guildCodeParticipation == 'XXX' ? <MyGuild setDisplay='flex' /> : <GuildEnter />}
            </S.Content>
            <Footer />
        </div>
    )
}