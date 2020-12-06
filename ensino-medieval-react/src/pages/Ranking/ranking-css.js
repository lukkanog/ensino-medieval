import styled from 'styled-components';

export const Banner = styled.div`
    background-image: url("../../assets/img/banner-background.jpg");
    min-height: 85vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;        
`

export const BannerContent = styled.div`    
    min-height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;    
`

export const Icon = styled.div`
    background-image: url("../../assets/img/trophy.svg");    
    width: 200px;
    height: 200px;
    background-position: center;      
`

export const Title = styled.h1`
    color: #ffc58f;
    font-size: 4em;
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
`


