// src/services/teamService.ts
import { AxiosResponse } from 'axios';
import { useApi } from '../contexts/ApiContext';

export interface Team {
  id: number;
  name: string;
  goals: number;
}

export const fetchTeamByName = async (name: string): Promise<AxiosResponse<Team | undefined>> => {
  const { api } = useApi();
  try {
    const response = await api.get(`/teams/${name}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el equipo por nombre', error);
    return Promise.reject(error);
  }
};

export const fetchAllTeams = async (): Promise<AxiosResponse<Team[]>> => {
  const { api } = useApi();
  try {
    const response = await api.get('/teams/all');
    return response.data;
  } catch (error) {
    console.error('Error al obtener todos los equipos', error);
    return Promise.reject(error);
  }
};

// Puedes agregar más funciones para otras operaciones CRUD según sea necesario
