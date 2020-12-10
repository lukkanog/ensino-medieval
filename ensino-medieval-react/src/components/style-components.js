import styled from 'styled-components';

//#region Componente Posicao
export const objPosition = styled.div`    
    width: 40%;
    height: 100px;
    border-radius: 8px;
    color: white;
    margin-top: 2%;
    display: flex;    
    align-items: center;
    padding: 1%;       
    img {
        width: 12%;
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
    width: 100%;
    height: 10%;
    display: flex;    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;           
    background: -moz-linear-gradient(0deg, #fb602a 0%, #fb602a 50%, #fd7039 51%, #fd7039 100%);
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#fb602a), color-stop(50%,#fb602a), color-stop(51%,#fd7039), color-stop(100%,#fd7039));
    background: -webkit-linear-gradient(-45deg, #fb602a 0%,#fb602a 50%,#fd7039 51%,#fd7039 100%);
    background: -o-linear-gradient(0deg, #fb602a 0%,#fb602a 50%,#fd7039 51%,#fd7039 100%);
    background: -ms-linear-gradient(0deg, #fb602a 0%,#fb602a 50%,#fd7039 51%,#fd7039 100%);
    background: linear-gradient(90deg, #fb602a 0%,#fb602a 50%,#fd7039 51%,#fd7039 100%);    
    border-radius: 12px 12px 0 0;
    img {
        width: 60%;        
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

export const Objeto = styled.div`
    width: 15%;
    height: 10%;
    border-radius: 8px;
    color: white;
    margin: 2%;
    display: flex;    
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
        font-size: 36px;
        color: #fb602a;
    }
`

export const pontuacaoTop = styled.div`
    width: 100%;
    height: 100%;        
    font-size: 18px;
    margin-top: 10%;
    background-color: #66350C;
    text-align: center;
    font-size: 32px; 
    margin-top: 2%;
    border-radius: 0 0 8px 8px;
    p {
        color: white;
        font-size: 28px;
    }
`
//#endregion

// Componente RankingAlunos
export const DivContent = styled.div`
    width: 100%;
    z-index: -1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

// Botão Ver mais
export const BtnVerMais = styled.div`
    width: 180px;
    height: 50px;
    margin-top: 2%;
    min-height: 30px;
    min-width: 140px;    
    background-color: #F4872C;
    text-align: center;    
    display: flex;
    justify-content: center;
    align-items: center;    
    color: white;
    border-radius: 8px;
    :hover {
        opacity: 85%;
        cursor: pointer;
    }
    
`

// SearchRanking 
export const Search = styled.div`
    width: 40%;
    display: flex;
    margin-top: 2%;
    img{
        width: 1em;
        margin-right: 10px;
        opacity: 50%;
    };
    input {
        width: 100%;
        border-width:0px !important;
        border:none !important;
    };
    z-index: 1;
    `

//#region Kingdom Component
// KingdomContent
export const ContentMissoes = styled.div`
        width: 45%;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
`

// KingdomItem
export const objKingdomItem = styled.div`  
    cursor: pointer;  
    width: 100%;  
    height: 100px;
    border-radius: 8px;
    color: #5c3817;    
    display: flex;    
    align-items: center;
    padding: 2%; 
    font-weight: bold;      
    font-size: 20px;            
    img {
        width: 20%;
        margin-left: -7%;        
    }       
    div {
        width: 45%;                
        margin: 20px;
        display: flex;
        
    }          
    p {        
        color: #fb602a;
        margin-left: 12px;        
    }
`

export const pontuacao = styled.div`
    justify-content: flex-end;    
`

export const listActivities = styled.div`
    width: 90%;
    display: flex;        
    flex-direction: column;    
`

export const ItemList = styled.div`
    width: 100%;
    display: flex;    
    align-items: center;    
    justify-content: space-between;   
    margin-top: 16px;   
    p {
        color: #5c3817;
    }  
`

export const pPontuacao = styled.p`
    color: #fb602a !important;
    font-weight: bold ;
`

//#endregion

//#region GuildEnter Component
export const ContainerGuildEnter = styled.div`
    width: 80%;
    margin: 5%;    
    display: flex;
    justify-content: space-around;
    align-items: center;        
`
export const CardGuildEnter = styled.div`
    width: 38%;
    height: 280px;
    display: grid;
    grid-template-rows: 20% 1fr;
    background-color: #ffc58f;
    padding: 48px;
    border-radius: 10px;
    h2 {
        color: #5c3817;
        height: 30%; 
    }
    p{
        height: 48px;
        margin-top: 20px;       
    }      
    input {
        width: 90%;
    }

`
export const ContainerMyGuild = styled.div`
    width: 100%;
`

//#region  MyGuild Component
export const ContainerParticipantes = styled.div`
    width: 100%;
    display: flex;
    margin-top: 2%;
    margin-left: 10%;

`
