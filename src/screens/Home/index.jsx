import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import banner from "../../assets/banner.png"
import { Banner, ButtonCadastro, CardAtivos, HeadCard, HomeContainer, ListaAtivos } from "./styles";
import { useEffect, useState } from "react";
import { getHardware, getRede, getSoftware } from "../../service/api";
import { useNavigate } from 'react-router-dom';


export function Home(){
    const navigate = useNavigate();
    const [hardware, setHardware] = useState([]);
    const [software, setSoftware] = useState([]);
    const [rede, setRede] = useState([]);


    useEffect(() => {
        async function fetchAtivos() {
        try {
            const [hardwareRes, softwareRes, redeRes] = await Promise.all([
            getHardware(),
            getSoftware(),
            getRede(),
            ]);
            setHardware(hardwareRes.data);
            setSoftware(softwareRes.data);
            setRede(redeRes.data);
        } catch (error) {
            console.error("Erro ao buscar ativos:", error);
        } 
        }
        fetchAtivos();
    }, []);





    return (
        
        <div>
                <Header button="none"/>
                <HomeContainer>
                    <SideBar/>
                    <Banner>
                        <img srcSet={banner} alt="" srcset="" />
                    </Banner>


                </HomeContainer>
               
                <ListaAtivos>
                    <CardAtivos>
                        <HeadCard>
                            <h4>Hardware</h4>
                            <ButtonCadastro onClick={() => navigate('/hardware/cadastro')}>Cadastrar ativo</ButtonCadastro>
                         </HeadCard>
                        <ul>
                            {hardware.map(item => (
                            <li key={item.id_hardware}>
                                {item.tipo} 
                            </li>
                            ))}
                        </ul>
                    </CardAtivos>
                    <CardAtivos>
                         <HeadCard>
                            <h4>Redes</h4>
                            <ButtonCadastro onClick={() => navigate('/redes/cadastro')}>Cadastrar ativo</ButtonCadastro>
                         </HeadCard>
                        <ul>
                            {rede.map(item => (
                            <li key={item.id_rede}>
                                {item.tipo_equipamento} 
                            </li>
                            ))}
                        </ul>
                    </CardAtivos>
                    <CardAtivos>
                         <HeadCard>
                            <h4>Software</h4>
                            <ButtonCadastro onClick={() => navigate('/software/cadastro')}>Cadastrar ativo</ButtonCadastro>
                         </HeadCard>
                        <ul>
                            {software.map(item => (
                            <li key={item.id_software}>
                                {item.nome} 
                            </li>
                            ))}
                        </ul>
                    </CardAtivos>

                </ListaAtivos>
            

            
           
        </div>
    )
}