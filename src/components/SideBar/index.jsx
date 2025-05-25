import { useState } from "react";
import { Container } from "./styles";



export function SideBar() {
     const [isOpen, setIsOpen] = useState(false);
    return(
        <Container  
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            isOpen={isOpen}>

             {isOpen && <div>
                    <a href="/software">
                    
                    <strong>Software</strong>
                </a >
                <a href="/rede">
                    
                    <strong>Redes</strong>
                </a >
                <a href="/hardware">
                    
                    <strong>Hardware</strong>
                </a >
                </div>}
            
        </Container>
    )
}