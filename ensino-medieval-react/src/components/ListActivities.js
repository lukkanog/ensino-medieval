import * as S from './style-components';

export default function ListActivities({ arrayListsAtividades, width, display }) {
    return (
        <S.listActivities style={display === true ? { display: 'block' } : { display: 'none' }}>
            {
                arrayListsAtividades.map((item) => {
                    return (
                        <S.ItemList>
                            <p>{item.title}</p>
                            <p>{item.data}</p>
                            <S.pPontuacao>{item.pontuacao}</S.pPontuacao>
                        </S.ItemList>
                    )
                })
            }
        </S.listActivities>
    )
}