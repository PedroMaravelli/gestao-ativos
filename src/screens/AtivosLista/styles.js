import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

`
export const ContainerAtivos = styled.div`
    width: 60%;
    border: 1px solid #5C5C5C;
    border-radius: 30px;
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    margin-bottom: 5rem;

`
export const Card = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;
align-items: center;

width: 80%;
border-radius: 30px;
background-color: #f8f8f8;
padding: 20px;
font-size: 1.1rem;
border: 1px solid  #5C5C5C;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);

    div{
        display: flex;
        flex-wrap: wrap;
    }

    p{
        margin-left: 3rem;
    }

`
export const ButtonDeletar = styled.button`
    width: 20%;
    background-color: red;
    color: white;
    padding: 10px;
    font-weight: bold;
    border: none;
    border-radius: 30px;
    margin-top: 30px;
    cursor: pointer;
`