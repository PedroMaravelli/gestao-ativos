import { Route, Routes } from "react-router-dom";


import { Home } from "../screens/Home";
import { CadastroSoftware } from "../screens/CadastroSoftware";
import { CadastroHardware } from "../screens/CadastroHardware";
import { CadastroRedes } from "../screens/CadastroRedes";
import { AtivosLista } from "../screens/AtivosLista";

export function Routers (){
    return(
        <Routes>
            


            <Route path="/" element={<Home />}></Route>
            <Route path="/software/cadastro" element={<CadastroSoftware />}></Route>
            <Route path="/hardware/cadastro" element={<CadastroHardware />}></Route>
            <Route path="/redes/cadastro" element={<CadastroRedes />}></Route>
            <Route path="/ativos/software" element={<AtivosLista tipo="software" />}></Route>
            <Route path="/ativos/hardware" element={<AtivosLista tipo="hardware" />}></Route>
            <Route path="/ativos/redes" element={<AtivosLista tipo="redes" />}></Route>








            


        </Routes>
)
}