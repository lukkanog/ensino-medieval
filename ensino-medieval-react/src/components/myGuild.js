import * as S from './style-components';
import BtnVerMais from './btnVerMais';
import RankingTop from './rankingTop';

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

        </S.ContainerMyGuild>
    )
}