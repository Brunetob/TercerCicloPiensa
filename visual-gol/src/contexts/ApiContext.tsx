// src/contexts/ApiContext.tsx
import React, { createContext, useContext, ReactNode } from 'react';
import axios, { AxiosInstance } from 'axios';

interface ApiContextProps {
  children: ReactNode;
}

export interface ApiContextValue {
  api: AxiosInstance;
}

const ApiContext = createContext<ApiContextValue | undefined>(undefined);

export const ApiProvider: React.FC<ApiContextProps> = ({ children }) => {
  const api = axios.create({
    baseURL: 'http://localhost:8081', // Ajusta la URL base según tu configuración
  });

  const contextValue: ApiContextValue = { api };

  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>;
};

export const useApi = (): ApiContextValue => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi debe ser utilizado dentro de un ApiProvider');
  }
  return context;
};
