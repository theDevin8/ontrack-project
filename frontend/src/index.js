import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HabitcardContextProvider } from './context/habitcardContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HabitcardContextProvider>
      <App />
    </HabitcardContextProvider>
    
  </React.StrictMode>
);
