import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    background-color: #F8EDE3; 
    border-radius: 20px;
    box-shadow: inset 8px 8px 15px #D1C4B7, inset -8px -8px 15px #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: flex-end;

    input {
        width: 100%;
        height: 100%;
        background-color: #F8EDE3;
        border: none;
        border-radius: 20px;
        padding: 0 20px;
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        color: #b87333; 
        text-align: right;
    }
`