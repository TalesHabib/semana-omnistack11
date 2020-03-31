import axios from 'axios';

const api = axios.create({
  baseURL: '192.168.0.111:3333' //ip da maquina e porta do backend
});

export default api;