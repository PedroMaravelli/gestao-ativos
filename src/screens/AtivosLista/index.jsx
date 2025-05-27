import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ContainerAtivos, Card, ButtonDeletar } from './styles';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { useNavigate } from 'react-router-dom';


export function AtivosLista({ tipo }) {
  const [ativos, setAtivos] = useState([]);

  useEffect(() => {
    async function fetchAtivos() {
      try {
        const response = await axios.get(`http://localhost:3000/${tipo}`);
        setAtivos(response.data);
      } catch (error) {
        console.error('Erro ao buscar ativos:', error);
      }
    }

    fetchAtivos();
  }, [tipo]);

    const navigate = useNavigate();

    function voltarParaHome() {
    navigate('/');
    }
async function deletarAtivo(id) {
  try {
    await axios.delete(`http://localhost:3000/${tipo}/${id}`);
    // Atualiza o estado removendo o ativo deletado
    setAtivos(prevAtivos => prevAtivos.filter(ativo => ativo.id !== id));
  } catch (error) {
    console.error('Erro ao deletar ativo:', error);
  }
}


  function formatarData(dataString) {
    if (!dataString) return '';
    const [ano, mes, dia] = dataString.split('T')[0].split('-');
    return `${dia}/${mes}/${ano}`;
  }
 

  const renderAtivo = (ativo) => {
    if (tipo === 'hardware') {
      return (
        <Card key={ativo.id}>
          <div>

          
            <p><strong>Número do Ativo:</strong> {ativo.numero_ativo}</p>
            <p><strong>Tipo:</strong> {ativo.tipo}</p>
            <p><strong>Modelo:</strong> {ativo.modelo}</p>
            <p><strong>Marca:</strong> {ativo.marca}</p>
            <p><strong>Processador:</strong> {ativo.processador}</p>
            <p><strong>RAM:</strong> {ativo.ram}</p>
            <p><strong>Armazenamento:</strong> {ativo.armazenamento}</p>
            <p><strong>Data de Aquisição:</strong> {formatarData(ativo.data_aquisicao)}</p>
            <p><strong>Fornecedor:</strong> {ativo.fornecedor}</p>
            <p><strong>Localização:</strong> {ativo.localizacao}</p>
            <p><strong>Usuário Responsável:</strong> {ativo.usuario_responsavel}</p>
          </div>
            <ButtonDeletar onClick={() => deletarAtivo(ativo.id_hardware)}>Excluir Ativo</ButtonDeletar>


           
        </Card>
      );
    } else if (tipo === 'software') {
      return (
        <Card key={ativo.id}>
          <div>

          
            <p><strong>Nome:</strong> {ativo.nome}</p>
            <p><strong>Versão:</strong> {ativo.versao}</p>
            <p><strong>Fornecedor:</strong> {ativo.fornecedor}</p>
            <p><strong>Código da Licença:</strong> {ativo.codigo_licenca}</p>
            <p><strong>Data de Aquisição:</strong> {formatarData(ativo.data_aquisicao)}</p>
            <p><strong>Data de Expiração:</strong> {formatarData(ativo.data_expiracao)}</p>
            <p><strong>Departamento:</strong> {ativo.departamento}</p>
          </div>

          <ButtonDeletar onClick={() => deletarAtivo(ativo.id_software)}>Excluir Ativo</ButtonDeletar>

        </Card>
      );
    } else if (tipo === 'redes') {
      return (
        <Card key={ativo.id}>
          <div>
            <p><strong>Tipo de Equipamento:</strong> {ativo.tipo_equipamento}</p>
            <p><strong>Marca:</strong> {ativo.marca}</p>
            <p><strong>Modelo:</strong> {ativo.modelo}</p>
            <p><strong>Número de Série:</strong> {ativo.numero_serie}</p>
            <p><strong>Endereço IP:</strong> {ativo.endereco_ip}</p>
            <p><strong>Endereço MAC:</strong> {ativo.endereco_mac}</p>
            <p><strong>Localização:</strong> {ativo.localizacao}</p>
            <p><strong>Status:</strong> {ativo.status}</p>
            <p><strong>Versão do Firmware:</strong> {ativo.versao_firmware}</p>
            <p><strong>Responsável:</strong> {ativo.responsavel}</p>
          </div>
            <ButtonDeletar onClick={() => deletarAtivo(ativo.id_redes)}>Excluir Ativo</ButtonDeletar>

            </Card>
      );
    } else {
      return <p>Tipo inválido</p>;
    }
  };

  return (
    <div>
      <Header tipo={tipo}/>
      <Container>
        <SideBar />
        <ContainerAtivos>
            
          <h1>{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h1>
          {ativos.map((ativo) => renderAtivo(ativo))}
          <button 
                onClick={voltarParaHome} 
                style={{ 
                marginBottom: '20px', 
                padding: '10px 20px', 
                backgroundColor: '#5C5C5C', 
                fontWeight:'bold',
                fontSize:'18px',
                color: '#fff', 
                border: 'none', 
                borderRadius: '5px', 
                cursor: 'pointer' 
                }}
            >
                Voltar para Home
            </button>
        </ContainerAtivos>
      </Container>
    </div>
  );
}
