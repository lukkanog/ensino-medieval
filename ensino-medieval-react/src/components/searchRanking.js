import * as S from './style-components';
import SearchIcon from '../assets/icons/Search.svg';

export default function Search({ text, colorBar }) {
    return (
        <S.Search style={{ borderBottom: `3px solid ${colorBar}` }}>
            <img src={SearchIcon} alt="Busca" />
            <input placeholder={text}></input>
        </S.Search>
    )
}