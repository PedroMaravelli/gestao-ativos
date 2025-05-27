// src/components/RedeForm.jsx
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

export const CadastroRedes = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    tipo_equipamento: '',
    marca: '',
    modelo: '',
    numero_serie: '',
    endereco_ip: '',
    endereco_mac: '',
    localizacao: '',
    status: '',
    versao_firmware: '',
    responsavel: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

   const handleSubmit = async (e) => {
     e.preventDefault();
    

    try {
      await axios.post('http://localhost:3000/rede', formData);
      
      navigate('/ativos/redes');
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
        <Title>Cadastro de Redes</Title>
        <BackButton onClick={() => navigate('/')}>← Voltar para Home</BackButton>
        <form onSubmit={handleSubmit}>
            <FormGroup>
            <Label>Tipo de Equipamento</Label>
            <Input name="tipo_equipamento" value={formData.tipo_equipamento} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Marca</Label>
            <Input name="marca" value={formData.marca} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Modelo</Label>
            <Input name="modelo" value={formData.modelo} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Número de Série</Label>
            <Input name="numero_serie" value={formData.numero_serie} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Endereço IP</Label>
            <Input name="endereco_ip" value={formData.endereco_ip} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Endereço MAC</Label>
            <Input name="endereco_mac" value={formData.endereco_mac} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Localização</Label>
            <Input name="localizacao" value={formData.localizacao} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Status</Label>
            <Input name="status" value={formData.status} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Versão do Firmware</Label>
            <Input name="versao_firmware" value={formData.versao_firmware} onChange={handleChange} required />
            </FormGroup>
            <FormGroup>
            <Label>Responsável</Label>
            <Input name="responsavel" value={formData.responsavel} onChange={handleChange} required />
            </FormGroup>
            <Button type="submit">Cadastrar</Button>
        </form>
        </Container>
    </div>
  );
};
