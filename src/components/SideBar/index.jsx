import { Container } from "./styles";

import { ArrowLeft } from "lucide-react";

export function SideBar({title, rota}) {
    return(
        <Container>
            
            <a href={rota}>
                <ArrowLeft /> 
                <strong>{title}</strong>
            </a >
        </Container>
    )
}