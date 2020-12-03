import * as S from './style-components';
import Trofeu from '../assets/icons/trophy.svg';

export default function RankingTop({ posicao, objPlayer }) {
    return (        
        <S.positionTop>
            <p>{posicao}</p>
            <img src={Trofeu}></img>
            <div>                
                    <div>{objPlayer.name}</div>
                    <div>{objPlayer.classe}</div>                
                <div>{objPlayer.sala}</div>
            </div>
            <S.pontuacaoTop>
                <p>{objPlayer.pontuacao}</p>
            </S.pontuacaoTop>
        </S.positionTop>
    )
}