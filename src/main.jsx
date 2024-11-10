import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './services/AuthContext';

import { ThemeProvider } from "../src/components/ThemeButton/ThemeContext"; 

import './index.css';
import App from './components/App/App';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider>
    <AuthProvider>

      <App />
      </AuthProvider>

      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);