// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

const isProd = import.meta.env.PROD;  // true on `npm run build`, false on `npm run dev`

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={isProd ? '/finalproject' : '/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
