import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import Footer from "../../components/Footer";
import KingdomItem from '../../components/Kingdom-item';
import Search from '../../components/searchRanking';


// importacação do Css
import * as S from './Missoes-css';
import "../../assets/css/global.css";

//#region Importação dos ícones
import QuestIcon from '../../assets/icons/quest.svg';
import ExactusIcon from '../../assets/icons/Reinos/exatas.svg';
import HumanusIcon from '../../assets/icons/Reinos/humanas.svg';
import LenguagtesIcon from '../../assets/icons/Reinos/linguagens.svg';
import NaturaIcon from '../../assets/icons/Reinos/natura.svg';
import SociusEmoIon from '../../assets/icons/Reinos/socioemo.svg';
import ToDo from './../../assets/icons/to-do.svg';
import Quest from '../../assets/icons/tick.svg';
import ListActivities from '../../components/ListActivities';
//#endregion
const objKingdomExactus = {
    img: ExactusIcon,
    title: 'Exactus',
    pontuacao: '980'
}

const objKingdomHumanus = {
    img: HumanusIcon,
    title: 'Humanus',
    pontuacao: '980'
}

const objKingdomLenguatges = {
    img: LenguagtesIcon,
    title: 'Lenguatges',
    pontuacao: '980'
}

const objKingdomNatura = {
    img: NaturaIcon,
    title: 'Natura',
    pontuacao: '980'
}

const objKingdomSocius = {
    img: SociusEmoIon,
    title: 'Sócius Émotionnel',
    pontuacao: '980'
}

export default function Missoes() {
    const [questSelected, setquestSelected] = useState(String);
    const [clickKingdom, setClickKingDom] = useState(Boolean);
    useEffect(() => setquestSelected('quest'), [])

    return (
        <div>
            <Header logado />
            {/* Banner */}
            <div className="bannerRanking">
                <div className="bannerContentRanking">
                    <img src={QuestIcon} alt="Missões"></img>
                    <S.Title>Missões</S.Title>
                </div>
            </div>
            <S.Content>
                {/* Escolha do ranking */}
                <S.MenuContent>
                    <S.MenuContentChoice onClick={() => { setquestSelected('toDo') }} style={{ backgroundColor: questSelected === 'toDo' ? '#fb602a' : '#4c2e12' }}><S.Img src={ToDo} alt="toDo"></S.Img><p>À Fazer</p></S.MenuContentChoice>
                    <S.MenuContentChoice onClick={() => { setquestSelected('quest') }} style={{ backgroundColor: questSelected === 'quest' ? '#fb602a' : '#4c2e12' }} ><S.Img src={Quest}></S.Img><p>Realizadas</p></S.MenuContentChoice>
                </S.MenuContent>
                <Search text="Pesquisar" colorBar='#fb602a' />
                <KingdomItem onClick={() => { setClickKingDom(true) }} objReino={objKingdomExactus} backgroundColor="efebe7" />
                {clickKingdom === true ? <ListActivities /> : ''}
                <KingdomItem objReino={objKingdomHumanus} backgroundColor="efebe7" />
                <KingdomItem objReino={objKingdomLenguatges} backgroundColor="efebe7" />
                <KingdomItem objReino={objKingdomNatura} backgroundColor="efebe7" />
                <KingdomItem objReino={objKingdomSocius} backgroundColor="efebe7" />
            </S.Content>
            <Footer />
        </div>
    )
}