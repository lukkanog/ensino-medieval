import styled from 'styled-components';

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
    padding: 2px 4px ;    
    margin-top: -4%; 
`

export const MenuContentChoice = styled.div`
    height: 95%;
    width: 47%;
    border-radius: 6px;       
    background-color: #4c2e12;
    display: flex;
    justify-content: center;
    align-items: center;      
    flex-direction: row;
    cursor: pointer;
    p {
        width: 40%;
        font-size: 1.5em;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: bold; 
        color: #edc7a5;
    };    
`

export const Img = styled.img`
    width: 15%;    
    margin-right: 5%;
`;