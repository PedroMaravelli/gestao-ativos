import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { AtivoItem, Button, Card, CardDetail, CardTitle, DeleteButton, Header, Section, Title, Wrapper} from './styles';

export function ListaAtivos() {
  const [ativos, setAtivos] = useState([]);
  const navigate = useNavigate();

 useEffect(() => {
    const ativosSalvos = JSON.parse(localStorage.getItem("ativos")) || [];
    setAtivos(ativosSalvos);
  }, []);

  const excluirAtivo = (indexExcluir) => {
    const novosAtivos = ativos.filter((_, i) => i !== indexExcluir);
    setAtivos(novosAtivos);
    localStorage.setItem("ativos", JSON.stringify(novosAtivos));
  };

  const ativosPorLocal = ativos.reduce((acc, ativo, index) => {
    const local = ativo.localizacao || "Sem localização";
    if (!acc[local]) acc[local] = [];
    acc[local].push({ ...ativo, index });
    return acc;
  }, {});

  return (
    <Wrapper>
      <Header>
        <Title>Ativos</Title>
        <Button onClick={() => navigate("/cadastro")}>Cadastrar Ativo</Button>
      </Header>

      {Object.keys(ativosPorLocal).length === 0 ? (
        <p>Nenhum ativo cadastrado.</p>
      ) : (
        Object.entries(ativosPorLocal).map(([local, ativosLocal]) => (
          <Section key={local}>
            <h3>{local}</h3>
            <ul>
              {ativosLocal.map((ativo, index) => (
                 <Card key={ativo.index}>
                <CardTitle>{ativo.nome}</CardTitle>
                <CardDetail>Categoria: {ativo.categoria}</CardDetail>
                <CardDetail>Status: {ativo.status}</CardDetail>
                <CardDetail>Localização: {ativo.localizacao}</CardDetail>
                <DeleteButton onClick={() => excluirAtivo(ativo.index)}>
                  Excluir
                </DeleteButton>
              </Card>
                ))}

            </ul>
          </Section>
        ))
      )}
    </Wrapper>
  );
}