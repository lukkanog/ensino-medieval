import "../../assets/css/global.css";
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import * as S from './ranking-css';
import './ranking.css';
import Posicao from '../../components/posicao';
import RankingTop from "../../components/rankingTop";
import Footer from "../../components/Footer";
import BtnVerMais from "../../components/btnVerMais";

//#region Importação dos ícones
import Trofeu from '../../assets/icons/trophy.svg';
import StudentCap from '../../assets/icons/students-cap.jpg';
import Guildas from '../../assets/icons/guildas.jpg';
import Salas from './../../assets/icons/salas.jpg';
import Aluno from '../../assets/icons/eu.jpg'
import SearchRanking from "../../components/searchRanking";
//#endregion

// Objeto utilizado como referência
const objPlayerRank = {
    name: 'Ricardo Ribeiro',
    sala: '3ºD',
    classe: 'Mago',
    pontuacao: 1250
}
let listRankings = [];

function geraRankings(objPlayerRank) {
    for (let i = 4; i < 10; i++) {
        listRankings.push(<Posicao posicao={i} objPlayer={objPlayerRank} backgroundColor='fb602a' />)
    }    
}


export default function Ranking() {
    return (
        <div>
            <Header />
            {/* Banner */}
            <div className="bannerRanking">
                <div className="bannerContentRanking">
                    <img src={Trofeu} alt="Troféu ranking"></img>
                    <S.Title>Ranking</S.Title>
                </div>
            </div>
            <S.Content>
                {/* Escolha do ranking */}
                <S.MenuContent>
                    <S.MenuContentSelected><S.Img src={StudentCap}></S.Img><p>Alunos</p></S.MenuContentSelected>
                    <S.MenuContentChoice><S.Img src={Guildas} alt="Guildas"></S.Img><p>Guildas</p></S.MenuContentChoice>
                    <S.MenuContentChoice><S.Img src={Salas} alt="Salas"></S.Img><p>Salas</p></S.MenuContentChoice>
                </S.MenuContent>
                {/* Top 3 */}
                <S.RankingTopDiv>
                    <RankingTop posicao={"2°"} objPlayer={objPlayerRank} />
                    <RankingTop posicao={"1°"} objPlayer={objPlayerRank} />
                    <RankingTop posicao={"3°"} objPlayer={objPlayerRank} />
                </S.RankingTopDiv>
                {/* Sua posição */}  
                <S.TitleYourPosition>Sua posição</S.TitleYourPosition>              
                <Posicao posicao={"4°"} objPlayer={objPlayerRank} backgroundColor='1f3b20'/>
                <SearchRanking text="Pesquisar" colorBar='#FA5513'/>
                {/* Demais posições  */}
                <Posicao posicao={"4°"} objPlayer={objPlayerRank} backgroundColor='fb602a'/>
                <Posicao posicao={"5°"} objPlayer={objPlayerRank} backgroundColor='fb602a'/>
                <Posicao posicao={"6°"} objPlayer={objPlayerRank} backgroundColor='fb602a'/>
                <Posicao posicao={"7°"} objPlayer={objPlayerRank} backgroundColor='fb602a'/>
                <Posicao posicao={"8°"} objPlayer={objPlayerRank} backgroundColor='fb602a'/>
                <Posicao posicao={"9°"} objPlayer={objPlayerRank} backgroundColor='fb602a'/>
                <Posicao posicao={"10°"} objPlayer={objPlayerRank} backgroundColor='fb602a'/>
                <BtnVerMais texto="Ver mais" />
            </S.Content>
            <Footer />
        </div>
    )
}