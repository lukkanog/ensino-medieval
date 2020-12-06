import * as S from './style-components';
import SearchIcon from '../assets/icons/Search.svg';

export default function SearchRanking({text, colorBar}) {
    return (   
        <S.Search style={{borderBottom: `2px solid ${colorBar}`}}>
            <img src={SearchIcon} alt="Busca"/>
            <p>{text}</p>
        </S.Search>
    )
}