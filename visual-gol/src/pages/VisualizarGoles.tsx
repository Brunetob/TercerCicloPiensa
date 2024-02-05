// VisualizarGoles.tsx


/*/ VisualizarGoles.tsx
import React, { useEffect, useState } from 'react';
import { Gol, gol as golApi } from '../api/gol';

interface VisualizarGolesProps {}

const VisualizarGoles: React.FC<VisualizarGolesProps> = () => {
  const [goles, setGoles] = useState<Gol[]>([]);

  useEffect(() => {
    // Llamada a la API cuando el componente se monta
    golApi.getAll()
      .then(data => {
        setGoles(data); // Actualiza el estado con los datos de la API
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // El segundo parámetro [] asegura que useEffect solo se ejecute una vez al montar el componente

  return (
    <div>
      <h2>Visualizar Goles</h2>
      <ul>
        {goles.map(gol => (
          <li key={gol.id}>
            Número de Gol: {gol.gol_number}, Timestamp: {gol.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VisualizarGoles;*/



import React, { useState } from 'react';
import GolList from '../components/GolList';

const VisualizarGoles: React.FC = () => {
  const [mostrarGoles, setMostrarGoles] = useState(false);

  return (
    <div>
      <h1>Visualizar Goles</h1>
      <button onClick={() => setMostrarGoles(!mostrarGoles)}>
        {mostrarGoles ? 'Ocultar Goles' : 'Mostrar Goles'}
      </button>
      {mostrarGoles && <GolList />}
    </div>
  );
};

export default VisualizarGoles;