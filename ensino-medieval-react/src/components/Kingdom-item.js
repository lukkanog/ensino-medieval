import { useEffect, useState } from 'react';
import ListActivities from './ListActivities';
import * as S from './style-components';

const arrayListsAtividades = [
    {
        title: 'Atividade avaliativa',
        data: '07/11',
        pontuacao: '120'
    },
    {
        title: 'Atividade avaliativa',
        data: '07/11',
        pontuacao: '120'
    },
    {
        title: 'Atividade avaliativa',
        data: '07/11',
        pontuacao: '120'
    },
    {
        title: 'Atividade avaliativa',
        data: '07/11',
        pontuacao: '120'
    },
    {
        title: 'Atividade avaliativa',
        data: '07/11',
        pontuacao: '120'
    },
]

export default function KingdomItem({ objReino, backgroundColor }) {
    const [displayList, setDisplayList] = useState(Boolean);
    return (
        <S.ContentMissoes>
            <S.objKingdomItem onClick={() => { setDisplayList(!displayList) }} style={{ backgroundColor: `#${backgroundColor}` }}>
                <img src={objReino.img} alt="Ícone do Reino"></img>
                <div>
                    {objReino.title == null ? "" : <div>{objReino.title}</div>}
                </div>
                <S.pontuacao>Total<p>{objReino.pontuacao}</p></S.pontuacao>
            </S.objKingdomItem>
            <ListActivities display={displayList} arrayListsAtividades={arrayListsAtividades} />
        </S.ContentMissoes>
    )
}