// VisualizarGoles.tsx

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


/*// VisualizarGoles.tsx
import React, { useState } from 'react';
import GolList from '../components/GolList';
//import { formatGolData, Gol } from '../api/formatdata';

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

export default VisualizarGoles;*/