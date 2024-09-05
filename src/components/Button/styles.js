import styled from 'styled-components';

export const ButtonContainer = styled.button`
    padding: 20px;
    border-radius: 100px;
    background: #F9D5D3; 
    box-shadow: 8px 8px 15px #D1C4B7, -8px -8px 15px #FFFFFF; 
    color: #b87333; 
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    border: none;
    margin: 10px;
    
    min-width: 80px;
    min-height: 80px;

    width: 100%;
    height: auto;

    &:hover {
        box-shadow: inset 8px 8px 15px #D1C4B7, inset -8px -8px 15px #FFFFFF; 
        opacity: 0.9;
    }

    &:active {
        box-shadow: inset 8px 8px 15px #D1C4B7, inset -8px -8px 15px #FFFFFF;
    }
`