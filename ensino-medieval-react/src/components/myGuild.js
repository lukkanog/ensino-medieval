import { React, useState, useEffect } from 'react';
import * as S from './style-components';
import BtnVerMais from './btnVerMais';
import RankingTop from './rankingTop';
import PositionGuild from '../components/PositionGuild';
import { useHistory } from 'react-router-dom';
// Ícones
import BackGround from '../assets/icons/guild-ranking.jpg'
import Posicao from './posicao';

const objPlayerRank = {
    img: '../assets/icons/eu.svg',
    name: 'Ricardo Ribeiro',
    sala: '3ºD',
    classe: 'Mago',
    pontuacao: 1250
}

export default function MyGuild({ setDisplay }) {
    const history = useHistory();
    const [guildCodeParticipation, setguildCodeParticipation] = useState(String);
    
    function handleSair() {
        localStorage.removeItem('code'); 
        history.push('/guildas');
        history.go();
        // window.location.reload();
    }
    return (
        <S.ContainerMyGuild>
            <S.ContainerParticipantes>
                <RankingTop objPlayer={objPlayerRank} />
                <RankingTop objPlayer={objPlayerRank} />
                <RankingTop objPlayer={objPlayerRank} />
                <RankingTop objPlayer={objPlayerRank} />
                <RankingTop objPlayer={objPlayerRank} />
                <RankingTop objPlayer={objPlayerRank} />
            </S.ContainerParticipantes>

            <S.MyGuildRanking imgUrl={BackGround} >
                <h1>RANKING</h1>
                <PositionGuild />
                <S.SectionButtons>
                    <BtnVerMais texto="Ver mais" />
                    <BtnVerMais codeCallback={() => handleSair()} texto="Sair da Guilda" />
                </S.SectionButtons>
            </S.MyGuildRanking>

        </S.ContainerMyGuild>
    )
}