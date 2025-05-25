import logo from "../../assets/logo.png"
import { HeaderContainer } from "./styles"

export function Header(){
    
    return (
        <HeaderContainer>
            <img srcSet={logo} alt="" srcset="" />

        </HeaderContainer>
    )
}