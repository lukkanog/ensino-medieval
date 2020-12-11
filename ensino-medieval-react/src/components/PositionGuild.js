import FaixaRanking from '../assets/icons/faixa-ranking.svg';
import * as S from './style-components';
import logoGuild from '../assets/icons/logo-guild.svg';
import StarIcon from '../assets/icons/star-icon.svg';

const objPositionGuild = {
    posicao: '5°',
    img: '../assets/icons/eu.svg',
    name: 'Fanrofeiros do Leste',
    sala: '3ºD',
    classificacao: 'Prata',
    pontuacao: 128360
}


export default function PositionGuild() {
    return (
        <S.MyGuildRankingFaixa imgUrl={FaixaRanking}>
            <S.FaixaContent>
                <S.MyGuildRankingPosition>
                    <p>{objPositionGuild.posicao}</p>
                    <img src={logoGuild} alt="Imagem da Guilda" />
                    <p>{objPositionGuild.name}</p>
                </S.MyGuildRankingPosition>
                <S.MyGuildRankingClassificacao>
                    <img src={StarIcon} alt="Estrela de prata" />
                    <p>{objPositionGuild.classificacao}</p>
                </S.MyGuildRankingClassificacao>
                <p>Clã {objPositionGuild.sala}</p>
                <p>{objPositionGuild.pontuacao}</p>
            </S.FaixaContent>
        </S.MyGuildRankingFaixa>
    )

}