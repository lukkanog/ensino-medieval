import Posicao from './posicao';
import RankingTop from "./rankingTop";
import SearchRanking from "./searchRanking";
import * as S from '../pages/Ranking/ranking-css';
import * as C from './style-components';

// Objeto utilizado como referência
const objPlayerRank = {
    img: '../assets/icons/eu.svg',    
    sala: '3°D',
    pontuacao: 1250
}
let listRankings = [];

function geraRankings(objPlayerRank) {
    for (let i = 4; i < 10; i++) {
        listRankings.push(<Posicao posicao={i} objPlayer={objPlayerRank} backgroundColor='fb602a' />)
    }
}

export default function RankingSalas() {
    return (
        <C.DivContent>
            {/* Top 3 */}
            <S.RankingTopDiv>
                <RankingTop  posicao={"2°"} objPlayer={objPlayerRank} />
                <RankingTop  posicao={"1°"} objPlayer={objPlayerRank} />
                <RankingTop  posicao={"3°"} objPlayer={objPlayerRank} />
            </S.RankingTopDiv>
            {/* Sua posição */}
            <S.TitleYourPosition>Posição da sua Sala</S.TitleYourPosition>
            <Posicao posicao={"4°"} objPlayer={objPlayerRank} backgroundColor='1f3b20' />
            <SearchRanking text="Pesquisar" colorBar='#FA5513' />
            {/* Demais posições  */}
            <Posicao posicao={"4°"} objPlayer={objPlayerRank} backgroundColor='fb602a' />
            <Posicao posicao={"5°"} objPlayer={objPlayerRank} backgroundColor='fb602a' />
            <Posicao posicao={"6°"} objPlayer={objPlayerRank} backgroundColor='fb602a' />
            <Posicao posicao={"7°"} objPlayer={objPlayerRank} backgroundColor='fb602a' />
            <Posicao posicao={"8°"} objPlayer={objPlayerRank} backgroundColor='fb602a' />
            <Posicao posicao={"9°"} objPlayer={objPlayerRank} backgroundColor='fb602a' />
            <Posicao posicao={"10°"} objPlayer={objPlayerRank} backgroundColor='fb602a' />
        </C.DivContent>
    )
}