import logo from "../../assets/logo.png"
import { Button, HeaderContainer } from "./styles"
import { useNavigate } from "react-router-dom"

export function Header({button, tipo}){
    const navigate = useNavigate()
    
    return (
        <HeaderContainer>
            <div>
                <img srcSet={logo} alt="" srcset="" />

            </div>
            

            <Button display={button} onClick={() => navigate(`/${tipo}/cadastro`)}>Cadastrar ativo</Button>

        </HeaderContainer>
    )
}