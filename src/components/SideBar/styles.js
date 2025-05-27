import styled from "styled-components"

export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 15vw;        
    height: 100vh;
    width: ${props => (props.isOpen ? "15vw" : "50px")};
    transition: width 0.3s ease;
    overflow: hidden;
    background-color: #5C5C5C;
    z-index: 999;
    color: white;
    font-size: 1.2rem;


    a{
        display: flex;
        gap: 10px;
        padding-bottom: 10px;
        justify-content: center;
        margin-top: 1.2rem;

        border-bottom: 1px solid white;
        width: 100%;
        text-decoration:none;
        color: white;

        &:hover{
            color:#C3C1C1
        }
    }
`