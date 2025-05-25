import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar";
import banner from "../../assets/banner.png"
import { Banner, CardAtivos, HomeContainer, ListaAtivos } from "./styles";
import { useEffect, useState } from "react";
import { getHardware, getRede, getSoftware } from "../../service/api";


export function Home(){
    const [hardware, setHardware] = useState([]);
    const [software, setSoftware] = useState([]);
    const [rede, setRede] = useState([]);
    const [loading, setLoading] = useState(true);

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
        } finally {
            setLoading(false);
        }
        }
        fetchAtivos();
    }, []);

    if (loading) return <div>Carregando...</div>;



    return (
        
        <div>
                <Header/>
                <HomeContainer>
                    <SideBar/>
                    <Banner>
                        <img srcSet={banner} alt="" srcset="" />
                    </Banner>


                </HomeContainer>
               
                <ListaAtivos>
                    <CardAtivos>
                        <h4>Hardware</h4>
                        <ul>
                            {hardware.map(item => (
                            <li key={item.id_software}>
                                {item.nome} 
                            </li>
                            ))}
                        </ul>
                    </CardAtivos>
                    <CardAtivos>
                        <h4>Redes</h4>
                        <ul>
                            {rede.map(item => (
                            <li key={item.id_software}>
                                {item.tipo_equipamento} 
                            </li>
                            ))}
                        </ul>
                    </CardAtivos>
                    <CardAtivos>
                        <h4>Software</h4>
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