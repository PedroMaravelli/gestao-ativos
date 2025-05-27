import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    
    z-index: -1;

    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    margin-bottom: 10px;
    div{
        display: flex;
        justify-content: flex-end;
        width: 50%;
    }
    img{
        width: 70px;
        height: 90px;
    }


`
export const Button = styled.button`
        display:  ${props => (props.display ? "none" : "")};;
        background-color: #5C5C5C;
        color: white;
        font-weight: bold;
        height: 50px;
        margin-left: 20rem;
        padding-left: 15px;
        padding-right: 15px;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        margin-right: 30px;

    &:hover{
        background-color:rgb(80, 80, 80);
    }

`

