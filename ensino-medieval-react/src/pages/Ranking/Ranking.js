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
import Salas from './../../assets/icons/salas.jpg';
import Aluno from '../../assets/icons/eu.jpg'
//#endregion

export default function Ranking() {
    const [rankingSelected, setRankingSelected] = useState(String);    
    useEffect(() => setRankingSelected('Aluno'), [])
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
                    <S.MenuContentChoice onClick={() => {setRankingSelected('Aluno')}} style={{backgroundColor : rankingSelected === 'Aluno' ? '#fb602a' : '#4c2e12'}} ><S.Img src={rankingSelected === 'Aluno' ? StudentCapSelected : StudentCapChoice}></S.Img><p>Alunos</p></S.MenuContentChoice>
                    <S.MenuContentChoice onClick={() => {setRankingSelected('Guilda')}} style={{backgroundColor : rankingSelected === 'Guilda' ? '#fb602a' : '#4c2e12'}}><S.Img src={Guildas} alt="Guildas"></S.Img><p>Guildas</p></S.MenuContentChoice>
                    <S.MenuContentChoice onClick={() => {setRankingSelected('Sala')}} style={{backgroundColor : rankingSelected === 'Sala' ? '#fb602a' : '#4c2e12'}}><S.Img src={Salas} alt="Salas"></S.Img><p>Salas</p></S.MenuContentChoice>
                </S.MenuContent>
                { rankingSelected === 'Aluno' ? <RankingAlunos /> : <div></div>}
                { rankingSelected === 'Guilda' ? <RankingGuilda /> : <div></div>}
                { rankingSelected === 'Sala' ? <RankingSalas /> : <div></div>}                
                <BtnVerMais texto="Ver mais" />
            </S.Content>
            <Footer />
        </div>
    )
}