import * as S from './style-components';
import Trofeu from '../assets/icons/trophy.svg';

export default function Posicao({posicao, objPlayer}) {
    return (
        <S.objPosition>
            <p>{posicao}</p>
            <img src={Trofeu}></img>
            <div>
            <div>{objPlayer.name}</div>
            <div>{objPlayer.classe}</div>
            </div>
            <div>{objPlayer.sala}</div>
            <p>{objPlayer.pontuacao}</p>                         
        </S.objPosition>
    )
}