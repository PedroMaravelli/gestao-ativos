import React, { useState } from 'react';
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  CadastroSoft,
  BackButton
} from './styles';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const CadastroSoftware = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    versao: '',
    fornecedor: '',
    codigo_licenca: '',
    data_aquisicao: '',
    data_expiracao: '',
    departamento: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

    try {
        await axios.post('http://localhost:3000/software', formData);
        navigate('/ativos/softeare');
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        alert('Erro ao cadastrar equipamento.');
    } 
    };

  return(
    <CadastroSoft> 
        <Header button="none"/>
        <SideBar/>
            <Container>
                <Title>Cadastro de Software</Title>
                <BackButton onClick={() => navigate('/')}>← Voltar para Home</BackButton>
                <form onSubmit={handleSubmit}>
                    <FormGroup>
                    <Label>Nome</Label>
                    <Input name="nome" value={formData.nome} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                    <Label>Versão</Label>
                    <Input name="versao" value={formData.versao} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                    <Label>Fornecedor</Label>
                    <Input name="fornecedor" value={formData.fornecedor} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                    <Label>Código da Licença</Label>
                    <Input name="codigo_licenca" value={formData.codigo_licenca} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                    <Label>Data de Aquisição</Label>
                    <Input type="date" name="data_aquisicao" value={formData.data_aquisicao} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                    <Label>Data de Expiração</Label>
                    <Input type="date" name="data_expiracao" value={formData.data_expiracao} onChange={handleChange} required />
                    </FormGroup>
                    <FormGroup>
                    <Label>Departamento</Label>
                    <Input name="departamento" value={formData.departamento} onChange={handleChange} required />
                    </FormGroup>
                    <Button type="submit">Cadastrar</Button>
                </form>
                </Container>
    </CadastroSoft>
    );
};