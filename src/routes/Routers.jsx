import { Route, Routes } from "react-router-dom";
import { CadastroAtivos } from "../screens/CadastroAtivos";
import { ListaAtivos } from "../screens/ListaAtivos";

export function Routers (){
    return(
        <Routes>
            
            <Route path="/cadastro" element={<CadastroAtivos />}></Route>
            <Route path="/" element={<ListaAtivos />}></Route>

        </Routes>
)
}