import { useState } from "react";
import { SideBar } from "../../components/SideBar";
import { Container, FormsContainer } from "./styles";
import {
  Input,
  Select,
  Textarea,
  Button,
  Label,
  Form
} from './styles'; // Aqui está o Form correto
import { useNavigate } from "react-router-dom";

export function CadastroAtivos() {

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    categoria: '',
    localizacao: '',
    status: '',
    numeroPatrimonio: '',
    dataAquisicao: '',
    valor: '',
    fornecedor: '',
    descricao: '',
    numeroSerie: '',
    imagem: null,
    observacoes: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'imagem' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 1. Recuperar ativos existentes do localStorage
    const ativosSalvos = JSON.parse(localStorage.getItem('ativos')) || [];

    // 2. Adicionar novo ativo
    const novoAtivo = { ...formData, id: Date.now() }; // opcional: gerar um ID

    const novosAtivos = [...ativosSalvos, novoAtivo];

    // 3. Salvar de volta
    localStorage.setItem('ativos', JSON.stringify(novosAtivos));

    // 4. Limpar formulário (opcional)
    setFormData({
      nome: '',
      categoria: '',
      localizacao: '',
      status: '',
      numeroPatrimonio: '',
      dataAquisicao: '',
      valor: '',
      fornecedor: '',
      descricao: '',
      numeroSerie: '',
      imagem: null,
      observacoes: '',
    });

    navigate('/')
  };

  return (
    <Container>
      <SideBar title="Voltar" rota="/"/>
         <FormsContainer>
            <Form  onSubmit={handleSubmit} >
                <Label>Nome do Ativo</Label>
                <Input name="nome" onChange={handleChange} required />

                <Label>Categoria</Label>
                <Select name="categoria" onChange={handleChange} required>
                <option value="">Selecione...</option>
                <option>Informática</option>
                <option>Móveis</option>
                <option>Veículos</option>
                </Select>

                <Label>Localização</Label>
                <Select name="localizacao" onChange={handleChange} required>
                <option value="">Selecione...</option>
                <option>Sala 101</option>
                <option>Laboratório TI</option>
                <option>Almoxarifado</option>
                </Select>

                <Label>Status</Label>
                <Select name="status" onChange={handleChange} required>
                <option value="">Selecione...</option>
                <option>Ativo</option>
                <option>Inativo</option>
                <option>Em manutenção</option>
                <option>Descartado</option>
                </Select>

                <Label>Número de Patrimônio</Label>
                <Input name="numeroPatrimonio" onChange={handleChange} required />

                <Label>Data de Aquisição</Label>
                <Input name="dataAquisicao" type="date" onChange={handleChange} required />

                <Label>Valor</Label>
                <Input name="valor" type="number" onChange={handleChange} required/>

                <Label>Fornecedor</Label>
                <Input name="fornecedor" onChange={handleChange} required/>

                <Label>Descrição</Label>
                <Textarea name="descricao" onChange={handleChange} />

                <Label>Número de Série</Label>
                <Input name="numeroSerie" onChange={handleChange} required/>

                <Label>Imagem do Ativo</Label>
                <Input name="imagem" type="file" onChange={handleChange} />

                <Label>Observações</Label>
                <Textarea name="observacoes" onChange={handleChange} />

                <Button type="submit">Cadastrar</Button>
            </Form>
        </FormsContainer>
    </Container>
  );
}
