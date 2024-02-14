import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//import AppRoutes from './Routes';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {<App />}
    {/*<AppRoutes />*/}
  </React.StrictMode>,
)
