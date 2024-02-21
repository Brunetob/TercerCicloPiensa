// src/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8081', // Ajusta la URL base según tu configuración
});

export default api;
