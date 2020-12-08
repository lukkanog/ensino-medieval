import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import BtnVerMais from "../../components/btnVerMais";
import RankingAlunos from "../../components/RankingAlunos";
import RankingGuilda from "../../components/RankingGuilda";
import RankingSalas from "../../components/RankingSalas";

// importacação do Css
import * as S from './ranking-css';
import "../../assets/css/global.css";
import './ranking.css';

//#region Importação dos ícones
import Trofeu from '../../assets/icons/trophy.svg';
import StudentCapSelected from '../../assets/icons/studentCapSelected.svg';
import StudentCapChoice from '../../assets/icons/studentCapChoice.svg';
import Guildas from '../../assets/icons/guildas.jpg';
import ToDo from './../../assets/icons/to-do.svg';
import Quest from '../../assets/icons/tick.svg';
//#endregion

export default function Quest() {
    const [questSelected, setquestSelected] = useState(String);    
    useEffect(() => setquestSelected('quest'), [])
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
                    <S.MenuContentChoice onClick={() => {setRankingSelected('quest')}} style={{backgroundColor : rankingSelected === 'quest' ? '#fb602a' : '#4c2e12'}} ><S.Img src={rankingSelected === 'quest' ? ToDo : StudentCapChoice}></S.Img><p>Realizadas</p></S.MenuContentChoice>
                    <S.MenuContentChoice onClick={() => {setRankingSelected('toDo')}} style={{backgroundColor : rankingSelected === 'toDo' ? '#fb602a' : '#4c2e12'}}><S.Img src={Quest} alt="toDo"></S.Img><p>À Fazer</p></S.MenuContentChoice>                    
                </S.MenuContent>    
            </S.Content>
            <Footer />
        </div>
    )
}