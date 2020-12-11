import * as S from './style-components';
import BtnVerMais from './btnVerMais';
import RankingTop from './rankingTop';
import PositionGuild from '../components/PositionGuild';
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

export default function MyGuild({ display }) {
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
                <BtnVerMais texto="Ver mais" />
            </S.MyGuildRanking>

        </S.ContainerMyGuild>
    )
}