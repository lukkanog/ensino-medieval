import * as S from './style-components';
import Aluno from '../assets/icons/eu.svg';
import { ReactSVG } from 'react-svg'

export default function RankingTop({ posicao, objPlayer }) {
    return (
        <S.Objeto>
            <p>{posicao}</p>
            <S.positionTop>
                <div id="alunoTeste">
                    <ReactSVG src="../assets/icons/banner.svg" />
                </div>
                <img id="aluno" src={Aluno}></img>
                <div>
                    <div>{objPlayer.name}</div>
                    <div>{objPlayer.classe}</div>
                    <div>{objPlayer.sala}</div>
                </div>
            </S.positionTop>
            <S.pontuacaoTop>
                <p>{objPlayer.pontuacao}</p>
            </S.pontuacaoTop>
        </S.Objeto>
    )
}