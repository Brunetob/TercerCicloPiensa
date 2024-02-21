//App.tsx
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import iconoApp from './assets/images/iconoApp.webp';
import conectando from './assets/images/conectando.png';
import './App.css';
import VisualizarGoles from './pages/VisualizarGoles';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <div className="container">
        <div className="section">
          <h1 className="welcome-text">BIENVENIDOS</h1>
          <img className="logo" src={iconoApp} alt="Vite logo" />
          <div className="goal_container">
            <p className="goal-text">GOL</p>
            <p className="goal-text">NO GOL?</p>
          </div>
          <p className="description-text">
            Esta aplicación lleva el conteo de los goles anotados en un arco especial para personas con discapacidad visual
          </p>
        </div>
        <div className='bottom'>
          <img style={{width: '30%'}} src={conectando} alt="conectando" />
          <button className="begin-button"><Link to="/pages/visualizar-goles">INICIEMOS</Link></button>
        </div>
        <Routes>
          {/* Otras rutas */}
          <Route path="/pages/visualizar-goles" element={<VisualizarGoles />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
