import { Route, Routes } from "react-router-dom";
import { CadastroAtivos } from "../screens/CadastroAtivos";
import { ListaAtivos } from "../screens/ListaAtivos";
import { Home } from "../screens/Home";

export function Routers (){
    return(
        <Routes>
            
            <Route path="/cadastro" element={<CadastroAtivos />}></Route>
            <Route path="/lista" element={<ListaAtivos />}></Route>
            <Route path="/" element={<Home />}></Route>



            


        </Routes>
)
}