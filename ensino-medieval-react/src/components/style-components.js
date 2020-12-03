import styled from 'styled-components';

//#region Componente Posicao
export const objPosition = styled.div`
    background-color: #fb602a;
    width: 40%;
    height: 100px;
    border-radius: 8px;
    color: white;
    margin-top: 2%;
    display: flex;    
    align-items: center;
    padding: 1%;       
    img {
        height: 80%;
        margin-left: 5%;
    }       
    div {
        width: 100%;        
        font-size: 18px;
        margin: 3% 5%;
    }      
    p {
        font-size: 24px;
        width: 15%;        
    }
`
//#endregion

//#region Componente RankingTop
export const positionTop = styled.div`
    background-color: #fb602a;
    width: 20%;
    height: auto;
    border-radius: 8px;
    color: white;
    margin-top: 2%;
    display: flex;    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1%;       
    img {
        width: 40%;        
    }       
    div {
        width: 100%;        
        font-size: 18px;
        margin-top: 3%;
    }      
    p {
        font-size: 32px;  
        text-align: center;               
    }    
`

export const pontuacaoTop = styled.div`
    width: 100%;        
    font-size: 18px;
    margin-top: 3%;
    background-color: #66350C;
`
//#endregion