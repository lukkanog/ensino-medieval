import styled from 'styled-components';

export const Icon = styled.div`
    background-image: url("../../assets/img/trophy.svg");    
    width: 200px;
    height: 200px;
    background-position: center;      
    @media only screen and (max-width:800px){
        height: 150px;
        width: 150px;
    }
`

export const Title = styled.h1`
    color: #ffc58f;
    font-size: 4em;
    @media only screen and (max-width:800px){
        font-size: 3em;
    }
`

export const Content = styled.div`
    width: 100%;   
    height: auto; 
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2%;
`

export const MenuContent = styled.div`
    height: 100px;
    width: 800px;
    background-color: #4c2e12;
    border-radius: 6px;   
    display: flex;    
    align-items: center; 
    flex-direction: row;    
    justify-content: space-between;
    padding: 2px;    
    margin-top: -3%; 
    @media only screen and (max-width:940px){
        width: 75%;        
    } 
    @media only screen and (max-width:600px){
        margin-top: -40px;
        height: 80px;        
    }  
    @media only screen and (max-width:760px){
        height: 85px;        
    }  
`

export const MenuContentChoice = styled.div`
    height: 95%;
    width: 33%;
    border-radius: 6px;       
    background-color: #4c2e12;
    display: flex;
    justify-content: center;
    align-items: center;    
    flex-direction: row;
    cursor: pointer;
    p {
        width: 30%;
        font-size: 1.5em;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold; 
        color: #edc7a5;
    };  
    @media only screen and (max-width:940px){
        p {            
            font-size: 18px;
        }
        width: 30%;
    } 
    @media only screen and (max-width:600px){
        p {
            font-size: 14px;
        }        
        width: 150px;        
    }    
`
export const Img = styled.img`
    width: 30%;    
    margin-right: 5%;
`;

export const TitleYourPosition = styled.p`
    font-size: 26px;
    color: #4c2e12;
    font-weight: bold;
    text-align: left;
    margin-top: 3%;
    width: 40%;
    @media only screen and (max-width:1200px){
        width: 60%;        
    } 
    @media only screen and (max-width:940px){
        font-size: 22px;
    } 
    
`

// Alinhamento horizontal do top 3 - Ranking
export const RankingTopDiv = styled.div`    
    width: 100%;
    display: flex; 
    margin-top: -5%; 
    background-color: #fff9e8;
    background-image: url('../../assets/icons/banners-ranking.svg');
    min-height: 85vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    align-items: center;
    justify-content: center;  
    height: 20%;   
    z-index: -1;     

    @media only screen and (max-width:1200px){        
        margin-top: -7%;
    }   
    @media only screen and (max-width:940px){        
        margin-top: -15%;   
        min-height: 85vh;                   
    }   
    @media only screen and (max-width:800px){      
        min-height: 70vh;                   
    } 
`


