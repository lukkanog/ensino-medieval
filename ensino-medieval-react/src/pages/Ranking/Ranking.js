import "../../assets/css/global.css";
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import * as S from './ranking-css';
import './ranking.css';
import Posicao from '../../components/posicao';
import RankingTop from "../../components/rankingTop";

//#region Importação dos ícones
import Trofeu from '../../assets/icons/trophy.svg';
import StudentCap from '../../assets/icons/students-cap.svg';
import Guildas from '../../assets/icons/guildas.svg';
import Salas from '../../assets/icons/salas.svg';
//#endregion

// Objeto utilizado como referência
const objPlayerRank = {
    name: 'Ricardo Ribeiro',    
    sala: '3ºD',
    classe: 'Mago',
    pontuacao: 1250
}
let listRankings = [];

function geraRankings (objPlayerRank) {
    for (let i = 0; i < 6; i++) {
        listRankings.push(<Posicao posicao={i} objPlayer={objPlayerRank}/>)          
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
                <RankingTop posicao={1} objPlayer={objPlayerRank}/>
                <RankingTop posicao={2} objPlayer={objPlayerRank}/>
                <RankingTop posicao={3} objPlayer={objPlayerRank}/>
                {/* Sua posição */}                                         
                {/* Demais posições  */}
                <Posicao posicao={4} objPlayer={objPlayerRank}/>
                <Posicao posicao={5} objPlayer={objPlayerRank}/>
                <Posicao posicao={6} objPlayer={objPlayerRank}/>
                <Posicao posicao={7} objPlayer={objPlayerRank}/>
                <Posicao posicao={8} objPlayer={objPlayerRank}/>
                <Posicao posicao={9} objPlayer={objPlayerRank}/>
                <Posicao posicao={10} objPlayer={objPlayerRank}/>
            </S.Content>
        </div>
    )
}