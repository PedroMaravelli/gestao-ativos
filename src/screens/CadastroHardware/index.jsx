// src/components/HardwareForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  BackButton
} from './styles';
import { Header } from '../../components/Header';
import { SideBar } from '../../components/SideBar';
import axios from 'axios';

export const CadastroHardware = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    numero_ativo: '',
    tipo: '',
    modelo: '',
    marca: '',
    processador: '',
    ram: '',
    armazenamento: '',
    data_aquisicao: '',
    fornecedor: '',
    localizacao: '',
    usuario_responsavel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
     e.preventDefault();
    

    try {
        await axios.post('http://localhost:3000/hardware', formData);
        
        navigate('/ativos/hardware');
    } catch (error) {
        console.error('Erro ao enviar dados:', error);
        alert('Erro ao cadastrar equipamento.');
    } 
  };

  return (
    <div>
        <Header button="none"/>
        <SideBar/>

        <Container>
        <Title>Cadastro de Hardware</Title>
        <BackButton onClick={() => navigate('/')}>← Voltar para Home</BackButton>
        <form onSubmit={handleSubmit}>
            <FormGroup>
            <Label>Número do Ativo</Label>
            <Input name="numero_ativo" value={formData.numero_ativo} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Tipo</Label>
            <Input name="tipo" value={formData.tipo} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Modelo</Label>
            <Input name="modelo" value={formData.modelo} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Marca</Label>
            <Input name="marca" value={formData.marca} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Processador</Label>
            <Input name="processador" value={formData.processador} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>RAM</Label>
            <Input name="ram" value={formData.ram} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Armazenamento</Label>
            <Input name="armazenamento" value={formData.armazenamento} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Data de Aquisição</Label>
            <Input type="date" name="data_aquisicao" value={formData.data_aquisicao} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Fornecedor</Label>
            <Input name="fornecedor" value={formData.fornecedor} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Localização</Label>
            <Input name="localizacao" value={formData.localizacao} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Usuário Responsável</Label>
            <Input name="usuario_responsavel" value={formData.usuario_responsavel} onChange={handleChange} required />
            </FormGroup>
            <Button type="submit">Cadastrar</Button>
        </form>
        </Container>
    </div>
  );
};
