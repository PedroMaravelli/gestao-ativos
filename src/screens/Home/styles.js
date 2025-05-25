import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;


`
export const Banner = styled.div`
    position: relative;
    width: 100%;
    z-index: 1;
    max-width: 100%;  // Garante que a largura da div não ultrapasse a tela
    height: auto;
    overflow: hidden; // Impede que o conteúdo saia da tela

    img {
        width: 100%;  // A imagem ocupa toda a largura disponível
        height: auto;
        object-fit: cover; 

    }

`
export const ListaAtivos = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 8rem;
    gap: 4rem;

`
export const CardAtivos = styled.div`
    background-color: #f8f8f8;
    border-radius: 15px;
    border:1px solid grey;
    padding: 1rem;
    width: 20%;

    margin-bottom: 7rem;

    h4{
        font-size: 1.4rem;
    }
`
