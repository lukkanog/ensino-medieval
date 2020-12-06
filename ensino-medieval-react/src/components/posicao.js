import * as S from './style-components';
import Aluno from '../assets/icons/eu.svg';

export default function Posicao({posicao, objPlayer, backgroundColor}) {
    return (            
        <S.objPosition style={{backgroundColor: `#${backgroundColor}`}}>
            <p>{posicao}</p>
            <img src={Aluno}></img>
            <div>
            { objPlayer.name  == null ? "" : <div>{objPlayer.name}</div>}
            { objPlayer.classe == null ? "" : <div>{objPlayer.classe}</div>}
            </div>            
            { objPlayer.sala == null ? "" : <div>{objPlayer.sala}</div>}
            <p>{objPlayer.pontuacao}</p>                         
        </S.objPosition>        
    )
}