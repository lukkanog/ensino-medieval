import * as S from './style-components';
import BtnVerMais from './btnVerMais';
import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function GuildEnter(code) {
    const history = useHistory();
    const [codeTest, setCodeTest] = useState(String);        
    
    function handleEntrar() {
        setCodeTest('XXX');        
        localStorage.setItem('code','XXX');
        window.location.reload();
        
    }        
    return (
        <S.ContainerGuildEnter>
            <S.CardGuildEnter>
                <h2> Criar Guilda </h2>
                <p> Envie uma carta para solicitar a criação de uma guilda com seus parceiros</p>
                <BtnVerMais texto="Mandar uma carta" />
            </S.CardGuildEnter>
            <S.CardGuildEnter>
                <h2>Ingressar em uma Guilda </h2>
                <div>
                    <p> Insira abaixo o código da guilda que você quer entrar: </p>
                    <input></input>
                </div>
                <BtnVerMais codeCallback={() => handleEntrar()}  texto="Entrar" />
            </S.CardGuildEnter>
        </S.ContainerGuildEnter>
    )
}