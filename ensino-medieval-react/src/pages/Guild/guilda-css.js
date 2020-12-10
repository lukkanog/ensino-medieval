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
    p {
        width: 100%;
        font-size: 1.5em;
        text-align: center;
        color: #ffc58f;
    }
`
