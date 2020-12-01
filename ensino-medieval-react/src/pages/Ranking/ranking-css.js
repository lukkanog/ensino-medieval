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
    display: grid;
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
    color: #F4872C;
    font-size: 4em;
`

export const MenuContent = styled.div`
    height: 100px;
    width: 800px;
    background-color: #66350C;
    border-radius: 6px;   
    display: flex;    
    align-items: center; 
    flex-direction: row;        
`

export const MenuContentSelected = styled.div`
    height: 100%;
    width: 30%;
    border-radius: 6px;       
    background-color: #BB671F;
`
export const MenuContentChoice = styled.div`
    height: 100%;
    width: 30%;
    border-radius: 6px;       
    background-color: #BB671F;
`


