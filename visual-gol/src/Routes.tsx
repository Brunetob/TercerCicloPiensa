// src/Routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import VisualizarGoles from './pages/VisualizarGoles';

const AppRoutes: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="./" element={<App />} />
                <Route path="./pages/VisualizarGoles.tsx" element={<VisualizarGoles />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
