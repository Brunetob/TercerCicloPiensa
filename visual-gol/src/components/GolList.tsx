//GolList.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Gol {
  id: number;
  golNumber: number;
  timestamp: string;
}

const GolList: React.FC = () => {
  const [goles, setGoles] = useState<Gol[]>([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de goles
    axios.get('http://localhost:8081/api/gol')
      .then(response => setGoles(response.data.data))
      .catch(error => console.error('Error al obtener los goles', error));
  }, []);

  return (
    <div>
      <h2>Lista de Goles</h2>
      <ul>
        {goles.map(gol => (
          <li key={gol.id}>
            {`Gol ${gol.golNumber} - ${gol.timestamp}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GolList;


/*// GolList.tsx
import React, { useEffect, useState } from 'react';
import api from '../api/base.api';
import { formatGolData, Gol } from '../api/formatdata';

const GolList: React.FC = () => {
  const [goles, setGoles] = useState<Gol[]>([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de goles
    api.get('/gol')
      .then(response => setGoles(formatGolData(response.data.data)))
      .catch(error => console.error('Error al obtener los goles', error));
  }, []);

  return (
    <div>
      <h2>Lista de Goles</h2>
      <ul>
        {goles.map(gol => (
          <li key={gol.id}>
            {`Gol ${gol.golNumber} - ${gol.timestamp}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GolList;*/