import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;

    display: flex;
    align-items: center;
    justify-content: center;
`


export const Content = styled.div`
    background-color: #F8EDE3;
    width: 50%;
    padding: 20px;
    border-radius: 30px;
    box-shadow: 16px 16px 30px #D1C4B7, -16px -16px 30px #FFFFFF;
`

export const Row = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
`

export const Column = styled.div`
    display:flex;
    padding: 9px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
 
`
