import axios from "axios";


const api = axios.create({
  baseURL: "http://localhost:3000/", // Altere para a URL do seu backend
  headers: {
    "Content-Type": "application/json",
  },
});

// Função para buscar todos os hardwares
export const getHardware = () => api.get("/hardware");

// Função para buscar todos os softwares
export const getSoftware = () => api.get("/software");

// Função para buscar todas as redes
export const getRede = () => api.get("/redes");

export default api;
