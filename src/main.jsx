import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';   // <— nuovo import
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>       {/* wrapper che abilita le route */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
