import { React, useEffect, useState } from 'react';
import * as S from './style-components';

export default function BtnVerMais({ codeCallback, texto }) {    
    const [codeTest, setCodeTest] = useState(String);    
    
    return (
        <S.BtnVerMais onClick={codeCallback}>{texto}</S.BtnVerMais>
    )
}