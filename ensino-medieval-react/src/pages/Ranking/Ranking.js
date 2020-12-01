import "../../assets/css/global.css";
import Logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import Header from '../../components/Header';
import * as S from './ranking-css';
import './ranking.css';

export default function Ranking() {
    return (
        <div>
            <Header />
            {/* Banner  */}
            <div className="bannerRanking">
                <div className="bannerContentRanking content">
                    <S.Icon></S.Icon>                    
                    <S.Title>Ranking</S.Title>
                    <img src="../../assets/img/trophy.svg" alt="Imagem de Troféu"/>                     
                </div>
            </div>
            <S.MenuContent vertical>
                <S.MenuContentSelected></S.MenuContentSelected>
                <S.MenuContentChoice></S.MenuContentChoice>
                <S.MenuContentChoice></S.MenuContentChoice>                
            </S.MenuContent>
            {/* <S.Banner>
                <S.BannerContent>
                <S.Icon></S.Icon>                    
                    <S.Title>Ranking</S.Title>
                </S.BannerContent>
            </S.Banner> */}
        </div>
    )
}